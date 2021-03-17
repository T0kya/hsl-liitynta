import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ParkingSlot } from './pages/ParkingSlot'
import { Frontpage }  from './pages/Frontpage'
import { AnimatePresence } from 'framer-motion'


export function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/asema/:id" component={ParkingSlot} />
          <Route path="/" component={Frontpage} />
        </Switch>
      </AnimatePresence>
    </Router>
    
  )
}

export default App
