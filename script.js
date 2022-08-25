
// ex 1
const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicaPorTres = (arrayDeNumeros) => {
    const arrayMultiplicado = [];

  for (let numero of arrayDeNumeros) {

    arrayMultiplicado.push(numero * 3);

  }
 
  return arrayMultiplicado

}

console.log ('Triplo', multiplicaPorTres(listaDeNumeros));

// ex 2

const retornaPares = (arrayDeNumeros) => {
  const arrayPares = []

for (let numero of arrayDeNumeros) {
  if (numero % 2 === 0) {
    arrayPares.push (numero)
  }
}

return arrayPares

}

console.log ('Pares', retornaPares(listaDeNumeros));

// ex 3

const imprimeNumeros = (arrayDeNumeros, callback) => {
  const response = callback(arrayDeNumeros);

  console.log('FUNCTION C', response);
}
imprimeNumeros (listaDeNumeros, multiplicaPorTres);
imprimeNumeros (listaDeNumeros, retornaPares);

// MAP
// map é um laço de array, fica muito mais fácil usando ele. 

const multiplicaPorTresComMap = listaDeNumeros.map((numero, indice, array) => {//map é função, como tal tem que ter ()
 // indice e array não estão sendo usados nesse exeplos, estão ai só para mostrar que é possivel com o callback.
  return numero * 3 //alterção que o MAP vai fazer na array

}) 

console.log ('Map', multiplicaPorTresComMap);

// FILTER
const retornaParesComFilter = listaDeNumeros.filter((numero, indice, array) =>  {

  return numero % 2 == 0 // condição do filter. 

})

console.log ('Filter', retornaParesComFilter);


//Map pode alterar a array e o Filter só checa uma condição e devolve o que se encaixa na condição



const pokemon = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 45 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 50 },
  { nome: 'Charmander', tipo: 'fogo', vida: 39 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 38 },
  { nome: 'Squirtle', tipo: 'água', vida: 44 },
  { nome: 'Psyduck', tipo: 'água', vida: 50 },
]

// Letra A

const HpUp  = (poke) => {
  return { 
    nome: poke.nome,
    tipo: poke.tipo,
    vida: 100
  }
}

// return { ...poke, vida:100} -> Fazendo com spread não precisa estabelecer os outros valores. 

// Letra B

const pokemonVidaCheia = pokemon.map(HpUp)
console.log('Pokemons com vida cheia', pokemonVidaCheia);

/*
const pokemonsVidaCheia = pokemons.map((a) => a.vida = 100)
  console.log(pokemons);

//------maneira de fazer diretamente pelo MAP, sem fazer a função anterior primeiro.

*/

// Letra C
const pokemonDeFogo = pokemon.filter ((poke) => {
  
  return poke.tipo === "fogo" // tem que ter .objeto que estamos buscanso...no cado .tipo

})

console.log (pokemonDeFogo);

/*
const pokemonsDeFogo = pokemons.filter((x) => x.tipo === 'fogo')
console.log(pokemonsDeFogo);

//----- outra maneira de fazer.

*/ 