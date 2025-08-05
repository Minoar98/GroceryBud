
const ClearButton = ({ onClearHandler }) => {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClearHandler}
        className="text-red-400 hover:text-red-600 font-medium"
      >
        {""} Clear Items
      </button>
    </div>
  );
};

export default ClearButton;
