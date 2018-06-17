import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WorldApiService } from './../../world-api.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {

  public getCurrency: Subscription;
  public title: string;
  public region: string;
  public currencyFilter = false;
  public languageFilter = false;
  public regions;
  public currency;
  public langauge;
  public search = '';

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private world: WorldApiService,
    private location: Location) { }

  ngOnInit() {

    let region = this._route.snapshot.paramMap.get('regionName');

    this.getCurrency = this._route.queryParams.subscribe(params => {
      if (params['currency']) {
        this.currencyFilter = true;
        this.filterCurrency(params['currency']);
        this.title = params['name'];
      } else if (params['language']) {
        this.languageFilter = true;
        this.filterLanguage(params['language']);
        this.title = params['name'];
      } else {
        this.currencyFilter = false;
        this.region = this._route.snapshot.paramMap.get('regionName');
        this.title = this.region;

        if (this.region) {
          this.world.getRegions(region).subscribe(

          data => {
            console.log('Data is logging');
            console.log(data);
            this.regions = data;
          },
          error => {
            console.log('some error occured');
            console.log(error.errorMessage);
          }
          );
        }
      }
    });
  }

  filterCurrency(currency) {
    this.world.currency(currency).subscribe(
        data => {
          this.regions = data;
        }
      );
  }


  filterLanguage(language) {
    this.world.language(language).subscribe(
        data => {
          this.regions = data;
        }
      );
  }


  public goBackToPreviousPage(): any {
    this.location.back();
  }

}
