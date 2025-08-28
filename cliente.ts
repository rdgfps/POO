export class Cliente {
    nome: string = "";
    telefone: string = "";

    constructor(){
        this.nome = "";
        this.telefone = "";
    }

    criarCliente(nome: string, telefone: string): Cliente {
        if (nome.length < 3){
            throw new Error("Nome inválido");
        }
        this.nome = nome;
        this.telefone = telefone;
        return this;
    }
}
