import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  
  constructor(
    private http: HttpClient,
    private appService: AppService
  ) {

  }
  ngOnInit() {
    this.appService.click$.pipe(
      switchMap(e => this.getData())
    ).subscribe(data => {
      console.log(data);
    })
  }

  getData() {
    return this.http.get('https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=996')
  }

}


