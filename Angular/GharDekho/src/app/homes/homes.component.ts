import { Component, OnInit } from '@angular/core';
import { Homes } from './homes.model';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
})
export class HomesComponent implements OnInit {
  places_data: Homes[] = [];
  constructor() {}

  ngOnInit(): void {
    this.places_data.push(
      new Homes(
        'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/01/22163902/2-BHK-Home-Design-Opening-Image.jpg',
        '2 BHK FLAT',
        'Pune',
        '25L'
      )
    );
    this.places_data.push(
      new Homes(
        'https://i1.wp.com/ventsmagazine.com/wp-content/uploads/2019/12/Propane-Homepage-Other-Uses-Commercial-Buildings-Marquee-1800x1200-Modern-Commercial-Building.jpg?fit=1800%2C1200&ssl=1',
        'COMMERCIAL PLACE',
        'Mumbai',
        '1CR'
      )
    );
    this.places_data.push(
      new Homes(
        'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/01/22163902/2-BHK-Home-Design-Opening-Image.jpg',
        '2 BHK FLAT',
        'Pune',
        '25L'
      )
    );
    this.places_data.push(
      new Homes(
        'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/01/22163902/2-BHK-Home-Design-Opening-Image.jpg',
        '2 BHK FLAT',
        'Pune',
        '25L'
      )
    );
    this.places_data.push(
      new Homes(
        'https://i1.wp.com/ventsmagazine.com/wp-content/uploads/2019/12/Propane-Homepage-Other-Uses-Commercial-Buildings-Marquee-1800x1200-Modern-Commercial-Building.jpg?fit=1800%2C1200&ssl=1',
        'COMMERCIAL PLACE',
        'Mumbai',
        '1CR'
      )
    );
    this.places_data.push(
      new Homes(
        'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/01/22163902/2-BHK-Home-Design-Opening-Image.jpg',
        '2 BHK FLAT',
        'Pune',
        '25L'
      )
    );
  }
}
