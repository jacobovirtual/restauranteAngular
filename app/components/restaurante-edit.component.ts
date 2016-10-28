// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {RestauranteService} from '../services/restaurante.service';
import {Restaurante} from '../model/restaurante';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-edit',
    templateUrl: "/app/view/restaurante-edit.html",
    providers: [RestauranteService]
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteEditComponent implements OnInit{
  public titulo:string = "Restaurante add";
  public restaurante: Restaurante;
  public errorMessage: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _restauranteService: RestauranteService,
    private _routeParams: RouteParams,
    private _router: Router
  ){}

  onSubmit(){
    console.log(this.restaurante);
    let id = this._routeParams.get("id");
    this._restauranteService.editRestaurante(id, this.restaurante).subscribe(
      response => {
        this.status = response.status;
        if (this.status !== "success") {
          alert(response.message);
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage !== null) {
          alert(this.errorMessage);
        }
      }
    );
    this._router.navigate(['Home']);
  }

  ngOnInit(){
    this.restaurante = new Restaurante(
      parseInt(this._routeParams.get("id")),
      this._routeParams.get("nombre"),
      this._routeParams.get("direccion"),
      this._routeParams.get("descripcion"),
      this._routeParams.get("imagen"),
      this._routeParams.get("precio")
    );

    this.getRestaurante();

  }

  getRestaurante(){
    let id = this._routeParams.get("id");

    this._restauranteService.getRestaurante(id).subscribe(
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

  callPrecio(value){
    this.restaurante.precio = value;
  }

      public resultUpload;

  fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.makeFileRequest("http://slim.mini/restaurantes-api.php/upload-file", [], this.filesToUpload).then(
        (result) => {
          this.resultUpload = result;
          this.restaurante.imagen = this.resultUpload.filename;
          console.log(this.resultUpload.filename);
        },
        (error) => {
          console.log(error);
        }
        );

      }

      makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          for(var i = 0; i < files.length; i++){
            formData.append("uploads[]", files[i], files[i].name);
          }

          xhr.onreadystatechange = function(){
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response));

              }
              else {
                reject(xhr.response);
              }
            }
          }
          xhr.open("POST", url, true);
          xhr.send(formData);
        })
      }
}
