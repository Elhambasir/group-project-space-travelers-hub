import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Mission() {
  const mission = useSelector((state) => state.missions);
  const myMission = mission.missions.filter((item) => item.reserved === true);
  if (myMission.length === 0) return (<Container><h3>My Missions</h3>You have not joined any Mission.</Container>);
  return (
    <Container>
      <h3>My Missions</h3>
      <ListGroup as="ol" numbered>
        {myMission.map((item) => (
          <ListGroup.Item as="li" key={item.id}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

const Rocket = () => {
  const Rocket = useSelector((state) => state.rockets);
  const myMission = Rocket.RocketList.filter((item) => item.reserved === true);
  if (myMission.length === 0) return (<Container><h3>My Rockets</h3>You have not reserved any Rocket.</Container>);
  return (
    <Container>
      <h3>My Rockets</h3>
      <ListGroup as="ol" numbered>
        {myMission.map((item) => (
          <ListGroup.Item as="li" key={item.id}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const MyProfile = () => (
  <>
   <Container className="d-flex">
      <Mission />
      <Rocket />
    </Container>
  </>
);

export default MyProfile;
