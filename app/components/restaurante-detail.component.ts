// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {RestauranteService} from '../services/restaurante.service';
import {Restaurante} from '../model/restaurante';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-detail',
    templateUrl: "/app/view/restaurante-detail.html",
    providers: [RestauranteService]
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteDetailComponent implements OnInit{
  public titulo:string = "Restaurante detau";
  public parametro;
  public restaurante : Restaurante[];
  public errorMessage: string;
  public status: string;

  constructor(
    private _restauranteService: RestauranteService,
    private _routeParams: RouteParams,
    private _router: Router
  ){}

  ngOnInit(){
    this.parametro = this._routeParams.get("id");
      this.getRestaurante();
  }

  getRestaurante(){
    let id = this._routeParams.get("id");
    let random = this._routeParams.get("random");
    this._restauranteService.getRestaurante(id, random).subscribe(
        response => {
          this.restaurante = response.data;
          this.status = response.status;

          if (this.status !== "success") {
            alert("web no encontrada");
            this._router.navigate(['Home']);
          }

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
