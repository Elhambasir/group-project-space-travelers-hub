import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAPI } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.missions);
  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);
  console.log(store);
};

export default Mission;
