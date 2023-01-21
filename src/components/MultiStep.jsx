import {useState} from "react";

const MultiStep = ({steps, onNext, onValidate}) => {
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
            <div style={{ marginTop: '10px' }}>
                { index !== 0 && 
                    (<button onClick={decrement} style={{ background: 'gray', padding: '10px', borderRadius: '5px' }}>
                        Précédent
                    </button>)}
                { index !== steps.length - 1 ? 
                    (<button onClick={increment} style={{ background: 'gray', padding: '10px', borderRadius: '5px', marginLeft: '5px' }}>
                        Suivant
                    </button>) : (<button onClick={onValidate} style={{ background: 'gray', padding: '10px', borderRadius: '5px', marginLeft: '5px' }}>
                        Valider
                    </button>)}
            </div>
        </div>
    )
}

export default MultiStep;