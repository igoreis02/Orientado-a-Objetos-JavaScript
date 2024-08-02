const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibiInfos: function(){
        console.log(this.nome, this.email)
    }
};

    const admin = {
        nome: 'Mariana',
        email: 'm@m.com',
        nascimento: '2024-01-01',
        role: 'admin',
        ativo: true,
        
        criarCurso: function(){
            console.log('Curso Criado');
        }
    }

//definindo um prototipo de 
//definindo que admin vai usar como o modelo o objeto use 
//primeiro paramenteo é quem vai pega as propriedade e o segundo e quem vai fornecer 
Object.setPrototypeOf(admin,user)

admin.criarCurso();
admin.exibiInfos();


/**Você está trabalhando nas funcionalidades referentes a cadastro de funcionários de uma empresa e gostaria de colocar em prática alguns conhecimentos que obteve sobre herança de protótipos. Para um sistema com usuários padrão, atendentes e gerentes, você desenvolveu os seguintes objetos: */

const userDefault = {
    exibirInfos: function () {
      console.log(this.nome, this.email);
    },
    cadastraEmail: function(email) {
      console.log(`email ${email} cadastrado com sucesso`);
    }
   };
   
   const atendente = {
    nome: "Rodrigo",
    email: "r@r.com",
    role: "atendente",
   }
   
   const gerente = {
    nome: "Juliana",
    email: "j@j.com",
    role: "gerente sênior",
    removeUsuario: function(idUsuario) {
      console.log(`usuário ${idUsuario} removido`);
    }
   }
   
   Object.setPrototypeOf(atendente, userDefault)
   Object.setPrototypeOf(gerente, userDefault)