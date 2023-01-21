import "./PublicMenuModal.css";
import StepOne from "./Steps/StepOne.jsx";
import StepTwo from "./Steps/StepTwo.jsx";
import MultiStep from "./MultiStep";


const PublicMenuModal = ({isActive, onClose}) => {
    const steps = [
        StepOne,
        StepTwo
    ]



    const handleOverlay = () => {
        onClose();
    }

    const handleModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <div onClick={handleOverlay} className={`overlay ${isActive ? "active" : ""} top-0 bottom-0 right-0 left-0 absolute`}>
            <div onClick={handleModal} className={ `${isActive ? "active" : ""} modal` }>
                <MultiStep steps={steps}/>
            </div>
        </div>
    )
}

export default PublicMenuModal;