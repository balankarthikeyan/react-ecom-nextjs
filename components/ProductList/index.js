import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import fetch from 'node-fetch'
import ProductBlock from './ProductBlock'

function ProductList(props) {
  const [dataState, setDataState] = useState({})
  const transformData = item => {
    return {
      name: item.name,
      image: item.image,
      price:
        item.properties.buyinfo.pricing.currencycode +
        '' +
        item.properties.buyinfo.pricing.prices[0].value,
    }
  }
  useEffect(() => {
    async function fetchData() {
      await fetch(`//ntryogep.sirv.com/product.json`)
        .then(function(res, error) {
          return res.json()
        })
        .then(res => {
          const { children } = res
          const productsData = children.products.slice(0, props.limit)
          setDataState(productsData)
        })
    }
    fetchData()
  }, [])
  if (dataState.length > 0) {
    return (
      <div className="ui-product-list">
        {dataState.map((item, i) => {
          const myData = transformData(item)
          return <ProductBlock key={i} list={myData} index={i} />
        })}
      </div>
    )
  } else {
    return <>{'⌛loading...'}</>
  }
}

export { ProductList }
export default ProductList

// render(
//   <>
//     <ProductList limit={20} />
//   </>,
//   document.querySelector('#examples-product')
// )
