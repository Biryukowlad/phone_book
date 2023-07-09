import React, { useContext, useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import Phones from './components/Phones';
import ModalWindow from './components/ModalWindow';
import './css/style.css'
import { Button, Card, Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import {FaPhoneSquareAlt} from 'react-icons/fa'
import { get_all_phones } from './http/phoneAPI';

const App = observer(() => {
    //const {phone} = useContext(Context)
    let openModal = false
    // useEffect(() => {
    //     get_all_phones().then(data => phone.setPhones(data))
    // }, [])
    // function addPhone(new_phone) {
    //     const id = phone.phones.length + 1
    //     new_phone.unshift(id);
    //     phone.phones.push(new_phone)
    // }
    // function deletePhone(id) { phone.phones.filter((el) => el.id !== id) }
     function closeModal() { openModal = false }
    console.log("Это openModal")
    console.log(openModal)
    // console.log("Это phone.phones")
    // console.log(phone.phones)
    // if (phone.phones.length != 0) {
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
                        <Phones />
                    </ListGroupItem>
                    <ModalWindow/>
                </ListGroup>
            </Card>
        </Container>
    );
    //}
});
export default App;


{/* <ListGroupItem className='list_group'>
                        <Button className='button' onClick={() => setModalActive(true)}>Добавить</Button>
                    </ListGroupItem> */}


//<Button className='button' onClick={() => <ModalWindow />}>Добавить</Button>
//{openModal && <ModalWindow opMod={openModal} onClickCross={closeModal}/>}




//{openModal && <ModalWindow opMod={openModal} onClickCross={closeModal} onAdd={addPhone}/>}
//<Phones phones={phone.phones} onDelete={deletePhone}/>
















// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             // phones: [
//             //     {
//             //         id: 1,
//             //         phone_number: 89963427290,
//             //         name: 'Vlad',
//             //         islike: false
//             //     },
//             //     {
//             //         id: 2,
//             //         phone_number: 89272002421,
//             //         name: 'Kris',
//             //         islike: true
//             //     },
//             // ],
//             phones: get_all_phones(),
//             openModal: false
//         }
//         console.log("Это я в конструкторе вывожу this.state.phones.phones")
//         console.log(this.state.phones)
//         console.log("конец вывода")
//         this.addPhone = this.addPhone.bind(this)
//         this.deletePhone = this.deletePhone.bind(this)
//         this.closeModal = this.closeModal.bind(this)
//     }
//     render() {
//         console.log("Это я пытаюсь нарисовать в App.js")
//         return (
//             <Container className="main_info">
//                 <Card style={{width: 600}} className='card'>
//                     <ListGroup>
//                         <ListGroupItem className='list_group'>
//                             <h2 className='title'>Телефонная книга</h2>
//                         </ListGroupItem>
//                         <ListGroupItem className='search_item'>
//                             <Row className="row">
//                                 <Col className='icon_phone'>
//                                     <div>
//                                         <FaPhoneSquareAlt size={28}/>
//                                     </div>
//                                 </Col>
//                                 <Col className='search_col'>
//                                     <div>
//                                         <input placeholder="Поиск" className="search"/>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </ListGroupItem>
//                         <ListGroupItem>
//                             <Phones phones={this.state.phones} onDelete={this.deletePhone}/>
//                         </ListGroupItem>
//                         <ListGroupItem className='list_group'>
//                             <Button className='button' onClick={() => {
//                             this.setState({
//                                 openModal: true
//                             })
//                             }
//                             }>Добавить</Button>
//                         </ListGroupItem>
//                             {this.state.openModal && <ModalWindow opMod={this.state.openModal} onClickCross={this.closeModal} onAdd={this.addPhone}/>}
//                     </ListGroup>
//                 </Card>
//             </Container>
//         )
//     }
//     addPhone(phone) {
//         const id = this.state.phones.length + 1
//         this.setState({phones: [...this.state.phones, {id, ...phone}]})
//     }
//     deletePhone(id) {
//         this.setState({phones: this.state.phones.filter((el) => el.id !== id)})
//     }
//     closeModal() {
//         this.setState({
//             openModal: false
//         })
//     }
// }
// export default App

// серый #ceced7
// темно-синий #002445
// красный #d2354c
// серо-синий #8390ae