import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import tokenAbi from "./utils/abi.json"
import { useContractReads } from 'wagmi'

function App() {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: '0xBbAA81A96E929144eba7b1E611aB4ffd572934Be',
        abi: tokenAbi,
        functionName: 'totalSupply',
      },
      {
        address: '0xBbAA81A96E929144eba7b1E611aB4ffd572934Be',
        abi: tokenAbi,
        functionName: 'tokenName',
      },
      {
        address: '0xBbAA81A96E929144eba7b1E611aB4ffd572934Be',
        abi: tokenAbi,
        functionName: 'tokenSymbol',
      },
    ],
  })

  return (
    <>
      <ConnectButton />
        <div>
          <h1>totalSupply</h1>
          <h2>{String(data?.[0].result ) ?? "not yet found"}</h2>

        </div>
        <div>
          <h1>tokenName</h1>
         

          <h2>{String(data?.[1].result ) ?? "not yet found"}</h2>

        </div>
        <div>
          <h1 className='h1'>tokenSymbol</h1>
          <h2>{String(data?.[2].result ) ?? "not yet found"}</h2>

        </div>
        <div>
        <button type="button" onclick="alert('click me')">Token Name!</button>
        </div>
      
    </>
  )
}

export default App
