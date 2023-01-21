const NewMenuButton = ({handleModal}) => {
    return (<button className={"w-10 h-10 bg-red-500 text-center absolute right-0 bottom-0 mb-5 mr-5 rounded-full bg-gray-900 text-white"} 
                    onClick={handleModal}>
        +
    </button>);
}

export default NewMenuButton;