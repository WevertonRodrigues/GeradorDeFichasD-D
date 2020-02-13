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

  @ViewChild('amizade', { static: false }) amizade: HTMLElement;
  @ViewChild('ataqueCerteiro', { static: false }) ataqueCerteiro: HTMLElement;
  @ViewChild('bordaoMistico', { static: false }) bordaoMistico: HTMLElement;
  @ViewChild('chamaSagrada', { static: false }) chamaSagrada: HTMLElement;
  @ViewChild('consertar', { static: false }) consertar: HTMLElement;
  @ViewChild('chicoteDeEspinhos', { static: false }) chicoteDeEspinhos: HTMLElement;
  @ViewChild('criarChamas', { static: false }) criarChamas: HTMLElement;
  @ViewChild('druidismo', { static: false }) druidismo: HTMLElement;
  @ViewChild('espirroAcido', { static: false }) espirroAcido: HTMLElement;
  @ViewChild('estabilizar', { static: false }) estabilizar: HTMLElement;
  @ViewChild('globosDeLuz', { static: false }) globosDeLuz: HTMLElement;
  @ViewChild('orientacao', { static: false }) orientacao: HTMLElement;
  @ViewChild('luz', { static: false }) luz: HTMLElement;
  @ViewChild('ilusaoMenor', { static: false }) ilusaoMenor: HTMLElement;
  @ViewChild('maosMagicas', { static: false }) maosMagicas: HTMLElement;
  @ViewChild('mensagem', { static: false }) mensagem: HTMLElement;
  @ViewChild('prestidigitacao', { static: false }) prestidigitacao: HTMLElement;
  @ViewChild('protecaoContraLaminas', { static: false }) protecaoContraLaminas: HTMLElement;
  @ViewChild('raioDeFogo', { static: false }) raioDeFogo: HTMLElement;
  @ViewChild('raioDeGelo', { static: false }) raioDeGelo: HTMLElement;
  @ViewChild('rajadaDeVeneno', { static: false }) rajadaDeVeneno: HTMLElement;
  @ViewChild('resistencia', { static: false }) resistencia: HTMLElement;
  @ViewChild('rajadaMistica', { static: false }) rajadaMistica: HTMLElement;
  @ViewChild('taumaturgia', { static: false }) taumaturgia: HTMLElement;
  @ViewChild('toqueArrepiante', { static: false }) toqueArrepiante: HTMLElement;
  @ViewChild('toqueChocante', { static: false }) toqueChocante: HTMLElement;
  @ViewChild('zombariaViciosa', { static: false }) zombariaViciosa: HTMLElement;

  inputs: { elemento: HTMLElement, value: string }[] = [{
    elemento: this.amizade, value: 'amizade'
  },
  {
    elemento: this.ataqueCerteiro, value: 'ataqueCerteiro'
  },
  {
    elemento: this.bordaoMistico, value: 'bordaoMistico'
  },
  {
    elemento: this.chamaSagrada, value: 'chamaSagrada'
  },
  {
    elemento: this.consertar, value: 'consertar'
  },
  {
    elemento: this.chicoteDeEspinhos, value: 'chicoteDeEspinhos'
  },
  {
    elemento: this.criarChamas, value: 'criarChamas'
  },
  {
    elemento: this.druidismo, value: 'druidismo'
  },
  {
    elemento: this.espirroAcido, value: 'espirroAcido'
  },
  {
    elemento: this.estabilizar, value: 'estabilizar'
  },
  {
    elemento: this.globosDeLuz, value: 'globosDeLuz'
  },
  {
    elemento: this.orientacao, value: 'orientacao'
  },
  {
    elemento: this.luz, value: 'luz'
  },
  {
    elemento: this.ilusaoMenor, value: 'ilusaoMenor'
  },
  {
    elemento: this.maosMagicas, value: 'maosMagicas'
  },
  {
    elemento: this.mensagem, value: 'mensagem'
  },
  {
    elemento: this.prestidigitacao, value: 'prestidigitacao'
  },
  {
    elemento: this.protecaoContraLaminas, value: 'protecaoContraLaminas'
  },
  {
    elemento: this.raioDeFogo, value: 'raioDeFogo'
  },
  {
    elemento: this.raioDeGelo, value: 'raioDeGelo'
  },
  {
    elemento: this.rajadaDeVeneno, value: 'rajadaDeVeneno'
  },
  {
    elemento: this.resistencia, value: 'resistencia'
  },
  {
    elemento: this.rajadaMistica, value: 'rajadaMistica'
  },
  {
    elemento: this.taumaturgia, value: 'taumaturgia'
  },
  {
    elemento: this.toqueArrepiante, value: 'toqueArrepiante'
  },
  {
    elemento: this.toqueChocante, value: 'toqueChocante'
  },
  {
    elemento: this.zombariaViciosa, value: 'zombariaViciosa'
  },
  ]

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
    let i: number = this.magias[nivel].findIndex(val => val.NomeMagia === magia)

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

  restaurarMagias() {
    /*console.log(this.magias)
    console.log(this.magiasPai)*/
    if (this.magias.length > 0)
      if (confirm("Apagar todas as magias?")) {
        this.magias = this.criarMatriz();

      }
    this.salvarAlteracoes.emit({ Magias: this.magias, i: this.index })
  }

  fecharModal(){
    console.log(this.magias);
    console.log(this.magiasPai);
    if (this.magias.length > 0)
      if (confirm("Sair sem salvar?")) {
        this.magias = this.magiasPai;

      }
    this.salvarAlteracoes.emit({ Magias: this.magias, i: this.index })
  }

  marcarMagias() {
    
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
