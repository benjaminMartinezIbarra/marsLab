import { Component, OnInit } from '@angular/core';
import {PhotoSearchResultService} from '../../core/services/photo-search-result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(public photoSearchResult: PhotoSearchResultService) { }

  ngOnInit() {
  }

}
