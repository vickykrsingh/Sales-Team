import Home from './Home';
import LeadDetails from './LeadDetails';
import LeadListing from './LeadListing';
import Navbar from './Navbar';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/lead-listing" element={<LeadListing/>} />
          <Route path="/lead-details/:id" element={<LeadDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App