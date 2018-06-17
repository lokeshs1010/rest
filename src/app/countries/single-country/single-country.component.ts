import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WorldApiService } from '../../world-api.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  public singleCountry;

  constructor(private _route: ActivatedRoute,
    private router: Router,
    public world: WorldApiService,
    private location: Location) { }

  ngOnInit() {
    let country = this._route.snapshot.paramMap.get('countryName');

    console.log(country);
    this.world.getCountry(country).subscribe(data => {
        console.log('logging data');
        console.log(data);
        this.singleCountry = data;
      }, error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      });
  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }

}
