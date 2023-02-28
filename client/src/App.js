import PopupContext from "./context/PopupContext";
import "./App.css";
import Layout from "./components/Layout";
import Popup from "./components/Popup";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const todoLists = [
    {
      id: 1,
      header: "Chores",
      todos: [
        { id: 1, description: "Do laundry", checked: false },
        { id: 2, description: "Wash dishes", checked: true },
        { id: 3, description: "Buy groceries", checked: false },
        { id: 4, description: "Do laundry", checked: false },
        { id: 5, description: "Wash dishes", checked: true },
        { id: 6, description: "Buy groceries", checked: false },
        { id: 7, description: "Do laundry", checked: false },
        { id: 8, description: "Wash dishes", checked: true },
        { id: 9, description: "Buy groceries", checked: true },
      ],
    },
  ];
  const [popupContent, setPopupContent] = useState(null);

  return (
    <div className="App">
      <PopupContext.Provider value={setPopupContent}>
        <Layout />
        {popupContent && <Popup>{popupContent}</Popup>}
      </PopupContext.Provider>
    </div>
  );
}

export default App;
