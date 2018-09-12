import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from './http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tasks;
  constructor(private _httpService:HttpServiceService){}
  ngOnInit(){
    this.allTasks();
  }
  allTasks(){
    let observable = this._httpService.allTasks();
    observable.subscribe(data => {
      console.log('got the bizz' + data);
      this.tasks = data;
    });
  }
}
