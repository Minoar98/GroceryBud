import { useState } from "react";

import ClearButton from "./components/ClearButton";
import GroceryList from "./components/GroceryList";
import Header from "./components/Header";
import InputField from "./components/InputField";
import EditField from "./components/EditField";

// import data from "./data";

function App() {
  // const [groceryList, setGroceryList] = useState(data);
  const [groceryList, setGroceryList] = useState([]);
  const [editGroceryId, setEditGroceryId] = useState(null);

  // generate the editable title
  let editableTitle = "";
  if (editGroceryId) {
    editableTitle = groceryList.find(
      (grocery) => grocery.id === editGroceryId
    ).title;
    console.log("----------------- App: ", { editableTitle });
  }

  // Workable but not recommended
  // const totalbuds = groceryList.reduce((acc) => acc + 1, 0);

  // Using prepared object
  const addGrocery = (grocery) => {
    setGroceryList((prevState) => [...prevState, grocery]);
  };

  // Using 'title'
  // const addGrocery = (title) => {
  //   setGroceryList((prevState) => [...prevState, {
  //     id: Date.now().toString(),
  //     title, // ES6
  //   }])
  // };

  const removeButton = (id) => {
    setGroceryList((prevGrocery) =>
      prevGrocery.filter((grocery) => grocery.id !== id)
    );
  };

  const ClearHandler = () => {
    console.log("Clear All");
    setGroceryList([]);
  };

  return (
    <main className="bg-gray-600 h-screen">
      <section className="max-w-md mx-auto mt-10  p-6 rounded bg-gray-600">
        <Header totalbuds={groceryList.length} />
        <InputField
          editableTitle={editableTitle}
          editGroceryId={editGroceryId}
          onAddGrocery={addGrocery}
        />
        <GroceryList
          groceryList={groceryList}
          removeButton={removeButton}
          onSetEditAbleGroceryId={setEditGroceryId}
        />
        <ClearButton onClearHandler={ClearHandler} />
      </section>
    </main>
  );
}

export default App;
