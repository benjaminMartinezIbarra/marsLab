import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { DateIsoPipe } from './date-iso.pipe';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StatusPipe, DateIsoPipe, MenuComponent],
  exports: [StatusPipe, DateIsoPipe, MenuComponent]
})
export class WidgetsModule { }
