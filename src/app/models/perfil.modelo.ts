export class Perfil {
    public Id : number
    public User : string;
    public Password : string;
    public RepPassword : string;

    /*constructor(public _Id : number, public _User : string, public _Password : string, public _RepP ?: string){
        this.Id = i;
        this.User = u;
        this.Password = p;
        this.RepPassword = repP;
    }*/
    
    //Getters and setters

    public get id(){
        return this.Id;
    }

    public set id(i : number){
        this.Id = i;
    }

    public get user(){
        return this.User;
    }

    public set user(u : string){
        this.User = u;
    }

    public get password(){
        return this.Password;
    }

    public set password(p : string){
        this.Password = p;
    }

    public get repPassword(){
        return this.RepPassword;
    }

    public set repPassword(p : string){
        this.RepPassword = p;
    }
}
