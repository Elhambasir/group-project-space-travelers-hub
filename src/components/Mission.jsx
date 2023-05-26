import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
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
    <Container className="mt-4 mb-4 bg-light">
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
              <td><Badge bg={!item.reserved ? 'secondary' : 'success'}>{!item.reserved ? 'NOT A MEMBER' : 'Active Member'}</Badge></td>
              <td><Button as="a" className={!item.reserved ? 'bg-primary' : 'bg-danger'} onClick={() => (item.reserved ? dispatch(joinMission(item.id)) : dispatch(leaveMission(item.id)))}>{!item.reserved ? 'Join Mission' : 'Leave Mission'}</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Mission;
