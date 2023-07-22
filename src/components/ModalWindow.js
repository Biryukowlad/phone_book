import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import 'react-responsive-modal/styles.css';
import AddPhone from './AddPhone';
import { Button } from 'react-bootstrap';
import '../css/style.css'


const ModalWindow = observer( (props) => {
  const getCreatedPhoneInModal = (created_phone) => {
    props.getCreatedPhoneInApp(created_phone);
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
        <div className='list_group'><Button onClick={toggleModal} className="button">Добавить</Button></div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <Button className='button_close' onClick={toggleModal} >x</Button>
            <AddPhone getCreatedPhoneInModal={getCreatedPhoneInModal} closeModal={toggleModal}/>
          </div>
        </div>
      )}
    </div>
  );
});
export default ModalWindow;






















// const ModalWindow = observer((props) => {
//     return (
//         <div className={props.active ? 'modal.active' : 'modal'} onClick={() => props.setActive(false)}>
//             <div className={props.active ? 'modal__content.active' : 'modal__content'} onClick={e => e.stopPropagation()}>
//                 <p>Помогите мне пожалуйста</p>
//             </div>
//         </div>
//     )
// });
// export default ModalWindow;







// const ModalWindow = observer((props) => {
//     console.log("Это props.opMod")
//     console.log(props.opMod)
//     return (
//         <Container className="main_info">
//             <Modal open={true} center>
//                 <AddPhone />
//             </Modal>
//         </Container>
//     )
// });
// export default ModalWindow;






















// class ModalWindow extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         openModal: false
//     //     }
//     // }
//     // onClickButton = e =>{
//     //     e.preventDefault()
//     //     this.setState({openModal : true})
//     // }
//     // onCloseModal = ()=>{
//     //     this.setState({openModal : false})
//     // }

//     //  onClose={this.onClickCross}
//     render() {
//         return (
//             <Container className="main_info">
//                 <Modal open={this.props.opMod} center>
//                     <AddPhone onAdd={this.props.onAdd} onClickCross={this.props.onClickCross}/>
//                 </Modal>
//             </Container>
//         )
//     }  
// }

// export default ModalWindow