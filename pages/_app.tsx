import NextApp from 'next/app'

import "normalize.css";
import "../static/global.css"

export default class App extends NextApp {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode!.removeChild(style)
    }
  }
}