import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rockets';
import { getAPI } from '../redux/Rockets/rocketsSlice';

const RocketList = () => {
  const dispatch = useDispatch();
  const {
    RocketList, isLoading, error,
  } = useSelector((store) => store.rockets);
  useEffect(() => {
    dispatch(getAPI());
  }, [dispatch]);
  if (isLoading === true) {
    return <div>Loading</div>;
  } if (isLoading === false) {
    return (
      <div>
        {RocketList.map((item) => (
          <Rocket
            key={item.id}
            name={item.name}
            disc={item.reserved ? (
              <div>
                <span className="badge">Reserved </span>
                {item.disc}
              </div>
            ) : (item.disc)}
            image={item.images}
            Reservation={item.id}
            reservationState={
              item.reserved ? (<button type="button" className="CancelR">Cancel Reservation</button>) : (<button type="button" className="Reservation">Reserve rocket</button>)
}
          />
        ))}
      </div>
    );
  }
  return <div>{error}</div>;
};

export default RocketList;
