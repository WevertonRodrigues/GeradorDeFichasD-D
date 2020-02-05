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

  @ViewChild('magia1', { static: false }) magia1: HTMLElement;
  @ViewChild('magia2', { static: false }) magia2: HTMLElement;


  inputs: { elemento: HTMLElement, value: string }[] = [{
    elemento: this.magia1, value: 'magia1'
  },
  {
    elemento: this.magia2, value: 'magia2'
  }]


  magias;

  criarMatriz() {
    var magias = new Array(10);
    for (var i = 0; i < magias.length; i++) {
      magias[i] = new Array();
    }
    return magias
  }

  adicionarMagia(magia: string, nivel: number) {
    //console.log( this.magias[nivel].includes( { NomeMagia : magia } ) )
    let i : number = this.magias[nivel].findIndex(val => val.NomeMagia === magia)

    if (i < 0)
      this.magias[nivel].push({ NomeMagia: magia })
    else
      this.magias[nivel].splice(i, 1)

    
  }

  salvarMagias() {
    //console.log(this.magia1.checked)
    for (let i = 0; i < this.magias.length; i++)
      this.magias[i].sort(
        function (a: { NomeMagia: string; }, b: { NomeMagia: string; }) {
          if (a.NomeMagia > b.NomeMagia)
            return 1
          else
            return -1
        }
      )
    this.salvarAlteracoes.emit({ Magias: this.magias, i: this.index })
  }
  fechar() {
    console.log(this.magias)
    console.log(this.magiasPai)
    if (this.magias.length > 0)
      if (confirm("Fechar e perder alterações?"))
        this.magias = this.magiasPai;
    this.salvarAlteracoes.emit({ Magias: this.magias, i: this.index })
  }

  marcarMagias() {
    for (let i = 0; i < this.magiasPai.length; i++)
      for (let y = 0; i < this.magiasPai[i].length; y++)
        for (let x = 0; i < this.inputs.length; x++) {
          if (this.magiasPai[i].includes(this.inputs[x].value))
            //this.inputs[x].elemento.checked = true;
            alert('É NOIZ')
        }
  }

  constructor() { }

  message: Subject<string> = new BehaviorSubject('loading :(');

  ngAfterViewInit() {
    this.message.next('all done loading :)')
  }

  ngOnInit() {
    this.magias = this.magiasPai
    /*console.log(this.magias)
    console.log(this.magiasPai)*/
  }

}
