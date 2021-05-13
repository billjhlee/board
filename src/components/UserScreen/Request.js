import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button, Col } from "react-bootstrap";

function Request(props) {
  const [formState, setFormState] = useState({
    title: "",
    desc: "",
    category: "",
    budget: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(formState);
  };

  return (
    <div className={`${props.className} request`}>
      <Form>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
            type="text"
            placeholder="Ex: Roofing needed"
          />
        </Form.Group>

        <Form.Group controlId="formGridState">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            defaultValue="A"
            onChange={(e) => {
              setFormState({ ...formState, category: e.target.value });
            }}
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            type="text"
            onChange={(e) => {
              setFormState({ ...formState, desc: e.target.value });
            }}
            placeholder="Give us more detail"
          />
        </Form.Group>

        <Form.Group controlId="formBasicBudget">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            onChange={(e) => {
              setFormState({ ...formState, budget: e.target.value });
            }}
            type="number"
            placeholder="$"
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default React.memo(styled(Request)``);
