import User  from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novouser = new User('Juliana','A@a.com','2024-01-01');

console.log(novouser.exibirInfos())
//console.log(novouser.nome = "Albert");


//novouser.#nome = 'Marcia'//da erro porque a propriedade é privada

//console.log(novouser.exibirInfos());
//console.log(novouser.#nome);

//const novoAdmin = new Admin('Alcides','alcides@A.com', '1968-02-07')
//console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.nome);

console.log('Polimorfismo');
const novoAdmin = new Admin('Rodrigo','r@r.com','25-09-1996')
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente('Ana','A@A.com','25-09-1996')
console.log(novoDocente.exibirInfos())


const dadosFicticios = User.exibirInfos('Cassio','C@c.com')
console.log(dadosFicticios)