import React, { useRef, useState } from 'react'
import { gerarArray } from '../../util/cards-utils'
import Card from '../Card'
import './dificil.css'

export function GridDificil({ cards = Card[{}] }) {
    const [isCards, setIsCards] = useState(() => {
        return gerarArray(cards)
    })
    const [pontos, setPontos] = useState(30);

    const primeiro = useRef(null)
    const segundo = useRef(null)
    const virado = useRef(false)

    const handleReset = () => {
        setIsCards(gerarArray(cards))
        primeiro.current = null
        segundo.current = null
        virado.current = false
        setPontos(30)

    }
    const handleClick = (id = String) => {
        const newIsCards = isCards.map((card) => {
            // se o id do cartão não for clicado, não faça nada 
            if (card.id !== id)
                return card
            console.log(card)
            if (card.flipped) return card

            if (virado.current && primeiro.current && segundo.current) {
                primeiro.current.flipped = false
                segundo.current.flipped = false
                primeiro.current = null
                segundo.current = null
                virado.current = false
            }
            card.flipped = true
            // configura o primeiro e o segundo clicado
            if (primeiro.current === null) {
                primeiro.current = card;
            } else if (segundo.current === null) {
                segundo.current = card;
            }

            // checar cartões virados
            if (primeiro.current && segundo.current) {
                if (primeiro.current.back === segundo.current.back) {
                    //acerto 
                    primeiro.current = null
                    segundo.current = null
                    setPontos((a) => a + 20)
                } else {
                    //ERRO
                    virado.current = true
                    setPontos((a) => a - 5)
                }
            }
            return card
        })
        setIsCards(newIsCards)
    }
    return (
        <>
            <div className='text'>
                <h1>Você está no Dificil</h1>
                <p> Pontos: {pontos} <button onClick={handleReset}>Reset</button> </p>
            </div>
            <div className='Grid-dificil'>
                {isCards.map((card) => {
                    return <Card {...card} key={card.id} handleClick={handleClick} />
                })}
            </div>
        </>
    )
}
