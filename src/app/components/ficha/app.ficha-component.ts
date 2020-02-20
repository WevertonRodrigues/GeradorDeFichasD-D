import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { Ficha } from 'src/app/models/ficha.modelo';
import { ActivatedRoute, Router } from '@angular/router';

import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';

@Component({
    selector: 'app-ficha',
    templateUrl: './app.ficha-component.html',
    styleUrls: ['./app.ficha-component.css']
})


export class FichaComponent implements OnInit {
    

    private ficha: Ficha = new Ficha();


    private perfilAtual: number;

    private atr1Atual: string = '';
    private atr2Atual: string = '';
    private profAtual: number = 2;

    constructor(private route: ActivatedRoute,
        private router: Router, ) { }

    /*constructor(private route: ActivatedRoute,
        private router: Router,
        private fichaService: FichaService) { }*/

    ngOnInit() {
        /*this.route.params.subscribe((objeto: any) => {
            this.fichaAtual = +objeto['idFicha'];
            this.perfilAtual = +objeto['idPerfil'];
        })*/
        //this.getFichas();
        //this.ficha.Classes = new Array({ Classe: '', DadoDeVida: this.adicionarDado(''), CDMagias: this.calcularCD(''), ModAM: this.calcularModAtaqueMagico(''), Magias: this.criarMatriz() });        
        this.ficha.Classes = new Array({ Classe: '', Arquetipo: '', DadoDeVida: this.adicionarDado(''), CDMagias: this.calcularCD(''), ModAM: this.calcularModAtaqueMagico(''), Magias: new Array() });
        //console.log(this.ficha.Classes)
    }

    msg : string

    showModal(msg : string){
        this.msg = msg
        jQuery('#myModal').modal('toggle')
    }

    criarMatriz() {
        var magias = new Array(10);
        for (var i = 0; i < magias.length; i++) {
            magias[i] = new Array();
        }
        return magias
    }

    evento(obj: any) {
        //console.log(obj)
        this.ficha.Classes[obj.i].Magias = obj.Magias
        //this.ficha.Classes[obj.i].Magias
        console.log(obj)
    }

    arquetipo(obj: any) {
        this.ficha.Classes[obj.Index].Arquetipo = obj.Arquetipo;
        if (obj.Arquetipo === 'Cavaleiro Arcano' || obj.Arquetipo === 'Trapaceiro Arcano') {
            this.ficha.Classes[obj.Index].CDMagias = this.calcularCD(obj.Arquetipo)
            this.ficha.Classes[obj.Index].ModAM = this.calcularModAtaqueMagico(obj.Arquetipo)
        }
    }

    resetar() {
        this.ficha = new Ficha();
        //this.ficha.Classes = new Array({ Classe: '', DadoDeVida: this.adicionarDado(''), CDMagias: this.calcularCD(''), ModAM: this.calcularModAtaqueMagico(''), Magias: this.criarMatriz() });
        this.ficha.Classes = new Array({ Classe: '', Arquetipo: '', DadoDeVida: this.adicionarDado(''), CDMagias: this.calcularCD(''), ModAM: this.calcularModAtaqueMagico(''), Magias: new Array() });
    }

    checkIncludeClass(c: string) {
        //console.log(this.ficha.Classes.map((c) => c.Classe))
        console.log(this.ficha.Classes.map((c) => c.Classe).includes(c))
        return this.ficha.Classes.map((c) => c.Classe).includes(c)
        /*if(this.ficha.Classes.map((c) =>  c.Classe).includes(classs))
            console.log('Contém');
        else
            console.log('Não Contém');*/
    }

    setSKill(idCheck: string, idMod: number, idInput: string) {
        //console.log(this.checkAtr(id).checked)
        if (this.checkAtr(idCheck).checked)
            this.ficha.setPericia(this.ficha.getPericia(idInput) + parseInt(this.ficha.proficiencia), idInput)
        else
            this.ficha.setPericia(this.ficha.getPericia(idInput) - parseInt(this.ficha.proficiencia), idInput)

    }

    mudarProf(lvlAtual: number): void {

        var prof = Math.ceil(lvlAtual / 4) + 1

        if (this.profAtual !== prof) {
            this.ajustTests(prof);
            this.ajustPer();
        }

        this.ficha.proficiencia = "+" + prof

        this.profAtual = prof
    }

    ajustPer() {
        var per: { check: string, input: string }[] = [
            //Força
            { check: 'atleRadID', input: 'atleID' },
            //Destreza
            { check: 'acroRadID', input: 'acroID' },
            { check: 'furtRadID', input: 'furtID' },
            { check: 'prestRadID', input: 'prestID' },
        ]
        //var n: number[] = new Array<number>(0, 1, 2, 3, 4, 5)

        for (let i = 0; i < per.length; i++)
            //if (n[i] != 2)
            if (this.checkAtr(per[i].check).checked) {
                this.ficha.setPericia(this.ficha.getPericia(per[i].input) - this.profAtual, per[i].input)
                this.ficha.setPericia(this.ficha.getPericia(per[i].input) + parseInt(this.ficha.proficiencia), per[i].input)
            }
    }

    ajustTests(prof: number) {
        this.setSaving(this.atr1Atual, false)
        this.setSaving(this.atr2Atual, false)
        this.ficha.proficiencia = "+" + prof
        this.setSaving(this.atr1Atual, true)
        this.setSaving(this.atr2Atual, true)
    }

    mudarMod(n: number, teste: string): void {
        this.ficha.setMod((Math.trunc(this.ficha.getAtr(n) / 2) - 5), n);
        //this.mudarTeste(n, teste);
    }

    mudarTeste(mod: number, teste: string): void {
        let n: number = this.ficha.getMod(mod);
        this.ficha.setTeste(n, teste);
    }

    mudarAtributosRaca(r: string): void {
        switch (r) {
            case '1':
                this.ficha.con += 2;
                this.mudarMod(2, 'conTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '2':
                this.ficha.for += 2;
                this.mudarMod(0, 'forTesteID');
                this.ficha.car += 2;
                this.mudarMod(5, 'carTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '3':
                this.ficha.des += 2;
                this.mudarMod(1, 'desTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '4':
                this.ficha.des += 2;
                this.mudarMod(1, 'desTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '5':
                this.ficha.for += 1;
                this.mudarMod(0, 'forTesteID');
                this.ficha.des += 1;
                this.mudarMod(1, 'desTesteID');
                this.ficha.con += 1;
                this.mudarMod(2, 'conTesteID');
                this.ficha.int += 1;
                this.mudarMod(3, 'intTesteID');
                this.ficha.sab += 1;
                this.mudarMod(4, 'sabTesteID');
                this.ficha.car += 1;
                this.mudarMod(5, 'carTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '6':
                this.ficha.int += 2;
                this.mudarMod(3, 'intTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '7':
                this.ficha.car += 2;
                this.mudarMod(5, 'carTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '8':
                this.ficha.for += 2;
                this.mudarMod(0, 'forTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            case '9':
                this.ficha.car += 2;
                this.mudarMod(5, 'carTesteID');
                this.ficha.int += 1;
                this.mudarMod(3, 'intTesteID');
                this.mudarAtributosSubRaca('0');
                break;
            default:
                this.mudarAtributosSubRaca('0');
                break;
        }

        switch (this.ficha.racaAtual) {
            case '1':
                this.ficha.con -= 2;
                this.mudarMod(2, 'conTesteID');
                break;
            case '2':
                this.ficha.for -= 2;
                this.mudarMod(0, 'forTesteID');
                this.ficha.car -= 2;
                this.mudarMod(5, 'carTesteID');
                break;
            case '3':
                this.ficha.des -= 2;
                this.mudarMod(1, 'desTesteID');
                break;
            case '4':
                this.ficha.des -= 2;
                this.mudarMod(1, 'desTesteID');
                break;
            case '5':
                this.ficha.for -= 1;
                this.mudarMod(0, 'forTesteID');
                this.ficha.des -= 1;
                this.mudarMod(1, 'desTesteID');
                this.ficha.con -= 1;
                this.mudarMod(2, 'conTesteID');
                this.ficha.int -= 1;
                this.mudarMod(3, 'intTesteID');
                this.ficha.sab -= 1;
                this.mudarMod(4, 'sabTesteID');
                this.ficha.car -= 1;
                this.mudarMod(5, 'carTesteID');
                break;
            case '6':
                this.ficha.int -= 2;
                this.mudarMod(3, 'intTesteID');
                break;
            case '7':
                this.ficha.car -= 2;
                this.mudarMod(5, 'carTesteID');
                break;
            case '8':
                this.ficha.for -= 2;
                this.mudarMod(0, 'forTesteID');
                break;
            case '9':
                this.ficha.car -= 2;
                this.mudarMod(5, 'carTesteID');
                this.ficha.int -= 1;
                this.mudarMod(3, 'intTesteID');
                break;
            default:
                break;
        }
        this.ficha.racaAtual = r;
    }

    mudarAtributosSubRaca(sR: string) {
        //console.log("Raça escolhida: " + sR);
        switch (this.ficha.racaAtual) {
            case '1':
                switch (sR) {
                    case '1':
                        this.ficha.sab += 1;
                        this.mudarMod(4, 'sabTesteID');
                        break;
                    case '2':
                        this.ficha.for += 2;
                        this.mudarMod(1, 'desTesteID');
                        break;
                    default:
                        break;
                }
                break;
            case '3':
                switch (sR) {
                    case '1':
                        this.ficha.int += 1;
                        this.mudarMod(3, 'intTesteID');
                        break;
                    case '2':
                        this.ficha.sab += 1;
                        this.mudarMod(4, 'sabTesteID');
                        break;
                    case '3':
                        this.ficha.car += 1;
                        this.mudarMod(5, 'carTesteID');
                        break;
                    default:
                        break;
                }
                break;
            case '4':
                switch (sR) {
                    case '1':
                        this.ficha.car += 1;
                        this.mudarMod(5, 'carTesteID');
                        break;
                    case '2':
                        this.ficha.con += 1;
                        this.mudarMod(2, 'conTesteID')
                        break;
                    default:
                        break;
                }
                break;
            case '6':
                switch (sR) {
                    case '1':
                        this.ficha.des += 1;
                        this.mudarMod(1, 'desTesteID');
                        break;
                    case '2':
                        this.ficha.con += 1;
                        this.mudarMod(2, 'conTesteID');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }

        switch (this.ficha.racaAtual) {
            case '1':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.sab -= 1;
                        this.mudarMod(4, 'sabTesteID');
                        break;
                    case '2':
                        this.ficha.for -= 2;
                        this.mudarMod(1, 'desTesteID');
                        break;
                    default:
                        break;
                }
                break;
            case '3':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.int -= 1;
                        this.mudarMod(3, 'intTesteID');
                        break;
                    case '2':
                        this.ficha.sab -= 1;
                        this.mudarMod(4, 'sabTesteID');
                        break;
                    case '3':
                        this.ficha.car -= 1;
                        this.mudarMod(5, 'carTesteID');
                        break;
                    default:
                        break;
                }
                break;
            case '4':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.car -= 1;
                        this.mudarMod(5, 'carTesteID');
                        break;
                    case '2':
                        this.ficha.con -= 1;
                        this.mudarMod(2, 'conTesteID')
                        break;
                    default:
                        break;
                }
                break;
            case '6':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.des -= 1;
                        this.mudarMod(1, 'desTesteID');
                        break;
                    case '2':
                        this.ficha.con -= 1;
                        this.mudarMod(2, 'conTesteID');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }

        //console.log("Sub raça escolhida: " + this.ficha.subRacaAtual);
        this.ficha.subRacaAtual = sR;

    }

    setSaving(t: string, check: boolean) {
        let prof = parseInt(this.ficha.proficiencia);
        if (check === true)
            this.ficha.setTeste(this.ficha.getTeste(t) + prof, t);
        else
            this.ficha.setTeste(this.ficha.getTeste(t) - prof, t);

    }

    checkAtr(id: string): HTMLInputElement {
        let check: HTMLInputElement = document.getElementById(id) as HTMLInputElement;

        return check;
    }

    setPrimaryClass(c: string): void {

        if (this.checkIncludeClass(c) === false) {
            var atr1: string = '';
            var atr2: string = '';

            var testeRads: string[] = ['forTesteRadID', 'desTesteRadID', 'conTesteRadID', 'intTesteRadID', 'sabTesteRadID', 'carTesteRadID'];

            for (let i = 0; i < 6; i++)
                this.checkAtr(testeRads[i]).checked = false;

            switch (c) {
                case 'Bárbaro':
                    this.checkAtr(testeRads[0]).checked = true;
                    this.checkAtr(testeRads[2]).checked = true;
                    atr1 = testeRads[0];
                    atr2 = testeRads[2];
                    break;
                case 'Bardo':
                    this.checkAtr(testeRads[1]).checked = true;
                    this.checkAtr(testeRads[5]).checked = true;
                    atr1 = testeRads[1];
                    atr2 = testeRads[5];
                    break;
                case 'Bruxo':
                    this.checkAtr(testeRads[4]).checked = true;
                    this.checkAtr(testeRads[5]).checked = true;
                    atr1 = testeRads[4];
                    atr2 = testeRads[5];
                    break;
                case 'Clérigo':
                    this.checkAtr(testeRads[4]).checked = true;
                    this.checkAtr(testeRads[5]).checked = true;
                    atr1 = testeRads[4];
                    atr2 = testeRads[5];
                    break;
                case 'Druida':
                    this.checkAtr(testeRads[3]).checked = true;
                    this.checkAtr(testeRads[4]).checked = true;
                    atr1 = testeRads[3];
                    atr2 = testeRads[4];
                    break;
                case 'Feiticeiro':
                    this.checkAtr(testeRads[2]).checked = true;
                    this.checkAtr(testeRads[5]).checked = true;
                    atr1 = testeRads[2];
                    atr2 = testeRads[5];
                    break;
                case 'Guerreiro':
                    this.checkAtr(testeRads[0]).checked = true;
                    this.checkAtr(testeRads[2]).checked = true;
                    atr1 = testeRads[0];
                    atr2 = testeRads[2];
                    break;
                case 'Ladino':
                    this.checkAtr(testeRads[1]).checked = true;
                    this.checkAtr(testeRads[3]).checked = true;
                    atr1 = testeRads[1];
                    atr2 = testeRads[3];
                    break;
                case 'Mago':
                    this.checkAtr(testeRads[3]).checked = true;
                    this.checkAtr(testeRads[4]).checked = true;
                    atr1 = testeRads[3];
                    atr2 = testeRads[4];
                    break;
                case 'Monge':
                    this.checkAtr(testeRads[0]).checked = true;
                    this.checkAtr(testeRads[1]).checked = true;
                    atr1 = testeRads[0];
                    atr2 = testeRads[1];
                    break;
                case 'Paladino':
                    this.checkAtr(testeRads[4]).checked = true;
                    this.checkAtr(testeRads[5]).checked = true;
                    atr1 = testeRads[4];
                    atr2 = testeRads[5];
                    break;
                case 'Patrulheiro':
                    this.checkAtr(testeRads[0]).checked = true;
                    this.checkAtr(testeRads[1]).checked = true;
                    atr1 = testeRads[0];
                    atr2 = testeRads[1];
                    break;
            }

            if (atr1 !== '')
                this.setSaving(atr1, this.checkAtr(atr1).checked);
            if (atr2 !== '')
                this.setSaving(atr2, this.checkAtr(atr2).checked);

            this.setSaving(this.atr1Atual, false);
            this.setSaving(this.atr2Atual, false);
            this.atr1Atual = atr1
            this.atr2Atual = atr2

            //this.ficha.Classes[0] = { Classe: c, DadoDeVida: this.adicionarDado(c), CDMagias: this.calcularCD(c), ModAM: this.calcularModAtaqueMagico(c), Magias: this.criarMatriz() };
            this.ficha.Classes[0] = { Classe: c, Arquetipo: '', DadoDeVida: this.adicionarDado(c), CDMagias: this.calcularCD(c), ModAM: this.calcularModAtaqueMagico(c), Magias: new Array() };       

        } else{
           this.showModal('Classe já adicionada.');
           this.ficha.Classes[0].Classe = '';
        }

    }

    calcularCD(classe: string) {
        if (classe === 'Bardo' || classe === 'Bruxo' || classe === 'Feiticeiro' || classe === 'Paladino')
            return 8 + this.ficha.CarMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Clérigo' || classe === 'Druida' || classe === 'Patrulheiro')
            return 8 + this.ficha.SabMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Mago' || classe === 'Cavaleiro Arcano' || classe === 'Trapaceiro Arcano')
            return 8 + this.ficha.IntMod + parseInt(this.ficha.Proficiencia)
    }

    calcularModAtaqueMagico(classe: string) {
        if (classe === 'Bardo' || classe === 'Bruxo' || classe === 'Feiticeiro' || classe === 'Paladino')
            return this.ficha.CarMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Clérigo' || classe === 'Druida' || classe === 'Patrulheiro')
            return this.ficha.SabMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Mago' || classe === 'Cavaleiro Arcano' || classe === 'Trapaceiro Arcano')
            return this.ficha.IntMod + parseInt(this.ficha.Proficiencia)
    }

    ativarMulticlasse(c: any) {
        if (c.checked === false)
            if (this.ficha.Classes.length !== 1) {
                if (confirm('Aviso!\nTodas as multiclasses serão apagadas.\nContinuar?') === true)
                    this.ficha.Classes.splice(1, this.ficha.Classes.length - 1);
                else
                    c.checked = true
            }

    }

    adicionarMulticlasse(classe: string) {

        if (this.checkIncludeClass(classe) === false) {
            if (classe !== '')
                //this.ficha.Classes.push({ Classe: classe, DadoDeVida: this.adicionarDado(classe), CDMagias: this.calcularCD(classe), ModAM: this.calcularModAtaqueMagico(classe), Magias: this.criarMatriz() });
                this.ficha.Classes.push({ Classe: classe, Arquetipo: '', DadoDeVida: this.adicionarDado(classe), CDMagias: this.calcularCD(classe), ModAM: this.calcularModAtaqueMagico(classe), Magias: new Array() });
        } else{
            this.showModal('Classe já adicionada.');
        }
    }

    removerMulticlasse(i: number) {
        this.ficha.Classes.splice(i, 1)
    }

    adicionarDado(classe: string) {
        if (classe === 'Feiticeiro' || classe === 'Mago')
            return 'd6';
        if (classe === 'Bardo' || classe === 'Bruxo' || classe === 'Clérigo' || classe === 'Druida' || classe === 'Ladino' || classe === 'Monge')
            return 'd8';
        if (classe === 'Guerreiro' || classe === 'Paladino' || classe === 'Patrulheiro')
            return 'd10';
        if (classe === 'Bárbaro')
            return 'd12';
        if (classe === '')
            return '';
    }

    adicionarAtaque(nome: string, ba: any, dt: string) {
        if (nome != '' && (isNaN(parseInt(ba, 10)) != true) && dt != '')
            this.ficha.Ataques.push({ NomeAtaque: nome, BonusAtaque: ba, DanoTipoAtaque: dt })
    }
    removerAtaque(i: number) {
        this.ficha.Ataques.splice(i, 1)
    }

    adicionarItem(item: string, status: string) {
        if (item !== '' && status !== '') {
            this.ficha.Equips.push({ NomeItem: item, StatusItem: status });
        }
    }

    removerItem(i: number) {
        this.ficha.Equips.splice(i, 1)
    }

    /*    getFicha(id : number): void {
            this.fichaService.getFicha(id)
                .subscribe(response => {
                    if (response.Status == 0) {
                        this.ficha = response.Fichas;
                    }
                    else {
                        alert(response.Detalhes);
                    }
                });
        }
    
        carregarDados() : void {
            this.getFichas();
            this.filtrarFicha(this.fichaAtual);
        }
    
        filtrarFicha(id : number) : void {
            for(let i = 0; i < this.fichas.length; i++)
                if(id == this.fichas[i].Id)
                    this.ficha = this.fichas[i];
        }
    
        getFichas(): void {
            this.fichaService.getFichas()
              .subscribe(response => {
                if (response.Status == 0) {
                  this.fichas = response.Fichas;
                }
                else {
                  alert(response.Detalhes)
                }
          });
         }
    
        inserir(): void {
            //console.log("Perfil atual: " + this.perfilAtual)
            this.fichaService.addFicha(this.ficha, this.perfilAtual)
                .subscribe(response => {
                    if (response.Status == 0) {
                        //alert("Inserção deu certo!");
                    }
                    else {
                        alert(response.Detalhes)
                    }
                });
        }
    
        atualizar(): void {
            this.fichaService.updateFicha(this.ficha)
                .subscribe(response => {
                    if (response.Status == 0) {
                        //alert("Att ok!");
                    }
                    else {
                        alert(response.Detalhes)
                    }
                });
        }    
    
        zerar() : void {
            this.getFicha(0);
            this.ficha = new Ficha();
            this.ficha.Id = 0;
        }
    
        salvarAlteracoes(): void {
            if (this.ficha.Id == 0 || this.ficha.Id == undefined) {
                this.inserir();
            }
            else {
                this.atualizar();
            }
            this.voltar();
        }*/

    salvarAlteracoes() {
        for (let i = 0; i < this.ficha.Classes.length; i++)
            if (this.ficha.Classes[i].Classe === 'Bardo' || this.ficha.Classes[i].Classe === 'Bruxo' || this.ficha.Classes[i].Classe === 'Clérigo' || this.ficha.Classes[i].Classe === 'Feiticeiro' || this.ficha.Classes[i].Classe === 'Mago' || this.ficha.Classes[i].Classe === 'Paladino' || this.ficha.Classes[i].Classe === 'Patrulheiro')
                console.log(this.ficha.Classes[i].Magias)
    }

    voltar(): void {
        this.router.navigate(['/perfil', this.perfilAtual],
            { relativeTo: this.route });
    }
}