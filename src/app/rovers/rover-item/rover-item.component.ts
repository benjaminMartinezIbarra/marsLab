import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rover} from '../../core/model/model';

@Component({
  selector: 'app-rover-item',
  templateUrl: './rover-item.component.html',
  styleUrls: ['./rover-item.component.css']
})
export class RoverItemComponent implements OnInit {

  @Input() private rover: Rover;
  @Output()  select = new EventEmitter<Rover>();
  constructor() { }

  ngOnInit() {
  }

}
