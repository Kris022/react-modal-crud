import { useState, useEffect } from "react";

import { Contact } from "../types/Contact";

import TableRow from "./TableRow";
import ContactFormModal from "./ContactFormModal";

const ContactTable = () => {
  const [dataIndex, setDataIndex] = useState<number>(-1);
  const [visible, setVisible] = useState<boolean>(false);

  const [contactsData, setContactsData] = useState<Contact[]>([]);

  useEffect(() => {
    // Fetch contact data when the component is first rendered
    fetchConactData();
  }, []);

  // Get all contacts from the database
  const fetchConactData = async () => {
    const res = await fetch("http://localhost:4000/api/contacts/");
    const json = await res.json();

    if (res.ok) {
      setContactsData(json);
    }
  };

  // Add new contact
  const postContactData = async (contact: Contact) => {
    const res = await fetch("http://localhost:4000/api/contacts/", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();

    if (res.ok) {
      fetchConactData();
    }
  };

  // Update contact
  const updateContactData = async (contact: Contact) => {
    // Update
    if (dataIndex != -1) {
      // console.log("update");
      const res = await fetch(
        "http://localhost:4000/api/contacts/" + contact.id,
        {
          method: "PATCH",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = res.json();
      if (res.ok) {
        fetchConactData();
      }
    }
    // Add
    else {
      // console.log("add");
      postContactData(contact);
    }

    // will be placed diff when doing validations
    closeFormModal();
  };

  // Remove contact
  const deleteContactData = async (contact: Contact) => {
    const res = await fetch(
      "http://localhost:4000/api/contacts/" + contact.id,
      { method: "DELETE" }
    );

    const json = await res.json();

    if (res.ok) {
      fetchConactData();
    }
  };

  const closeFormModal = () => {
    setVisible(false);
    setDataIndex(-1);
  };

  // need a function to open modal that takes data to be in the form

  return (
    <div className="card bg-dark text-white">
      {/* Table header */}
      <div className="card-header d-flex justify-content-between">
        <h4>Manage Contacts</h4>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => setVisible(true)}
        >
          Add Contact
        </button>
      </div>

      {/* Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((contact, index) => (
            <TableRow
              key={contact.id}
              contact={contact}
              tableIndex={index + 1}
              onDelete={deleteContactData}
              onUpdate={() => {
                setDataIndex(index);
                setVisible(true);
              }}
            />
          ))}
        </tbody>
      </table>

      {/* modal form */}
      <ContactFormModal
        visible={visible}
        onCloseModal={closeFormModal}
        contactsData={contactsData}
        selectedContactIndex={dataIndex}
        onSubmitData={updateContactData}
      />
    </div>
  );
};

export default ContactTable;
