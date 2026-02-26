import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, retry } from 'rxjs/operators';

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactApiService {
  private readonly submitEndpoint = '/api/contact';

  constructor(private http: HttpClient) {}

  submitContactForm(payload: ContactSubmissionPayload): Observable<void> {
    return this.http.post(this.submitEndpoint, payload).pipe(
      retry({
        count: 2,
        delay: (_error, retryCount) => timer(retryCount * 500),
      }),
      map(() => void 0),
    );
  }
}
