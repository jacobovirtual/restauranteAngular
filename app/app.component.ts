// Importar el núcleo de Angular
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRouter, Params } from '@angular/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';
import {RestaurantesListComponent} from './components/restaurantes-list.component';
import {RestauranteDetailComponent} from './components/restaurante-detail.component';
import {RestauranteAddComponent} from './components/restaurante-add.component';
import {RestauranteEditComponent} from './components/restaurante-edit.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'mi-app',
    templateUrl: "app/view/home.html"
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  public titulo:string = "Restaurantes";

}
