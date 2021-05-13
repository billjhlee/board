import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Request from "./Request";
import { Container, Row, Card, Button, Modal } from "react-bootstrap";

const DUMMY_DATA = [
  {
    job_id: 0,
    job_title: "title",
    job_desc: "Ipsum Lorem",
    budget: 0,
    poster: "john",
  },
  {
    job_id: 0,
    job_title: "title",
    job_desc: "Ipsum Lorem",
    budget: 0,
    poster: "john",
  },
  {
    job_id: 0,
    job_title: "title",
    job_desc: "Ipsum Lorem",
    budget: 0,
    poster: "john",
  },
  {
    job_id: 0,
    job_title: "title",
    job_desc: "Ipsum Lorem",
    budget: 0,
    poster: "john",
  },
  {
    job_id: 0,
    job_title: "title",
    job_desc: "Ipsum Lorem",
    budget: 0,
    poster: "john",
  },
  {
    job_id: 0,
    job_title: "title",
    job_desc: "Ipsum Lorem",
    budget: 0,
    poster: "john",
  },
];

function ExpertScreen(props) {
  const [showInd, setShow] = useState(-1);

  const handleClose = () => setShow(-1);
  const handleShow = (ind) => setShow(ind);

  const modal = useMemo(() => {
    return (
      <Modal show={showInd > -1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{DUMMY_DATA[showInd]?.job_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }, [showInd]);

  return (
    <Container className={`${props.className}`}>
      {modal}
      <h1>My Offers</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {DUMMY_DATA.map((data) => (
          <Card className="offer__card">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{data.job_title}</Card.Title>
              <Card.Text>{data.poster}</Card.Text>
              <Card.Text>{data.job_desc}</Card.Text>
              <Card.Text>{data.budget}</Card.Text>
              <Card.Text>{data.offer}</Card.Text>

              <Button variant="primary">Cancel</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <h1>Open Requests</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {DUMMY_DATA.map((data, ind) => (
          <Card className="offer__card" key={ind}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{data.job_title}</Card.Title>
              <Card.Text>{data.poster}</Card.Text>
              <Card.Text>{data.job_desc}</Card.Text>
              <Card.Text>{data.budget}</Card.Text>
              <Card.Text>{data.offer}</Card.Text>

              <Button
                variant="primary"
                onClick={() => {
                  handleShow(ind);
                }}
              >
                Offer
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default styled(ExpertScreen)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .request {
    width: 50%;
    margin-bottom: 36px;
  }

  .offer__card {
    width: calc(50% - 14px);
    margin: 0 7px;
    margin-bottom: 14px;
  }
`;
