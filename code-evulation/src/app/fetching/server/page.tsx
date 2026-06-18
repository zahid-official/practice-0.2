interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

// ServerPage Component
const ServerPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Server Failed to Fetch Data");

  const data: IUsers[] = await res.json();

  return (
    <div>
      <h1>Welcome to the ServerPage Component</h1>

      <ul className="list-decimal list-inside space-y-4 mx-8 py-10">
        {data?.map((user: IUsers) => (
          <li key={user.id} className="space-y-2 border p-4">
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

export default ServerPage;
