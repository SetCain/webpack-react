import React from 'react'
import ReactDOM from 'react-dom'
import './assets/favicon.ico'
import './assets/fonts/LovingYou.ttf'
import './assets/scss/global.scss'
import image from './assets/images/webpack.jpg'

const App = () => (
    <div className="titulo">

        <h1>hello world webpack</h1>

        <img id="image" src={image} alt="image"/>

    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
