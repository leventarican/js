/*
JavaScript / ECMAScript common runtime environment is the browser.
On server side, ... JavaScript is also used to run on NodeJS (runtime environment).

JavaScript language reference is ECMAScript / ES6 / ES2015

run this code with: node main.js
*/

function variables() {
    console.log('ES2015 introduced two important new JavaScript keywords: let and const.')
    {
        var var_example = 7
        let let_example = 8
    }
    console.log(var_example)
    // console.log('let_example is not defined here')
}

function data_types() {
    let string_example = 'javascript / ECMAsript / ES6';
    let number_example = 1;
    let boolean_example = true;
    let array_example = [0, 1, 2, 3, 5];
}

function conditionals() {
    let condition = true;
    if (condition === true) {
        console.log('condition: %s', condition)
    } else {
        console.log('condition: %s', condition)
    }
}

let anon_function = function () {
    console.log('anonymous function called.')
    return 7;
};

function varargs(...params) {
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        console.log(element);
    }
}

function objects() {
    let option0 = new Object();
    let option1 = {};

    let developer = {
        name: 'js',
        programmingLanguages: {
            java: 8,
            kotlin: 1.3 
        }
    };
    console.log(developer);
    console.log('java version: %s', developer.programmingLanguages.java);
    console.log(developer['name'])
}

function Class() {
    console.log('there is no class statement. instead function is used.');
    this.id = 0;
    this.toString = function() {
        return 'Class - id: ' + this.id;
    }
}

function arrays() {
    let a = new Array();
    a[0] = 3;
    a[1] = 'cpp';
    console.log(a.length);
    a.push('stack');
    console.log(a.length);
    a.pop(); a.pop(); a.pop();
    console.log(a.length);
    a.push(3); a.push(2); a.push(1);
    console.log(a.reverse());
}

function features() {
    let x = 4
    console.log('hello: %s %s', 1, x);
    // semicolon is absolutely required for serarating statements in one line
    console.log('8bit 00001000: %s', parseInt('00001000', 2))
    let semi = 1; let colon = 2;
    console.log('semicolon example: %s; %s', semi, colon);

    let text = 'Strings in JavaScript are sequences of Unicode characters.'
    console.log('text length: %s', text.length);
    console.log('text char at: %s', text.charAt(11));
    console.log('text to upper case: %s', text.toUpperCase());
}

variables()
conditionals()
anon_function()
varargs(3, 4, 8)
features()
objects()
arrays()

let c = new Class()
console.log(c.toString());

