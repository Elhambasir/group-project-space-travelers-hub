import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import './App.css';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/Rockets" element={<Rockets />} />
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
