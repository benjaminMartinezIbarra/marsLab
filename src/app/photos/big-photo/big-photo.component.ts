import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from '../../core/services/photos.service';
import {Observable, Subscription} from 'rxjs';
import {Photo} from '../../core/model/model';
import {ActivatedRoute} from '@angular/router';
import {p} from '@angular/core/src/render3';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-big-photo',
  templateUrl: './big-photo.component.html',
  styleUrls: ['./big-photo.component.css']
})
export class BigPhotoComponent implements OnInit, OnDestroy {

  paramSubscription: Subscription;
  photoSubscription: Subscription;

  photo: Photo;
  bigPhotos$: Observable<Photo>;

  constructor(private photos: PhotosService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.bigPhotos$ = this.route.paramMap
      .pipe(
        switchMap(params => this.photos.get(+params.get('id')))
      );

    this.paramSubscription = this.route.paramMap
      .subscribe(params => {
        if (this.paramSubscription) {
          this.photoSubscription.unsubscribe();
        }
          this.photoSubscription = this.photos.get(+params.get('id'))
            .subscribe( photo => this.photo = photo);
        });
      }


  ngOnDestroy(): void {

    if (this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }

    if (this.photoSubscription){
      this.photoSubscription.unsubscribe();
    }
  }

}
