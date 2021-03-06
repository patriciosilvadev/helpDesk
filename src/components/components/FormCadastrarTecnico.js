import React from 'react';
import { Component } from "react";
import './FormCadastrarTecnico.css';
import CPFInput from './CPFInput.js';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';


class FormCadastrarTecnico extends Component {


    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*Valida submit do form*/
    handleSubmit(event) {
      event.preventDefault();
      if( !window.isValidCPF ) {
         alert('CPF informado é inválido!');
      }
    }

    render(){
        return(
          <div className="wow fadeInDown">
           <Container>
             <Card className="chamado">
               <Form onSubmit={this.handleSubmit}>
                 <Row className="justify-content-center"> {/*Esse id está em login.css*/}
                  {/*Col1*/}
                   <Col md={4}>
                     <Form.Group controlId="formBasicText">
                       <Form.Control type="text" placeholder="Nome" name="nome" />
                     </Form.Group>
                     <Form.Group controlId="formBasicEmail">
                       <Form.Control type="email" placeholder="E-mail" name="email"/>
                     </Form.Group>
                     <Form.Group controlId="formBasicText">
                       <Form.Control type="text" placeholder="Telefone" name="numero"/>
                     </Form.Group>
                  </Col>
                  {/*Col2*/}
                   <Col md={4}>
                     <Form.Group controlId="formBasicText">
                       <CPFInput className="form-control" placeholder="Cpf" name="cpf" />
                     </Form.Group>
                     <Form.Group controlId="formBasicText">
                       <Form.Control type="text" placeholder="Login" name="login"/>
                     </Form.Group>
                     <Form.Group controlId="formBasicText">
                       <Form.Control type="password" placeholder="Senha" name="senha"/>
                     </Form.Group>
                   </Col>
                   {/*Col3*/}
                   <Col md={4}>
                     <Form.Group controlId="formBasicText">
                       <Form.Control type="text" placeholder="Matricula" name="matricula"/>
                     </Form.Group>
                     <Form.Group controlId="ControlSelect1">
                       <Form.Control as="select" name="area" required>
                         <option value="" >Setor</option>
                         <option name="ti">Ti</option>
                         <option name="nupe">NUPE</option>
                         <option name="academica">Acadêmica</option>
                         <option name="financeiro">Financeiro</option>
                         <option name="administrativo">Administrativo</option>
                         <option name="comunicacao">Comunicação</option>
                       </Form.Control>
                     </Form.Group>
                    <Form.Group controlId="ControlSelect1">
                       <Form.Control as="select" name="area" required>
                         <option value="" >Cargo</option>
                         <option name="tecnico">Técnico</option>
                         <option name="administrador">Administrador</option>
                       </Form.Control>
                     </Form.Group>
                   </Col>
                 </Row>
                 <Row className="justify-content-center">
                   <Button variant="outline-primary" type="submit">
                     Casdastrar
                   </Button>
                 </Row>
               </Form>
           </Card>
         </Container>
       </div>

        );
    }
}

export default FormCadastrarTecnico;
