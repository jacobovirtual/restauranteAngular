// Importar el núcleo de Angular

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routers } from '@angular/router';

import {RestaurantesListComponent} from './components/restaurantes-list.component';
import {RestauranteDetailComponent} from './components/restaurante-detail.component';
import {RestauranteAddComponent} from './components/restaurante-add.component';
import {RestauranteEditComponent} from './components/restaurante-edit.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full',
		},
	{path:'/', component: RestaurantesListComponent, useAsDefault: true},
	{path:'restaurante/:id', component: RestauranteDetailComponent},
	{path:'crear-restaurante', component: RestauranteAddComponent},
	{path:'editar-restaurante/:id', component: RestauranteEditComponent},
	{path:'donde-como-hoy/:random', component: RestauranteDetailComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
