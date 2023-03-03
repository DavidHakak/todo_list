import PopupContext from "./context/PopupContext";
import "./App.css";
import Layout from "./components/Layout";
import Popup from "./components/Popup";
import { useState } from "react";
import TodoList from "./components/TodoList";
import AddNewTodoList from "./components/AddNewTodoList";

function App() {
  const [popupContent, setPopupContent] = useState(null);

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
  //   {
  //     id: 9,
  //     header: "Projects",
  //     todos: [
  //       { id: 1, description: "Work on project A", checked: false },
  //       { id: 2, description: "Complete task B", checked: true },
  //       { id: 3, description: "Submit proposal for C", checked: false },
  //       { id: 4, description: "Attend meeting for D", checked: true },
  //       { id: 5, description: "Brainstorm ideas for E", checked: false },
  //       { id: 6, description: "Research topic for F", checked: false },
  //       { id: 7, description: "Create plan for G", checked: true },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     header: "Home",
  //     todos: [
  //       { id: 1, description: "Fix leaky faucet", checked: false },
  //       { id: 2, description: "Paint living room", checked: true },
  //       { id: 3, description: "Clean gutters", checked: false },
  //       { id: 4, description: "Organize closet", checked: true },
  //       { id: 5, description: "Install new light fixture", checked: false },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     header: "Self-care",
  //     todos: [
  //       { id: 1, description: "Take a bubble bath", checked: true },
  //       { id: 2, description: "Meditate for 10 minutes", checked: false },
  //       { id: 3, description: "Do yoga", checked: false },
  //       { id: 4, description: "Get a haircut", checked: true },
  //       { id: 5, description: "Try a new skincare routine", checked: false },
  //     ],
  //   },
  //   {
  //     id: 12,
  //     header: "Finances",
  //     todos: [
  //       { id: 1, description: "Create budget for month", checked: false },
  //       { id: 2, description: "Pay bills", checked: false },
  //       { id: 3, description: "Check credit score", checked: true },
  //       { id: 4, description: "Update investments", checked: false },
  //       { id: 5, description: "Meet with financial advisor", checked: false },
  //     ],
  //   },
  //   {
  //     id: 13,
  //     header: "Travel",
  //     todos: [
  //       { id: 1, description: "Book hotel for trip", checked: false },
  //       { id: 2, description: "Research activities to do", checked: true },
  //       { id: 3, description: "Book flights", checked: false },
  //       { id: 4, description: "Pack suitcase", checked: true },
  //       { id: 5, description: "Rent car", checked: false },
  //     ],
  //   },
  //   {
  //     id: 14,
  //     header: "Gardening",
  //     todos: [
  //       { id: 1, description: "Plant flowers", checked: false },
  //       { id: 2, description: "Weed garden", checked: true },
  //       { id: 3, description: "Water plants", checked: false },
  //       { id: 4, description: "Trim hedges", checked: false },
  //       { id: 5, description: "Fertilize lawn", checked: false },
  //       { id: 6, description: "Add mulch to flower beds", checked: false },
  //     ],
  //   },
  //   {
  //     id: 15,
  //     header: "Entertainment",
  //     todos: [
  //       { id: 1, description: "Watch movie", checked: false },
  //       { id: 2, description: "Read book", checked: true },
  //       { id: 3, description: "Listen to new album", checked: false },
  //       { id: 4, description: "Play video game", checked: true },
  //       { id: 5, description: "Try new restaurant", checked: false },
  //     ],
  //   },
  //   {
  //     id: 16,
  //     header: "Exercise",
  //     todos: [
  //       { id: 1, description: "Go for a run", checked: false },
  //       { id: 2, description: "Take a fitness class", checked: false },
  //       { id: 3, description: "Do strength training", checked: true },
  //       { id: 4, description: "Stretch for 10 minutes", checked: false },
  //       { id: 5, description: "Take a yoga class", checked: false },
  //     ],
  //   },
  //   {
  //     id: 17,
  //     header: "Learning",
  //     todos: [
  //       { id: 1, description: "Read book on new topic", checked: true },
  //       { id: 2, description: "Take online course", checked: false },
  //       { id: 3, description: "Learn new skill", checked: false },
  //       { id: 4, description: "Attend workshop or conference", checked: false },
  //       { id: 5, description: "Listen to educational podcast", checked: true },
  //     ],
  //   },
  //   {
  //     id: 18,
  //     header: "Social",
  //     todos: [
  //       { id: 1, description: "Meet friend for coffee", checked: false },
  //       { id: 2, description: "Attend party or event", checked: false },
  //       {
  //         id: 3,
  //         description: "Volunteer at local organization",
  //         checked: true,
  //       },
  //       { id: 4, description: "Join club or group", checked: false },
  //       { id: 5, description: "Call family member or friend", checked: true },
  //     ],
  //   },
  //   {
  //     id: 19,
  //     header: "Career",
  //     todos: [
  //       { id: 1, description: "Update resume", checked: false },
  //       { id: 2, description: "Apply for new job", checked: false },
  //       { id: 3, description: "Network with professionals", checked: true },
  //       { id: 4, description: "Attend industry event", checked: false },
  //       {
  //         id: 5,
  //         description: "Create professional development plan",
  //         checked: true,
  //       },
  //     ],
  //   },
  //   {
  //     id: 20,
  //     header: "Technology",
  //     todos: [
  //       { id: 1, description: "Update software on computer", checked: false },
  //       { id: 2, description: "Clean out email inbox", checked: true },
  //       { id: 3, description: "Organize digital files", checked: false },
  //       { id: 4, description: "Learn new software program", checked: true },
  //       { id: 5, description: "Backup data", checked: false },
  //     ],
  //   },
  // ];
  const todoListString = localStorage.getItem("myLists");
  const todoList = JSON.parse(todoListString);

  if (!todoList || todoList.length <= 0) {
    const array = JSON.stringify([]);
    localStorage.setItem("myLists", array);
  }

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
