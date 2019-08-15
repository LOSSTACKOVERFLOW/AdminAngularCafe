import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {Router} from '@angular/router';




@Injectable()
export class APIservice{
    private _urlApiGuias = 'http://localhost:8080/tkycurier/guias';
    private _urlApiUsuario = 'http://localhost:8080/tkycurier/user';
    constructor(private http: HttpClient, private router: Router){

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