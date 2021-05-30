export class AutenticacaoService{
    static Login(token: string):void{
        localStorage.setItem("access_token", token);
    }

    static Logout():void{
        localStorage.removeItem("access_token");
    }

    static GetToken():string{
        return localStorage.getItem("access_token") || "";
    }

    static IsAutenticado():boolean{
        return this.GetToken() !== "";
    }
}