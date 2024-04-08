import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Render the Navbar component */}
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          
          {/* Define your About Us route here */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About Us</h2>;
}

export default App;
