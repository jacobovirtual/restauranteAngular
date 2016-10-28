// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestauranteService} from '../services/restaurante.service';
import {Restaurante} from '../model/restaurante';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: "/app/view/restaurantes-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [RestauranteService]
})

// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent implements OnInit {
  public titulo:string = "Listado de restaurantes";
  public restaurantes: Restaurante[];
  public status: string;
  public loading: string;
  public errorMessage: string;
  public confirmado;


  constructor(private _restauranteService: RestauranteService){}

  ngOnInit() {
    this.loading = 'show';
    this.getRestaurantes();
    this.loading = 'hide';
    console.log("Resta service cargado");
  }

  getRestaurantes() {
    let box_restaurantes= <HTMLElement>document.querySelector('#restaurantes-list .loading');
    box_restaurantes.style.visibility = "visible";
    this._restauranteService.getRestaurantes().subscribe(
      result => {
        this.restaurantes = result.data;
        console.log(this.restaurantes);
        this.status = result.status;

        if (this.status !== "success") {
          alert("Error en el servicio");
        }

        box_restaurantes.style.display = "none";
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage !== null) {
          console.log(this.errorMessage);
          alert("Error en la peticion");
        }
      }
    );
  }

  onDeleteConfirm(id) {
    this.confirmado = id;

  }

  onCancelarConfirm(id) {
    this.confirmado = null;
  }

  onDeleteRestaurante(id) {
    this._restauranteService.deleteRestaurante(id).subscribe(
      result => {
        this.restaurantes = result.data;
        this.status = result.status;

        if (this.status !== "success") {
          alert("Error en el servicio");
        }
        this.getRestaurantes();

      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage !== null) {
          console.log(this.errorMessage);
          alert("Error en la peticion");
        }
      }
    );

  }

}
