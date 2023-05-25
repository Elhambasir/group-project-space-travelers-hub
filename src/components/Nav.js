import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const links = [
  { path: '/Rockets', text: 'Rockets' },
  { path: '/MyProfile', text: 'My Profile' },
  { path: '/Mission', text: 'Mission' },
];
const Nav = () => (
  <Container>
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
