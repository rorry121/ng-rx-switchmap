import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'hello',
  template: `<button (click)="emitClick()">点击发送请求</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  constructor(
    private appService: AppService
  ) {

  }

  emitClick() {
    this.appService.click$.next();
  }
}
