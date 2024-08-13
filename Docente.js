/*import User from "./User.js";

class Docente extends User{ //EXTENDS esta herdando o que tem na classe User para Admin 
    constructor(nome,email,nascimento, role = "Docente" , ativo = true){
        super(nome,email,nascimento,role,ativo) //o super e para utilizar o que esta na classe User 
    }
    aprovaEstudante(estudante, curso){
        return `Estudante: ${estudante} passou no curso de ${curso}, responsável: ${this.nome}`
    }
}

const novodocente =  new Docente('Ana', 'A@a.com','1996-09-26')

console.log(novodocente);
console.log(novodocente.aprovaEstudante('Juliana', 'JavaScript'))*/

import User from "./User.js";

export default class Docente extends User{
    constructor(nome,email,nascimento, role = "Docente" , ativo = true){
        super(nome,email,nascimento,role,ativo) //o super e para utilizar o que esta na classe User 
    }
    aprovaEstudante(estudante, curso){
        return `Estudante: ${estudante} passou no curso de ${curso}, responsável: ${this.nome}`
    }
    reprovaEstudando(estudante,curso){
        return `Estudante: ${estudante} Reprovou  no curso de ${curso}, responsável: ${this.nome}`
    }
}

/*const novoDocente = new Docente('Joana', 'joana@j.com','2024-08-06')
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Albert','JavaScript'));
console.log(novoDocente.reprovaEstudando('Amanda','python'));*/



