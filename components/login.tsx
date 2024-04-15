'use client';
import React from 'react';
import { client, chain } from '../utils/constant';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';


const Login: React.FC = () => {
  const account = useActiveAccount();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {account ? (
        <>
          <div>
            <ConnectButton client={client} chain={chain} />
          </div>

        </>
      ) : (
        <div>
          <ConnectButton client={client} chain={chain} />
        </div>
      )}
    </div>
  );
};

export default Login;