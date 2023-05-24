import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import MyProfile from './components/MyProfile';
import RocketList from './components/RocketsList';
import Missions from './components/Mission';

function App() {
  return (
    <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/Rockets" element={<RocketList />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="*" element={<h3>No Match</h3>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
