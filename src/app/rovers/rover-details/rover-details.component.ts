import {Component, Input, OnInit} from '@angular/core';
import {Rover} from '../../core/model/model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.css'],
  animations: [
    trigger('selectRover', [
      transition('void => *', [
        animate(300, style({transform: 'scale(1.2)'})),
      ]),
      transition('* => *', [
        animate(30, style({transform: 'scale(0.3)'})),
        animate(100, style({transform: 'scale(1)'}))
      ])
    ])
  ]
})
export class RoverDetailsComponent implements OnInit {

  @Input() rover: Rover;

  constructor() { }

  ngOnInit() {
    console.log(this.rover);
  }

}
