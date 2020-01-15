import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/models/perfil.modelo';
import { PerfilService } from 'src/app/service/app.perfil-service';

@Component({
    selector: 'app-form-entrar',
    templateUrl: './app.form-entrar-component.html',
    styleUrls: ['./app.form-entrar-component.css']
})

export class FormEntrarComponent implements OnInit {

    perfil: Perfil = new Perfil();
    perfilAux: Perfil = new Perfil();
    perfis: Perfil[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private perfilService: PerfilService) { }

    ngOnInit() {
        //this.getPerfis();
    }

    onSubmit() {
        //this.getPerfis();
        //if(this.autenticar() == true)
            //this.router.navigate(['/perfil', this.perfilAux.Id], {relativeTo:this.route});
            this.router.navigate(['/perfil'])
    }

    autenticar(): boolean {            
        /*console.log("User aux: " + this.perfilAux.User);
        console.log("Password aux: " + this.perfilAux.Password);*/  
        for (let i = 0; i < this.perfis.length; i++) {          
            console.log("User vet: " + this.perfis[i].User);
            console.log("Password vet: " + this.perfis[i].Password);
            
            if (this.perfis[i].User == this.perfilAux.User && this.perfis[i].Password == this.perfilAux.Password) {
                this.perfil.Id = this.perfis[i].Id;
                this.perfil.User = this.perfis[i].User;
                this.perfil.Password = this.perfis[i].Password;
                return true;
            }
        }
        alert("Usuário e/ou senha inválidos!");
        this.perfilAux = new Perfil();
        return false;    
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

    getPerfil(id: number): void {
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
}
