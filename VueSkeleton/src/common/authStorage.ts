export class AuthStorage{
    private static AUTH_TOKEN = "AUTH_TOKEN";

    static setAuthToken(token: string): void {
        localStorage.setItem(AuthStorage.AUTH_TOKEN,token);
    }

    static getAccessToken(): string{
        return localStorage.getItem(AuthStorage.AUTH_TOKEN)|| '';
    }

    static isUserAuthorized(): boolean{
        return !!AuthStorage.getAccessToken();
    }

    static LoginOff(): void{
        localStorage.clear();
    }

}