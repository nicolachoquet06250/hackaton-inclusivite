import { useState } from "react";

const StepOne = () => {
    const [menuType, setMenuType] = useState('repas');
    const [repasComposants, setRepasComposants] = useState([]);
    const [alcool, setAlcool] = useState('sansAlcool');

    const handleChangeMultiple = e => {
        const options = e.target.options;
        const value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }

        setRepasComposants(value)
    }

    return (
        <div className={"newMenuButtonContainer"}>
            <div className={'mb-2'}>
                Selectionner le type de menu :
            </div>
            <select onChange={e => setMenuType(e.target.value)} value={menuType} style={{ color: 'black', marginBottom: '25px' }}>
                <option value={'repas'}>Repas</option>
                <option value={'apero'}>Tapas/Apéro</option>
                <option value={'buffet'}>Buffet</option>
            </select>

            {menuType === 'repas' && (<>
                <div>
                    <div className={'mb-2'}>Que souhaitez vous dans votre repas ?</div>
                    <div style={{marginBottom: "25px"}}>
                    <select multiple onChange={handleChangeMultiple} style={{ color: 'black' }}>
                        <option value='plat'>
                            Plat
                        </option>
                        <option value='fromage'>
                            Fromage
                        </option>
                        <option value='dessert'>
                            Dessert
                        </option>
                        <option value='boissons'>
                            Boissons
                        </option>
                    </select>
                </div>
                </div>

                {repasComposants.indexOf('boissons') !== -1 && (<div>
                    <div className={"mb-2"}>Voulez vous des boissons avec ou sans alcool ?</div>
                    <select value={alcool} onChange={e => setAlcool(e.target.value)} style={{ color: 'black' }}>
                        <option value={'sansAlcool'}>
                            Sans alcool
                        </option>
                        <option value={'avecAlcool'}>
                            Avec alcool
                        </option>
                    </select>
                </div>)}
            </>)}

            {menuType === 'apero' && (<div>
                <div className={"mb-2"}>Voulez vous des boissons avec ou sans alcool ?</div>
                <select value={alcool} onChange={e => setAlcool(e.target.value)} style={{ color: 'black' }}>
                    <option value={'sansAlcool'}>
                        Sans alcool
                    </option>
                    <option value={'avecAlcool'}>
                        Avec alcool
                    </option>
                </select>
            </div>)}
        </div>
    )
}

export default StepOne;