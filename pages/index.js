import React from "react";
import Navbar from "../components/Navbar.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-blue-700 font-bold mb-4 flex justify-center items-center">
        Welcome to User Management
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-lg text-gray-700 leading-7 mx-8 text-center ">
          In this assessment, I've used Nest.js to create a server that also
          manages the connection to MongoDB database. I've utilized Moralis
          streams to listen to the events emitted by my smart contract deployed
          on the Polygon Mumbai testnet. The data from these events is retrieved
          through Moralis streams and stored in the database. For the frontend,
          I've used Next.js. To add user data , click on Add Details on the
          Navbar and to view User details, click on View Users on the Navbar.
        </p>
      </div>
    </div>
  );
};

export default Home;
