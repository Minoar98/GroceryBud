import { useState } from "react";

const EditField = () => {
  const [title, setTitles] = useState("");

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

    console.log("Edit:", title);

    // call a function to add this title in the main state
    // Using 'title'
    // onAddGrocery(title)

    // Using prepared object
    // onAddGrocery({
    //   id: Date.now().toString(),
    //   title, // ES6
    // });

    setTitles([]);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="for edit"
        value={title}
        onChange={(e) => setTitles(e.target.value)}
        className="border rounded px-4 py-2 w-full sm:max-w-md flex-1"
      />
      <button
        type="submit"
        className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Edit
      </button>
    </form>
  );
};

export default EditField;
