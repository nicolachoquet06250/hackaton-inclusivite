import "./PublicMenuModal.css";


const PublicMenuModal = ({isActive, onClose}) => {

    const handleOverlay = () => {
        onClose();
    }

    const handleModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <div onClick={handleOverlay} className={`overlay ${isActive ? "active" : ""} top-0 bottom-0 right-0 left-0 absolute`}>
            <div onClick={handleModal} className={ `${isActive ? "active" : ""} modal` }></div>
        </div>
    )
}

export default PublicMenuModal;