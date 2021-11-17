import { Conta } from "./Conta.js";

//Herança (herdando a "conta" base e usar somente o que precisa)
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0,cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}