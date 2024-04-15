import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
    clientId: CLIENT_ID as string,
});
const contractABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getQuizzes",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "question",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "answer",
            "internalType": "string"
          }
        ],
        "internalType": "struct QuizGame.Quiz[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "guessAnswer",
    "inputs": [
      {
        "type": "uint256",
        "name": "quizIndex",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_answer",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isGameActive",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "quizMaster",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "quizzes",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "question",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "answer",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setQuestionAndAnswer",
    "inputs": [
      {
        "type": "string",
        "name": "_question",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_answer",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const;
  export const chain = defineChain(44787);
// connect to your contract
export const contract = getContract({ 
  client, 
  chain: chain, 
  address: "0x3263DCFD27fb7eAF678FB7596D2081A66CdF84e3",
    abi: contractABI
});

