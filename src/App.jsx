import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import LandingPage from './pages/landingpage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={< Homepage />} />
                {/* <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} /> */}
            </Routes>
        </div>
    );
}

export default App;