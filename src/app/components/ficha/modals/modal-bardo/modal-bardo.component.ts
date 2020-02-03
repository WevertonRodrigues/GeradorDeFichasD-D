import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-modal-bardo',
  templateUrl: './modal-bardo.component.html',
  styleUrls: ['./modal-bardo.component.css']
})
export class ModalBardoComponent implements OnInit {  

  @Input() classe : string; 
  @Input() index : number;
  @Input() magiasPai: string | any[];

  @Output() salvarAlteracoes = new EventEmitter();

  magias: string | any[];
  
  criarMatriz(){
    this.magias = new Array(10);
    for (var i = 0; i < this.magias.length; i++) {
      this.magias[i] = new Array();
    }
  }

  adicionarMagia(magia: string, nivel : number){
    //console.log(this.magias[nivel].includes(magia))    

    if(!(this.magiasPai[nivel].includes(magia)))
      this.magiasPai[nivel].push(magia)
    else
        this.magiasPai[nivel].splice(this.magiasPai[nivel].indexOf(magia), 1)
            
    /*console.log(this.classe)
    console.log(this.index)*/
  }

  salvarMagias(){
    this.salvarAlteracoes.emit({Magias : this.magias, i : this.index})
  }

  constructor() { }

  ngOnInit() {
    //this.criarMatriz();  
    /*console.log(this.magiasPai)
    console.log(this.magias)*/
  }

}
