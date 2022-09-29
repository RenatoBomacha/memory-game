import Card from '../components/Card'

// Função para gerar o ID do Card aleatorios
export const gerarId = () => {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    )
}
// Função para duplicar o array 
export const duplicarArray = (array = Array) => {
    return array.concat(array)
}
// Função para ordenar os itens do array
export const sortArray = (array = Array) => {
    return array.sort(() => Math.random() - 0.5)
}
// Função para gerar os Card
export const gerarCards = (cards = Card) => {
    return cards.map(card => ({ ...card, id: gerarId() }))
}
// Função para gerar um array, depois ele vai ordernar, e gerar outro array nele mesmo
export const gerarArray = (cards = Card) => {
    return sortArray(gerarCards(duplicarArray(cards)))
}

