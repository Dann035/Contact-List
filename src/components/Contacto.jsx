import React from "react";
import img_avatar from "../assets/img/img_avatar.webp";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import { deleteContact } from "../services/services";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Contacto({ name, address, phone, id, email }) {
  const { store, dispatch } = useGlobalReducer();
  // const [contactId, setContactId] = useState(null);
  return (
    <div className="card mb-3">
      <div className="row g-0 p-3">
        <div className="col-md-2 text-center">
          <img
            src={img_avatar}
            className="img-fluid rounded-circle"
            width={"150em"}
            alt="Avatar"
          />
        </div>
        <div className="col-md-10 d-flex">
          <div className="card-body p-0">
            <h3 className="card-title">{name}</h3>
            <p className="card-text my-1">{address}</p>
            <p className="card-text my-1">{phone}</p>
            <p className="card-text">
              <small className="text-body-secondary">{email}</small>
            </p>
          </div>
          <div className="col-md-2">
            <Link to={`/edit_contact/${id}`}>
              <button className="btnEdit me-4 ms-4 rounded-4">
                <i className="bi bi-pencil"></i>
              </button>
            </Link>
            <button type="button" className="btnDelete rounded-4" data-bs-toggle="modal" data-bs-target={`#deleteModal${id}`}>
              <i className="bi bi-trash"></i>
            </button>
            <div
              className="modal fade"
              id={`deleteModal${id}`}
              tabindex="-1"
              aria-labelledby="deleteModal"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="deleteModal">
                      Eliminar Contacto
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">Estas seguro que deseas eliminar este contacto?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => {
                      deleteContact(dispatch,id);
                    }} 
                    data-bs-dismiss="modal"
                    >
                      Si, Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
