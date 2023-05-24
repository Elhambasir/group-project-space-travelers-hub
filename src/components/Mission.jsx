import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((store) => store.missions);
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>hello world</div>
  );
};

export default Mission;
