import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const links = [
  { path: '/Rockets', text: 'Rockets' },
  { path: '/Mission', text: 'Mission' },
  { path: '/MyProfile', text: 'My Profile' },
];
const Nav = () => (
  <Container>
    <img
      className="Logo"
      src="https://spacetravellerhubcapstone.netlify.app/static/media/planet.3f6fb2742f28651730c0.png"
      alt="Logo"
    />
    <h3>Space Travelers&apos; Hub</h3>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </Container>
);

export default Nav;
