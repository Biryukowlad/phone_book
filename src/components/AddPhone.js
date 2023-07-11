import React from "react";
import { observer } from 'mobx-react-lite';
import { Button, Card, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import '../css/style.css'
import { create_phone } from '../http/phoneAPI';

const AddPhone = observer((props) => {
    let name = ''
    let phone_number = null
    let islike = false
    let photo = null
    const clickCreate = async() => {
        if(name.length == 0) alert("Пожалуйства введите имя!")
        else if(!(/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(phone_number))) alert("Пожалуйства кооректно введите номер телефона!")
        else {
            const formData = new FormData()
            formData.append('phone_num_person', phone_number)
            formData.append('name_person', name)
            formData.append('islike_person', islike)
            formData.append('photo_person', photo)
            create_phone(formData).then(data => props.getCreatedPhoneInModal(data))
            props.closeModal()
        }
        // try {
        //     create_phone(phone_number, name, islike).then(data => props.getCreatedPhoneInModal(data))
        //     props.closeModal()
        // } catch(e) {
        //     alert(e.response.data.message)
        // }
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
                            <input type="tel" placeholder="Телефон" className="placehldr" onChange={(e) => {phone_number = e.target.value}}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row className="row_modal">
                                <label htmlFor="islike" className="label_like">Favourites</label>
                                <input type="checkbox" id='islike' className="checkbx" onChange={(e) => {islike = e.target.checked}}/>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="label_file">Можете загрузить фотографию контакта</div>
                            <input type="file" accept=".png, .jpg, .jpeg" className="placehldr" onChange={(e) => {photo = e.target.files[0]}}/>
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