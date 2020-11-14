import './index.css'
import { useState, useEffect } from 'react'
import React from 'react'


const lagos = (
  <img
    src="https://hotels.ng/guides/wp-content/uploads/2017/06/Lagos-Lagoon_View-Hotels.ng_.jpg"
    alt="best of lagos in 7 days tour"
  />
)

const abuja = (
  <img
    src="https://techpoint.africa/wp-content/uploads/2020/03/images.jpeg"
    alt="best of abuja in 7 days tour"
  />
)

const porthacourt = (
  <img
    src="https://cdn.autojosh.com/wp-content/uploads/2019/04/Port-harcourt-Road-network-2.jpg"
    alt="best of porthacourt in 7 days tour"
  />
)

const oyo = (
  <img
    src="https://businessday.ng/wp-content/uploads/2020/05/Oyo-state-lands-housing-and-urban-development.jpg"
    alt="best of Oyo in 7 days tour"
  />
)

const ogun = (
  <img
    src="https://swifttalk.net/wp-content/uploads/2019/03/olumo-rock-abeokuta.jpg"
    alt="best of Ogun in 7 days tour"
  />
)

const osun = (
  <img
    src="https://guardian.ng/wp-content/uploads/2018/01/Osun-state.jpg"
    alt="best of Osun in 7 days tour"
  />
)

const title1 = <h4>Best of Lagos in 7 Days Tour</h4>
const title2 = <h4>Best of abuja in 7 Days Tour</h4>
const title3 = <h4>Best of porthacourt in 7 Days Tour</h4>
const title4 = <h4>Best of oyo in 7 Days Tour</h4>
const title5 = <h4>Best of ogun in 7 Days Tour</h4>
const title6 = <h4>Best of osun in 7 Days Tour</h4>

const price1 = 'N550,000'
const price2 = 'N620,000'
const price3 = 'N600,000'
const price4 = 'N420,000'
const price5 = 'N615,000'
const price6 = 'N435,000'

const App = () => {
  const [loading, setLoading] = useState(true)
  if (loading) {
    
      setLoading(false)
      return (
        <>
          <h2 className="loading">Loading...</h2>
        </>
      )
    }

   // setLoading(false)
  return (
    <>
      <Title />
      <Article lagos={lagos} title1={title1} price1={price1} />
      <Article abuja={abuja} title2={title2} price2={price2} />
      <Article porthacourt={porthacourt} title3={title3} price3={price3} />
      <Article oyo={oyo} title4={title4} price4={price4} />
      <Article ogun={ogun} title5={title5} price5={price5} />
      <Article osun={osun} title6={title6} price6={price6} />
    </>
  )
}

const Title = () => {
  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
    </>
  )
}
// const Section =(props)=>{
//   const [deleteItem, setDeleteItem] = useState("this a boy")
//  const handleClick = () => {
//    setDeleteItem([])
//  }

// }

const Article = (props) => {
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
                {props.lagos}
                {props.abuja}
                {props.porthacourt}
                {props.oyo}
                {props.ogun}
                {props.osun}
                <footer>
                  <div className="tour-info">
                    {props.title1}
                    {props.title2}
                    {props.title3}
                    {props.title4}
                    {props.title5}
                    {props.title6}
                    <h4 className="tour-price">
                      {props.price1}
                      {props.price2}
                      {props.price3}
                      {props.price4}
                      {props.price5}
                      {props.price6}
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
