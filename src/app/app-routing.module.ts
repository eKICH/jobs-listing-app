import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

export const routes: Routes = [
  {path: 'home',  component: JobComponent, title: 'Jobs Listing'},
  {path: 'job-details/:id/:jobTitle', component: JobDetailsComponent, title: 'Job Details'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
