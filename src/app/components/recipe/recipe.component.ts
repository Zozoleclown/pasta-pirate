import { Component, OnInit, DoCheck, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import * as ntpp from 'ntpp';

import { RecipeModel } from '../../models/recipe.model';
import { StockModel } from '../../models/stock.model';
import { IngredientModel } from '../../models/ingredient.model';
import { ShoppingListModel } from '../../models/shopping-list.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, DoCheck {

  @Input()
  recipe: RecipeModel;

  @Input()
  stocks: StockModel[];

  @Input()
  shoppingList: ShoppingListModel;

  @Output()
  addedIngredient = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() { }

  ngDoCheck(): void {
    this.checkIngredients();
  }

  checkIngredients() {
    if ( !this.recipe ) return;
     
    this.recipe.ingredients.forEach(ingredient => {
      let quantityToFind = ingredient.quantity;

      if (this.stocks) {
        let alimentStock = this.stocks.find(x => x.aliment.id == ingredient.aliment.id);

        if (alimentStock) {
          quantityToFind -= alimentStock.quantity;
        }
      }

      if (quantityToFind <= 0) {
        ingredient.isInStock = true;
        return;
      } else {
        ingredient.isInStock = false;
      }

      if (this.shoppingList) {
        let alimentShoppingList = this.shoppingList.ingredients.find(x => x.aliment.id == ingredient.aliment.id);

        if (alimentShoppingList) {
          quantityToFind -= alimentShoppingList.quantity;
        }
      }

      if (quantityToFind <= 0) {
        ingredient.isInShoppingList = true;
      } else {
        ingredient.isInShoppingList = false;
      }
    });
  }

  addIngredientToShoppingList(ingredient: IngredientModel) {
    this.addedIngredient.emit(ingredient);
    this.checkIngredients();
  }

}
