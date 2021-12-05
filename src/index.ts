import World from './world';

const root = document.getElementById("root")
console.log(root)
const world = new World("Hello World!");
world.sayHello(root)
