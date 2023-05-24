import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((store) => store.missions);
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]); // eslint-disable-line
  return (
    <div>hello world</div>
  );
};

export default Mission;
