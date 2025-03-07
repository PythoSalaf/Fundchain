import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi } from "../constant/abi";

export const CrowdFundingContext = createContext();
const contractAddress = "";

const getEthereumContract = () => {
  if (typeof window.ethereum === "undefined") {
    alert("Metamask is not Installed");
    return null
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner()
  return new ethers.Contract(contractAddress, abi, signer)  
};

export const CrowdFundingProvider = ({ children }) => {
  const [account, setAccount] = useState("")
  const [campaigns, setCampaigns] = useState([])
  const [isConnected, setIsConnected] = useState(false)
  // CONNECT WALLET FUNC
  const connectWallet = async () => {  
    if (typeof window.ethereum === "undefined") return alert("Metamask is not Installed");
  
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        setAccount(accounts[0]); 
        setIsConnected(true);
        localStorage.setItem("walletAddress", accounts[0]); // Save wallet address
      }
    } catch (error) {
      console.error("Wallet connection error:", error);  
    }
  };

  // AUTO-CONNECT WALLET ON PAGE LOAD
  useEffect(() => {
    const savedAccount = localStorage?.getItem("walletAddress");
    if (savedAccount) {
      setAccount(savedAccount);
      setIsConnected(true);
    }
  }, []);

  // DISCONNECT WALLET FUNC
  const disconnectWallet = () => {
    setAccount("");
    setIsConnected(false);
    localStorage.removeItem("walletAddress");
  };

  // FETCH CAMPAIGNS 
  const fetchCampaigns = async () => {
    try {
      const contract = getEthereumContract()
      if(!contract) return
      const data =  await contract.getCampaigns()
      setCampaigns(data)
    } catch (error) {
      console.error("Error Fetching Campaigns", error)
    }
  }

  // DONATE TO CAMPAIGN
  const donateToCampaign = async () => {
    try {
      const contract = getEthereumContract()
      if(!contract) return
      
      const tx =  await contract.donateToCampaign(id, {value: ethers.utils.parseEther(amount)})
      await tx.wait()
      alert("Donation Successfully!")
      fetchCampaigns()
    } catch (error) {
      console.error("Donation Failed.", error);
      
    }
  }

  // CREATE CAMPAIGN 

  const createCampaign = async (title, description, target, deadline, image) => {
    if (!contract) return alert("Smart contract not loaded!");
  
    try {
      const tx = await contract.createCampaign(
        account, // Owner's address
        title,
        description,
        ethers.utils.parseEther(target), // Convert target from ETH to Wei
        deadline,
        image
      );
  
      await tx.wait(); // Wait for transaction confirmation
      alert("Campaign created successfully!");
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  // FETCHING CAMPAIGNS AUTOMATICALLY ON PAGE LOAD

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <CrowdFundingContext.Provider value={{ account, campaigns, connectWallet, createCampaign, fetchCampaigns, donateToCampaign,isConnected, disconnectWallet }}>
      {children}
    </CrowdFundingContext.Provider>
  );
}
