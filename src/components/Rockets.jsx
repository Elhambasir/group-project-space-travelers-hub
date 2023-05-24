import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAPI } from '../redux/Rockets/rocketsSlice';

const Rocket = (props) => {
  const {
    id, name, disc, image,
  } = props;
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{disc}</div>
    </div>
  );
};

export default Rocket;
