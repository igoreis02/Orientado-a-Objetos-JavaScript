const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibiInfos: function(){
        console.log(this.nome, this.email)
    }
}

//user.exibiInfos();

//const exibir = user.exibiInfos;
//exibir()//perde o contexto 

const exibir = function(){
    console.log(this.nome, this.email);
}

//passando para dentro de exivir nome a funcao exibir o objeto especifico que é o objeto user 
const exibirNome = exibir.bind(user) //metodo para prender ou ligar 

exibirNome()

/**call()
O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this, ou seja, é possível atribuir um this diferente do contexto atual ao executar a função. */

function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user1 = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user1)

   /**Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada: */

   function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')

   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

   /**Também é possível passar parâmetros para call(), como no próximo exemplo.

Temos uma função que monta uma determinada mensagem a partir dos parâmetros nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser considerado como this (no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos. */

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user2 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(user2, this.nome, this.email)
    }
   }
   
   user2.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

   /**O método call() pode ser utilizado para se implementar herança utilizando funções em vez da sintaxe de classe. Vamos abordar este assunto na próxima aula. */

   /**apply()
O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array: */

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user3 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(user3, [this.nome, this.email])
    }
   }
    user3.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com