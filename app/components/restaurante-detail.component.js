"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar el núcleo de Angular
var core_1 = require('@angular/core');
var router_deprecated_1 = require('angul@angularar2/router-deprecated');
var restaurante_service_1 = require('../services/restaurante.service');
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteDetailComponent = (function () {
    function RestauranteDetailComponent(_restauranteService, _routeParams, _router) {
        this._restauranteService = _restauranteService;
        this._routeParams = _routeParams;
        this._router = _router;
        this.titulo = "Restaurante detau";
    }
    RestauranteDetailComponent.prototype.ngOnInit = function () {
        this.parametro = this._routeParams.get("id");
        this.getRestaurante();
    };
    RestauranteDetailComponent.prototype.getRestaurante = function () {
        var _this = this;
        var id = this._routeParams.get("id");
        var random = this._routeParams.get("random");
        this._restauranteService.getRestaurante(id, random).subscribe(function (response) {
            _this.restaurante = response.data;
            _this.status = response.status;
            if (_this.status !== "success") {
                alert("web no encontrada");
                _this._router.navigate(['Home']);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion");
            }
        });
    };
    RestauranteDetailComponent = __decorate([
        core_1.Component({
            selector: 'restaurantes-detail',
            templateUrl: "/app/view/restaurante-detail.html",
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, (typeof (_b = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _b) || Object])
    ], RestauranteDetailComponent);
    return RestauranteDetailComponent;
    var _a, _b;
}());
exports.RestauranteDetailComponent = RestauranteDetailComponent;
//# sourceMappingURL=restaurante-detail.component.js.map