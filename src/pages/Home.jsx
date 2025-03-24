import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { Contacto } from "../components/Contacto.jsx";
import { useEffect } from "react";
import { getAgenda} from "../services/services.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    getAgenda(dispatch)
  },[])
  return (
    <div className="container">
      {store.contacts.map(contacto => {
        return (
          <Contacto key={contacto.id} {...contacto}/>
        )
      })}
    </div>
  );
};
