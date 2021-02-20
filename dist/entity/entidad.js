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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entidad = void 0;
var typeorm_1 = require("typeorm");
var tipoContribuyente_1 = require("./tipoContribuyente");
var tipoDocumento_1 = require("./tipoDocumento");
var Entidad = /** @class */ (function () {
    function Entidad() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Entidad.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Entidad.prototype, "nro_Documento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Entidad.prototype, "razonSocial", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Entidad.prototype, "nombre_comercial", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Entidad.prototype, "direccion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Entidad.prototype, "telefono", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Entidad.prototype, "estado", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return tipoDocumento_1.TipoDocumento; }, function (tipoDocumento) { return tipoDocumento.entidades; }),
        __metadata("design:type", tipoDocumento_1.TipoDocumento)
    ], Entidad.prototype, "tipoDocumento", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return tipoContribuyente_1.TipoContribuyente; }, function (tipoContribuyente) { return tipoContribuyente.entidades; }),
        __metadata("design:type", tipoContribuyente_1.TipoContribuyente)
    ], Entidad.prototype, "tipoContribuyente", void 0);
    Entidad = __decorate([
        typeorm_1.Entity()
    ], Entidad);
    return Entidad;
}());
exports.Entidad = Entidad;
