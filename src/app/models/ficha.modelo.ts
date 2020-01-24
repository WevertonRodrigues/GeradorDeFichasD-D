import { Perfil } from './perfil.modelo';

export class Ficha {
    //Dados Básicos
    public Id: number;
    public NomePersonagem: string;
    public Classe: string;
    public Nivel: number;
    public Antecedente: string;
    public NomeJogador: string;
    public Raca: string;
    public SubRaca: string;
    public Tendencia: string;
    public Alinhamento: string;
    public Experiencia: number;

    //Pontos de Vida, CA e Outros

    public DadosDeVida : string[] = [];

    //Atributos
    public For: number;
    public Des: number;
    public Con: number;
    public Int: number;
    public Sab: number;
    public Car: number;
    public ForMod: number;
    public DesMod: number;
    public ConMod: number;
    public IntMod: number;
    public SabMod: number;
    public CarMod: number;
    public Inspiracao: number;
    public Proficiencia: string;
    public SabedoriaPassiva: number;

    //Testes de Resistências
    public ForTeste: number;
    public DesTeste: number;
    public ConTeste: number;
    public IntTeste: number;
    public SabTeste: number;
    public CarTeste: number;

    //Pontos de Vida, Classe de Armadura e Outros
    public Inici : number; 

    //Ataques & Conjurações
    public Ataques = []

    //Equipamentos
    public Pc : number;
    public Pp : number;
    public Pe : number;
    public Po : number;
    public Pl : number;
    public Equips = [];

    //Idiomas e Outras Características
    public CampoIdiomas: string;

    //Atuais
    public ClasseAtual : string = '0';
    public RacaAtual : string = '0';
    public SubRacaAtual : string = '0';
    
    //Perfil
    public IdPerfil : number;


    /*constructor(
        private _ID: number,
        private _NomePersonagem: string,
        private _Classe : string,
        private _Nivel : number,
        private _Antecedente : string,
        private _NomeJogador : string,
        private _Raca : string,
        private _SubRaca : string,
        private _Tendencia : string,
        private _Alinhamento : string,
        private _Experiencia : number,
        private _For : number,
        private _Des : number,
        private _Con : number,
        private _Int : number,
        private _Sab : number,
        private _Car : number,
        private _ForMod : number,
        private _DesMod : number,
        private _ConMod : number,
        private _IntMod : number,
        private _SabMod : number,
        private _CarMod : number,
        private _Inspiracao : number,
        private _Proficiencia : string,
        private _ForTeste : number,
        private _DesTeste : number,
        private _ConTeste : number,
        private _IntTeste : number,
        private _SabTeste : number,
        private _CarTeste : number,
        private _CampoIdiomas : string
    ) {
        this.Id = _ID;
        this.NomePersonagem = _NomePersonagem;
        this.Classe = _Classe;
        this.Nivel = _Nivel;
        this.Antecedente = _Antecedente;
        this.NomeJogador = _NomeJogador;
        this.Raca = _Raca;
        this.SubRaca = _SubRaca;
        this.Tendencia = _Tendencia;
        this.Alinhamento = _Alinhamento;
        this.Experiencia = _Experiencia;
        this.For = _For;
        this.Des = _Des;
        this.Con = _Con;
        this.Int = _Int;
        this.Sab = _Sab;
        this.Car = _Car;
        this.ForMod = _ForMod;
        this.DesMod = _DesMod;
        this.ConMod = _ConMod;
        this.IntMod = _IntMod;
        this.SabMod = _SabMod;
        this.CarMod = _CarMod;
        this.Inspiracao = _Inspiracao;
        this.Proficiencia = _Proficiencia;
        this.ForTeste = _ForTeste;
        this.DesTeste = _DesTeste;
        this.ConTeste = _ConTeste;
        this.IntTeste = _IntTeste;
        this.SabTeste = _SabTeste;
        this.CarTeste = _CarTeste;
        this.CampoIdiomas = _CampoIdiomas;
    }*/

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

    public get classe(): string {
        return this.Classe;
    }

    public set classe(classe: string) {
        this.Classe = classe;
    }

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
    public get classeAtual() : string {
        return this.ClasseAtual;
    }
    public set classeAtual(c : string){
        this.ClasseAtual = c;
    }

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