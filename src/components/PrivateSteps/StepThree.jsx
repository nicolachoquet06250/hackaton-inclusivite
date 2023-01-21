import { useState } from "react";

const StepThree = () => {
    const [souhait, setSouhait] = useState('1');

    const handleChange = e => setSouhait(e.target.value);

    return (<div className={"newMenuButtonContainer"}>
        <div>
            Souhetez vous :
            <select onChange={handleChange} value={souhait} style={{ color: 'black' }}>
                <option value={'1'}>
                    que je vous propose un menu adapté, bio et de saison
                </option>
                <option value={'2'}>
                    renseigner les ingrédients connus de mon menu
                </option>
                <option value={'3'}>
                que je vous propose une liste de réstaurateurs/traiteurs pouvant répondre au besoin
                </option>
            </select>
        </div>
    </div>);
};

export default StepThree;