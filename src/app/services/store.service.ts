import { Injectable, inject } from '@angular/core';
import { Job } from '../job-interface';
import { BehaviorSubject, Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobListingServiceService } from './job-listing-service.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  apiUrl = 'http://localhost:5000/Jobs';
  http: HttpClient = inject(HttpClient);

  private subject = new BehaviorSubject<Job[]>([]);

  job$ : Observable<Job[]> = this.subject.asObservable();

  constructor() {
    this.loadAllJobs();
  }


  private loadAllJobs() {
    this.http.get<Job[]>(this.apiUrl)
      .pipe(
        map(response => response),
        catchError(err => {
          return throwError(() => new err('No Data'))
        }),
        tap(job => this.subject.next(job))
      );  
  }
}
