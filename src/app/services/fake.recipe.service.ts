import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeModel, RECIPE_TYPE } from '../models/recipe.model';
import { StockModel } from '../models/stock.model';
import { UNIT_ENUM } from '../models/aliment.model';
import { IRecipeService } from './recipe.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeRecipeService implements IRecipeService {
  
  getRecipe(id: string): Observable<RecipeModel> {
    let recipes : RecipeModel[] = [
      {
        id: "5qzd46zqgq8q46f4zq68fqz",
        name: "Salade de tchoins",
        description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos soluta aspernatur a odit dignissimos doloremque obcaecati? Quas hic quibusdam at laborum tenetur accusantium error expedita. Numquam maxime similique culpa cum.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum temporibus exercitationem, omnis repudiandae delectus beatae saepe voluptate nihil, veritatis sequi ab ullam, iusto quos aperiam sit alias rem fugiat?</p>",
        image: "icons/coin.png",
        ingredients: [
          {
            aliment: {
              id: "507f1f77bcf86cd799439011",
              name: "Oeuf",
              image: "icons/coin.png",
              unit: UNIT_ENUM.UNIT
            },
            quantity: 2
          },
          {
            aliment: {
              id: "507f191e810c19729de860ea",
              name: "Tchoin",
              image: "icons/coin.png",
              unit: UNIT_ENUM.KILO
            },
            quantity: 69
          }
        ],
        type: RECIPE_TYPE.DISH
      }
    ];

    return new Observable(sub => {
      sub.next(recipes.find(x => x.id == id));
      sub.complete();
    });
  }
}