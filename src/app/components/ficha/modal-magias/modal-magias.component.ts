import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-modal-magias',
  templateUrl: './modal-magias.component.html',
  styleUrls: ['./modal-magias.component.css']
})
export class ModalMagiasComponent implements OnInit, AfterViewInit {


  @Input() classe: string;
  @Input() index: number;
  @Input() magiasPai: string | any[];

  @Output() private salvarAlteracoes = new EventEmitter();

  @ViewChild('magia1', {static : false}) magia1 : HTMLElement;

  magias: string | any[];

  criarMatriz() {
    var magias = new Array(10);
    for (var i = 0; i < magias.length; i++) {
      magias[i] = new Array();
    }
    return magias
  }

  adicionarMagia(magia: string, nivel: number) {
    //console.log(this.magias[nivel].includes(magia))    

    if (!(this.magias[nivel].includes(magia)))
      this.magias[nivel].push(magia)
    else
      this.magias[nivel].splice(this.magias[nivel].indexOf(magia), 1)

    /*console.log(this.classe)
    console.log(this.index)*/
  }

  salvarMagias() {
    console.log(this.magia1)
    this.salvarAlteracoes.emit({ Magias: this.magias, i: this.index })
  }

  constructor() { }

  message: Subject<string> = new BehaviorSubject('loading :(');

  ngAfterViewInit() {
    this.message.next('all done loading :)')
  }

  ngOnInit() {
    this.magias = this.magiasPai;
    this.magiasPai = this.criarMatriz();
  }

}
