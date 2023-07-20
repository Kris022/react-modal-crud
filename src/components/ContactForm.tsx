const ContactForm = () => {
  return (
    <form className="bg-light p-3 rounded">
      <div className="form-group">
        <label>First Name</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group mb-3">
        <label>Email Address</label>
        <input className="form-control" type="text" />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
