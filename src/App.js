import React from 'react';
import Header from './components/Header';
import Phones from './components/Phones';
import ModalWindow from './components/ModalWindow';
import './css/style.css'
import { Button, Card, Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import {FaPhoneSquareAlt} from 'react-icons/fa'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phones: [
                {
                    id: 1,
                    phone_number: 89963427290,
                    name: 'Vlad',
                    islike: false
                },
                {
                    id: 2,
                    phone_number: 89272002421,
                    name: 'Kris',
                    islike: true
                },
            ],
            openModal: false
        }
        this.addPhone = this.addPhone.bind(this)
        this.deletePhone = this.deletePhone.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    render() {
        return (
            <Container className="main_info">
                <Card style={{width: 600}} className='card'>
                    <ListGroup>
                        <ListGroupItem className='list_group'>
                            <h2 className='title'>Телефонная книга</h2>
                        </ListGroupItem>
                        <ListGroupItem className='search_item'>
                            <Row className="row">
                                <Col className='icon_phone'>
                                    <div>
                                        <FaPhoneSquareAlt size={28}/>
                                    </div>
                                </Col>
                                <Col className='search_col'>
                                    <div>
                                        <input placeholder="Поиск" className="search"/>
                                    </div>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Phones phones={this.state.phones} onDelete={this.deletePhone}/>
                        </ListGroupItem>
                        <ListGroupItem className='list_group'>
                            <Button className='button' onClick={() => {
                            this.setState({
                                openModal: true
                            })
                            }
                            }>Добавить</Button>
                        </ListGroupItem>
                            {this.state.openModal && <ModalWindow opMod={this.state.openModal} onClickCross={this.closeModal} onAdd={this.addPhone}/>}
                    </ListGroup>
                </Card>
            </Container>
        )
    }
    addPhone(phone) {
        const id = this.state.phones.length + 1
        this.setState({phones: [...this.state.phones, {id, ...phone}]})
    }
    deletePhone(id) {
        this.setState({phones: this.state.phones.filter((el) => el.id !== id)})
    }
    closeModal() {
        this.setState({
            openModal: false
        })
    }
}
export default App


// серый #ceced7
// темно-синий #002445
// красный #d2354c
// серо-синий #8390ae