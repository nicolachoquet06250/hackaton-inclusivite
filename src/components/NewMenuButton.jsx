const NewMenuButton = ({handleModal}) => {

    return(
        <div className={"w-5 h-5 bg-red-500 text-center absolute right-0 bottom-0 mb-5 mr-5"}>
            <button onClick={handleModal}>+</button>
        </div>
    )
}

export default NewMenuButton;