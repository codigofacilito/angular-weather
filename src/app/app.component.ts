import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  
  constructor(private geolocationService : GeolocationService){}

  ngOnInit(){   
  }
}
