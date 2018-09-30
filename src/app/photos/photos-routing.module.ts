import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagePhotosListComponent} from './page-photos-list/page-photos-list.component';
import {ResultListComponent} from './result-list/result-list.component';
import {BigPhotoComponent} from './big-photo/big-photo.component';

const routes: Routes = [
  {path: 'photos', component: PagePhotosListComponent, children: [
    {path: 'list', component: ResultListComponent},
      {path: ':id', component: BigPhotoComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
