import React, { useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import Phone from "./Phone";
import { Context } from '../index';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../css/style.css'
import { get_all_phones } from '../http/phoneAPI';

const Phones = observer(() => {
    const {phone} = useContext(Context)
    useEffect(() => {
        get_all_phones().then(data => phone.setPhones(data))
    }, [])
    const changeArray = (phone_id) => {
        phone.setPhones(helpChangeArray(phone.phones, phone_id))
    }
    const helpChangeArray = (currentPhone, phone_id) => {
        const foundPhoneIndex = currentPhone.findIndex(entry => entry.id_person === phone_id);
        if (foundPhoneIndex !== -1) currentPhone[foundPhoneIndex].islike_person = !currentPhone[foundPhoneIndex].islike_person;
        return currentPhone;
    }
    const changeArrayDelete = (phone_id) => {
        phone.setPhones(helpChangeArrayDelete(phone.phones, phone_id))
    }
    const helpChangeArrayDelete = (currentPhone, phone_id) => {
        const foundPhoneIndex = currentPhone.findIndex(entry => entry.id_person === phone_id);
        if (foundPhoneIndex !== -1) currentPhone.splice(foundPhoneIndex, 1);
        return currentPhone;
    }
    if (phone.phones.length != 0) {
        return (
            <Container className="main_info">
                <ListGroup className="list_phones">
                    {phone.phones.map((el) => (
                        <ListGroupItem className="phone_row">
                            <Phone key={el.id_person} one_phone={el} onDelete={changeArrayDelete} onChangeArray={changeArray}/>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        ) }
    else
        return (
            <div>
                <h2>Номеров телефонов нет!</h2>
            </div>
        )
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