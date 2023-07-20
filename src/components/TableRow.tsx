import { Contact } from "../types/Contact";
import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

const TableRow = ({
  contact,
  tableIndex,
  onDelete,
  onUpdate
}: {
  contact: Contact;
  tableIndex: number;
  onDelete: any;
  onUpdate: any;
}) => {
  return (
    <tr>
      {/* change contact.id to just a number in the table */}
      <td>{tableIndex}</td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>
        <div>
          <button type="button" className="btn btn-info" onClick={onUpdate}>
            update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(contact)}
          >
            delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
