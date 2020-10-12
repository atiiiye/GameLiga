import React, { Component } from "react";

//import css
import "./../css/CreateTournament.css";

//import boostrap
import { Form } from "react-bootstrap";
import { Button, Modal, ModalBody } from "reactstrap";

export class CreateTournament extends Component {
  state = {
    errors: {
      name: "",
      personal: "",
      buyIn: "",
      timeGame: "",
      datom: "",
      type: "",
      addPerson: "",
    },
    name: "",
    personal: "",
    buyIn: "",
    timeGame: "",
    datom: "",
    type: "",
    addPerson: "",
    modal: false,
    persons: [{
      id:0
    }],
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  handleChange = (e) => {
    console.log("input changes");
  };

  addPerson = () => {
    this.setState((prevState) => {
      let box_length = prevState.persons.length;
      const new_person = { id: box_length };
      if (box_length >= 4) {
        console.log('more 4')
      }
      return {
        persons: [...prevState.persons, new_person]
      };
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="create-Tournament-section">
          <div
            className="create-Tournament-button"
            onClick={this.toggle.bind(this)}
          >
            <i className="fas fa-plus"></i>
          </div>
          <span className="create-Tournament-title">Create Tournament</span>
        </div>
        <Modal
          className="CreateTournament-modal"
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
        >
          <ModalBody>
            <Form
              className="CreateTournament-form p-2 pt-4"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div className="section-left">
                <div className="form-fields mb-4">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    autoFocus
                    type="text"
                    className="mb-1 mt-1"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                  />
                  {errors.name.length > 0 && (
                    <span className="form-validate">{errors.name}</span>
                  )}
                </div>
                <div className="form-fields mb-4">
                  <Form.Label>Personal :</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-1 mt-1 w-50"
                    id="personal"
                    name="personal"
                    value={this.state.personal}
                    onChange={(e) => this.handleChange(e)}
                  />
                  {errors.personal.length > 0 && (
                    <span className="form-validate">{errors.personal}</span>
                  )}
                </div>
                <div className="form-fields mb-4">
                  <Form.Label>Buy in :</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-1 mt-1 w-50"
                    id="buyIn"
                    name="buyIn"
                    value={this.state.buyIn}
                    onChange={(e) => this.handleChange(e)}
                  />
                  {errors.buyIn.length > 0 && (
                    <span className="form-validate">{errors.buyIn}</span>
                  )}
                </div>
                <div className="form-fields mb-4">
                  <Form.Label>Time Game :</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-1 mt-1 w-50"
                    id="timeGame"
                    name="timeGame"
                    value={this.state.timeGame}
                    onChange={(e) => this.handleChange(e)}
                  />
                  {errors.timeGame.length > 0 && (
                    <span className="form-validate">{errors.timeGame}</span>
                  )}
                </div>
                <div className="form-fields mb-4">
                  <Form.Label>Datom :</Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-1 mt-1 w-50"
                    id="datom"
                    name="datom"
                    value={this.state.datom}
                    onChange={(e) => this.handleChange(e)}
                  />
                  {errors.datom.length > 0 && (
                    <span className="form-validate">{errors.datom}</span>
                  )}
                </div>
              </div>
              <div className="section-right">
                <div className="section-right-1">
                  <div className="form-fields mb-4">
                    <Form.Label>Add person :</Form.Label>

                    <div className="person-box">
                      <div className="persons">
                        {this.state.persons.map((item) => (
                          <div className="person" key={item.id}></div>
                        ))}
                      </div>
                      <i
                        className="fas fa-plus"
                        onClick={() => this.addPerson()}
                      ></i>
                    </div>
                  </div>
                  <div className="form-fields mb-4">
                    <Form.Label>Type :</Form.Label>
                    <Form.Control
                      type="select"
                      className="mb-1 mt-1 w-75"
                      id="type"
                      name="type"
                      value={this.state.type}
                      onChange={(e) => this.handleChange(e)}
                    />
                    {errors.type.length > 0 && (
                      <span className="form-validate">{errors.type}</span>
                    )}
                  </div>
                </div>

                <div className="form-button section-right-2">
                  <Button
                    id="submit"
                    variant="none"
                    type="submit"
                    onClick={this.toggle.bind(this)}
                  >
                    ADD TOURNAMENT
                  </Button>
                </div>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CreateTournament;
