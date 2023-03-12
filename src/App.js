import PopupContext from "./context/PopupContext";
import "./App.css";
import Layout from "./components/Layout";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMyAllLists } from "./features/todoLists";

function App() {
  const [popupContent, setPopupContent] = useState(null);
  const MY_LISTS = "myLists";
  const dispatch = useDispatch();

  // let todoLists = [
  //   {
  //     id: 1,
  //     header: "Shopping",
  //     todos: [
  //       { id: 1, description: "Buy milk", checked: false },
  //       { id: 2, description: "Buy eggs", checked: true },
  //       { id: 3, description: "Buy bread", checked: false },
  //       { id: 4, description: "Buy cheese", checked: true },
  //       { id: 5, description: "Buy fruit", checked: false },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     header: "Tasks",
  //     todos: [
  //       { id: 1, description: "Clean the house", checked: true },
  //       { id: 2, description: "Take out the trash", checked: true },
  //       { id: 3, description: "Mow the lawn", checked: true },
  //       { id: 4, description: "Do laundry", checked: true },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     header: "Work",
  //     todos: [
  //       { id: 1, description: "Finish project A", checked: false },
  //       { id: 2, description: "Send email to client B", checked: false },
  //       { id: 3, description: "Attend meeting C", checked: false },
  //       { id: 4, description: "Create presentation for D", checked: false },
  //       { id: 5, description: "Update website", checked: false },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     header: "Fitness",
  //     todos: [
  //       { id: 1, description: "Go for a run", checked: true },
  //       { id: 2, description: "Lift weights", checked: false },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     header: "Chores",
  //     todos: [
  //       { id: 1, description: "Wash dishes", checked: false },
  //       { id: 2, description: "Clean bathroom", checked: true },
  //       { id: 3, description: "Vacuum living room", checked: false },
  //       { id: 4, description: "Dust furniture", checked: true },
  //       { id: 5, description: "Water plants", checked: false },
  //       { id: 6, description: "Take out recycling", checked: false },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     header: "Study",
  //     todos: [
  //       { id: 1, description: "Read chapter 1", checked: true },
  //       { id: 2, description: "Do practice problems", checked: false },
  //       { id: 3, description: "Review lecture notes", checked: false },
  //       { id: 4, description: "Watch video tutorial", checked: true },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     header: "Social",
  //     todos: [
  //       { id: 1, description: "Call mom", checked: false },
  //       { id: 2, description: "Text friend", checked: true },
  //       { id: 3, description: "Plan birthday party", checked: false },
  //       { id: 4, description: "Go to dinner with family", checked: true },
  //       { id: 5, description: "Meet coworker for coffee", checked: false },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     header: "Errands",
  //     todos: [
  //       { id: 1, description: "Pick up dry cleaning", checked: false },
  //       { id: 2, description: "Buy groceries", checked: false },
  //       { id: 3, description: "Get gas for car", checked: true },
  //       {
  //         id: 4,
  //         description: "Drop off package at post office",
  //         checked: false,
  //       },
  //     ],
  //   },
  // ];
  useEffect(() => {
    const todoListString = localStorage.getItem(MY_LISTS);
    const todoLists = JSON.parse(todoListString);
    if (!todoLists) {
      const array = JSON.stringify([]);
      localStorage.setItem(MY_LISTS, array);
    } else {
      dispatch(setMyAllLists(todoLists));
    }
  }, []);

  return (
    <div className="App">
      <PopupContext.Provider value={{ setPopupContent, popupContent }}>
        <Layout />
        {popupContent && <Popup />}
      </PopupContext.Provider>
    </div>
  );
}

export default App;
