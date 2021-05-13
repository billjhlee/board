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
          <Form.Label>Budget</Form.Label>
          <Form.Control
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
            type="text"
            placeholder="Ex: Roofing needed"
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
