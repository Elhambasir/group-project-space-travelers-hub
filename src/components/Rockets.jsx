import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservation } from '../redux/Rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    id, name, disc, image, Reservation,
  } = props;
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{disc}</div>
      <button type="button" onClick={() => { dispatch(reservation(Reservation)); }}>Reservation</button>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  Reservation: PropTypes.number.isRequired,
};

export default Rocket;
