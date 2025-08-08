const InputField = ({ editGroceryId, title, onAddGrocery, onSetTitle, onEditItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // trim() workflow -> trim('   ABC    ') -> 'ABC'
    if (title.trim().length === 0) {
      alert("You must input something...");
      return;
    }

    if (title.trim().length > 10) {
      alert("You must input not more than 10 characters");
      return;
    }

    // title length should be 1~10
    // edit mode is on
    if (editGroceryId) {
      console.log("edit:", title);

      onEditItem(title);

      return;
    }

    console.log("Add:", title);

    // call a function to add this title in the main state
    // Using 'title'
    // onAddGrocery(title)

    // Using prepared object
    onAddGrocery({
      id: Date.now().toString(),
      title, // ES6
      isEdit:false
    });

    onSetTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="e.g. eggs"
        value={title} // load the data
        onChange={(e) => onSetTitle(e.target.value)} // trigger any changes of the data
        className="border rounded px-4 py-2 w-full sm:max-w-md flex-1"
      />
      <button
        // type="submit"
        className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        {editGroceryId ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default InputField;
