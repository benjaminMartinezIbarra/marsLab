import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageRoversListComponent} from './page-rovers-list/page-rovers-list.component';

const routes: Routes = [
  {path: 'rovers', component: PageRoversListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoversRoutingModule { }
