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
var router_deprecated_1 = require('@angular/router-deprecated');
var restaurantes_list_component_1 = require('./components/restaurantes-list.component');
var restaurante_detail_component_1 = require('./components/restaurante-detail.component');
var restaurante_add_component_1 = require('./components/restaurante-add.component');
var restaurante_edit_component_1 = require('./components/restaurante-edit.component');
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "Restaurantes";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-app',
            templateUrl: "app/view/home.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, restaurantes_list_component_1.RestaurantesListComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: "Home", component: restaurantes_list_component_1.RestaurantesListComponent, useAsDefault: true },
            { path: '/restaurante/:id', name: "Restaurante", component: restaurante_detail_component_1.RestauranteDetailComponent },
            { path: '/crear-restaurante', name: "CrearRestaurante", component: restaurante_add_component_1.RestauranteAddComponent },
            { path: '/editar-restaurante/:id', name: "EditarRestaurante", component: restaurante_edit_component_1.RestauranteEditComponent },
            { path: '/donde-como-hoy/:random', name: "DondeComoHoy", component: restaurante_detail_component_1.RestauranteDetailComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map