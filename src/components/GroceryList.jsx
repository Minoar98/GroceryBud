import SingleGrocery from "./SingleGrocery";

const GroceryList = ({
  groceryList,
  removeButton,
  onEnableEditMode,
  editGroceryId,
}) => {
  return (
    <ul className="space-y-2">
      {/* {groceryList.length >= 1 ? (
        groceryList.map((grocery) => (
          <SingleGrocery
            key={grocery.id}
            {...grocery}
            removeButton={removeButton}
            onEnableEditMode={onEnableEditMode}
            editGroceryId={editGroceryId}
          />
        ))
      ) : (
        <p>Nothing is there</p>
        )} */}

      {groceryList.length > 0 &&
        groceryList.map((grocery) => (
          <SingleGrocery
            key={grocery.id}
            {...grocery}
            removeButton={removeButton}
            onEnableEditMode={onEnableEditMode}
            editGroceryId={editGroceryId}
          />
        ))}
      {groceryList.length === 0 && (
        <p className="mx-auto text-center text-red-400 font-medium px-4 py-2 rounded-md w-fit">
          Nothing is there
        </p>
      )}
    </ul>
  );
};

export default GroceryList;
