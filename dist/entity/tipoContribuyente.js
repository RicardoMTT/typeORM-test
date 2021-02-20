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
exports.TipoContribuyente = void 0;
var typeorm_1 = require("typeorm");
var entidad_1 = require("./entidad");
var TipoContribuyente = /** @class */ (function () {
    function TipoContribuyente() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], TipoContribuyente.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TipoContribuyente.prototype, "codigo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TipoContribuyente.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TipoContribuyente.prototype, "estado", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], TipoContribuyente.prototype, "descripcion", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return entidad_1.Entidad; }, function (entidad) { return entidad.tipoContribuyente; }),
        __metadata("design:type", Array)
    ], TipoContribuyente.prototype, "entidades", void 0);
    TipoContribuyente = __decorate([
        typeorm_1.Entity()
    ], TipoContribuyente);
    return TipoContribuyente;
}());
exports.TipoContribuyente = TipoContribuyente;
