
const person: {
  // вказуємо типи даних
  name: string;
  age: number;
  hobbies: string[];
  // arrey type
  role: [number, string];
  // tuple type
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;
// Type 'number' is not assignable to type 'string'.

// person.role = [0, 'admin', 'user'];
// Source has 3 element(s) but target allows only 2.

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
