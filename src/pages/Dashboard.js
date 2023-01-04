import React from "react";

import Profile from '../components/Profile';
import BookingPageBody from "./bodies/BookingPageBody";

const Dashboard = () => {
    return(
        <>
            <div>
                <Profile />
            </div>

            {/* When new layout is implemented, it is sufficient to move BookingPageBody where it is desired. */}
            
            <div>
                <BookingPageBody />
            </div>
        </>
    )
  };
  
  export default Dashboard;