import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IStockService } from './stock.interface';
import { StockModel } from '../models/stock.model';
import { FoodModel, UNIT_ENUM } from '../models/food.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockService implements IStockService {

  constructor(
    private _http: HttpClient
  ) { }

  getStock() : Observable<StockModel[]> {
    throw new Error("Not implemented");
  }
}