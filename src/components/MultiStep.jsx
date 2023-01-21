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
            <div style={{ marginTop: '10px', height: "70px"}}>
                { index !== 0 && 
                    (<button onClick={decrement} className={"bg-my-orange"} style={{ padding: '10px', borderRadius: '5px', position: "absolute", bottom: "25px", left: "25px", color: "white", width: "100px" }}>
                        Précédent
                    </button>)}
                { index !== steps.length - 1 ? 
                    (<button onClick={increment} className={"bg-my-orange"} style={{ padding: '10px', borderRadius: '5px', marginLeft: '5px', position: 'absolute', bottom: '25px', right: '25px', color: "white", width: "100px" }}>
                        Suivant
                    </button>) : (<button onClick={onValidate} className={"bg-my-orange"} style={{ padding: '10px', borderRadius: '5px', marginLeft: '5px', position: 'absolute', bottom: '25px', right: '25px', color: "white", width: "100px" }}>
                        Valider
                    </button>)}
            </div>
        </div>
    )
}

export default MultiStep;