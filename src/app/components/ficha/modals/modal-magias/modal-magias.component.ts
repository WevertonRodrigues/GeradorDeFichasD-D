import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-magias',
  templateUrl: './modal-magias.component.html',
  styleUrls: ['./modal-magias.component.css']
})
export class ModalMagiasComponent implements OnInit {

  @Input() classe : string
  @Input() index : number

  @Output() adicionouMagias = new EventEmitter();

  Magias;
  
  criarMatriz(){
    this.Magias = new Array(10);
    for (var i = 0; i < this.Magias.length; i++) {
      this.Magias[i] = new Array(3);
    }
  }

  adicionarMagia(magia : string, nivel : number) {
    console.log(this.Magias.includes(magia))
    console.log(this.Magias.length)
    /*if(this.Magias.includes(magia) === false)
      this.Magias[this.Magias.length][nivel] = magia*/

    //console.log(e)
    this.adicionouMagias.emit('Consigo Pegar Valores')
  }
  
  constructor() { }

  ngOnInit() {
    this.criarMatriz();
  }

}
