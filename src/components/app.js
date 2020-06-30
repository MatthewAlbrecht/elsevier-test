import { h } from 'preact'

import Header from './header'

// Code-splitting is automated for routes
import Home from '../routes/home'

export default function App() {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */

  return (
    <div id="app">
      <Header />
      <Home />
    </div>
  )
}
