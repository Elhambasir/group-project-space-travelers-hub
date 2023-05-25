import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Mission() {
  const mission = useSelector((state) => state.missions);
  const myMission = mission.missions.filter((item) => item.reserved === true);
  if (myMission.length === 0) return (<Container>You have not joined any Mission.</Container>);
  return (
    <Container>
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
  if (myMission.length === 0) return (<Container>You have not reserved any Rocket.</Container>);
  return (
    <Container>
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
    <Mission />
    <Rocket />
  </>
);

export default MyProfile;
