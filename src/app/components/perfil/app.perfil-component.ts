import { Component } from '@angular/core';
//import { Perfil } from '../../models/perfil.modelo';
import { Router, ActivatedRoute } from '@angular/router';
//import { PerfilService } from 'src/app/service/app.perfil-service';

@Component({
    selector: 'app-perfil',
    templateUrl: './app.perfil-component.html',
    styleUrls: ['./app.perfil-component.css']
})

export class PerfilComponent /*implements OnInit*/ {
    /*perfil: Perfil = new Perfil();
    perfis : Perfil[] = [];
    perfilAtual : number;*/


    constructor(private route: ActivatedRoute,
        private router: Router) { }

    /*constructor(private route: ActivatedRoute,
        private router: Router,
        private perfilService: PerfilService) { }

    ngOnInit(){       
        this.route.params.subscribe((objeto: any) => {
            this.perfilAtual = +objeto['idPerfil'];            
        })
        this.perfis = [];
        //this.getPerfis();     
        //this.filtrarPerfil(this.perfilAtual);
        //console.log("Id perfil: " + this.perfil.Id);
        //console.log("Id perfil: " + this.perfilAtual);
    }*/

    /*filtrarPerfil(id : number) : void {
        for(let i = 0; i < this.perfis.length; i++)
            if(id == this.perfis[i].Id){
                this.perfil.Id = this.perfis[i].Id;
                this.perfil.User = this.perfis[i].User;
                this.perfil.Password = this.perfis[i].Password;
            }
    }

    getPerfis(): void {
        this.perfilService.getPerfis()
            .subscribe(response => {
                if (response.Status == 0) {
                    this.perfis = response.Perfis
                }
                else {
                    alert(response.Detalhes)
                }
            });
    }

    getPerfil(id : number): void {
        this.perfilService.getPerfil(id)
            .subscribe(response => {
                if (response.Status == 0) {
                    this.perfil = response.Perfis
                }
                else {
                    alert(response.Detalhes)
                }
            });
    }

    inserir(): void {
        this.perfilService.addPerfil(this.perfil)
            .subscribe(response => {
                if (response.Status == 0) {
                }
                else {
                    alert(response.Detalhes)
                }
            });
    }

    atualizar(): void {
        this.perfilService.updatePerfil(this.perfil)
            .subscribe(response => {
                if (response.Status == 0) {
                }
                else {
                    console.log(response.Detalhes)
                }
            });
    }

    remover(id : number): void {
        this.perfilService.deletePerfil(id)
            .subscribe(response => {
                if (response.Status == 0) {
                }
                else {
                    alert(response.Detalhes)
                }
            });
    }*/
}
