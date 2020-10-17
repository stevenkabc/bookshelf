// 🐨 you'll need to import React and ReactDOM up here
import React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {Logo} from './components/logo'

const {useState} = React

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

function App() {
  const [openModal, setOpenModal] = useState('none')
  return (
    <div>
      <h2>Bookshelf</h2>
      <Logo width="80" height="80" />
      <div>
        <label htmlFor="login">
          <button id="login" onClick={() => setOpenModal('login')}>
            login
          </button>
        </label>
        <label htmlFor="register">
          <button id="register" onClick={() => setOpenModal('register')}>
            register
          </button>
        </label>
      </div>
      <Dialog isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Login</h3>
        </div>
      </Dialog>
      <Dialog isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Login</h3>
        </div>
      </Dialog>
    </div>
  )
}
// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
