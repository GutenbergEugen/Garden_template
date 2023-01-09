import React from 'react'

export default function Sort() {



  // const sort = (sort_value) => {
  //   setProducts(prev => {
  //     return [...prev].sort((a, b) => {
  //       if (typeof(a[sort_value]) === 'string'){
  //         return a[sort_value].localeCompare(b[sort_value])
  //       }else{
  //         return a[sort_value] - b[sort_value]
  //       }
  //     })
  //   })
  // }

  const sortOnChange = event => {
    const value = event.target.value;
    // sort(value);
  }

  return (
  <div>
    <p>Sorting</p>
      <select onChange={sortOnChange}>
        <option value="id">id</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="discont_price">Discount</option>
    </select>
  </div>


    
  )
}
