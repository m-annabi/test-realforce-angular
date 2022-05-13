import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
 { path: '', component: ResultsComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
