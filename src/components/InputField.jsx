import { useState } from "react";

const InputField = ({ onAddGrocery, editGroceryId, editableTitle }) => {
  // const grocery = editGroceryId ? editableTitle : "";
  const [title, setTitle] = useState("");
  console.log("title:---------", editGroceryId ? editableTitle : "");

  // Edit mode is on
  if (editGroceryId) {
    setTitle(editGroceryId ? editableTitle : "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("----------------- InputField: ", { editGroceryId });

    // Edit mode is on
    if (editGroceryId) {
      console.log("edit mode");
      return;
    }

    // Add mode is on
    // trim() workflow -> trim('   ABC    ') -> 'ABC'
    if (title.trim().length === 0) {
      alert("You must input something...");
      return;
    }

    if (title.trim().length > 10) {
      alert("You must input not more than 10 characters");
      return;
    }

    console.log("Submitted:", title);

    // call a function to add this title in the main state
    // Using 'title'
    // onAddGrocery(title)

    // Using prepared object
    onAddGrocery({
      id: Date.now().toString(),
      title, // ES6
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="e.g. eggs"
        value={title} // load the data
        onChange={(e) => setTitle(e.target.value)} // trigger any changes of the data
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
