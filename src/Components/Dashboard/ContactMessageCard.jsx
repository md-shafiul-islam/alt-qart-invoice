import React from "react";

const ContactMessageCard = ({ contact, ...props }) => {
  console.log("ContactMessageCard, ", contact);
  return (
    <div className="w-full">
      <div className="grid-cols-1 gap-4 ">
        <div className="flex flex-row gap-4">
          <div className="font-semibold">Name: </div>
          <div className="">
            {contact.firstName} {contact.lastName}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="font-semibold">Email: </div>
          <div className="">&nbsp;{contact.email}</div>
        </div>
        <div className="flex flex-row">
          <div className="font-semibold">Message: </div>
          <div className="">&nbsp;{contact.message}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessageCard;
