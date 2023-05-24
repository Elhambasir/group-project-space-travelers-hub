import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservation } from '../redux/Rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch()

  const {
    id, name, disc, image,
  } = props;
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{disc}</div>
      <button onClick={() => {dispatch(reservation({name}))}}>Reservation</button>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
