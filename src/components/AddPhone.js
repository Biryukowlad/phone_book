import React from "react";

class AddPhone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone_number: '',
            islike: false
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({name: e.target.value})}/>
                <input placeholder="Телефон" onChange={(e) => this.setState({phone_number: e.target.value})}/>
                <label htmlFor="islike">Favorites</label>
                <input type="checkbox" id='islike' onChange={(e) => this.setState({islike: e.target.checked})}/>
                <button type="button" onClick={() => {
                    this.props.onClickCross()
                    this.myForm.reset()
                    this.props.onAdd({
                        name: this.state.name,
                        phone_number: this.state.phone_number,
                        islike: this.state.islike,
                })}}>Создать</button>
            </form>
        ) 
    }
}
export default AddPhone