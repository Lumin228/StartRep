import type { VoteType } from '../../types/types';

interface VoteStatusProps {
    result: VoteType;
    general: number;
    other: number;
}

function VoteStatus({result, general, other}: VoteStatusProps) {
    
    return <div>
        <p>Good: {result.good}</p>
        <p>Neutral: {result.neutral}</p>
        <p>Bad: {result.bad}</p>
        <p>Total: {general}</p>
        <p>Positive feedback: {other} %</p>
    </div>
}

export default VoteStatus;