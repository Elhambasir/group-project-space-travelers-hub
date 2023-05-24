import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import './App.css';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import RocketList from './components/RocketsList';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/Rockets" element={<RocketList />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="*" element={<h3>No Match</h3>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
