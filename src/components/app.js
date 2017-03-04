import React, { Component } from 'react'
import Header from './header'
import Webview from './webview'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = {
      src: "http://www.inoreader.com/",
      style: {
        display: "inline-flex",
        width: "100%",
        height: "600px"
      }
    }
    return (
      <div className="wrapper">
        <Header />
        <Webview {...props} />
      </div>
    )
  }
}
