
function ContactCard (props) {
    return (
        <div className = "contactCard">
            <h3>name :- {props.contact.name}</h3>
            <img alt= "Person Img" src={props.contact.imgUrl} />
            <p>Phone:- {props.contact.phone}</p>
            <p>Email:- {props.contact.email}</p>
        </div>
    )
/**
 * below code show how to make the above funtional component to
 * a class based component
 * class ContactCard extends React.Component  {
    render(){
        return (
            <div className = "contactCard">
                <h3>name :- {this.props.contact.name}</h3>
                <img alt= "Person Img" src={this.props.contact.imgUrl} />
                <p>Phone:- {this.props.contact.phone}</p>
                <p>Email:- {this.props.contact.email}</p>
            </div>
        )
    }

 */

}

export default ContactCard;