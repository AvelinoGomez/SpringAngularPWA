export class Disciplina{
    codigo:String;
    qtdCreditos:number;
    descricao:String;

    constructor(codigo, creditos, descricao) {
        this.codigo = codigo;
        this.qtdCreditos = creditos;
        this.descricao = descricao;
    }

}