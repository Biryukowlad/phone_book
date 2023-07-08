import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AddPhone from './AddPhone';
import { Button, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../css/style.css'

class ModalWindow extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         openModal: false
    //     }
    // }
    // onClickButton = e =>{
    //     e.preventDefault()
    //     this.setState({openModal : true})
    // }
    // onCloseModal = ()=>{
    //     this.setState({openModal : false})
    // }

    //  onClose={this.onClickCross}
    render() {
        return (
            <Container className="main_info">
                <Modal open={this.props.opMod} center>
                    <AddPhone onAdd={this.props.onAdd} onClickCross={this.props.onClickCross}/>
                </Modal>
            </Container>
        )
    }  
}

export default ModalWindow