import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

import { fetchMissions, joinMission, leaveMission } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);

  return (
    <div className="missionC">
      <Table striped responsive bordered hover className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.missions.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td className="Acbtn"><Badge bg={!item.reserved ? 'secondary' : ''}>{!item.reserved ? 'NOT A MEMBER' : 'Active Member'}</Badge></td>
              <td className="Mbtn"><button type="button" className={!item.reserved ? 'Join' : 'red'} onClick={() => (item.reserved ? dispatch(joinMission(item.id)) : dispatch(leaveMission(item.id)))}>{!item.reserved ? 'Join Mission' : 'Leave Mission'}</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Mission;
