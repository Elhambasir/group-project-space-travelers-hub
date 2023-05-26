import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import './styles/Rocket.css';
import MyProfile from './components/MyProfile';
import RocketList from './components/RocketsList';
import Missions from './components/Mission';
import Line from './components/Line';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Line />
        <Routes path="/" element={<RocketList />}>
          <Route index element={<RocketList />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Mission" element={<Missions />} />
          <Route path="*" element={<h3>No Match</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
