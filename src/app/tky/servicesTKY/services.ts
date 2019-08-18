import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {Router} from '@angular/router';




@Injectable()
export class APIservice{
    private _urlApiGuias = 'http://localhost:8080/tkycurier/guias';
    private _urlApiUsuario = 'http://localhost:8080/tkycurier/user';
    private _urlDawApidb = 'http://localhost:8000/apidb/';
    constructor(private http: HttpClient, private router: Router){

    }

    getCombos(nombrecombo: any){
        return this.http.get<any>(this._urlDawApidb + 'Combo/' + nombrecombo + '/');
    }
    postCombo(combo: any){
        return this.http.post<any>(this._urlDawApidb + 'Combo/', combo);
    }
    putCombo(strnombre: any, datacombo: any){
        return this.http.put<any>(this._urlDawApidb + 'Combo/' + strnombre + '/', datacombo);
    }

    deleteCombo(strnombre: any){
        return this.http.delete<any>(this._urlDawApidb + 'Combo/' + strnombre + '/');
    }
    deleteCategoria(strnombre: any){
        return this.http.delete<any>(this._urlDawApidb + 'Categoria/' + strnombre + '/');
    }

    putCategoria(strnombre: any, datacategoria: any){
        return this.http.put<any>(this._urlDawApidb + 'Categoria/' + strnombre + '/', datacategoria);
    }

    // tslint:disable-next-line: typedef
    postCategoria(categoria: any){
        return this.http.post<any>(this._urlDawApidb + 'Categoria/', categoria);
    }

    getCategorias(nombrecategoria: any){
        return this.http.get<any>(this._urlDawApidb + 'Categoria/' + nombrecategoria + '/');
    }

    getGuiasExternas(guias:any){
        return this.http.post<any>(this._urlApiGuias+'/consultarguiaext',guias,{observe: 'response'});
    }

    getEstadoGuia(guiaExt:any){
        return this.http.post<any>(this._urlApiGuias+'/estadoguia',guiaExt);
    }
    
    getMasivaEshopex(guiaMasiva: any){
        return this.http.post<any>(this._urlApiGuias+'/masivaEshopex',guiaMasiva);
    }

    getCiudadesLaar(){
        return this.http.get<any>(this._urlApiGuias+'/ciudadeslaar');
    }


    getServiciosLaar(){
        return this.http.get<any>(this._urlApiGuias+"/servicioslaar");
    }

    postCrearUsuario(datausuario: any){
        return this.http.get<any>(this._urlApiUsuario+"/crearusuario", datausuario);
    }


    createMapeo(mapeo:any){
        return this.http.post<any>(this._urlApiGuias+"/mapeoguia",mapeo);
    }


}