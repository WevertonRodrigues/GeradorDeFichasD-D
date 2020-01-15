import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../../models/perfil.modelo';
import { PerfilService } from 'src/app/service/app.perfil-service';

@Component({
    selector: 'app-form-cadastro',
    templateUrl: './app.form-cadastro-component.html',
    styleUrls: ['./app.form-cadastro-component.css']
})

export class FormCadastroComponent{
   
    perfil : Perfil = new Perfil();
    
    constructor(private route: ActivatedRoute, private router: Router, private perfilService : PerfilService) { } 

    cadastrar(){
        console.log("Id antes: " + this.perfil.Id);
        //this.inserir();
        console.log("Id depois: " + this.perfil.Id);
        this.router.navigate(['/perfil', this.perfil.Id], {relativeTo:this.route});
    }   

    inserir() : void {
        this.perfilService.addPerfil(this.perfil)
            .subscribe(response => {
                if (response.Status == 0) {
                    alert("Inserção deu certo!");
                    return;
                }
                else {
                    alert(response.Detalhes);
                    return;
                }
            });
    }
}
