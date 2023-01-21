import {useState} from "react";

const MultiStep = ({steps, onNext}) => {
    const [index, setIndex] = useState(0);

    const Component = steps[index];

    const decrement = () => {
        if (index === 0)
        {
            return;
        }
        setIndex(index - 1);
        onNext();
    }

    const increment = () => {
        if (index === steps.length - 1)
        {
            return;
        }
        setIndex(index + 1);
        onNext();
    }

    return(
        <div>
            <Component/>
            { index !== 0 && (<button onClick={decrement}>Précédent</button>)}
            { index !== steps.length - 1 && (<button onClick={increment}>Suivant</button>)}
        </div>
    )
}

export default MultiStep;