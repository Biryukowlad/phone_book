import React from "react";
import Phone from "./Phone";
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../css/style.css'

class Phones extends React.Component {
    render() {
        if (this.props.phones.length > 0)
            return (
                <Container className="main_info">
                    <ListGroup className="list_phones">
                        {this.props.phones.map((el) => (
                            <ListGroupItem className="phone_row">
                                <Phone onDelete={this.props.onDelete} key={el.id} phone={el}/>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            ) 
        else
            return (
                <div>
                    <h2>Номеров телефонов нет!</h2>
                </div>
            )
    }
}
export default Phones