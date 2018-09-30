import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Camera, Photo, Rover} from '../model/model';
import {Observable} from 'rxjs';
import {SearchFormData} from '../../photos/photo-search-form/photo-search-form.component';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }
  /**
  search({rover, camera, sol}: SearchFormData): Observable<Photo []> {
    const path = 'http://localhost:3390/rovers/${rover}/photos';
    const params = [ {name: 'camera', value: camera && camera.name},
      {name: 'sol', value: sol} ].filter(param => param.value)
      .map(param => '${param.name}=${param.value}');
    const queryStringParams = [];
    if (camera) {
      queryStringParams.push('camera=${camera}');
    }
    if (sol) {
      queryStringParams.push('sol=${sol}');
    }
    const queryString = queryStringParams.join('&');
    const url = queryString ? path + '?' + queryString : path ;
    return this.http.get<Photo[]>(url);
  }**/

  search(rover: string, camera?: string, sol?: number): Observable<Photo []> {
    const path = `http://localhost:3390/rovers/${rover}/photos`;
    const params = [
      {name: 'camera', value: camera},
      {name: 'sol', value: sol},
    ].filter(param => param.value)
      .map(param => `${param.name}=${param.value}`);
    const queryString = params.join('&');
    const url = queryString ? path + '?' + queryString : path;
    return this.http.get<Photo[]>(url);
  }
  get(id: number): Observable<Photo>{
    const url = 'http://localhost:3390/photos/' + id;
    return this.http.get<Photo>(url);
  }
}
