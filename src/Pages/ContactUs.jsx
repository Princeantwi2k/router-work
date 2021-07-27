import React from "react";

const ContactUs = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: `center` }}>
        ContactUs Page {props.match.params.id}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis facere
        quisquam aperiam tenetur nobis quod ad eaque qui laudantium quia,
        tempore ipsam earum at quam est fugit sint numquam debitis.
      </p>
    </div>
  );
};

export default ContactUs;
