// 🐨 you'll need to import React and ReactDOM up here
import React from 'react'
import ReactDOM from 'react-dom'

// 🐨 you'll also need to import the Logo component from './components/logo'

import {Logo} from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
function App() {
  return (
    <div>
      <h2>Bookshelf</h2>
      <Logo />
      <div>
        <label htmlFor="login">
          <button id="login">login</button>
        </label>
        <label htmlFor="register">
          <button id="register">register</button>
        </label>
      </div>
    </div>
  )
}
// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
