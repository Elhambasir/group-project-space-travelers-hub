import { NavLink } from 'react-router-dom';
import styles from '../styles/nav.module.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'test', text: 'test' },
];
const Nav = () => (
  <>
    {links.map((link) => (
      <li key={link.text}>
        <NavLink className={styles.noDecoration} to={link.path}>{link.text}</NavLink>
      </li>
    ))}
  </>
);

export default Nav;
