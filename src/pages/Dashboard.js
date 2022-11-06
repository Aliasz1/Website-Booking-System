import React from "react";

import Profile from '../components/Profile';
import BookForm from "../components/BookForm";

const Dashboard = () => {
    return(
        <>
            <div>
                <Profile />
            </div>
            <div>
                <BookForm />
            </div>
        </>
    )
  };
  
  export default Dashboard;