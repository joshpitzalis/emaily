import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path='/surveys/new'>
            <NewSurvey />
          </Route>
          <Route path='/surveys'>
            <Surveys />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const Header = () =>
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/surveys'>Surveys</Link>
      </li>
      <li>
        <Link to='/surveys/new'>New Survey</Link>
      </li>
    </ul>
  </nav>

function Home () {
  return <h2>Home</h2>
}

function NewSurvey () {
  return <h2>New Survey</h2>
}

function Surveys () {
  return <h2>Surveys</h2>
}

export default App
