import instrutores from './instrutores.json'
import { SuperArray } from '../src/super-array'

let professores
let instructors

beforeEach(() => {
  professores = SuperArray(instrutores)
  instructors = [...instrutores]
})


describe('Exemplo de testes', () => {
  it('Valor importado deve ser true', () => {
    expect(true).toBeTruthy()
  })
})

describe('testes com push', () => {
  it('push deve adicionar um novo instrutor ao meu super array', () => {


    instructors.push({ "nome": "João Cléber", "dandoAula": true })
    professores.push({ "nome": "João Cléber", "dandoAula": true })


    expect(professores.itens).toEqual(instructors)
  })
})

describe('testes com ForEach', () => {
  it('forEach deve passar por todos os instrutores e chamando o callback esperado', () => {

    instructors.forEach(item => {
      item.dandoAula = true
    })
    professores.forEach(item => {
      item.dandoAula = true
    })


    expect(professores.itens).toEqual(instructors)
  })
})

describe('testes com Map', () => {
  it('map deve retornar um novo array com o numero de nomes que o instrutor tem', () => {
    let valorEsperado = instructors.map(item => item = item.nome.split(' ').length)
    let valorResultante = professores.map(item => item = item.nome.split(' ').length)

    expect(valorResultante).toEqual(valorEsperado)
  })

  it('testando Map com ints', () => {


    let arrayDeNumeros = [1, 2, 3]
    let superArrayDeNumeros = SuperArray([1, 2, 3]);

    let valorEsperado = arrayDeNumeros.map(item => item * 2)

    let valorResultante = superArrayDeNumeros.map(item => item * 2)

    expect(valorResultante).toEqual(valorEsperado)
  })
})

describe(' filter deve retornar um novo array apenas com os instrutores que estão dando aula', () => {
  it('filter deve retornar um novo array apenas com os instrutores que estão dando aula', () => {
    let valorEsperado = instructors.filter(item => item.dandoAula == true)
    let valorResultante = professores.filter(item => item.dandoAula == true)

    expect(valorResultante).toEqual(valorEsperado)
  })

  it('testando Filter com ints', () => {


    let arrayDeNumeros = [1, 2, 3]
    let superArrayDeNumeros = SuperArray([1, 2, 3]);

    let valorEsperado = arrayDeNumeros.filter(item => item >= 2)

    let valorResultante = superArrayDeNumeros.filter(item => item >= 2)

    expect(valorResultante).toEqual(valorEsperado)
  })
})

describe('testes com Find', () => {
  it('find deve retornar o primeiro instrutor que está dando aula', () => {
    let valorEsperado = instructors.find(item => item.dandoAula == true)
    let valorResultante = professores.find(item => item.dandoAula == true)

    expect(valorResultante).toEqual(valorEsperado)
  })

  it('testando Find com ints', () => {
    let arrayDeNumeros = [1, 2, 3]
    let superArrayDeNumeros = SuperArray([1, 2, 3]);

    let valorEsperado = arrayDeNumeros.find(item => item >= 2)
    let valorResultante = superArrayDeNumeros.find(item => item >= 2)
  })
})

describe('testes com Reduce', () => {

  it('reduce deve retornar o total de letras no nome dos instrutores', () => {
    let acumulador
    let valorEsperado = instructors.reduce((acumulador, item) => {
      return acumulador += item.nome.replace(/\s/g, '').length
    }, 0)
    let valorResultante = professores.reduce((acumulador, item) => {
      return acumulador += item.nome.replace(/\s/g, '').length
    }, 0)

    expect(valorResultante).toEqual(valorEsperado)
  })

  it('reduce deve retornar um boolean se todos os instrutores estão dando aula', () => {
    let acumulador
    let valorResultante = professores.map(item => item.dandoAula = false)
    let valorEsperado = valorResultante.reduce((acumulador, item) => {
      console.log(item.dandoAula)
      if(item.dandoAula == true && acumulador == (professores.length - 1)){
        return acumulador = true
      }else if(item.dandoAula == true){
        return acumulador += 1
      }else{
        return acumulador += 0
      }
      
      }, false)

    let valorSuperArray = SuperArray(valorResultante)
    let valorCalculado = valorSuperArray.reduce((acumulador, item) => {
      console.log(item.dandoAula)
      if(item.dandoAula == true && acumulador == (valorSuperArray.length - 1)){
        return acumulador = true
      }else if(item.dandoAula == true){
        return acumulador += 1
      }else{
        return acumulador += 0
      }
      
      }, false)


      expect(valorCalculado).toEqual(valorEsperado)
    
    
  })
})

