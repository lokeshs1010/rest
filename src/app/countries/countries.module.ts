import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountryComponent } from './all-country/all-country.component';
import { SingleCountryComponent } from './single-country/single-country.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SortingPipe } from '../sorting.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'regions/:regionName', component: AllCountryComponent },
      { path: 'country/:countryName', component: SingleCountryComponent },
    ]),
  ],
  declarations: [AllCountryComponent, SingleCountryComponent, SortingPipe]
})
export class CountriesModule { }
