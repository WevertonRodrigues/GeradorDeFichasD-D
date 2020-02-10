import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Ficha } from 'src/app/models/ficha.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaService } from 'src/app/service/app.ficha-service';
import { Observable } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
    selector: 'app-ficha',
    templateUrl: './app.ficha-component.html',
    styleUrls: ['./app.ficha-component.css']
})


export class FichaComponent implements OnInit {
    ficha: Ficha = new Ficha();

    fichas: Ficha[] = [];

    perfilAtual: number;
    fichaAtual: number;

    checked: boolean = false;

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
        this.ficha.Classes = new Array({Classe: '', CDMagias: this.calcularCD(''), ModAM: this.calcularModAtaqueMagico(''), Magias: []});
        //console.log(this.ficha.Classes)
    }

    criarMatriz(){
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

    resetar() {
        this.ficha = new Ficha();
        this.ficha.Classes = new Array({Classe: '', CDMagias: this.calcularCD(''), ModAM: this.calcularModAtaqueMagico(''), Magias: this.criarMatriz()});
    }

    mudarProf(lvlAtual: number): void {
        this.ficha.proficiencia = "+" + (Math.ceil(lvlAtual / 4) + 1)
    }

    mudarMod(n: number): void {
        this.ficha.setMod((Math.trunc(this.ficha.getAtr(n) / 2) - 5), n);
        //this.mudarTeste(n);
    }

    mudarTeste(n: number): void {
        //console.log(this.ficha.getTeste(n));
        let m: number = this.ficha.getMod(n); /*+ this.ficha.getTeste(n)*/;
        let t: number = this.ficha.getTeste(n);
        /*console.log(t);
        console.log(m);
        console.log(t+m);*/
        this.ficha.setTeste(t, n);
    }

    mudarAtributosRaca(r: string): void {
        switch (r) {
            case '1':
                this.ficha.con += 2;
                this.mudarMod(2);
                this.mudarAtributosSubRaca('0');
                break;
            case '2':
                this.ficha.for += 2;
                this.mudarMod(0);
                this.ficha.car += 2;
                this.mudarMod(5);
                this.mudarAtributosSubRaca('0');
                break;
            case '3':
                this.ficha.des += 2;
                this.mudarMod(1);
                this.mudarAtributosSubRaca('0');
                break;
            case '4':
                this.ficha.des += 2;
                this.mudarMod(1);
                this.mudarAtributosSubRaca('0');
                break;
            case '5':
                this.ficha.for += 1;
                this.mudarMod(0);
                this.ficha.des += 1;
                this.mudarMod(1);
                this.ficha.con += 1;
                this.mudarMod(2);
                this.ficha.int += 1;
                this.mudarMod(3);
                this.ficha.sab += 1;
                this.mudarMod(4);
                this.ficha.car += 1;
                this.mudarMod(5);
                this.mudarAtributosSubRaca('0');
                break;
            case '6':
                this.ficha.int += 2;
                this.mudarMod(3);
                this.mudarAtributosSubRaca('0');
                break;
            case '7':
                this.ficha.car += 2;
                this.mudarMod(5);
                this.mudarAtributosSubRaca('0');
                break;
            case '8':
                this.ficha.for += 2;
                this.mudarMod(0);
                this.mudarAtributosSubRaca('0');
                break;
            case '9':
                this.ficha.car += 2;
                this.mudarMod(5);
                this.ficha.int += 1;
                this.mudarMod(3);
                this.mudarAtributosSubRaca('0');
                break;
            default:
                this.mudarAtributosSubRaca('0');
                break;
        }

        switch (this.ficha.racaAtual) {
            case '1':
                this.ficha.con -= 2;
                this.mudarMod(2);
                break;
            case '2':
                this.ficha.for -= 2;
                this.mudarMod(0);
                this.ficha.car -= 2;
                this.mudarMod(5);
                break;
            case '3':
                this.ficha.des -= 2;
                this.mudarMod(1);
                break;
            case '4':
                this.ficha.des -= 2;
                this.mudarMod(1);
                break;
            case '5':
                this.ficha.for -= 1;
                this.mudarMod(0);
                this.ficha.des -= 1;
                this.mudarMod(1);
                this.ficha.con -= 1;
                this.mudarMod(2);
                this.ficha.int -= 1;
                this.mudarMod(3);
                this.ficha.sab -= 1;
                this.mudarMod(4);
                this.ficha.car -= 1;
                this.mudarMod(5);
                break;
            case '6':
                this.ficha.int -= 2;
                this.mudarMod(3);
                break;
            case '7':
                this.ficha.car -= 2;
                this.mudarMod(5);
                break;
            case '8':
                this.ficha.for -= 2;
                this.mudarMod(0);
                break;
            case '9':
                this.ficha.car -= 2;
                this.mudarMod(5);
                this.ficha.int -= 1;
                this.mudarMod(3);
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
                        this.mudarMod(4);
                        break;
                    case '2':
                        this.ficha.for += 2;
                        this.mudarMod(1);
                        break;
                    default:
                        break;
                }
                break;
            case '3':
                switch (sR) {
                    case '1':
                        this.ficha.int += 1;
                        this.mudarMod(3);
                        break;
                    case '2':
                        this.ficha.sab += 1;
                        this.mudarMod(4);
                        break;
                    case '3':
                        this.ficha.car += 1;
                        this.mudarMod(5);
                        break;
                    default:
                        break;
                }
                break;
            case '4':
                switch (sR) {
                    case '1':
                        this.ficha.car += 1;
                        this.mudarMod(5);
                        break;
                    case '2':
                        this.ficha.con += 1;
                        this.mudarMod(2)
                        break;
                    default:
                        break;
                }
                break;
            case '6':
                switch (sR) {
                    case '1':
                        this.ficha.des += 1;
                        this.mudarMod(1);
                        break;
                    case '2':
                        this.ficha.con += 1;
                        this.mudarMod(2);
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
                        this.mudarMod(4);
                        break;
                    case '2':
                        this.ficha.for -= 2;
                        this.mudarMod(1);
                        break;
                    default:
                        break;
                }
                break;
            case '3':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.int -= 1;
                        this.mudarMod(3);
                        break;
                    case '2':
                        this.ficha.sab -= 1;
                        this.mudarMod(4);
                        break;
                    case '3':
                        this.ficha.car -= 1;
                        this.mudarMod(5);
                        break;
                    default:
                        break;
                }
                break;
            case '4':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.car -= 1;
                        this.mudarMod(5);
                        break;
                    case '2':
                        this.ficha.con -= 1;
                        this.mudarMod(2)
                        break;
                    default:
                        break;
                }
                break;
            case '6':
                switch (this.ficha.subRacaAtual) {
                    case '1':
                        this.ficha.des -= 1;
                        this.mudarMod(1);
                        break;
                    case '2':
                        this.ficha.con -= 1;
                        this.mudarMod(2);
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

    clickTeste(t: number, check: boolean): void {
        //this.arrayCheck[r] = check;
        let prof = parseInt(this.ficha.proficiencia);
        //console.log(this.arrayCheck.slice(r, r+1));
        //console.log(check);
        //console.log(this.checkFor);
        if (check == true)
            this.ficha.setTeste(this.ficha.getTeste(t) + prof, t);
        else
            if (check == false)
                this.ficha.setTeste(this.ficha.getTeste(t) - prof, t);
            else
                this.ficha.setTeste(this.ficha.getTeste(t) + prof, t);
    }

    retCheck(p: number): HTMLInputElement {
        let checkFor: HTMLInputElement = document.getElementById('forTesteRadID') as HTMLInputElement;
        let checkDes: HTMLInputElement = document.getElementById('desTesteRadID') as HTMLInputElement;
        let checkCon: HTMLInputElement = document.getElementById('conTesteRadID') as HTMLInputElement;
        let checkInt: HTMLInputElement = document.getElementById('intTesteRadID') as HTMLInputElement;
        let checkSab: HTMLInputElement = document.getElementById('sabTesteRadID') as HTMLInputElement;
        let checkCar: HTMLInputElement = document.getElementById('carTesteRadID') as HTMLInputElement;

        switch (p) {
            case 0:
                return checkFor;
            case 1:
                return checkDes;
            case 2:
                return checkCon;
            case 3:
                return checkInt;
            case 4:
                return checkSab;
            case 5:
                return checkCar;
        }
    }

    clickClasse(c: string): void {
        /*for (let i = 0; i < 6; i++)
            this.retCheck(i).checked = false;*/

        /*if(this.classeAtual != '0')
            for(let i = 0; i < 6; i++)
                if(this.retCheck(i).checked == false)
                    this.clickTeste(i, this.retCheck(i).checked);*/

        /*switch (c) {
            case '1':
                this.retCheck(0).checked = true;
                this.retCheck(2).checked = true;
                break;
            case '2':
                this.retCheck(1).checked = true;
                this.retCheck(5).checked = true;
                break;
            case '3':
                this.retCheck(4).checked = true;
                this.retCheck(5).checked = true;
                break;
            case '4':
                this.retCheck(4).checked = true;
                this.retCheck(5).checked = true;
                break;
            case '5':
                this.retCheck(3).checked = true;
                this.retCheck(4).checked = true;
                break;
            case '6':
                this.retCheck(2).checked = true;
                this.retCheck(5).checked = true;
                break;
            case '7':
                this.retCheck(0).checked = true;
                this.retCheck(2).checked = true;
                break;
            case '8':
                this.retCheck(1).checked = true;
                this.retCheck(3).checked = true;
                break;
            case '9':
                this.retCheck(3).checked = true;
                this.retCheck(4).checked = true;
                break;
            case '10':
                this.retCheck(0).checked = true;
                this.retCheck(1).checked = true;
                break;
            case '11':
                this.retCheck(4).checked = true;
                this.retCheck(5).checked = true;
                break;
            case '12':
                this.retCheck(0).checked = true;
                this.retCheck(1).checked = true;
                break;
            default:
                break;
        }

        switch (this.ficha.classeAtual) {
            case '1':
                if (this.retCheck(0).checked != true)
                    this.retCheck(0).checked = false;
                if (this.retCheck(2).checked != true)
                    this.retCheck(2).checked = false;
                break;
            case '2':
                if (this.retCheck(1).checked != true)
                    this.retCheck(1).checked = false;
                if (this.retCheck(5).checked != true)
                    this.retCheck(5).checked = false;
                break;
            case '3':
                if (this.retCheck(4).checked != true)
                    this.retCheck(4).checked = false;
                if (this.retCheck(5).checked != true)
                    this.retCheck(5).checked = false;
                break;
            case '4':
                if (this.retCheck(4).checked != true)
                    this.retCheck(4).checked = false;
                if (this.retCheck(5).checked != true)
                    this.retCheck(5).checked = false;
                break;
            case '5':
                if (this.retCheck(3).checked != true)
                    this.retCheck(3).checked = false;
                if (this.retCheck(4).checked != true)
                    this.retCheck(4).checked = false;
                break;
            case '6':
                if (this.retCheck(2).checked != true)
                    this.retCheck(2).checked = false;
                if (this.retCheck(0).checked != true)
                    this.retCheck(0).checked = false;
                break;
            case '7':
                if (this.retCheck(0).checked == true)
                    this.retCheck(0).checked = true;
                else
                    this.retCheck(0).checked = false;

                if (this.retCheck(2).checked == true)
                    this.retCheck(2).checked = true;
                else
                    this.retCheck(2).checked = false;
                break;
            case '8':
                if (this.retCheck(1).checked != true)
                    this.retCheck(1).checked = false;
                if (this.retCheck(3).checked != true)
                    this.retCheck(3).checked = false;
                break;
            case '9':
                if (this.retCheck(3).checked != true)
                    this.retCheck(3).checked = false;
                if (this.retCheck(4).checked != true)
                    this.retCheck(4).checked = false;
                break;
            case '10':
                if (this.retCheck(0).checked != true)
                    this.retCheck(0).checked = false;
                if (this.retCheck(1).checked != true)
                    this.retCheck(1).checked = false;
                break;
            case '11':
                if (this.retCheck(4).checked != true)
                    this.retCheck(4).checked = false;
                if (this.retCheck(5).checked != true)
                    this.retCheck(5).checked = false;
                break;
            case '12':
                if (this.retCheck(0).checked != true)
                    this.retCheck(0).checked = false;
                if (this.retCheck(1).checked != true)
                    this.retCheck(1).checked = false;
                break;
            default:
                break;
        }*/

        /*for(let i = 0; i < 6; i++)
            if(this.retCheck(i).checked == true)
                this.clickTeste(i, this.retCheck(i).checked);*/
        this.ficha.Classes[0] = { Classe: c, CDMagias: this.calcularCD(c), ModAM: this.calcularModAtaqueMagico(c), Magias: this.criarMatriz() };       
    }

    calcularCD(classe: string) {
        if (classe === 'Bardo' || classe === 'Bruxo' || classe === 'Feiticeiro' || classe === 'Paladino')
            return 8 + this.ficha.CarMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Clérigo' || classe === 'Druida' || classe === 'Patrulheiro')
            return 8 + this.ficha.SabMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Mago')
            return 8 + this.ficha.IntMod + parseInt(this.ficha.Proficiencia)
    }

    calcularModAtaqueMagico(classe: string) {
        if (classe === 'Bardo' || classe === 'Bruxo' || classe === 'Feiticeiro' || classe === 'Paladino')
            return this.ficha.CarMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Clérigo' || classe === 'Druida' || classe === 'Patrulheiro')
            return this.ficha.SabMod + parseInt(this.ficha.Proficiencia)
        if (classe === 'Mago')
            return this.ficha.IntMod + parseInt(this.ficha.Proficiencia)
    }

    ativarMulticlasse(c: any) {
        this.checked = c.checked
        if (c.checked === false)
            if (this.ficha.Classes.length !== 1) {
                if (confirm('Aviso!\nTodas as multiclasses serão apagadas.\nContinuar?') === true)
                    this.ficha.Classes.splice(1, this.ficha.Classes.length - 1);
                else {
                    this.checked = true
                    c.checked = true
                }
            }
    }
    adicionarMulticlasse(classe: string) {
        if (classe !== '')
            this.ficha.Classes.push({ Classe: classe, CDMagias: this.calcularCD(classe), ModAM: this.calcularModAtaqueMagico(classe), Magias: this.criarMatriz()});
            
        //console.log(this.ficha.Classes)
    }

    removerMulticlasse(i: number, id: number) {
        this.ficha.Classes.splice(i, 1)
    }

    adicionarDado(dado: string) {
        if (dado !== '')
            this.ficha.DadosDeVida.push(dado);
    }

    removerDado(i: number) {
        this.ficha.DadosDeVida.splice(i, 1)
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
        //console.log(this.ficha.Equips)
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

    salvarAlteracoes(){
        for(let i = 0; i < this.ficha.Classes.length; i++)
            if(this.ficha.Classes[i].Classe === 'Bardo' || this.ficha.Classes[i].Classe === 'Bruxo' || this.ficha.Classes[i].Classe === 'Clérigo' || this.ficha.Classes[i].Classe === 'Feiticeiro' || this.ficha.Classes[i].Classe === 'Mago' || this.ficha.Classes[i].Classe === 'Paladino' || this.ficha.Classes[i].Classe === 'Patrulheiro')
                console.log(this.ficha.Classes[i].Magias)
    }

    voltar(): void {
        this.router.navigate(['/perfil', this.perfilAtual],
            { relativeTo: this.route });
    }
}