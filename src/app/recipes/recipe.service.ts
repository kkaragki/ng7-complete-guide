import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Shrimps',
    'This is simply a plate of Shrimps',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
      new Ingredient('Shrimps', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Also Shrimps',
    'This is also a plate of Shrimps',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
      new Ingredient('Shrimps', 2),
      new Ingredient('French Fries', 10)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
