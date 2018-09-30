import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoversService} from '../../core/services/rovers.service';
import {Rover} from '../../core/model/model';
import {Observable, of, Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-page-rovers-list',
  templateUrl: './page-rovers-list.component.html',
  styleUrls: ['./page-rovers-list.component.css']
})
export class PageRoversListComponent implements OnInit {

  error: any;
  roverList$: Observable<Rover[]>;
  selected: Rover;
  private subscription: Subscription;
  constructor(private rovers: RoversService) { }

  ngOnInit() {
    this.roverList$ = this.rovers.list()
      .pipe(
        catchError(err => {
          this.error = err;
          return of([]);
        })
      );
  }

}
