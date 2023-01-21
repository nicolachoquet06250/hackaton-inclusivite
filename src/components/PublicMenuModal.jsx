import "./PublicMenuModal.css";
import PublicStepOne from "./PublicSteps/StepOne.jsx";
import PublicStepTwo from "./PublicSteps/StepTwo.jsx";
import PrivateStepOne from "./PrivateSteps/StepOne.jsx";
import PrivateStepTwo from "./PrivateSteps/StepTwo.jsx";
import MultiStep from "./MultiStep";
import { useState } from "react";

const PublicMenuModal = ({isActive, onClose}) => {
    const [eventType, setEventType] = useState('public');
    const [isShowEventTypeSelect, showEventTypeSelect] = useState(true)

    const values = {
        public: 'Publique',
        private: 'Privé'
    }

    const steps = eventType === 'public' ? [
        PublicStepOne,
        PublicStepTwo
    ] : [
        PrivateStepOne,
        PrivateStepTwo
    ]

    const handleModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleRadioChange = e => {
        setEventType(e.target.value ?? 'public');
    }

    return (
        <div onClick={onClose} 
             className={`overlay ${isActive ? "active" : ""} top-0 bottom-0 right-0 left-0 absolute`}>
            <div onClick={handleModal} className={ `${isActive ? "active" : ""} modal` }>
                <h1> Voulez vous créer un événement : {!isShowEventTypeSelect && values[eventType]}</h1>
                {isShowEventTypeSelect && <div>
                    <select onChange={handleRadioChange} value={eventType} style={{ color: 'black' }}>
                        <option value={'public'}>
                            Publique
                        </option>
                        <option value={'private'}>
                            Privé
                        </option>
                    </select>
                </div>}

                <MultiStep steps={steps} onNext={() => showEventTypeSelect(false)} />
            </div>
        </div>
    )
}

export default PublicMenuModal;