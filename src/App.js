import './index.css'
import { useState} from 'react'
import React from 'react'
import {cards} from "./cards"



const App = () => {
    const cardsArray = cards.map((user, i) => {
      return (
        <Article
          id={i}
          img={cards[i].img}
          title={cards[i].title}
          price={cards[i].price}
        />
      )
    })
  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {cardsArray}
    </>
  )
}


const Article = ({img, title, price}) => {

  const [deleteItem, setDeleteItem] = useState(true)

  const [show, setShow] = useState(true)
  const [hide, setHide] = useState(false)

  const handleClick = () => {
    setDeleteItem(false)
  }

  const readMore = () => {
    setShow(!show)
    setHide(!hide)
  }
  const showLess = () => {
    setHide(!hide)
    setShow(!show)
  }

  return (
    <>
      <main>
        {deleteItem ? (
          <section>
            <div>
              <article className="single-tour">
                <img src={img} alt="photos"/>
                <footer>
                  <div className="tour-info">
                      <h4 className="towns">
                        {title}
                      </h4>
                    <h4 className="tour-price">
                      {price} 
                    </h4>
                  </div>
                  <p>
                    {show && (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo nemo qui libero laborum illo aliquid earum dolores
                        animi magni doloribus!...
                        <button onClick={readMore}> read more</button>
                      </p>
                    )}
                    {hide && (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo nemo qui libero laborum illo aliquid earum dolores
                        animi magni doloribus! nihil eos tenetur obcaecati
                        impedit blanditiis explicabo, nostrum aspernatur eaque
                        quod possimus temporibus excepturi et, ipsum iste ut
                        autem mollitia?{' '}
                        <button onClick={showLess}> show less</button>
                      </p>
                    )}
                  </p>

                  <button className="delete-btn" onClick={handleClick}>
                    not interested
                  </button>
                </footer>
              </article>
            </div>
          </section>
        ) : (
          []
        )}
      </main>
    </>
  )
}

export default App
