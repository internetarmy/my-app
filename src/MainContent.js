import React from "react";
import ContactCard from "./ContactCard";
import EventHandling from "./EventHandling";
import StateChangeDemo from "./StateChangeDemo";
import StateDemo from "./StateDemo";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>State Demo starts.</h3>
          <StateDemo />
          <h3>State Demo Ends.</h3>
        </div>
        <hr />
        <h3>Change State Code Starts</h3>
        <StateChangeDemo />
        <h3>Change State Code Ends</h3>
        <hr />
        <p>Code here for event Handling in react Start</p>
        <EventHandling />
        <p>Code here for event Handling in react End</p>
        <hr />
        <h3>Contact Card Code Start</h3>
        <ContactCard
          contact={{
            name: "Siva Sankar",
            imgUrl: "http://placekitten.com/96/139",
            phone: "123456789",
            email: "Safam@gmail.com",
          }}
        />
        <ContactCard
          contact={{
            name: "Nani",
            imgUrl: "http://placekitten.com/96/140",
            phone: "123456789",
            email: "asdfaf@gmail.com",
          }}
        />

        <ContactCard
          contact={{
            name: "Dinesh",
            imgUrl: "http://placekitten.com/200/139",
            phone: "123456789",
            email: "dgfgds@gmail.com",
          }}
        />

        <ContactCard
          contact={{
            name: "Gopi",
            imgUrl: "http://placekitten.com/200/140",
            phone: "123456789",
            email: "sdgfd@gmail.com",
          }}
        />
        <h3>Contact Card Code End</h3>
      </div>
    );
  }
}

export default MainContent;
