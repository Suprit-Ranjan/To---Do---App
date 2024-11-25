import React, { useEffect } from "react";
import Todo from "./Components/Todo";
import { useDispatch } from "react-redux";
import { actionToFetchDataFromLocal } from "./redux/actionCreator/actionsCreators";
import Header from "./Components/Header";  // Import Header component
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const App = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const instanceOfDate = new Date();
  let today = daysOfWeek[instanceOfDate.getDay()];
  let today_date = instanceOfDate.getDate();
  let curr_month = months[instanceOfDate.getMonth()];

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatching the actionCreator to fetch data from local storage on refreshing or reloading page.
    dispatch(actionToFetchDataFromLocal());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="app-box">
        <header>
          <div className="container text-center">
            <h1>Assignment</h1>
          </div>
        </header>

        {/* Insert Header component here */}
        <Header /> {/* This will render your header below the "Assignment" title */}

        <div className="top-of-todo">
          To-Do App {" -->   "}
          {today_date}{" "}
          {curr_month}
          {" "},
          {" "}
          {today}
        </div>
        <Todo />
      </div>
    </div>
  );
};

export default App;
