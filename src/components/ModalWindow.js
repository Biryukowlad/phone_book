import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AddPhone from './AddPhone';

class ModalWindow extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         openModal: false
    //     }
    // }
    // onClickButton = e =>{
    //     e.preventDefault()
    //     this.setState({openModal : true})
    // }
    // onCloseModal = ()=>{
    //     this.setState({openModal : false})
    // }

    //  onClose={this.onClickCross}

    render() {
        return (
            <div>
                {this.props.opMod && <Modal open={this.props.opMod}>
                    <AddPhone onAdd={this.props.onAdd} onClickCross={this.props.onClickCross}/>
                </Modal>}
            </div>
        )
    }  
}

export default ModalWindow