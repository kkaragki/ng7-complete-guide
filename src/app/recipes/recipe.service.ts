import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Shrimps',
    'This is a simple plate of Shrimps',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
      new Ingredient('Shrimps', 8),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Chola Biryani',
    'This is a Chola Biryani recipe',
    'http://evergreenrecipes.com/wp-content/uploads/2016/02/P1010032-10.jpg',
    [
      new Ingredient('Garbanzo beans', 20),
      new Ingredient('Tomato', 2)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
