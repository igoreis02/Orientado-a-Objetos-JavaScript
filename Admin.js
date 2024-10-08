/**import User from "./User.js";

class Admin extends User{ //EXTENDS esta herdando o que tem na classe User para Admin 
    constructor(nome,email,nascimento, role = "Admin" , ativo = true){
        super(nome,email,nascimento,role,ativo) //o super e para utilizar o que esta na classe User 
    }
    criaCurso(nomeDoCurso, qtdVagas){
        return `Curso: ${nomeDoCurso}  criado com ${qtdVagas} vagas`
    }
}

const novoAdmin = new Admin('Marcos', 'm@m.com','2024-02-02');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criaCurso('JavaScripit', 20))*/

import User from "./User.js"

export default class Admin extends User{
    constructor(nome,email,nascimento, role = "Admin" , ativo = true){
        super(nome,email,nascimento,role,ativo) //o super e para utilizar o que esta na classe User 
    }
    //sobrescrita do metodo polimorfismo 
   /* exibirInfos(){
        //trazer o resuldado do exibirinfos da superclasse 
        const infos = super.exibirInfos()
        return `admin: ${infos}`
    }*/

    criaCurso(nome){
        return `O curso ${nome} criado`
    }
    excluirCurso(nome){
        return `O curso ${nome} Excluido`
    }
    desativaPerfil(nome){
        this.ativo = false
        return `O perfil de  ${nome} Desativado`
    }
    //nao consegue acessar a propriedade nome porque e privado ele so consegue acessar na propria classe 
    //exivirNome(){
        //return this.#nome
    //}
}

//const novoAdmin = new Admin('Alcides','alcides@A.com', '1968-02-07')
//console.log(novoAdmin.exivirNome());


/*console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criaCurso('JavaScript'));
console.log(novoAdmin.excluirCurso('Python'));
console.log(novoAdmin.desativaPerfil('Alcides'));
console.log(novoAdmin)*/




