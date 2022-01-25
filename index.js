import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor1 = new Diretor("Rodrigo", 10000, 12345678900);
diretor1.cadastrarSenha("123");
const gerente1 = new Gerente("Alonso", 5000, 123567490002);
gerente1.cadastrarSenha("1234");

const cliente1 = new Cliente("Lais", 12343234544, "456");
const logar1 = SistemaAutenticacao.login(gerente1, "1234");
const logar2 = SistemaAutenticacao.login(diretor1, "123");
const logar3 = SistemaAutenticacao.login(cliente1, "456");
console.log(logar1);
console.log(logar2);
console.log(logar3);

