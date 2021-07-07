import { Component } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';

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
  valor1 = '';
  valor2 = '';
  valor3 = '';
  valor4 = '';
  valor5 = '';
  valor6 = '';
  valor7 = '';
  valor8 = '';
  valor9 = '';
  valor10 = '';

  constructor(private http: ApiserviceService) { }
  ngOnInit(): void {
    this.http.getPesos().subscribe(
      (informacao:any) => {
        console.log(informacao);
      }
    )
  }

}
