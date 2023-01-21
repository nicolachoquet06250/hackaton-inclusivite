const NewMenuButton = ({ handleModal }) => {
  return (
    <button
      className={
        "fixed bg-my-orange w-auto h-auto p-3 text-center text-2xl bottom-0 mb-16 mr-5 rounded-lg text-white"
      }
      onClick={handleModal}
    >
      <i className="fa-solid fa-plus mr-2"></i>
      Menu
    </button>
  );
};

export default NewMenuButton;
