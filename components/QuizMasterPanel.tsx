import React, { useState } from 'react';
import { useSendTransaction } from 'thirdweb/react';
import { contract } from '../utils/constant';

export default function Component() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
  const sendTransaction = useSendTransaction();

  const call = () => {
    const transaction = {
      contract,
      method: "setQuestionAndAnswer",
      params: [question, answer]
    };
    sendTransaction.mutate(transaction, {
      onSuccess: () => {
        console.log("Transaction sent successfully");
      },
      onError: (error) => {
        console.error('Error sending transaction:', error);
      }
    });
  }

  return (
    <div>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter question" />
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter answer" />
      <button onClick={call}>Send Question & Answer</button>
      {sendTransaction.error && <p>Error sending transaction: {sendTransaction.error.message}</p>}
    </div>
  );
}