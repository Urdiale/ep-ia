import { Component } from '@angular/core';
import { HttpclientService } from './services/httpclient.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ep-ia';


  constructor( http : HttpclientService)
  {}
  ngOnInit(): void {

  }
}
