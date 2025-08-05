import { LucideTrash2, SquarePen } from "lucide-react";

const SingleGrocery = ({ id, title, removeButton, onSetEditAbleGroceryId }) => {
  return (
    <li className="flex justify-between items-center px-4 py-2 bg-white border border-gray-200 rounded hover:bg-gray-100">
      <span className="text-lg text-gray-800">{title}</span>
      <div className="space-x-2">
        <button
          onClick={() => onSetEditAbleGroceryId(id)}
          className="text-green-600 hover:text-green-800"
        >
          <SquarePen />
        </button>
        <button
          onClick={() => removeButton(id)}
          className="text-red-500 hover:text-red-700"
        >
          <LucideTrash2 />
        </button>
      </div>
    </li>
  );
};

export default SingleGrocery;
