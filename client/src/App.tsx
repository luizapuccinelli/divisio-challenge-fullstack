import { GlobalStyle } from './style-guide/GlobalStyle'
import { ApolloProvider } from '@apollo/client'
import client from 'config/apollo-client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Pokedex from 'pages/Pokedex/Pokedex'

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App
