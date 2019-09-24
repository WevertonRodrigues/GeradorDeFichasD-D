import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PerfilService {
   
    private url = 'http://localhost:58384/api/Perfil';

    readonly httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 
        'application/x-www-form-urlencoded' })
    };

    constructor(private http: HttpClient) { }

    getPerfis(): Observable<any> {
        return this.http.get<any>(this.url, this.httpOptions)
    }

    getPerfil(id : number): Observable<any> {
        return this.http.get<any>(this.url + '/' + id, this.httpOptions)
    }

    updatePerfil(perfil: Perfil): Observable<any> {
        let u = new URLSearchParams();

        u.set('Id', perfil.Id.toString());
        u.set('User', perfil.User.toString());
        u.set('Password', perfil.Password.toString());
        u.set('RepPassword', perfil.RepPassword.toString());
        

        let url_ = this.url + '/' + perfil.Id;
        return this.http.put<any>(url_, u.toString(), this.httpOptions)
        }
        

    addPerfil(perfil : Perfil): Observable<any> {
        let u = new URLSearchParams();

        u.set('User', perfil.User.toString());
        u.set('Password', perfil.Password.toString());
        u.set('RepPassword', perfil.RepPassword.toString());

        return this.http.post<any>(this.url, u.toString(),
        this.httpOptions)
    }

    deletePerfil(id: Number): Observable<any> {
        let url_ = this.url + '/' + id
        return this.http.delete<any>(url_, this.httpOptions)
        }
        
        
}
