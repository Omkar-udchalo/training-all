import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  propertyTypes = ['Residential', 'Commercial', 'Both'];
  propertyAreas = ['Pune', 'Mumbai', 'Nagpur', 'Aurangabad'];
  propertyPrices = ['< 15L', '<25L', '<50L>', '>50L'];
  constructor() {}

  ngOnInit(): void {}
}
