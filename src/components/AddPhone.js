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