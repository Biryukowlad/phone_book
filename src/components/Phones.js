import React from "react";
import Phone from "./Phone";

class Phones extends React.Component {
    render() {
        if (this.props.phones.length > 0)
            return (
                <div>
                    {this.props.phones.map((el) => (
                        <Phone onDelete={this.props.onDelete} key={el.id} phone={el}/>
                    ))}
                </div>
            ) 
        else
            return (
                <div>
                    <h2>Номеров телефонов нет!</h2>
                </div>
            )
    }
}
export default Phones