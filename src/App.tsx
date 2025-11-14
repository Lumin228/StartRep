import { useState } from 'react'
import './App.css'
import CafeInfo from './Folder/CafeInfo/CafeInfo';
import VoteOptions from './Folder/VoteOptions/VoteOptions';
import VoteStatus from './Folder/VoteStats/VoteStats';
import type { VoteType } from './types/types';




function App() {
const [vote, setVote] = useState<VoteType>({good: 0, neutral: 0, bad: 0,})

const Vote = (option: keyof VoteType) => {
  setVote(prev => ({
    ...prev,
    [option]: prev[option] + 1
  }));
};

const Reset = () => {
  setVote({good: 0, neutral: 0, bad: 0,});
}

const totalVotes:number = vote.good + vote.neutral + vote.bad;
const positiveRate:number = totalVotes ? Math.round((vote.good / totalVotes) * 100) : 0



  return (
    <div>
      <CafeInfo />
      <VoteOptions click={Vote} clear={Reset}/>
      <VoteStatus result={vote} general={totalVotes} other={positiveRate}/>
    </div>
  );
}

export default App;