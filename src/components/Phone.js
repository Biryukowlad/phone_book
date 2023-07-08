import React from "react";
import {AiOutlineClose, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';
import '../css/style.css'

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            touchHeart: false
        }
    }
    phone = this.props.phone
    render() {
        return (
            <Row className="row">
                <Col>
                    <div>
                        <BsFillPersonFill size={42}/>
                    </div>
                </Col>
                <Col className="name_phone_col">
                    <div>
                        <h2>{this.phone.name}</h2>
                        <h3>{this.phone.phone_number}</h3>
                    </div>
                </Col>
                <Col>
                    <div>
                        <div className="icon_margin">
                            <AiOutlineClose onClick={() => this.props.onDelete(this.phone.id)}/>
                        </div>
                        <div className="icon_margin">
                            {!this.state.touchHeart && <AiOutlineHeart onClick={() => {
                                this.setState({
                                    touchHeart: !this.state.touchHeart
                                })
                            }
                            }/>}
                            {this.state.touchHeart && <AiFillHeart onClick={() => {
                                this.setState({
                                    touchHeart: !this.state.touchHeart
                                })
                            }
                            }/>}
                        </div>
                    </div>
                </Col>
            </Row>
        ) 
    }
}
export default Phone