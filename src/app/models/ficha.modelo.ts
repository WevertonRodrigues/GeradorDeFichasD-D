import { Perfil } from './perfil.modelo';

export class Ficha {
    //Dados Básicos
    public Id: number;
    public NomePersonagem: string = '';
    //public Classes :  {Classe : string, CDMagias : number, ModAM : number, Magias  : { NomeMagia : string[]}[] } [];
    public Classes :  {Classe : string, CDMagias : number, ModAM : number, Magias  : { NomeMagia : string[]}[] } [];
    public Nivel: number = 1;
    public Antecedente: string  = '';
    public NomeJogador: string = '';
    public Raca: string = '';
    public SubRaca: string  = '';
    public Tendencia: string  = '';
    public Alinhamento: string = '';
    public Experiencia: number = 0;

    //Pontos de Vida, CA e Outros
    public DadosDeVida : string[] = [];

    //Atributos
    public For: number = 1;
    public Des: number = 1;
    public Con: number = 1;
    public Int: number = 1;
    public Sab: number = 1;
    public Car: number = 1;
    public ForMod: number = -5;
    public DesMod: number = -5;
    public ConMod: number = -5;
    public IntMod: number = -5;
    public SabMod: number = -5;
    public CarMod: number = -5;
    public Inspiracao: number = 0;
    public Proficiencia: string = '+2';
    public SabedoriaPassiva: number = -5;

    //Testes de Resistências
    public ForTeste: number = 1;
    public DesTeste: number = 1;
    public ConTeste: number = 1;
    public IntTeste: number = 1;
    public SabTeste: number = 1;
    public CarTeste: number = 1;

    //Pontos de Vida, Classe de Armadura e Outros
    public Inici : number = -5; 

    //Ataques & Conjurações
    public Ataques : {NomeAtaque : string, BonusAtaque : number, DanoTipoAtaque : string}[] = []

    //Equipamentos
    public Pc : number = 0;
    public Pp : number = 0;
    public Pe : number = 0;
    public Po : number = 0;
    public Pl : number = 0;
    public Equips : {NomeItem : string; StatusItem : string}[] = [];

    //Idiomas e Outras Características
    public CampoIdiomas: string = '';

    //Magias
    //Classes conjuradoras

    //Caracteristicas
    public SrcPersonagem : string = '';
    public SrcAO :  string = '';

    //Atuais
    public RacaAtual : string = '0';
    public SubRacaAtual : string = '0';
    
    //Perfil
    public IdPerfil : number;

    //Setters and Getters
    //Dados Básicos
    public get id(): number {
        return this.Id;
    }

    public set id(id: number) {
        this.Id = id;
    }

    public get nomePersonagem() {
        return this.NomePersonagem;
    }

    public set nomePersonagem(nome: string) {
        this.NomePersonagem = nome;
    }

    /*public get classe(): string {
        return this.Classes;
    }

    public set classe(classe: string) {
        this.Classes = classe;
    }*/

    public get nivel(): number {
        return this.Nivel;
    }

    public set nivel(nv: number) {
        this.Nivel = nv;
    }

    public get antecedente(): string {
        return this.Antecedente;
    }
    public set antecedente(a: string) {
        this.Antecedente = a;
    }

    public get nomeJogador(): string {
        return this.NomeJogador;
    }
    public set nomeJogador(n: string) {
        this.NomeJogador = n;
    }

    public get raca(): string {
        return this.Raca;
    }
    public set raca(r: string) {
        this.Raca = r;
    }

    public get subRaca(): string {
        return this.SubRaca;
    }
    public set subRaca(sR: string) {
        this.SubRaca = sR;
    }

    public get tendencia(): string {
        return this.Tendencia;
    }
    public set tendencia(t: string) {
        this.Tendencia = t;
    }

    public get alinhamento(): string {
        return this.Alinhamento;
    }
    public set alinhamento(a: string) {
        this.Alinhamento = a;
    }

    public get experiencia(): number {
        return this.Experiencia;
    }
    public set experiencia(e: number) {
        this.Experiencia = e;
    }

    //Atributos
    //Atributos base
    public get for(): number {
        return this.For;
    }
    public set for(f: number) {
        this.For = f;
    }

    public get des(): number {
        return this.Des;
    }
    public set des(d: number) {
        this.Des = d;
    }

    public get con(): number {
        return this.Con;
    }
    public set con(c: number) {
        this.Con = c;
    }

    public get int(): number {
        return this.Int;
    }
    public set int(i: number) {
        this.Int = i;
    }

    public get sab(): number {
        return this.Sab;
    }
    public set sab(s: number) {
        this.Sab = s;
    }

    public get car(): number {
        return this.Car;
    }
    public set car(c: number) {
        this.Car = c;
    }
    //Modificadores
    public get forMod(): number {
        return this.ForMod;
    }
    public set forMod(f: number) {
        this.ForMod = f;
    }

    public get desMod(): number {
        return this.DesMod;
    }
    public set desMod(d: number) {
        this.DesMod = d;
    }

    public get conMod(): number {
        return this.ConMod;
    }
    public set conMod(c: number) {
        this.ConMod = c;
    }

    public get intMod(): number {
        return this.IntMod;
    }
    public set intMod(i: number) {
        this.IntMod = i;
    }

    public get sabMod(): number {
        return this.SabMod;
    }
    public set sabMod(s: number) {
        this.SabMod = s;
    }

    public get carMod(): number {
        return this.CarMod;
    }
    public set carMod(c: number) {
        this.CarMod = c;
    }

    //Outros
    public get inspiracao(): number {
        return this.Inspiracao;
    }
    public set inspiracao(i: number) {
        this.Inspiracao = i;
    }
    
    public get proficiencia(): string {
        return this.Proficiencia;
    }
    public set proficiencia(p: string) {
        this.Proficiencia = p;
    }

    public get sabPassiva(): number {
        return this.SabedoriaPassiva;
    }
    public set sabPassiva(p: number) {
        this.SabedoriaPassiva = p;
    }

    //Testes de Resistências
    public get forTeste(): number {
        return this.ForTeste;
    }
    public set forTeste(f: number) {
        this.ForTeste = f;
    }

    public get desTeste(): number {
        return this.DesTeste;
    }
    public set desTeste(d: number) {
        this.DesTeste = d;
    }

    public get conTeste(): number {
        return this.ConTeste;
    }
    public set conTeste(c: number) {
        this.ConTeste = c;
    }

    public get intTeste(): number {
        return this.IntTeste;
    }
    public set intTeste(i: number) {
        this.IntTeste = i;
    }

    public get sabTeste(): number {
        return this.SabTeste;
    }
    public set sabTeste(s: number) {
        this.SabTeste = s;
    }

    public get carTeste(): number {
        return this.CarTeste;
    }
    public set carTeste(c: number) {
        this.CarTeste = c;
    }


    //Idiomas e Outras Características
    public get campoIdiomas(): string {
        return this.CampoIdiomas;
    }
    public set campoIdiomas(c: string) {
        this.CampoIdiomas = c;
    }

    //Atuais
        public get racaAtual() : string {
        return this.RacaAtual;
    }
    public set racaAtual(r : string){
        this.RacaAtual = r;
    }

    public get sunRacaAtual() : string {
        return this.SubRacaAtual;
    }
    public set subRacaAtual(sR : string){
        this.SubRacaAtual = sR;
    }


    //Funções Próprias
    public getAtr(atr : number): number{

        if(atr == 0)
            return this.For;
        if(atr == 1)
            return this.Des;
        if(atr == 2)
            return this.Con;
        if(atr == 3)
            return this.Int;
        if(atr == 4)
            return this.Sab;
        if(atr == 5)
            return this.Car;
    }

    public setAtr(n : number, atr : number){

        if(atr == 0){
            this.For = n;
        }
        if(atr == 1){
            this.Des = n;
        }
        if(atr == 2){
            this.Con = n;
        }
        if(atr == 3){
            this.Int = n;
        }
        if(atr == 4){
            this.Sab = n;
        }
        if(atr == 5){
            this.Car = n;
        }
    }
    
    public getMod(atr : number): number{

        if(atr == 0)
            return this.ForMod;
        if(atr == 1)
            return this.DesMod;
        if(atr == 2)
            return this.ConMod;
        if(atr == 3)
            return this.IntMod;
        if(atr == 4)
            return this.SabMod;
        if(atr == 5)
            return this.CarMod;
    }

    public setMod(n : number, atr : number){
        if(atr == 0){
            this.ForMod = n;
        }
        if(atr == 1){
            this.DesMod = n;
        }
        if(atr == 2){
            this.ConMod = n;
        }
        if(atr == 3){
            this.IntMod = n;
        }
        if(atr == 4){
            this.SabMod = n;
        }
        if(atr == 5){
            this.CarMod = n;
        }
    }

    public getTeste(atr : number): number{

        if(atr == 0)
            return this.ForTeste;
        if(atr == 1)
            return this.DesTeste;
        if(atr == 2)
            return this.ConTeste;
        if(atr == 3)
            return this.IntTeste;
        if(atr == 4)
            return this.SabTeste;
        if(atr == 5)
            return this.CarTeste;
    }

    public setTeste(n : number, atr : number){
        if(atr == 0){
            this.ForTeste = n;
        }
        if(atr == 1){
            this.DesTeste = n;
        }            
        if(atr == 2){
            this.ConTeste = n;
        }
        if(atr == 3){
            this.IntTeste = n;
        }
        if(atr == 4){
            this.SabTeste = n;
        }
        if(atr == 5){
            this.CarTeste = n;
        }
    }
}