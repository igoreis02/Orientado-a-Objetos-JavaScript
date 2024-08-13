
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
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo //emcapsulamento 
    constructor(nome,sobrenome,email,nascimento,role, ativo = true){
        this.#nome = nome; //atributo privado  #
        this.#sobrenome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'Estudante';
        this.#ativo = ativo
    }
    //é um tipo especial de metodo que é somente leitura 
    get nome(){
         return `${this.#nome} ${this.#sobrenome}`
    }
    set nome(novoNome){
        if(novoNome === ""){
            throw new Error('Formato do nome não é valido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ');
        this.#nome =  nome;
        this.#sobrenome = sobrenome;
    }
    get sobrenome(){
        return this.#sobrenome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    //metodo privado 
    /*#montaObjUser(){
        return ({
            nome: this.#nome,
            email:this.#email,
            Nascimento: this.#nascimento,
            Role: this.#role,
            Ativo: this.#ativo,
        })
    }*/

    criaPerfil(){
        return `Perfil Criado `
    }
    apagaPerfil(){
        return `Perfil Apagado`
    }
    exibirInfos(){
        //para mostra o metodo privado dentro da classe 
    
        //const objUser = this.#montaObjUser()
        //return `${this.nome} , ${this.email}` //esta se referindo ao get nao as propriedade privadas

        if(this.role === 'Estudante'){
            return `Estudante: ${this.nome}`
        }
        if(this.role === 'Admin'){
             return `Admin: ${this.nome}, ${this.role}`
        }
        if(this.role === 'Docente'){
            return `Docente: ${this.nome}, ${this.email}`
        }
    }
    static exibirInfos(nome, email){
        return `${nome}, ${email}`
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
        return `estudande: ${this.#nome} matriculado no curso: ${nomeCurso}, na data ${data} `
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

/*const novoEstudante = new User('Albert' , 'igoreis02@gmail.com', '1996-09-26')

console.log(novoEstudante);
console.log(novoEstudante.exibirInfos())
console.log(novoEstudante.criaPerfil());
console.log(novoEstudante.exibiListaCurso([]));
console.log(novoEstudante.matricularEmCurso('JavaScript', '2024-08-06'));
console.log(novoEstudante.exibirCursosMatriculados([]));*/


//const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
//console.log(novoUser.nome) //'Juliana'
//novoUser.nome = 'Juliana Silva Souza'
//console.log(novoUser.nome) //'Juliana'
//console.log(novoUser.sobrenome) //'Silva Souza'