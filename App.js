import React, { Component } from 'react'
import Phones from './components/Phones'
import './App.css'

export default class App extends Component {
  
  render() {
    //let cost = 59000;
    return (
      <div className='App'>
        <div className="box">
          <Phones title="Samsung S23" url="https://m.media-amazon.com/images/I/71qGismu6NL._SX679_.jpg" off="25" cost='60,000' />
          <Phones title="iQOO Neo 7 5G" url="https://m.media-amazon.com/images/I/61IiuWQcVjL._SX679_.jpg" off="20" cost='27,999' />
          <Phones title="Samsung Galaxy M34 5G" url="https://m.media-amazon.com/images/I/91ItZJh1FDL._SX679_.jpg" off="33" cost='16,299' />
          <Phones title="Xiaomi 12 Pro 5G" url="https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg" off="51" cost='41,999' />
          <Phones title="Redmi 12 5G " url="https://m.media-amazon.com/images/I/61SmnheBBRL._SX679_.jpg" off="25" cost='11,999' />

        </div>
      </div>
    )
  }
}