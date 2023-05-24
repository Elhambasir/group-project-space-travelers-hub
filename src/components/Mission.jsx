// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Badge, Button, Container } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import Table from 'react-bootstrap/Table';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';

import { fetchMissions } from '../redux/mission/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((store) => store.missions);
  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <Container className="mt-4 mb-4 bg-light">
      <Table striped responsive bordered hover className="table">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions[0]?.map((item) => (
          <tr key={item.description}>
            <td>{item.mission_name}</td>
            <td>{item.description}</td>
            <td><Badge bg="success">test</Badge></td>
            <td><Button as="a" className="bg-primary">Join</Button></td>
          </tr>
        ))}
      </Table>
    </Container>
  );
};

export default Mission;
