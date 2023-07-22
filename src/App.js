import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import Phones from './components/Phones';
import ModalWindow from './components/ModalWindow';
import './css/style.css'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { get_all_phones } from './http/phoneAPI';

const App = observer(() => {
    const {phone} = useContext(Context)
    useEffect(() => {
        get_all_phones().then(data => phone.setPhones(data))
    }, [])
    const changeArrayAfterCreate = (needed_phone) => {
        phone.setPhones(helpChangeArrayAfterCreate(phone.phones, needed_phone))
    }
    const helpChangeArrayAfterCreate = (currentPhones, needed_phone) => {
        let first_unliked_index = currentPhones.findIndex(elem => elem.islike_person == false)
        if (currentPhones.length == 0) currentPhones.splice(0, 0, needed_phone)
        else {
            if (needed_phone.islike_person) {
                if (first_unliked_index == -1) {
                    let i = 0
                    for(; i < currentPhones.length; i++) if(currentPhones[i].name_person > needed_phone.name_person) break
                    currentPhones.splice(i, 0, needed_phone)
                }
                else {
                    let i = 0
                    for(; i < first_unliked_index; i++) if(currentPhones[i].name_person > needed_phone.name_person) break
                    currentPhones.splice(i, 0, needed_phone)
                }
            }
            else {
                if (first_unliked_index == -1) currentPhones.splice(currentPhones.length, 0, needed_phone)
                else {
                    let i = 0
                    for(i = first_unliked_index; i < currentPhones.length; i++) if(currentPhones[i].name_person > needed_phone.name_person) break
                    currentPhones.splice(i, 0, needed_phone)
                }
            }
        }
        return currentPhones;
    }
    const getCreatedPhoneInApp = (created_phone) => {
        changeArrayAfterCreate(created_phone)
    };
    return (
        <Container className="main_info">
            <Card style={{width: 600}} className='card'>
                <ListGroup>
                    <ListGroupItem className='list_group'>
                        <h2 className='title'>Телефонная книга</h2>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Phones />
                    </ListGroupItem>
                    <ModalWindow getCreatedPhoneInApp={getCreatedPhoneInApp}/>
                </ListGroup>
            </Card>
        </Container>
    );
});
export default App;