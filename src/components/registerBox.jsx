// import { LockClosedIcon } from "@heroicons/react/20/solid";
import NewMenuButton from "./NewMenuButton"
import PublicMenuModal from "./PublicMenuModal"
import {useEffect} from "react";


const RegisterBox = () => {
    let publicMenuModalContainer;

    const handleModal = () => {
        publicMenuModalContainer.classList.toggle('active');
    }

    useEffect(() => {
        publicMenuModalContainer = document.querySelector('.publicMenuModalContainer');
    }, []);


    return (
    <>
       <NewMenuButton handleModal={handleModal}/>
       <PublicMenuModal/>
    </>
    );
  }

export default RegisterBox;