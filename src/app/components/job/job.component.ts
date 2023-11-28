import { Component, OnInit, inject } from '@angular/core';
import { Job } from '../../job-interface';
import { JobListingServiceService } from '../../services/job-listing-service.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {

  store: StoreService = inject(StoreService);

  // Injecting the job listing service
  private jobListingService: JobListingServiceService = inject(JobListingServiceService);

  // property variable of type Job initialized with empty array
  jobListing: Job[] = [];

  // property variable - filtered data initialized with an empty array
  filteredJobListing: Job[] = [];
  p:number = 1;

  
  // Lifecycle method to fetch all jobs when the app loads
  ngOnInit(): void {
    this.fetchAllJobs();
  }

  // Function to fetch all jobs from the json server fake RestAPI
  fetchAllJobs() {
    this.jobListingService.getAllJobsListing().then((jobListing: Job[]) => {
      this.jobListing = jobListing;
      this.filteredJobListing = jobListing;
    })
  }

  // Function to filter data when text is entered in the search input field
  filterResults(text: string){
    if (!text) this.filteredJobListing = this.jobListing;

    this.filteredJobListing = this.jobListing.filter(job => job?.jobTitle.toLowerCase().includes(text.toLowerCase()) || job?.city.toLowerCase().includes(text.toLowerCase()) || job?.country.toLowerCase().includes(text.toLowerCase()));
  }

}
