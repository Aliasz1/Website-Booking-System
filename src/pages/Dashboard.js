import React from "react";

import Profile from '../components/Profile';
import BookForm from "../components/BookForm";
import Calendar from "../components/Calendar";

const Dashboard = () => {
    return(
        <>
            <div>
                <Profile />
            </div>
            <div>
                <Calendar />
                <BookForm />
            </div>
        </>
    )
  };
  
  export default Dashboard;