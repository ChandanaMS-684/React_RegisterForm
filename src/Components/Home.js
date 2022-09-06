import React from "react";

function Home() {
  return (
    <>
     <h1>Welcome to  Dashboard</h1>

     <div>
      <h1>Search by Position:
        <li>Member</li>
        <li>Manager</li>
      </h1>
     </div>
        <>
        <button onClick={handleClick}>Logout</button>
        </>
      
    </>
  );
}

export default Home;