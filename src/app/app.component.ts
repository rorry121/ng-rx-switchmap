import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy  {
  name = 'Angular';
  destory$ = new Subject();
  
  constructor(
    private http: HttpClient,
    private appService: AppService
  ) {

  }
  ngOnDestroy() {
    this.destory$.next();
    this.destory$.complete();
  }

  ngOnInit() {
    this.appService.click$.pipe(
      switchMap(e => this.getData()),
      takeUntil(this.destory$)
    ).subscribe(data => {
      console.log(data);
    })
  }

  getData() {
    return this.http.get('https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=996')
  }

}


