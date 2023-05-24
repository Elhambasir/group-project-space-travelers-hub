import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/MyProfile', text: 'My Profile' },
  { path: '/Mission', text: 'Mission' },
];
const Nav = () => (
  <>
    {links.map((link) => (
      <li key={link.text}>
        <NavLink to={link.path}>{link.text}</NavLink>
      </li>
    ))}
  </>
);

export default Nav;
