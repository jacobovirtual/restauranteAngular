import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing.ts';

import { AppComponent } from './app.component';

import {RestaurantesListComponent} from './components/restaurantes-list.component';
import {RestauranteDetailComponent} from './components/restaurante-detail.component';
import {RestauranteAddComponent} from './components/restaurante-add.component';
import {RestauranteEditComponent} from './components/restaurante-edit.component';

@NgModule({
	imports: 	[ BrowserModule, HttpModule, FormsModule, routing ],
	declarations: 	[
			  AppComponent,
			  RestauranteListComponent,
			  RestauranteDetailComponent,
			  RestauranteEditComponent,
			  RestauranteAddComponent
			],
	providers:	[ appRoutingProviders ],
	bootstrap:	[ AppComponent ]
})
export class AppModule { }
