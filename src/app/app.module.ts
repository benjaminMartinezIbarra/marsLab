import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RoversModule} from './rovers/rovers.module';
import {HttpClientModule} from '@angular/common/http';
import {PhotosModule} from './photos/photos.module';
import {WidgetsModule} from './core/widgets/widgets.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoversModule,
    HttpClientModule,
    PhotosModule,
    WidgetsModule,
    AppRoutingModule // routing module toujours en dernier pour ne pas overrider les routes des modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
