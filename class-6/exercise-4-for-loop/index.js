console.groupCollapsed("For Loop");

for (let i = 0; i < users.length; i++) {
  console.log("=====NEW ITERATION======");
  console.log("index:", i);
  console.log("user:", users[i]);
  console.log("username:", users[i].username);
}

console.groupEnd();

console.groupCollapsed("While Loop");

// while loop

let i = 0;
while (i < users.length) {
  console.log("=====NEW ITERATION======");
  console.log("index:", i);
  console.log("user:", users[i]);
  console.log("username:", users[i].username);

  i++;
}

// for loop *
console.groupCollapsed("For Of Loop");

for (let user of users) {
  console.log("=====NEW ITERATION======");
  console.log("user:", user);
  console.log("username:", user.username);
}

console.groupEnd();
