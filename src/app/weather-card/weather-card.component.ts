import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../structures/weather.structure';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() weather : Weather;

  constructor() { }

  ngOnInit() {
  }

}
