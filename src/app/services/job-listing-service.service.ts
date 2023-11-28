import { Injectable, inject } from '@angular/core';
import { Job } from '../job-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobListingServiceService {
  apiUrl = 'http://localhost:5000/Jobs';

  constructor() { }

  // Function to fetch data from the endpoint
  async getAllJobsListing(): Promise<Job[]> {
    const data = await fetch(this.apiUrl);
    return await data.json() ?? [];
  }

  // Function to fetch data per id from the endpoint
  async getJobsListingById(id: number): Promise<Job | undefined> {
    const data = await fetch(`${this.apiUrl}/${id}`);
    return await data.json() ?? {};
  }

}
