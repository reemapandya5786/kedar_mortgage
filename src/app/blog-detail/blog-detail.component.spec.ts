import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  provideRouter,
} from '@angular/router';

import { BlogDetailComponent } from './blog-detail.component';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;
  let routeId: string | null;

  const activatedRouteStub = {
    snapshot: {
      paramMap: convertToParamMap({ id: '1' }),
    },
  };

  beforeEach(async () => {
    routeId = '1';
    activatedRouteStub.snapshot.paramMap = convertToParamMap(
      routeId ? { id: routeId } : {},
    );

    await TestBed.configureTestingModule({
      imports: [BlogDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load post when route id is valid', () => {
    routeId = '1';
    activatedRouteStub.snapshot.paramMap = convertToParamMap({ id: routeId });

    component.ngOnInit();

    expect(component.postId).toBe(1);
    expect(component.post?.id).toBe(1);
  });

  it('should fallback to postId 0 for missing route id', () => {
    routeId = null;
    activatedRouteStub.snapshot.paramMap = convertToParamMap({});

    component.ngOnInit();

    expect(component.postId).toBe(0);
    expect(component.post).toBeUndefined();
  });

  it('should fallback to postId 0 for invalid route id', () => {
    routeId = 'invalid';
    activatedRouteStub.snapshot.paramMap = convertToParamMap({ id: routeId });

    component.ngOnInit();

    expect(component.postId).toBe(0);
    expect(component.post).toBeUndefined();
  });

  it('should fallback to postId 0 for negative route id', () => {
    routeId = '-5';
    activatedRouteStub.snapshot.paramMap = convertToParamMap({ id: routeId });

    component.ngOnInit();

    expect(component.postId).toBe(0);
    expect(component.post).toBeUndefined();
  });
});
