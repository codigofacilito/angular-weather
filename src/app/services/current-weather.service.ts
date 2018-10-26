import { Injectable,isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Coords } from '../../structures/coords.structure';
import { Weather } from '../../structures/weather.structure';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject : Subject<any> = new Subject<any>();
  public weather$ : Observable<any>;

  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http : HttpClient, private geolocationService : GeolocationService) {
    this.weather$ = this.weatherSubject.asObservable().pipe(
      map((data : any)=>{
        let mainWeather = data.weather[0];

        let weather : Weather = {
          name: data.name,
          cod: data.cod,
          temp: data.main.temp,
          ...mainWeather
        };
        return weather;
      })
    );
    
    this.geolocationService.coords$.subscribe((coords) => {
      this.get(coords);
    });
  }

  get(coords : Coords){
    let args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    let url = this.endpoint + args;
    
    // if(isDevMode()){
    //   url = 'assets/weather.json';
    // }
    
    this.http.get(url).subscribe(this.weatherSubject);
    
    
  }


}
