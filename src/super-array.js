export const SuperArray = (itens = []) => {

  const array = {
    /**
     * Propriedade para acessar os itens
     */

    itens: [...itens]
  }

  /**
   * Adicionar um novo item ao final dos items
   */

  array.push = item => {
    array.itens[array.itens.length] = item;
    return null
  }

  /**
   * Itera sobre cada um dos elementos do SuperArray enviando o item e o index
   * como segundo parametro
   */

  array.forEach = callback => {
    for(let i = 0; i < array.itens.length; i++){
      callback(array.itens[i])
    }
  }

  /**
   * Retorna um novo SuperArray com os itens mapeados
   */

  array.map = callback => {
    let novoProfs = [...itens]
    for(let i = 0; i < array.itens.length; i++){
      novoProfs[i] = callback(array.itens[i])
    }
    return novoProfs
  }


  /**
   * Retorna um SuperArray novo com os itens filtrados
   */

  array.filter = callback => {
      let arrayFiltrados = [0]
      let j = 0;
      for(let i = 0; i < array.itens.length; i++){
        if(callback(array.itens[i])){
          arrayFiltrados[j] = array.itens[i]
          j++
        }
      }
    return arrayFiltrados
  }


  /**
   * Retorna o primeiro elemento do SuperArray que satisfazer o callback recebido
   * se não encontrar, deve retornar undefined
   */

  array.find = callback => {
    for(let i = 0; i < array.itens.length; i++){
      if(callback(array.itens[i])){
        return array.itens[i]
      }
    }
    return undefined
  }

  /**
   * Reduz o SuperArray em um único valor
   */


  array.reduce = (callback, valorInicial) => {
    let valor = valorInicial
    for(let i = 0; i < array.itens.length; i++){
      valor = callback(valor, array.itens[i])
    }
    return valor
  }

  return array
}
