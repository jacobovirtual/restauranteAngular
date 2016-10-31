// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {RestauranteService} from '../services/restaurante.service';
import {Restaurante} from '../model/restaurante';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-add',
    templateUrl: "/app/view/restaurante-add.html",
    providers: [RestauranteService]
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteAddComponent implements OnInit{
  public titulo:string = "Restaurante add";
  public restaurante: Restaurante;
  public errorMessage: string;
  public status: string;
  public filesToUpload: Array<File>;


  constructor(
    private _restauranteService: RestauranteService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit(){
    this.restaurante = new Restaurante(0,"","","",'null','bajo');
  }

  onSubmit(){
    // console.log(this.restaurante);
    this._restauranteService.addRestaurante(this.restaurante).subscribe(
      response => {
        this.status = response.status;
       if (this.status !== "success") {
           alert(response.message);
       }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage !== null) {
          console.log(this.errorMessage);
          // alert(this.errorMessage);
        }
      }
    );
    this._router.navigate(['/']);
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
