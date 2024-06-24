"use client";
import { useState } from "react";

const Counter = ({ user }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ul>
        {user.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => setCount((s) => s + 1)}>{count}</button>;
    </div>
  );
};

export default Counter;
