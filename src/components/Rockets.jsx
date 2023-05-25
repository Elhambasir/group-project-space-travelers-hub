// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

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

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
