import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
  weatherData: any;
  city: string = 'London';

  constructor() {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    const apiKey = '893c12e89b9a713245342b88c0e4f8a7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(response => {
      this.weatherData = response.data;
    }).catch(error => {
      console.error('There was an error fetching the weather data!', error);
    });
  }

  updateCity(cityName: string) {
    this.city = cityName;
    this.getWeatherData();
  }
}
