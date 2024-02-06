// Objeto com propriedades
const pessoa = {
    nome: 'João',
    idade: 25,
    isAdmin: true,
};

// Desestruturação para recuperar propriedades do objeto
const { nome, idade, isAdmin } = pessoa;

// Operador ternário para verificar se a pessoa é admin
const status = isAdmin ? 'Admin' : 'Usuário comum';

// Operadores lógicos AND e OR
const resultadoAND = idade > 18 && isAdmin ? 'Maior de idade e Admin' : 'Não atende aos critérios';
const resultadoOR = idade > 30 || isAdmin ? 'Maior que 30 ou Admin' : 'Não atende aos critérios';

// Otimização da atribuição condicional
const valor = idade > 20 ? 'Maior que 20' : 'Menor ou igual a 20';

// Spread para replicar objetos ou arrays
const arrayOriginal = [1, 2, 3];
const arrayCopiado = [...arrayOriginal];

// Exibição no console para verificar resultados
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Status: ${status}`);
console.log(`Resultado AND: ${resultadoAND}`);
console.log(`Resultado OR: ${resultadoOR}`);
console.log(`Valor: ${valor}`);
console.log(`Array Original: ${arrayOriginal}`);
console.log(`Array Copiado: ${arrayCopiado}`);
