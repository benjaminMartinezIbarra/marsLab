import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoversRoutingModule } from './rovers-routing.module';
import { PageRoversListComponent } from './page-rovers-list/page-rovers-list.component';
import { RoverItemComponent } from './rover-item/rover-item.component';
import { RoverDetailsComponent } from './rover-details/rover-details.component';
import {WidgetsModule} from '../core/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    RoversRoutingModule
  ],
  declarations: [
    PageRoversListComponent,
    RoverItemComponent,
    RoverDetailsComponent]
})
export class RoversModule { }
