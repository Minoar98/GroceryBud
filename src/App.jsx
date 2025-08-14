import { useState } from "react";

import ClearButton from "./components/ClearButton";
import GroceryList from "./components/GroceryList";
import Header from "./components/Header";
import InputField from "./components/InputField";

// import data from "./data";

function App() {
  // const [groceryList, setGroceryList] = useState(data);
  const [groceryList, setGroceryList] = useState([]); // for grocery
  const [editGroceryId, setEditGroceryId] = useState(null); // to active edit mode
  const [title, setTitle] = useState(""); // which value I want to add or edit

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

  const enableEditMode = (id) => {
    console.log("edit mode on: ", { id });

    // 1. search to the main state by id
    const editableItem = groceryList.find((grocery) => grocery.id === id);

    // 2. fetch the title from that searched item
    // editableItem.title

    // 3. update the title accordingly
    setTitle(editableItem.title);

    // 4. update the edit item id accordingly as well to detect that it's a edit mode
    setEditGroceryId(id);
  };

  const editItem = (title) => {
    // 1. update the grocery list with newly created object
    setGroceryList((prevState) => {
      return prevState.map((state) => {
        if (state.id === editGroceryId) {
          return { ...state, title, isEdit: true };
        } else {
          return state;
        }
      });
    });

    // 2. title should be ''
    setTitle("");

    // 3. editableId should be 'null'
    setEditGroceryId(null);
  };

  return (
    <main className="h-screen">
      <section className="max-w-md mx-auto mt-10 p-6 rounded">
        <Header totalbuds={groceryList.length} />
        <InputField
          title={title}
          editGroceryId={editGroceryId}
          onSetTitle={setTitle}
          onAddGrocery={addGrocery}
          onEditItem={editItem}
        />
        <GroceryList
          groceryList={groceryList}
          removeButton={removeButton}
          onEnableEditMode={enableEditMode}
          editGroceryId={editGroceryId}
        />
        {/* {groceryList.length >= 1 ? (
          <ClearButton onClearHandler={ClearHandler} />
          ) : (
            <></>
            )} */}
        {/* used short circuit */}
        {groceryList.length >= 1 && (
          <ClearButton onClearHandler={ClearHandler} />
        )}
        {/* {!(groceryList.length >= 1) || (
          <ClearButton onClearHandler={ClearHandler} />
        )} */}
      </section>
    </main>
  );
}

export default App;
