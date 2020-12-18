import './index.css'
import { useState } from 'react'
import React from 'react'
import { HomeTitle } from './homeTitle'
import { data } from './data'

const App = () => {
  const Cards = ({ img, title, price, info }) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState(false)
    const [isTourRemoved, setIsTourRemoved] = useState(true)

    const toggleBtn = () => {
      setIsInfoExpanded(!isInfoExpanded)
    }
    const handleClick = () => {
      setIsTourRemoved(!isTourRemoved)
    }
    return (
      <>
        {isTourRemoved ? (
          <main>
            <section>
              <div>
                <article className="single-tour">
                  <img src={img} alt={title} />
                  <footer>
                    <div className="tour-info">
                      <h4 className="towns">{title}</h4>
                      <h4 className="tour-price">{price}</h4>
                    </div>
                    <p>
                      {isInfoExpanded ? info : `${info.substring(0, 200)}...`}

                      <button onClick={toggleBtn}>
                        {isInfoExpanded ? ' show less' : '  read more'}
                      </button>
                    </p>
                    <button className="delete-btn" onClick={handleClick}>
                      not interested
                    </button>
                  </footer>
                </article>
              </div>
            </section>
          </main>
        ) : (
          []
        )}
      </>
    )
  }
  const dataArray = data.map((user, i) => {
    return (
      <>
        <Cards
          id={data[i].id}
          img={data[i].img}
          title={data[i].title}
          price={data[i].price}
          info={data[i].info}
        />
      </>
    )
  })

  return (
    <>
      <HomeTitle />
      {dataArray}
    </>
  )
}

export default App
