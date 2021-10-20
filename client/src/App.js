// import React, { useEffect, useState } from "react";
// import Election from "./contracts/Election.json";
// import Web3 from "web3";

// import "./App.css";

// function App(){

//   useEffect(()=>{
//     loadWeb3();
//     loadBlockChainData();
//   },[])

//   const [currentAccount, setCurrentAccount] = useState("");
//   const loadWeb3 = async ()=> {
//     if(window.ethereum)
//     {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     }
//     else if(window.web3)
//     {
//       window.web3 = new Web3(window.web3.currentProvider);
//     }
//     else
//       window.alert("You should try considering metamask!!");
//   }

// const loadBlockChainData = async() =>{
//    // Get network provider and web3 instance.
//   const web3 = window.web3;

//   // Use web3 to get the user's accounts.
//   const accounts = await web3.eth.getAccounts();
//   const account = accounts[0];
  
//   //web3.eth.getBalance(accounts[0]).then(console.log);
//   setCurrentAccount(account);
  
//   // Get the contract instance.
//    const networkId = await web3.eth.net.getId();
  
//    const networkData = Election.networks[networkId];
//    console.log("NET: "+ networkId);
//    if(networkData)
//    {
     
//       const election = new web3.eth.Contract(Election.abi, networkData && networkData.address);
//       const electionname = await election.methods.electionName.call();
//       console.log(electionname);
//       console.log(election);
//    }
//    else{
//      window.alert("Smart contract is not deployed to current network!!");
//    }
//   }

// return(
//   <div> <p> ElectionDapp Cuurent Account: {currentAccount} </p> </div>
// )
// }
// export default App;

import React,{useEffect} from 'react';
import {init} from './Web3Client.js';

function App()
{
  useEffect(()=>{
    init();

  },[]);
  return <div className="App"> </div>
}



export default App;
