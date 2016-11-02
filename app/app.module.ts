import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routings';

import { AppComponent } from './app.component';

import {RestaurantesListComponent} from './components/restaurantes-list.component';
import {RestauranteDetailComponent} from './components/restaurante-detail.component';
import {RestauranteAddComponent} from './components/restaurante-add.component';
import {RestauranteEditComponent} from './components/restaurante-edit.component';

@NgModule({
	imports: 	[ BrowserModule, HttpModule, FormsModule, routing ],
	declarations: 	[
			  AppComponent,
			  RestaurantesListComponent,
			  RestauranteDetailComponent,
			  RestauranteEditComponent,
			  RestauranteAddComponent
			],
	providers:	[ appRoutingProviders ],
	bootstrap:	[ AppComponent ]
})
export class AppModule { }
