import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-bardo',
  templateUrl: './modal-bardo.component.html',
  styleUrls: ['./modal-bardo.component.css']
})
export class ModalBardoComponent implements OnInit {

  @Input() status : string = 'OK!'

  @Output() adicionouMagias = new EventEmitter();

  add(e){
    //console.log(e)
    this.adicionouMagias.emit('Consigo Pegar Valores')
  }

  constructor() { }

  ngOnInit() {
  }

}
