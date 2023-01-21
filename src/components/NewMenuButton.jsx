const NewMenuButton = ({handleModal}) => {

    return(
        <div className={"newMenuButtonContainer"}>
            <button onClick={handleModal}>+</button>
        </div>
    )
}

export default NewMenuButton;