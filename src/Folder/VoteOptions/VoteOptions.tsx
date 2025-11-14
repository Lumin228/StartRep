import type { VoteType } from '../../types/types';

interface VoteOptionsProps {
    click: (option: keyof VoteType) => void;
    clear: () => void;
}

function VoteOptions({click, clear}: VoteOptionsProps) {

    return(
        <div>
            <button onClick={() => {click('good')}}>Good</button>
            <button onClick={() => {click('neutral')}}>Neutral</button>
            <button onClick={() => {click('bad')}}>Bad</button>
            <button onClick={() => {clear()}}>Reset</button>
        </div>
    )

}

export default VoteOptions;