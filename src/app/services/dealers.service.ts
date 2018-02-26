import { Dealer } from './../interfaces/dealer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DEALERS } from './mock-dealers';

@Injectable()
export class DealersService {

  constructor() { }

  getDealers(): Observable<Dealer[]> {
    return of(DEALERS);
  }

}
