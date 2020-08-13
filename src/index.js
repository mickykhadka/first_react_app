import { choice, remove } from "./helpers";
import fruits from "./foods";
const pick = choice(fruits);
remove(fruits, pick);
console.log(`I'd like one ${pick},please`);
console.log(`Here you go: ${pick}`);
console.log(`Delicious! May i have another one?`);
console.log(`I'm sorry, we're all out! we have ${fruits.length} left`);
