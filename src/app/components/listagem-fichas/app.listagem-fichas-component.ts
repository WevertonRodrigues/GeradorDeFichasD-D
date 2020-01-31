import { Component, OnInit } from '@angular/core';
import { Ficha } from 'src/app/models/ficha.modelo';
import { Router, ActivatedRoute } from
  '@angular/router';
import { FichaService } from 'src/app/service/app.ficha-service';

@Component({
  selector: 'app-listagem-fichas',
  templateUrl: './app.listagem-fichas-component.html',
  styleUrls: ['./app.listagem-fichas-component.css']
})
export class ListagemFichasComponent implements OnInit {

  ficha: Ficha;

  fichas: Ficha[] = [];
  fichasAux: Ficha[] = [];

  perfilAtual: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fichaService: FichaService) { }

  ngOnInit() {    
    this.fichas = [];
    this.getFichas();
    this.route.params.subscribe((objeto: any) => {
      this.perfilAtual = +objeto['idPerfil'];
    })    
    //this.fichas = [];    
  }

  listar() : void {
    this.getFichas();
    console.log("Len: " + this.fichasAux.length);
    for(let i = 0, j = 0; i < this.fichasAux.length; i++){
    console.log("Vet, idPerfil: " + this.fichasAux[i].IdPerfil);
      if(this.fichasAux[i].IdPerfil == this.perfilAtual){
        this.fichas[j] = this.fichasAux[i];
        j++
        console.log("Ok, encontrei!");      
      }
    }
  }

  editarFicha(fichaID: number) : void {
    if (confirm('Deseja editar a ficha ' + fichaID + '?') == true)
      this.router.navigate(['/ficha', this.perfilAtual, fichaID], { relativeTo: this.route });
  }

  removerFicha(fichaID: number) : void {
    if (confirm('Deseja remover a ficha ' + fichaID + '?') == true)
      this.remover(fichaID);
  }

  criarFicha() :void {
    if (confirm('Deseja criar uma nova ficha?') == true) {
      this.ficha = new Ficha();
      this.ficha.Id = 0;
      this.router.navigate(['/ficha', this.perfilAtual, this.ficha.Id], { relativeTo: this.route });
    }
  }

  getFichas(): void {
    this.fichaService.getFichas()
      .subscribe(response => {
        if (response.Status == 0) {
          this.fichasAux = response.Fichas;
        }
        else {
          alert(response.Detalhes);
        }
      });
  }

  inserir(): void {
    this.fichaService.addFicha(this.ficha, this.perfilAtual)
      .subscribe(response => {
        if (response.Status == 0) {
          this.getFichas();
        }
        else {
          alert(response.Detalhes);
        }
      });
  }

  remover(id: number): void {
    this.fichaService.deleteFicha(id)
      .subscribe(response => {
        if (response.Status == 0) {
          this.getFichas();
        }
        else {
          alert(response.Detalhes);
        }
      });
  }

  inicializarNovaFicha(): void {
    this.ficha = new Ficha();            
  }
}
