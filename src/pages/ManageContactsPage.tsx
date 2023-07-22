import ContactTable from "../components/ContactTable";
import "../Button.css";

const ManageContactsPage = () => {
  return (
    <div className="full-container">
      <div className="container">
        <ContactTable />
      </div>
    </div>
  );
};

export default ManageContactsPage;
