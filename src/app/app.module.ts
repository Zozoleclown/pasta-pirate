import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './app.router';

import { HomePageComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { StockPageComponent } from './pages/stock/stock.component';
import { RecipeListPageComponent } from './pages/recipe-list/recipe-list.component';
import { RecipePageComponent } from './pages/recipe/recipe.component';
import { PlanningPageComponent } from './pages/planning/planning.component';
import { LoginPageComponent } from './pages/login/login.component';
import { ShoppingListPageComponent } from './pages/shopping-list/shopping-list.component';

import { StockService } from './services/stock.service';
import { FakeStockService } from './services/fake.stock.service';

import { QuantityPipe } from './pipes/quantity.pipe';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

import { FakeRecipeService } from './services/fake.recipe.service';
import { FakeShoppingListService } from './services/fake.shopping-list.service';
import { FakePlanningService } from './services/fake.planning.service';
import { FakeAlimentService } from './services/fake.aliment.service';
import { FakeAuthService } from './services/fake.auth.service';

import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { PlanningService } from './services/planning.service';
import { AlimentService } from './services/aliment.service';
import { AuthService } from './services/auth.service';

import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PlanningComponent } from './components/planning/planning.component';
import { StockComponent } from './components/stock/stock.component';
import { RealRecipeTimePipe } from './pipes/real-recipe-time.pipe';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { IngredientsPipe } from './pipes/ingredients.pipe';
import { MenuTypePipe } from './pipes/menu-type.pipe';

import { ApiInterceptor } from './services/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    StockPageComponent,
    RecipePageComponent,
    RecipeListPageComponent,
    PlanningPageComponent,
    LoginPageComponent,
    ShoppingListPageComponent,
    QuantityPipe,
    ShoppingListComponent,
    RecipeComponent,
    PlanningComponent,
    StockComponent,
    RealRecipeTimePipe,
    RecipeListComponent,
    IngredientsPipe,
    MenuTypePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    BrowserTransferStateModule,
    RoutingModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    {provide: StockService, useClass: FakeStockService},
    {provide: RecipeService, useClass: FakeRecipeService},
    {provide: ShoppingListService, useClass: FakeShoppingListService},
    {provide: PlanningService, useClass: FakePlanningService},
    {provide: AlimentService, useClass: FakeAlimentService},
    {provide: AuthService, useClass: FakeAuthService},
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
