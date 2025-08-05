import SingleGrocery from "./SingleGrocery";

const GroceryList = ({ groceryList, removeButton, onSetEditAbleGroceryId }) => {
  return (
    <ul className="space-y-2">
      {groceryList.map((grocery) => (
        <SingleGrocery
          key={grocery.id}
          {...grocery}
          removeButton={removeButton}
          onSetEditAbleGroceryId={onSetEditAbleGroceryId}
        />
      ))}
      {/* <span class="text-lg text-gray-800">Egg</span> */}
    </ul>
  );
};

export default GroceryList;
