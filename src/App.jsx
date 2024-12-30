import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import CreateActivities from './pages/create_activities';
import Login from './pages/login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={< Homepage />} />
                <Route path='/createActivities' element={<CreateActivities />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;