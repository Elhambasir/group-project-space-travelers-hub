import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

import { fetchMissions, joinMission } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);

  return (
    <Container className="mt-4 mb-4 bg-light">
      <Table striped responsive bordered hover className="table">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.missions.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td><Badge bg="success">test</Badge></td>
            <td><Button as="a" className="bg-primary" onClick={() => dispatch(joinMission(item.id))}>Join Mission</Button></td>
          </tr>
        ))}
      </Table>
    </Container>
  );
};

export default Mission;
