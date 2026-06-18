"use client";

import { useEffect, useState } from "react";

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

// ClientPage Component
const ClientPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Welcome to the ClientPage Component</h1>

      <ul className="list-decimal list-inside space-y-4 mx-8 py-10">
        {data.map((user: IUsers) => (
          <li key={user.id} className="space-y-2 bg-gray-800 border p-4">
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
