import { useState, useEffect } from "react";

import { Contact } from "../types/Contact";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface FormProps {
  onCloseModal: any;
  visible: boolean;
  selectedContactIndex: number;
  contactsData: Contact[];
  onSubmitData: any;
}

const ContactFormModal = ({
  visible,
  onCloseModal,
  selectedContactIndex,
  contactsData,
  onSubmitData,
}: FormProps) => {
  const newContact = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState<Contact>(newContact);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    setFormErrors({});

    // If not valid index of the contact array
    if (selectedContactIndex != -1) {
      // form input fields to item selected in update
      setFormData(contactsData[selectedContactIndex]);
    } else {
      setFormData(newContact);
    }
  }, [visible]);

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required!";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    }

    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const modalStyle = {
    display: visible ? "block" : "none",
  };

  return (
    <div
      className="modal text-black"
      tabIndex={-1}
      role="dialog"
      style={modalStyle}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* Modal header */}
          <div className="modal-header">
            <h5 className="modal-title">Modal Title</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCloseModal}
            ></button>
          </div>

          {/* Form - Modal body */}
          <div className="modal-body">
            <form className="bg-light p-3 rounded">
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                {/* First name error */}
                {formErrors.firstName && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.firstName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                {formErrors.lastName && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.lastName}
                  </div>
                )}
              </div>
              <div className="form-group mb-3">
                <label>Email Address</label>
                <input
                  className="form-control"
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {formErrors.email && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.email}
                  </div>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                      onSubmitData(formData);
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
