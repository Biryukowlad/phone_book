import React, { useContext, useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';
import Phone from "./Phone";
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import {FaPhoneSquareAlt} from 'react-icons/fa'
import '../css/style.css'
import { get_all_phones } from '../http/phoneAPI';

const Phones = observer((props) => {
    const {phone} = useContext(Context)
    const [searchText, setSearchText] = useState("");
    const [searchPhones, setSearchPhones] = useState([]);
    useEffect(() => {
        get_all_phones().then(data => phone.setPhones(data))
    }, [])
    const handleChange = event => {
        setSearchText(event.target.value);
    };
    useEffect(() => {
        const srchPhones = phone.phones.filter(onePhone => onePhone.name_person.toLowerCase().startsWith(searchText));
        setSearchPhones(srchPhones);
    }, [searchText]);
    const changeArray = (phone_id) => {
        phone.setPhones(helpChangeArray(phone.phones, phone_id))
    }
    const helpChangeArray = (currentPhones, phone_id) => {
        // const foundPhoneIndex = currentPhone.findIndex(entry => entry.id_person === phone_id);
        // if (foundPhoneIndex !== -1) currentPhone[foundPhoneIndex].islike_person = !currentPhone[foundPhoneIndex].islike_person;
        let phone_index = currentPhones.findIndex(elem => elem.id_person === phone_id)
        let first_unliked_index = currentPhones.findIndex(elem => elem.islike_person == false)
        let curPhone = currentPhones[phone_index]
        if(curPhone.islike_person) {
            if (first_unliked_index == -1) {
                currentPhones.splice(currentPhones.length, 0, curPhone)
                currentPhones.splice(phone_index, 1)
            }
            else {
                let i = 0
                for(i = first_unliked_index; i < currentPhones.length; i++) if(currentPhones[i].name_person > curPhone.name_person) break
                currentPhones.splice(i, 0, curPhone)
                currentPhones.splice(phone_index, 1)
            }
        }
        else {
            let i = 0
            for(; i < first_unliked_index; i++) if(currentPhones[i].name_person > curPhone.name_person) break
            currentPhones.splice(i, 0, curPhone)
            currentPhones.splice(phone_index + 1, 1)
        }
        phone_index = currentPhones.findIndex(elem => elem.id_person === phone_id)
        currentPhones[phone_index].islike_person = !currentPhones[phone_index].islike_person
        return currentPhones;
        // if(curPhone.islike_person) {
        //     let i = 0
        //     for(i = first_unliked_index; i < currentPhones.length; i++) if(currentPhones[i].name_person > curPhone.name_person) break
        //     currentPhones.splice(i, 0, curPhone)
        //     currentPhones.splice(phone_index, 1)
        // }
        // else {
        //     if (first_unliked_index == -1) {
        //         currentPhones.splice(currentPhones.length, 0, curPhone)
        //         currentPhones.splice(phone_index + 1, 1)
        //     }
        //     else {
        //         let i = 0
        //         for(; i < first_unliked_index; i++) if(currentPhones[i].name_person > curPhone.name_person) break
        //         currentPhones.splice(i, 0, curPhone)
        //         currentPhones.splice(phone_index + 1, 1)
        //     }
        // }
        // phone_index = currentPhones.findIndex(elem => elem.id_person === phone_id)
        // currentPhones[phone_index].islike_person = !currentPhones[phone_index].islike_person
        // return currentPhones;
    }
    const changeArrayDelete = (phone_id) => {
        phone.setPhones(helpChangeArrayDelete(phone.phones, phone_id))
    }
    const helpChangeArrayDelete = (currentPhone, phone_id) => {
        const foundPhoneIndex = currentPhone.findIndex(entry => entry.id_person === phone_id);
        if (foundPhoneIndex !== -1) currentPhone.splice(foundPhoneIndex, 1);
        return currentPhone;
    }
    const result = !searchText ? phone.phones : searchPhones
    if (result.length != 0) {
        return (
            <Container className="main_info">
                <ListGroup className="list_phones">
                    <ListGroupItem className='search_item_phones'>
                        <Row className="row">
                            <Col className='icon_phone'>
                                    <FaPhoneSquareAlt size={28}/>
                            </Col>
                            <Col className='search_col'>
                                    <input type="search" placeholder="Поиск" className="search" value={searchText} onChange={handleChange}/>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    {result.map((el) => (
                        <ListGroupItem className="phone_row">
                            <Phone key={el.id_person} one_phone={el} onDelete={changeArrayDelete} onChangeArray={changeArray}/>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        ) }
    else {
        return (
            <Container className="main_info">
                <ListGroup className="list_phones">
                    <ListGroupItem className='search_item_phones'>
                        <Row className="row">
                            <Col className='icon_phone'>
                                    <FaPhoneSquareAlt size={28}/>
                            </Col>
                            <Col className='search_col'>
                                    <input type="search" placeholder="Поиск" className="search" value={searchText} onChange={handleChange}/>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <h2>Номеров телефонов нет</h2>
                </ListGroup>
            </Container>
        )
    }
});
export default Phones;













// class Phones extends React.Component {
//     render() {
//         if (this.props.phones.length > 0)
//             return (
//                 <Container className="main_info">
//                     <ListGroup className="list_phones">
//                         {this.props.phones.map((el) => (
//                             <ListGroupItem className="phone_row">
//                                 <Phone onDelete={this.props.onDelete} key={el.id} phone={el}/>
//                             </ListGroupItem>
//                         ))}
//                     </ListGroup>
//                 </Container>
//             ) 
//         else
//             return (
//                 <div>
//                     <h2>Номеров телефонов нет!</h2>
//                 </div>
//             )
//     }
// }
// export default Phones