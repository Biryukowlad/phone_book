import React from "react";
import { observer } from 'mobx-react-lite';
import { Button, Card, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import '../css/style.css'
import { create_phone } from '../http/phoneAPI';

const AddPhone = observer((props) => {
    let name = ''
    let phone_number = ''
    let islike = false
    const clickCreate = async() => {
        create_phone(phone_number, name, islike).then(data => props.getCreatedPhoneInModal(data))
        props.closeModal()
    }
    return (
        <Container className="main_info">
            <Card style={{width: 600}} className='card'>
                <form>
                    <ListGroup>
                        <ListGroupItem className="list_group">
                            <h2>Add contact</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            <input placeholder="Имя" className="placehldr" onChange={(e) => {name = e.target.value}}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <input placeholder="Телефон" className="placehldr" onChange={(e) => {phone_number = e.target.value}}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row className="row_modal">
                                <label htmlFor="islike" className="label_like">Favorites</label>
                                <input type="checkbox" id='islike' className="checkbx" onChange={(e) => {islike = e.target.checked}}/>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem className="list_group">
                            <Button className='button' onClick={clickCreate} >Создать</Button>
                        </ListGroupItem>
                    </ListGroup>
                </form>
            </Card>
        </Container>
    )
});
export default AddPhone;









{/* <Button className='button' onClick={() => {
    props.onClickCross()
    props.onAdd({name, phone_number, islike})}}>Создать</Button> */}










// class AddPhone extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             phone_number: '',
//             islike: false
//         }
//     }
//     render() {
//         return (
//             <Container className="main_info">
//                 <Card style={{width: 600}} className='card'>
//                     <form ref={(el) => this.myForm = el}>
//                         <ListGroup>
//                             <ListGroupItem className="list_group">
//                                 <h2>Add contact</h2>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <input placeholder="Имя" className="placehldr" onChange={(e) => this.setState({name: e.target.value})}/>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <input placeholder="Телефон" className="placehldr" onChange={(e) => this.setState({phone_number: e.target.value})}/>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <Row className="row_modal">
//                                     <label htmlFor="islike" className="label_like">Favorites</label>
//                                     <input type="checkbox" id='islike' className="checkbx" onChange={(e) => this.setState({islike: e.target.checked})}/>
//                                 </Row>
//                             </ListGroupItem>
//                             <ListGroupItem className="list_group">
//                                 <Button className='button' onClick={() => {
//                                     this.props.onClickCross()
//                                     this.myForm.reset()
//                                     this.props.onAdd({
//                                         name: this.state.name,
//                                         phone_number: this.state.phone_number,
//                                         islike: this.state.islike,
//                             })}}>Создать</Button>
//                             </ListGroupItem>
//                         </ListGroup>
//                     </form>
//                 </Card>
//             </Container>
//             // <Container className="main_info">
//             //     <Card style={{width: 600}} className='card'>
//             //         <h2 className="title">Телефонная книга</h2>
//             //         <Form className="form">
//             //             <Form.Control
//             //                 className="placehldr"
//             //                 placeholder="Имя"
//             //                 //value={name}
//             //                 onChange={(e) => this.setState({phone_number: e.target.value})}
//             //             />
//             //             <Form.Control
//             //                 className="placehldr"
//             //                 placeholder="Телефон"
//             //                 //value={name}
//             //                 onChange={(e) => this.setState({phone_number: e.target.value})}
//             //             />
//             //             <Form.Control
//             //                 className="placehldr"
//             //                 placeholder="Имя"
//             //                 //value={name}
//             //                 onChange={(e) => this.setState({phone_number: e.target.value})}
//             //             />
//             //         </Form>
//             //     </Card>
//             // </Container>
//         ) 
//     }
// }
// export default AddPhone