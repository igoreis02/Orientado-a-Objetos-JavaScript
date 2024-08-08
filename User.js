
/**export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudante"
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome} , ${this.email}`
    }
}

const novoUser = new User('Juliana', 'J@J.COM', '2024-01-01')

console.log(novoUser)

console.log(novoUser.exibirInfos())


console.log(User.prototype.isPrototypeOf(novoUser)) //é um prototio 
*/

export default class User{
    constructor(nome,email,nascimento,role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'Estudante';
        this.ativo = ativo
    }
    criaPerfil(){
        return `Perfil Criado `
    }
    apagaPerfil(){
        return `Perfil Apagado`
    }
    exibirInfos(){
        return `${this.nome} , ${this.email}`
    }
    exibiListaCurso(cursos){ 
        if(cursos.length > 0){
        for (const key in cursos) {
            return cursos
        }
        }else{
            return 'Cursos nao cadastrados'
        }
    }
    matricularEmCurso(nomeCurso, data){
        return `estudande: ${this.nome} matriculado no curso: ${nomeCurso}, na data ${data} `
    }

    exibirCursosMatriculados(cursos){
        if (cursos.length > 0){
            for(let key in cursos){
                return cursos
            }
        }else{
            return 'Nenhum curso matriculado'
        }
    }
}

const novoEstudante = new User('Albert' , 'igoreis02@gmail.com', '1996-09-26')

console.log(novoEstudante);
console.log(novoEstudante.exibirInfos())
console.log(novoEstudante.criaPerfil());
console.log(novoEstudante.exibiListaCurso([]));
console.log(novoEstudante.matricularEmCurso('JavaScript', '2024-08-06'));
console.log(novoEstudante.exibirCursosMatriculados([]));


