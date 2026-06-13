export interface User {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
}

export const users: User[] = [
  { id: 1, name: "Alice Smith", age: 28, gender: "female" },
  { id: 2, name: "Bob Johnson", age: 34, gender: "male" },
  { id: 3, name: "Charlie Brown", age: 22, gender: "male" },
  { id: 4, name: "Diana Prince", age: 30, gender: "female" },
  { id: 5, name: "Evan Wright", age: 27, gender: "male" },
];
