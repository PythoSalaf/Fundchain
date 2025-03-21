import { createContext, useState, useEffect } from "react";
import {
  BrowserProvider,
  Contract,
  parseEther,
  formatEther,
  ethers,
} from "ethers";
import { abi } from "../constant/abi";

export const CrowdFundingContext = createContext();
const contractAddress = "0x2910E325cf29dd912E3476B61ef12F49cb931096";

// Get Ethereum Contract
const getEthereumContract = async () => {
  if (!window.ethereum) {
    alert("Metamask is not Installed");
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new Contract(contractAddress, abi, signer);
};

export const CrowdFundingProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  // Connect Wallet
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Metamask is not Installed");

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        localStorage.setItem("walletAddress", accounts[0]); // Save wallet address
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  // Auto-connect Wallet on Page Load
  useEffect(() => {
    const savedAccount = localStorage.getItem("walletAddress");
    if (savedAccount) {
      setAccount(savedAccount);
      setIsConnected(true);
    }
  }, []);

  // Disconnect Wallet
  const disconnectWallet = () => {
    setAccount("");
    setIsConnected(false);
    localStorage.removeItem("walletAddress");
  };

  const fetchCampaigns = async () => {
    try {
      const contract = await getEthereumContract();
      if (!contract) return;

      const rawData = await contract.getCampaigns(); // Fetch raw data
      const campaignsArray = Array.isArray(rawData) ? rawData : [rawData]; // Ensure it's an array

      // Extract campaign details properly
      const formattedCampaigns = campaignsArray.map((campaign) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.formatEther(campaign.target), // Convert Wei to ETH
        deadline: new Date(
          Number(campaign.deadline) * 1000
        ).toLocaleDateString(), // Convert timestamp to date
        amountCollected: ethers.formatEther(campaign.amountCollected),
        image: campaign.image,
      }));

      setCampaigns(formattedCampaigns);
      console.log("Formatted Campaigns:", formattedCampaigns);
    } catch (error) {
      console.error("Error Fetching Campaigns", error);
    }
  };

  // Donate to Campaign
  const donateToCampaign = async (id, amount) => {
    try {
      const contract = await getEthereumContract();
      if (!contract) return;

      const tx = await contract.donateToCampaign(id, {
        value: parseEther(amount),
      });

      await tx.wait();
      alert("Donation Successful!");
      fetchCampaigns();
    } catch (error) {
      console.error("Donation Failed:", error);
    }
  };

  // Create Campaign
  const createCampaign = async (
    title,
    description,
    target,
    deadline,
    image
  ) => {
    try {
      const contract = await getEthereumContract();
      if (!contract) return;
      const unixDeadline = Math.floor(new Date(deadline).getTime() / 1000);

      const tx = await contract.createCampaign(
        account, // Owner's address
        title,
        description,
        parseEther(target), // Convert target from ETH to Wei
        unixDeadline,
        image
      );

      await tx.wait(); // Wait for transaction confirmation
      alert("Campaign created successfully!");
      fetchCampaigns();
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  // Fetch campaigns automatically on page load
  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <CrowdFundingContext.Provider
      value={{
        account,
        campaigns,
        connectWallet,
        createCampaign,
        fetchCampaigns,
        donateToCampaign,
        isConnected,
        disconnectWallet,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
