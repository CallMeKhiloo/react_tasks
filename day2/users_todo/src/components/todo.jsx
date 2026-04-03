import { useState } from "react";
const ItemComponent = ({ item, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 m-2">
      <li
        onClick={onToggle}
        className="bg-white shadow-md rounded-lg p-4 m-2"
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.text}
      </li>
      <button
        onClick={onDelete}
        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

const TodoComponent = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.item.value.trim()) return;
    setItems([...items, { text: e.target.item.value, completed: false }]);
    e.target.item.value = "";
  };

  const handleToggle = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 bg-white shadow-md rounded-lg border border-gray-300 w-full max-w-md"
      >
        <label htmlFor="item">Add a new item: </label>
        <input className="border border-gray-300" type="text" id="item" />
        <button
          className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Add Item
        </button>
      </form>
      <ul className="w-full max-w-md">
        {items.map((item, index) => (
          <ItemComponent
            key={index}
            item={item}
            onToggle={() => handleToggle(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
