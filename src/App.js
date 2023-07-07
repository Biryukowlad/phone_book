import React from 'react';
import Header from './components/Header';
import Phones from './components/Phones';
import ModalWindow from './components/ModalWindow';
import './css/style.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phones: [
                {
                    id: 1,
                    phone_number: 89963427290,
                    name: 'Vlad',
                    islike: false
                },
                {
                    id: 2,
                    phone_number: 89272002421,
                    name: 'Kris',
                    islike: true
                },
            ],
            openModal: false
        }
        this.addPhone = this.addPhone.bind(this)
        this.deletePhone = this.deletePhone.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    render() {
        return (
            <div className='main_info'>
                <div className='main_window'>
                    <Header title='Телефонная книга' className='header'/>
                    <Phones phones={this.state.phones} onDelete={this.deletePhone}/>
                    <button onClick={() => {
                    this.setState({
                        openModal: true
                    })
                }
                }>Добавить</button>
                {this.state.openModal && <ModalWindow opMod={this.state.openModal} onClickCross={this.closeModal} onAdd={this.addPhone}/>}
                </div>
            </div>
        )
    }
    addPhone(phone) {
        const id = this.state.phones.length + 1
        this.setState({phones: [...this.state.phones, {id, ...phone}]})
    }
    deletePhone(id) {
        this.setState({phones: this.state.phones.filter((el) => el.id !== id)})
    }
    closeModal() {
        this.setState({
            openModal: false
        })
    }
}
export default App


// серый #ceced7
// темно-синий #002445
// красный #d2354c
// серо-синий #8390ae