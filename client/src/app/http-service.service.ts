import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpServiceService {

  constructor(private _http:HttpClient) { }
  allTasks(){
    return this._http.get('/tasks')
  }

}
