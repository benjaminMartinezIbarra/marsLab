import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchFormData} from '../photo-search-form/photo-search-form.component';
import {PhotosService} from '../../core/services/photos.service';
import {Observable, Subscription} from 'rxjs';
import {Photo} from '../../core/model/model';
import {PhotoSearchResultService} from '../../core/services/photo-search-result.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-photos-list',
  templateUrl: './page-photos-list.component.html',
  styleUrls: ['./page-photos-list.component.css'],
  providers: [PhotoSearchResultService]
})
export class PagePhotosListComponent implements OnInit, OnDestroy {
  photoList$: Observable<Photo[]>;
  subscription: Subscription;

  constructor(private photos: PhotosService,
              private photoSearchResult: PhotoSearchResultService,
              private router: Router) { }

  ngOnInit() {
  }

  onSearch(searchData: SearchFormData) {
    const roverName = searchData.rover.name;
    const cameraName = searchData.camera && searchData.camera.name;
    const sol = searchData.sol;
    this.subscription = this.photos.search(roverName, cameraName, sol)
      .subscribe(photos => this.photoSearchResult.photos = photos);
    this.router.navigate(['/photos', 'list']); //ou ['/photos/list']
  }
  ngOnDestroy() {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
