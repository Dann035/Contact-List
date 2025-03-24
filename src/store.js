export const initialStore = () => {
  return {
    message: null,
    contacts: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_contact":
      return {
        ...store,
        contacts: action.payload,
      };
    case "edit_contact":
      return {
        ...store,
        contacts: contacts.map((contacto) => {
          contacto.id === action.payload.id ? action.payload : contacto
        })
      };
    case "add_contact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };
    case "delete_contact":
    return {
      ...store,
      contacts: store.contacts.filter(contacto => action.payload !== contacto.id),
    };
    default:
      throw Error("Unknown action.");
  }
}
