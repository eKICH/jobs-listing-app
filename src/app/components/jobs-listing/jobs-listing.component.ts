import { Component, Input } from '@angular/core';
import { Job } from '../../job-interface';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrl: './jobs-listing.component.css'
})
export class JobsListingComponent {
  @Input() job!: Job;
}
