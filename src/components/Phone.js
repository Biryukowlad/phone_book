import React from "react";
import { observer } from 'mobx-react-lite';
import {AiOutlineClose, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import '../css/style.css'
import { liked_phone, unliked_phone, delete_phone } from '../http/phoneAPI';

const Phone = observer((props) => {
    let touchHeart = props.one_phone.islike_person
    const changeIsLikeTrue = async() => {
        liked_phone(props.one_phone.id_person)
        props.onChangeArray(props.one_phone.id_person)
    }
    const changeIsLikeFalse = async() => {
        unliked_phone(props.one_phone.id_person)
        props.onChangeArray(props.one_phone.id_person)
    }
    const deletePh = async() => {
        delete_phone(props.one_phone.id_person)
        props.onDelete(props.one_phone.id_person)
    }
    return (
        <Row className="row">
            <Col>
                <div>
                    {!props.one_phone.photo_person && <BsFillPersonFill size={42}/>}
                    {props.one_phone.photo_person && <Image className="icon_phone" width={40} height={40} src={'http://localhost:8081/' + props.one_phone.photo_person}></Image>}
                </div>
            </Col>
            <Col className="name_phone_col">
                <div>
                    <h2>{props.one_phone.name_person}</h2>
                    <h3>{props.one_phone.phone_num_person}</h3>
                </div>
            </Col>
            <Col>
                <div>
                    <div className="icon_margin">
                        <AiOutlineClose onClick={deletePh}/>
                    </div>
                    <div className="icon_margin">
                        {!touchHeart && <AiOutlineHeart onClick={changeIsLikeTrue}/>}
                        {touchHeart && <AiFillHeart onClick={changeIsLikeFalse}/>}
                    </div>
                </div>
            </Col>
        </Row>
    )
});
export default Phone;

























// class Phone extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             touchHeart: false
//         }
//     }
//     phone = this.props.phone
//     render() {
//         return (
//             <Row className="row">
//                 <Col>
//                     <div>
//                         <BsFillPersonFill size={42}/>
//                     </div>
//                 </Col>
//                 <Col className="name_phone_col">
//                     <div>
//                         <h2>{this.phone.name}</h2>
//                         <h3>{this.phone.phone_number}</h3>
//                     </div>
//                 </Col>
//                 <Col>
//                     <div>
//                         <div className="icon_margin">
//                             <AiOutlineClose onClick={() => this.props.onDelete(this.phone.id)}/>
//                         </div>
//                         <div className="icon_margin">
//                             {!this.state.touchHeart && <AiOutlineHeart onClick={() => {
//                                 this.setState({
//                                     touchHeart: !this.state.touchHeart
//                                 })
//                             }
//                             }/>}
//                             {this.state.touchHeart && <AiFillHeart onClick={() => {
//                                 this.setState({
//                                     touchHeart: !this.state.touchHeart
//                                 })
//                             }
//                             }/>}
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//         ) 
//     }
// }
// export default Phone