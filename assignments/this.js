/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope, this refers to the window/console object.
* 2. In a method, this refers to the parent object.
* 3. In a new instance of a constructor, this refers to the specific instance of that object.
* 4. Call() and apply() can be used to bind this to any object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function whatIsThis() {
    return this;
}

whatIsThis();

// Principle 2

// code example for Implicit Binding

var orange = {
    name: "orange",
    shape: "spherical",
    eat: function() {
        return `What a tasty ${this.name}`;
    }
}

orange.eat();

// Principle 3

// code example for New Binding

const Fruit = function(name, shape, flavour) {
    this.name = name;
    this.shape = shape;
    this.flavour = flavour;
    this.munch = function() {
        return `what a tasty ${this}`
    }
} 

let myApple = new Fruit("apple", "round", "tasty");  

// Principle 4

// code example for Explicit Binding

console.log(myApple.munch.call('Orange,'));  



