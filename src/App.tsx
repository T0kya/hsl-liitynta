import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ParkingSlot } from './pages/ParkingSlot'
import { Frontpage }  from './pages/Frontpage'


export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/asema/:id">
          <ParkingSlot />
        </Route>
        <Route path="/">
          <Frontpage />
        </Route>
      </Switch>
    </Router>
    
  )
}

export default App
