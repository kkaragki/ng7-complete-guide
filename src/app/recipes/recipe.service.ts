import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Shrimps',
    'This is a simple plate of Shrimps',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
      new Ingredient('Shrimps', 2),
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
}
