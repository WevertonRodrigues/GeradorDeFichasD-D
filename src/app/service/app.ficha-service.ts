import { Injectable } from '@angular/core';
import { Ficha } from '../models/ficha.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.modelo';
@Injectable({ providedIn: 'root' })
export class FichaService {

    private url = 'http://localhost:58384/api/Ficha';

    readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':
                'application/x-www-form-urlencoded'
        })
    };

    constructor(private http: HttpClient) { }

    getFichas(): Observable<any> {
        return this.http.get<any>(this.url, this.httpOptions)
    }

    getFicha(id: number): Observable<any> {
        return this.http.get<any>(this.url + '/' + id, this.httpOptions)
    }

    updateFicha(ficha: Ficha): Observable<any> {
        let u = new URLSearchParams();

        u.set('Id', ficha.Id.toString());
        u.set('NomePersonagem', ficha.NomePersonagem.toString());
        u.set('Classe', ficha.Classes.toString());
        u.set('Nivel', ficha.Nivel.toString());
        u.set('Antecedente', ficha.Antecedente.toString());
        u.set('NomeJogador', ficha.NomeJogador.toString());
        u.set('Raca', ficha.Raca.toString());
        u.set('SubRaca', ficha.SubRaca.toString());
        u.set('Tendencia', ficha.Tendencia.toString());
        u.set('Alinhamento', ficha.Alinhamento.toString());
        u.set('For', ficha.For.toString());
        u.set('Des', ficha.Des.toString());
        u.set('Con', ficha.Con.toString());
        u.set('Int', ficha.Int.toString());
        u.set('Sab', ficha.Sab.toString());
        u.set('Car', ficha.Car.toString());
        u.set('ForMod', ficha.ForMod.toString());
        u.set('DesMod', ficha.DesMod.toString());
        u.set('ConMod', ficha.ConMod.toString());
        u.set('IntMod', ficha.IntMod.toString());
        u.set('SabMod', ficha.SabMod.toString());
        u.set('CarMod', ficha.CarMod.toString());
        u.set('Inspiracao', ficha.Inspiracao.toString());
        u.set('Proficiencia', ficha.Proficiencia.toString());
        u.set('ForTeste', ficha.ForTeste.toString());
        u.set('DesTeste', ficha.DesTeste.toString());
        u.set('ConTeste', ficha.ConTeste.toString());
        u.set('IntTeste', ficha.IntTeste.toString());
        u.set('SabTeste', ficha.SabTeste.toString());
        u.set('CarTeste', ficha.CarTeste.toString());
        u.set('CampoIdiomas', ficha.CampoIdiomas.toString());
        u.set('IdPerfil', ficha.IdPerfil.toString());

        let url_ = this.url + '/' + ficha.Id;
        return this.http.put<any>(url_, u.toString(), this.httpOptions)
    }


    addFicha(ficha: Ficha, perfilId: number): Observable<any> {
        let u = new URLSearchParams();
        if (ficha.NomePersonagem == undefined){
            alert("Nenhum campo pode ficar em branco!");

            return;
        }
        else {
            u.set('NomePersonagem', ficha.NomePersonagem.toString());
            u.set('Classe', ficha.Classes.toString());
            u.set('Nivel', ficha.Nivel.toString());
            u.set('Antecedente', ficha.Antecedente.toString());
            u.set('NomeJogador', ficha.NomeJogador.toString());
            u.set('Raca', ficha.Raca.toString());
            u.set('SubRaca', ficha.SubRaca.toString());
            u.set('Tendencia', ficha.Tendencia.toString());
            u.set('Alinhamento', ficha.Alinhamento.toString());
            u.set('For', ficha.For.toString());
            u.set('Des', ficha.Des.toString());
            u.set('Con', ficha.Con.toString());
            u.set('Int', ficha.Int.toString());
            u.set('Sab', ficha.Sab.toString());
            u.set('Car', ficha.Car.toString());
            u.set('ForMod', ficha.ForMod.toString());
            u.set('DesMod', ficha.DesMod.toString());
            u.set('ConMod', ficha.ConMod.toString());
            u.set('IntMod', ficha.IntMod.toString());
            u.set('SabMod', ficha.SabMod.toString());
            u.set('CarMod', ficha.CarMod.toString());
            u.set('Inspiracao', ficha.Inspiracao.toString());
            u.set('Proficiencia', ficha.Proficiencia.toString());
            u.set('ForTeste', ficha.ForTeste.toString());
            u.set('DesTeste', ficha.DesTeste.toString());
            u.set('ConTeste', ficha.ConTeste.toString());
            u.set('IntTeste', ficha.IntTeste.toString());
            u.set('SabTeste', ficha.SabTeste.toString());
            u.set('CarTeste', ficha.CarTeste.toString());
            u.set('CampoIdiomas', ficha.CampoIdiomas.toString());
            u.set('IdPerfil', perfilId.toString());
        }

        return this.http.post<any>(this.url, u.toString(), this.httpOptions)
    }

    deleteFicha(id: Number): Observable<any> {
        let url_ = this.url + '/' + id
        return this.http.delete<any>(url_, this.httpOptions)
    }


}
