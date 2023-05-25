// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservation } from '../redux/Rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const {
    id, name, disc, image, Reservation, reservationState,
  } = props;
  return (
    <div className='rocketC' key={id}>
      <img className='rocketImg' src={image} alt={name} />
      <div className='contentC'>
      <h4 className='rocektName'>{name}</h4>
      <div className='rocketDesc'>{disc}</div>
      <div type="button" onClick={() => { dispatch(reservation(Reservation)); }}>{reservationState}</div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  Reservation: PropTypes.number.isRequired,
  reservationState: PropTypes.number.isRequired,
};

export default Rocket;
