import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePageComponent } from './rate-page.component';

describe('RatePageComponent', () => {
  let component: RatePageComponent;
  let fixture: ComponentFixture<RatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear calculation for non-positive loan amount', () => {
    component.calcLoanAmount = 0;
    component.calcLoanTerm = 30;
    component.calculateMortgage();

    expect(component.calculation).toBeUndefined();
  });

  it('should clear calculation for non-positive term', () => {
    component.calcLoanAmount = 300000;
    component.calcLoanTerm = 0;
    component.calculateMortgage();

    expect(component.calculation).toBeUndefined();
  });

  it('should handle zero-interest scenarios safely', () => {
    component.calcLoanAmount = 240000;
    component.calcDownPayment = 40000;
    component.calcInterestRate = 0;
    component.calcLoanTerm = 20;

    component.calculateMortgage();

    expect(component.calculation).toBeDefined();
    expect(component.calculation?.loanAmount).toBe(200000);
    expect(component.calculation?.monthlyPayment).toBeCloseTo(
      200000 / (20 * 12),
      8,
    );
  });

  it('should clamp principal to zero when down payment exceeds loan amount', () => {
    component.calcLoanAmount = 200000;
    component.calcDownPayment = 250000;
    component.calcInterestRate = 6;
    component.calcLoanTerm = 30;

    component.calculateMortgage();

    expect(component.calculation).toBeDefined();
    expect(component.calculation?.loanAmount).toBe(0);
    expect(component.calculation?.monthlyPayment).toBe(0);
    expect(component.calculation?.totalInterest).toBe(0);
  });
});
