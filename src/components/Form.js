import { useState } from "react";

//in React we usually do not use event to take data.
// While we using Controlled Elements

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("Test");
  const [quantity, setQuantity] = useState(1);

  // console.log(description);
  // console.log(number);

  function handleSumbit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        // Number() convert to number int or float
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
