import { Component } from '@angular/core';
import { HttpclientService } from './services/httpclient.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ep-ia';
  step1 = true;
  step2 = true;
  step3 = true;

  constructor(http: HttpclientService) { }
  ngOnInit(): void {

  }
}
