import { useEffect } from "react";
import { useState } from "react";

const StepTwo = () => {
    const [nbParticipant, setNbParticipant] = useState(0);
    const [specificites, setSpecificites] = useState([]);
    const [nbParticipantPerSpecificite, setNbParticipantPerSpecificite] = useState({
        vegetarien: 0,
        vegetalien: 0,
        hallal: 0,
        casher: 0,
        sansGlutten: 0,
        sansArachides: 0,
        sansIodes: 0
    });
    const [nbMangeTout, setNbMangeTout] = useState(0);

    useEffect(() => {
        setNbMangeTout(nbParticipant - Object.values(nbParticipantPerSpecificite).reduce((r, c) => r + c, 0));
    }, [nbParticipant, nbParticipantPerSpecificite])

    const handleChangeMultiple = e => {
        const options = e.target.options;
        const value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }

        setSpecificites(value)
    }

    return (
        <div className={"newMenuButtonContainer"} style={{height: "calc(100% - 70px)"}}>
            <div className={"mb-2"}>
                <div className={"mb-2"}> Saisissez le nombre de participants : </div>
                <input  type='number' 
                        value={nbParticipant} 
                        onChange={e => setNbParticipant(e.target.value)}
                        style={{ color: 'black' }} />
            </div>

            <div className={"mb-2"}>
                <div className={"mb-2"}>Choisir les spécificités :</div>
                <select multiple onChange={handleChangeMultiple} style={{ color: 'black' }}>
                    <option value='vegetarien'>
                        Végétarien
                    </option>
                    <option value='vegetalien'>
                        Végétalien
                    </option>
                    <option value='hallal'>
                        Hallal
                    </option>
                    <option value='casher'>
                        Casher
                    </option>
                    <option value='sansGlutten'>
                        Sans glutten
                    </option>
                    <option value='sansArachides'>
                        Sans Arachides
                    </option>
                    <option value='sansIodes'>
                        Sans iodes
                    </option>
                </select>
            </div>

            {specificites.map((s, i) => 
                (<div className={"mb-2"} key={i}>
                    <div>Saisissez le nombre de participants {s} :</div>
                    <input  type='number' 
                            value={nbParticipantPerSpecificite[s]} 
                            onChange={e => setNbParticipantPerSpecificite(c => ({ ...c, [s]: parseInt(e.target.value) }))}
                            style={{ color: 'black' }} />
                </div>))}
            Nombre de personne qui mangent de tout : <b>{nbMangeTout}</b>
        </div>
    )
}

export default StepTwo;