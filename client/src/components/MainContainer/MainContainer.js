import React from 'react';
import { Container, Col, Row } from 'reactstrap';


export const MainContainer = ({ children }) => (
    <Container fluid>
        {children}
    </Container>
)