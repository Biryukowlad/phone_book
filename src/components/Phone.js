import React from "react";
import {AiOutlineClose, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

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
            <div>
                <h2>{this.phone.phone_number}</h2>
                <h3>{this.phone.name}</h3>
                <AiOutlineClose onClick={() => this.props.onDelete(this.phone.id)}/>
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
        ) 
    }
}
export default Phone