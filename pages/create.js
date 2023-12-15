// pages/create.js

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ethers } from "ethers";

import { abi } from "@/public/abi";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Add your logic here, for now, just console.log the input values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", number);

    const contractAddress = "0x3EDA13eaA199F04439067eebFbeB854454aC33cE";
    const contractAbi = abi;

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    console.log(contract);

    try {
      await contract.addUser(email, number, name);
      setName("");
      setEmail("");
      setNumber("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-blue-700 flex justify-center text-xl font-bold mt-5">Create User</h1>
      <form onSubmit={handleSubmit}   >
        <div className="mb-4">
          <label className="block text-red-800 mt-5 mx-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mx-2 rounded"

          />
        </div>
        <div className="mb-4">
        <label className="block text-red-800 mt-5 mx-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mx-2 rounded"
          />
        </div>
        <div className="mb-4">
        <label className="block text-red-800 mt-5 mx-2">Number</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border p-2 w-full mx-2 rounded"
          />
        </div>
        <div className="mb-4 text-center">
    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
      Add User
    </button>
  </div>
      </form>
    </div>
  );
};

export default Create;
