import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'arquetipos',
  templateUrl: './arquetipos.component.html',
  styleUrls: ['../ficha/app.ficha-component.css'],
})
export class ArquetiposComponent implements OnInit {

  @Input() private classe: string;
  @Input() private index: number;

  @Output() private mandarArquetipo: EventEmitter<{Index : number, Arquetipo : string}> = new EventEmitter();

  constructor() { }

  choiceArchetype(arquetipo: string) {
    this.mandarArquetipo.emit({Index : this.index, Arquetipo: arquetipo});
  }

  ngOnInit() {
  }

}
