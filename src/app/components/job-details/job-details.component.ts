import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobListingServiceService } from '../../services/job-listing-service.service';
import { Job } from '../../job-interface';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  jobListingService: JobListingServiceService = inject(JobListingServiceService);
  job: Job | undefined;

  @Input() detail!: Job;

  constructor(){
    const jobDetailsId = Number(this.route.snapshot.params['id']);
    this.jobListingService.getJobsListingById(jobDetailsId).then(job => {
      this.job = job;
    });
  }
}
