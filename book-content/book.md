Part 1: Introduction

---

# 01. Kickstart Your TypeScript Setup

Before diving into TypeScript, let's take a moment to talk about its foundation — JavaScript.

JavaScript is the language that makes web pages interactive. Any modern website will utilize some amount of it. And the more complex the site, the more complex the JavaScript.

But, unlike other coding languages, JavaScript was not built for building complex systems.

If you were building JavaScript apps in the 2000's, you were often having a bad time. Your IDE (integrated development environment) was lacking basic features. Autocomplete. Inline errors. There was no way to know if you were passing the right arguments to the right function. As users began demanding more complex experiences online, this made working with JavaScript a nightmare.

This was especially true for refactoring code. If you had to change a function signature, you had to manually find and update every place that function was called throughout your entire codebase. This could take hours, and with no guarantee that you'd fixed everything before you pushed to production.

## TypeScript's Beginnings

As limitations like these became more apparent, developers started looking for a better way to write JavaScript.

Around 2010, Microsoft noticed that a lot of their teams were using a community project called Script# (ScriptSharp) to build their JavaScript apps. This library allowed developers to write code in C#, and then turn it to JavaScript. C# had excellent features for building large applications - so it made the experience of building these apps more pleasant. In fact, many teams had found this was the only way they could build complex applications in large teams.

Anders Hejlsberg, the creator of C#, was tasked to investigate this phenomenon. He was astonished. People were so annoyed with JavaScript that they were willing to code in a completely different language in order to get the powerful IDE features they were used to.

So he thought: what if we create a new language that was closer to JavaScript, but that enabled all the IDE features that JavaScript is missing?

Thus, TypeScript was born. (And yes, the inventor of C# was also the inventor of TypeScript. Not bad.)

In the decade or so since its introduction, TypeScript has grown to become a staple of modern development. In many metrics, it is even more popular than JavaScript.

In this book, you'll learn why it has become so popular, and how it can help you develop better applications while making your life as a developer easier.

## How TypeScript Works

With a JavaScript-only project, you would typically write your code in files with a `.js` or `.jsx` file extension. These files are then able to be directly executed in the browser or a runtime environment like Node.js (which is used to run JavaScript on servers, or on your laptop). The JavaScript you write is the JavaScript that gets executed.

![](images/image5.png)

If you're testing whether your code works, you need to test it inside the runtime - the browser or Node.js.

For a TypeScript project, your code is primarily inside of `.ts` or `.tsx` files.

Inside your IDE, these files are monitored by TypeScript's 'language server'. This server watches you as you type, and powers IDE features like autocompletion and error checking, among others.

Unlike a `.js` file, `.ts` files can't usually be executed directly by the browser or a runtime. Instead, they require an initial build process.

This is where TypeScript's `tsc` CLI comes in, which transforms your `.ts` files into `.js` files. You are able to take advantage of TypeScript's features while writing your code, but the output is still plain JavaScript.

![](images/image4.png)

The great benefit of this system is that you get in a feedback loop with TypeScript. You write code. The in-IDE server gives you feedback. You adjust based on the feedback. And all of this happens before your code goes into the browser. This loop is much faster than JavaScript's, so can help you create higher-quality code faster.

> Automated testing can also provide a high-quality feedback loop. While we won't cover this in this book, automated tests are a great companion to TypeScript for creating extremely high-quality code.

So, while TypeScript's build process is more complex than JavaScript's, the benefits are well worth it.

## What's Different About TypeScript?

The thing that makes TypeScript from JavaScript different can be summed up in a single word: types.

But there's a common misconception here. People think that TypeScript's core mission is to make JavaScript a strongly typed language, like C# or Rust. This is not quite accurate.

TypeScript wasn't invented to make JavaScript strongly typed. It was built to allow amazing tooling for JavaScript.

Imagine you're building an IDE, and you want to give people warnings when they mis-type a function name or an object property. If you don't know the shapes of the variables, parameters and objects in your code, you'd have to resort to guesswork.

But if you do know the types of everything in your app, you can begin implementing powerful IDE features like autocomplete, inline errors and automatic refactors.

So, TypeScript aims to provide just enough strong typing to make working with JavaScript more pleasant and productive.

## Tools for TypeScript Development

Let's break down the tools you need in order to work with TypeScript:

- An IDE: In order to write code, you need an editor or Integrated Development Environment. While you can use any IDE, the assumption in this book is that you are using Microsoft's Visual Studio Code. The TypeScript integration with VS Code is excellent, as you will see shortly. Install it from https://code.visualstudio.com if you haven't already.
- An Execution Environment: You need somewhere to run your emitted JavaScript. This could be Node.js or a web browser like Chrome.
- The TypeScript CLI: Node.js is needed in order to run the TypeScript CLI (command line interface). This tool converts your TypeScript to JavaScript, and warns you of any issues in your project.

### Installing Node.js

The Node.js installer can be downloaded from the [Node.js website](https://nodejs.org/).

When you visit the site, you'll see two options: LTS and Current.

LTS is short for "Long Term Support". This is the recommended version for production use. It's the most stable version, and the one we'll be using in this book.

The Current version contains the latest features, but it's not recommended for production use.

Click the LTS button to download the installer and follow the installation instructions.

After running the installer, you can verify it installed correctly by opening a terminal and running the following command:

```
node -v
```

If Node.js is installed correctly, this command will display the version number. If you see an error message like "node command not found," it means the installation was not successful, and you should try again.

### Alternative Package Management with PNPM

Node.js includes the `npm` package manager by default.

If you've worked with JavaScript repositories, you're likely familiar with `npm` and the `package.json` file. The `package.json` file represents all the packages we need to install to run the code in the repository.

For example, in the repository for this material, we have a special CLI for running exercises along with helper packages and various other dependencies like `cross-fetch` and `nodemon`:

```json
// package.json

{
  "devDependencies": {
    "@total-typescript/exercise-cli": "0.4.0",
    "@total-typescript/helpers": "~0.0.1",
    "cross-fetch": "~3.1.5",
    "nodemon": "~3.0.1",
    "npm-run-all": "~4.1.5",
    "prettier": "~2.8.7",
    "typescript": "~5.2.2",
    "vite-tsconfig-paths": "~4.0.7",
    "vitest": "0.34.4"
  }
}
```

To install these packages, you would typically run the `npm install` command, which downloads them from the npm registry into your `node_modules` folder. The `node_modules` folder contains JavaScript files that the exercises in the `src` directory need to run.

However, for the book's repository we will be using the PNPM package manager instead.

`pnpm` is used the same way as `npm`, but it is more efficient. Instead of having individual `node_modules` folders for each project, `pnpm` uses a single location on your computer and hard links the dependencies from there. This makes it run faster and use less disk space. I use PNPM in all my projects.

To install PNPM, follow the instructions provided in the [official documentation](https://pnpm.io/installation).

## Installing TypeScript

TypeScript and its dependencies are contained within a single package, called typescript.

You can install it globally with either pnpm or npm:

```
pnpm add -g typescript
```

or

```
npm install –-global typescript
```

TypeScript is usually also installed in your `package.json` to make sure that all developers using the project are using the same version. For the purposes of this book, a global installation will do just fine.

# 02. IDE Superpowers

TypeScript works the same no matter what IDE you use, but for this book we'll assume you're using Visual Studio Code (VS Code).

When you open VS Code, the TypeScript server starts in the background. It will be active as long as you have a TypeScript file open.

Let's take a look at some of the awesome VS Code features that are powered by the TypeScript server.

## Autocomplete

If I were to name the single TypeScript feature I couldn't live without, it would be autocomplete.

TypeScript knows what type everything is inside your app. Because of that, it can give you suggestions when you're typing - speeding you up enormously.

In the example below, just typing 'p' after `audioElement` brings up all the properties which start with 'p'.

```typescript
const audioElement = document.createElement("audio");

audioElement.p; // play, pause, part etc
```

This is really powerful for exploring APIs you might not be familiar with, like the `HTMLAudioElement` API in this case.

### Manually Triggering Autocomplete

You'll often want to manually trigger autocomplete. In VS Code, the `Ctrl + Space` keyboard shortcut will show you a list of suggestions for what you're typing.

For example, if you were adding an event listener to an element, you would see a list of available events:

```typescript
document.addEventListener(
  "", // autocomplete here
);
```

Hitting the `Ctrl + Space` shortcut with the cursor inside the quotes will show you a list of events that can be listened for:

```
DOMContentLoaded
abort
animationcancel
...
```

If you wanted to narrow down the list to the events you were interested in, you could type "drag" before hitting `Ctrl + Space` and only the appropriate events would display:

```
drag
dragend
dragenter
dragleave
...
```

Autocomplete is an essential tool for writing TypeScript code, and it's available right out of the box in VS Code.

### Exercises

#### Exercise 1: Autocomplete

Here's an example of some code where autocomplete can be triggered:

```typescript
const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => {};

acceptsObj({
  // Autocomplete in here!
});
```

Practice using the autocomplete shortcut to fill in the object when calling `acceptsObj`.

#### Solution 1: Autocomplete

When you hit `Ctrl + Space` inside the object, you'll see a list of the possible properties based on the `MyObj` type:

```typescript
bar;
baz;
foo;
```

As you select each property, the autocomplete list will update to show you the remaining properties.

## TypeScript Error Checking

The thing TypeScript is most famous for is its errors. These are a set of rules which TypeScript uses to make sure your code is doing what you think it's doing.

For every change you make to a file, the TypeScript server will check your code.

If the TypeScript server finds any errors, it will tell VS Code to draw a red squiggly line under the part of the code that has a problem. Hovering over the underlined code will show you the error message. Once you make a change, the TypeScript server will check again and remove the red squiggly line if the error is fixed.

I like to think of it like a teacher hovering over your shoulder, underlining your work in red pen while you type.

Let's look at these errors a bit more deeply.

### Catching Runtime Errors

Sometimes TypeScript will warn you about things that will definitely fail at runtime.

For example, consider the following code:

```typescript
const a = null;

a.toString(); // red squiggly line under `a`
```

TypeScript tells us that there is a problem with `a`. Hovering over it shows the following error message:

```
'a' is possibly 'null'.
```

This tells us where the problem is, but it doesn't necessarily tell us what the problem is. In this case, we need to stop and think about why we can't call `toString()` on `null`. If we do, it will throw an error at runtime.

```
Uncaught TypeError: Cannot read properties of null (reading 'toString').
```

Here, TypeScript is telling us that an error might happen even without us needing to check it. Very handy.

### Warnings About Non-Runtime Errors

Not everything TypeScript warns us about will actually fail at runtime.

Take a look at this example where we're assigning a property to an empty object:

```typescript
const obj = {};

const result = obj.foo; // red squiggly line under `foo`
```

TypeScript draws a red squiggly line below `foo`. But if we think about it, this code won't actually cause an error at runtime. We're trying to assign a property that doesn't exist in this object: `foo`. This won't error, it will just mean that result is undefined.

It may seem strange that TypeScript would warn us about something that won't cause an error, but it's actually a good thing. If TypeScript didn't warn us about this, it would be saying that we can access any property on any object at any time. Over the course of an entire application, this could result in quite a few bugs.

It's best to think of TypeScript's rules as opinionated. They are a collection of helpful tips that will make your application safer as a whole.

### Warnings Close to the Source of the Problem

<!-- TODO Consider moving this and the next section to later, perhaps the weird parts -->

TypeScript will try to give you warnings as close to the source of the problem as possible.

Let's take a look at an example.

```typescript
type Album = {
  artist: string;
  title: string;
  year: number;
};

const album: Album = {
  artsist: "Television", // red squiggly line under `artsist`
  title: "Marquee Moon",
  year: 1977,
};
```

We define an 'Album' type - an object with three properties. Then, we say that const album needs to be of that type via `const album: Album`. Don't worry if you don't understand all the syntax yet - we'll cover it all later.

Can you see the problem? There's a typo of the `artist` property when creating an album. Hovering over `artsist` shows the following error message:

```
Type '{ artsist: string; title: string; year: number; }' is not assignable to type 'Album'.

Object literal may only specify known properties, but 'artsist' does not exist in type 'Album'. Did you mean to write 'artist'?
```

That's because we've said that the `album` variable needs to be of type `Album`, but we've misspelled `artist` as `artsist`. TypeScript is telling us that we've made a mistake, and even suggests the correct spelling.

### Dealing With Far-Away Errors

However, sometimes TypeScript will give you an error in a more unhelpful spot.

In this example, we have a `FunctionThatReturnsString` type that represents a function that returns a string. An `exampleFunction` that is given that type is defined, but it returns a number instead of a string.

```typescript
type FunctionThatReturnsString = () => string;

const exampleFunction: FunctionThatReturnsString = () => {
  // red squiggly line under `exampleFunction`

  // Imagine lots more code here...

  return 123;
};
```

It might seem like TypeScript should give us an error on the `return` line, but it gives us an error on the line where we define `exampleFunction` instead.

The reason why the error is on the function declaration line instead of the `return` line is because of how TypeScript checks functions. We'll look at this later. But the important thing is that while TypeScript does its best to locate errors, sometimes they might not be where you expect.

## Introspecting Variables and Declarations

You can hover over more than just error messages. Any time you hover over a variable or declaration, VS Code will show you information about it.

In this example, we could hover over `thing` and see that it's of type `number`:

```typescript
let thing = 123;

// hovering over `thing` shows:

let thing: number;
```

Hovering works for more involved examples as well. Here `otherObject` spreads in the properties of `otherThing` as well as adding `thing`:

```typescript
let otherThing = {
  name: "Alice",
};

const otherObject = {
  ...otherThing,
  thing,
};

otherObject.thing;
```

Hovering over `otherObject` will give us a computed readout of all of its properties:

```typescript
// hovering over `otherObject` shows:

const otherObject: {
  thing: number;
  name: string;
};
```

Depending on what you hover over, VS Code will show you different information. For example, hovering over `.thing` in `otherObject.thing` will show you the type of `thing`:

```
(property) thing: number
```

Get used to the ability to float around your codebase introspecting variables and declarations, because it's a great way to understand what the code is doing.

### Exercises

#### Exercise 1: Hovering a Function Call

In this code snippet we're trying to grab an element using `document.getElementById` with an ID of `12`. However, TypeScript is complaining.

```javascript
let element = document.getElementById(12); // red squiggly line under 12
```

How can hovering help to determine what argument `document.getElementById` actually requires? And for a bonus point, what type is `element`?

#### Solution 1: Hovering a Function Call

First of all, we can hover over the red squiggly error itself. In this case, hovering over `12`, we get the following error message:

```
Argument of type 'number' is not assignable to parameter of type 'string'.
```

We'll also get a readout of the `getElementById` function:

```
(method) Document.getElementById(elementId: string): HTMLElement | null
```

In the case of `getElementById`, we can see that it requires a string as an argument, and it returns an `HTMLElement | null`. We'll look at this syntax later, but it basically means either a `HTMLElement` or `null`.

This tells us that we can fix the error by changing the argument to a string:

```typescript
let element = document.getElementById("12");
```

We also know that `element`'s type will be what `document.getElementById` returns, which we can confirm by hovering over `element`:

```typescript
// hovering over element shows:

const element: HTMLElement | null;
```

So, hovering in different places reveals different information. When I'm working in TypeScript, I hover constantly to get a better sense of what my code is doing.

## JSDoc Comments

JSDoc is a syntax for adding documentation to the types and functions in your code. It allows VS Code to show additional information in the popup that shows when hovering.

This is extremely useful when working with a team

Here's an example of how a `logValues` function could be documented:

````typescript
/**
 * Logs the values of an object to the console.
 *
 * @param obj - The object to log.
 *
 * @example
 * ```ts
 * logValues({ a: 1, b: 2 });
 * // Output:
 * // a: 1
 * // b: 2
 * ```
 */

const logValues = (obj: any) => {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};
````

The `@param` tag is used to describe the parameters of the function. The `@example` tag is used to provide an example of how the function can be used, using markdown syntax.

There are many, many more tags available for use in JSDoc comments. You can find a full list of them in the [JSDoc documentation](https://jsdoc.app/).

Adding JSDoc comments is a useful way to communicate the purpose and usage of your code, whether you're working on a library, a team, or your own personal projects.

### Exercises

#### Exercise 1: Adding Documentation for Hovers

Here's a simple function that adds two numbers together:

```typescript
const myFunction = (a: number, b: number) => {
  return a + b;
};
```

In order to understand what this function does, you'd have to read the code.

Add some documentation to the function so that when you hover over it, you can read a description of what it does.

#### Solution 1: Adding Documentation for Hovers

In this case, we'll specify that the function "Adds two numbers together". We can also use an `@example` tag to show an example of how the function is used:

```typescript
/**
 * Adds two numbers together.
 * @example
 * myFunction(1, 2);
 * // Will return 3
 */

const myFunction = (a: number, b: number) => {
  return a + b;
};
```

Now whenever you hover over this function, the signature of the function along with the comment and full syntax highlighting for anything below the `@example` tag:

```
// hovering over myFunction shows:

const myFunction: (a: number, b: number) => number

Adds two numbers together.

@example

myFunction(1, 2);

// Will return 3
```

While this example is trivial (we could, of course, just name the function better), this can be an extremely important tool for documenting your code.

## Navigating with Go To Definition and Go To References

The TypeScript server also provides the ability to navigate to the definition of a variable or declaration.

In VS Code, this "Go to Definition" shortcut is used with `Command + Click` on a Mac or `F12` on Windows for the current cursor position. You can also right click and select "Go to Definition" from the context menu on either platform. For the sake of brevity, we'll use the Mac shortcut.

Once you've arrived at the definition location, repeating the `Command + Click` shortcut will show you everywhere that the variable or declaration is used. This is called "Go To References". This is especially useful for navigating around large codebases.

The shortcut can also be used for finding the type definitions for built-in types and libraries. For example, if you `Command + Click` on `document` when using the `getElementById` method, you'll be taken to the type definitions for `document` itself.

This is a great feature for understanding how built-in types and libraries work.

## Rename Symbol

In some situations, you might want to rename a variable across your entire codebase. Let's imagine that a database column changes from 'id' to 'entityId'. A simple find and replace won't work, because 'id' is used in many places for different purposes.

A TypeScript-enabled feature called 'Rename Symbol' allows you to do that with a single action.

Let's take a look at an example.

<!-- We could convert this to an exercise? -->

```typescript
const filterUsersById = (id: string) => {
  return users.filter((user) => user.id === id);
};
```

Right click on the `id` parameter of the `findUsersById` function and select "Rename Symbol".

A panel will be displayed that prompts for the new name. Type in `userIdToFilterBy` and hit `enter`. VS Code is smart enough to realize that we only want to rename the `id` parameter for the function, and not the `user.id` property:

```typescript
const filterUsersById = (userIdToFilterBy: string) => {
  return users.filter((user) => user.id === userIdToFilterBy);
};
```

The rename symbol feature is a great tool for refactoring code, and it works across multiple files as well.

## Automatic Imports

Large JavaScript applications can be composed of many, many modules. Manually importing from other files can be tedious. Fortunately, TypeScript supports automatic imports.

When you start typing the name of a variable you want to import, TypeScript will show a list of suggestions when you use the `Ctrl + Space` shortcut. Select a variable from the list, and TypeScript will automatically add an import statement to the top of the file.

You do need to be a little bit careful when using autocompletion in the middle of a name since the rest of the line could be unintentionally altered. To avoid this issue, make sure your cursor is at the end of the name before hitting `Ctrl + Space`.

## Quick Fixes

VS Code also offers a "Quick Fix" feature that can be used to run quick refactor scripts. For now, let's use it to import multiple missing imports at the same time.

To open the Quick Fix menu, hit `Command + .`. If you do this on a line of code which references a value that hasn't been imported yet, a popup will show.

```typescript
const triangle = new Triangle(); // red squiggly line under `Triangle`
```

One of the options in the Quick Fix menu will be 'Add All Missing Imports'. Selecting this option will add all the missing imports to the top of the file.

```typescript
import { Triangle } from "./shapes";

const triangle = new Triangle();
```

We'll look at the Quick Fixes menu again in the exercises. It provides a lot of options for refactoring your code, and it's a great way to learn about TypeScript's capabilities.

## Restarting the VS Code Server

We've looked at several examples of the cool things that TypeScript can do for you in VS Code. However, running a language server is not a simple task. The TypeScript server can sometimes get into a bad state and stop working properly. This might happen if configuration files are changed or when working with a particularly large codebase.

If you're experiencing strange behavior, it's a good idea to restart the TypeScript server. To do this, open the VS Code Command Palette with `Shift + Command + P`, then search for "Restart TS Server".

After a couple of seconds, the server should kick back into gear and ensure that errors are being reported properly.

## Working in JavaScript

If you're a JavaScript user, you might have noticed that lots of these features are already available without using TypeScript. Autocomplete, organizing imports, auto imports and hovering all work in JavaScript. Why is that?

It's because of TypeScript. TypeScript's IDE server is not just running on TypeScript files, but on JavaScript files too. That means that some of TypeScript's amazing IDE experience is also available in JavaScript.

Some features aren't available in JavaScript out of the box. The most prominent is in-IDE errors. Without type annotations, TypeScript isn't confident enough about the shape of your code to give you accurate warnings.

> TIP: There is a system for adding types to `.js` files using JSDoc comments which TypeScript supports, but it isn't enabled by default. We'll learn how to configure it later.

The reason TypeScript does this is, first of all, to support a better experience working in JavaScript for VS Code users. A subset of TypeScript's features is better than nothing at all.

But the upshot is that moving to TypeScript should feel extremely familiar for JavaScript users. It's the same IDE experience, just better.

## Exercises

### Exercise 1: Quick Fix Refactoring

Let's revisit VS Code's Quick Fixes menu we looked at earlier.

In this example, we have a function that contains a `randomPercentage` variable, which is created by calling `Math.random()` and converting the result to a fixed number:

```typescript
const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${(Math.random() * 100).toFixed(2)}%`;

  console.log(randomPercentage);
};
```

The goal here is to refactor the logic that generates the random percentage into its own separate function.

Highlight a variable, line, or entire code block then hit `Command + .` to open the Quick Fix menu. There will be several options for modifying the code, depending on where your cursor is when you open the menu.

Experiment with different options to see how they affect the example function.

### Solution 1: Quick Fix Refactoring

The Quick Fix menu will show different refactoring options depending on where your cursor is when you open it.

#### Inlining Variables

If you target `randomPercentage`, you can select an "Inline variable" option.

This would remove the variable and inline its value into the `console.log`:

```typescript
const func = () => {
  console.log(`${(Math.random() * 100).toFixed(2)}%`);
};
```

#### Extracting Constants

When selecting a smaller portion of code like `Math.random() * 100`, the option to "Extract constant in enclosing scope" will appear.

Selecting this option creates a new local variable that you are prompted to name, and assigns the selected value to it. After saving and running a code formatter, everything is cleaned up nicely:

```typescript
const func = () => {
  const randomTimes100 = Math.random() * 100;

  const randomPercentage = `${randomTimes100.toFixed(2)}%`;

  console.log(randomPercentage);
};
```

Similarly, the "Extract to Constant in Module Scope" option will create a new constant in the module scope:

```typescript
const randomTimes100 = Math.random() * 100;

const func = () => {
  const randomPercentage = `${randomTimes100.toFixed(2)}%`;

  console.log(randomPercentage);
};
```

#### Inlining and Extracting Functions

Selecting the entire random percentage logic enables some other extraction options.

The "Extract to function in module scope" option will act similarly to the constant option, but create a function instead:

```typescript
const func = () => {
  const randomPercentage = getRandomPercentage();

  console.log(randomPercentage);
};

function getRandomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
```

These are just some of the options provided by the Quick Fix menu. There's so much you can achieve with them, and we're only scratching the surface. Keep exploring and experimenting to discover their full potential!

# 03. TypeScript In The Development Pipeline

We've explored the relationship between JavaScript and TypeScript, and also how TypeScript improves your life as a developer. But let's go a bit deeper. In this chapter we'll get the TypeScript CLI up and running, and see how it fits into the development pipeline.

As an example, we'll be looking at using TypeScript to build a web application. But TypeScript can also be used anywhere JavaScript can - in a Node, Electron, React Native or any other app.

## The Problem with TypeScript in the Browser

Consider this TypeScript file `example.ts` that contains a `run` function that logs a message to the console:

```typescript
const run = (message: string) => {
  console.log(message);
};

run("Hello!");
```

Alongside the `example.ts` file, we have a basic `index.html` file that references the `example.ts` file in a script tag.

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <title>My App</title>
  </head>

  <body>
    <script src="example.ts"></script>
  </body>
</html>
```

However, when we try to open the `index.html` file in a browser, you'll see an error in the console:

```
Unexpected token ':'
```

There aren't any red lines in the TypeScript file, so why is this happening?

### Runtimes Can't Run TypeScript

The problem is that browsers (and other runtimes like Node.js) can't understand TypeScript on their own. They only understand JavaScript.

In the case of the `run` function, the `: string` after `message` in the function declaration is not valid JavaScript:

```typescript
const run = (message: string) => {
  // `: string` is not valid JavaScript!

  console.log(message);
};
```

Removing `: string` gives us something that looks a bit more like JavaScript, but now TypeScript displays an error underneath `message`:

```typescript
const run = (message) => {}; // red squiggly line under message
```

Hovering over the red squiggly line in VS Code, we can see that TypeScript's error message is telling us that `message` implicitly has an `any` type.

We'll get into what that particular error means later, but for now the point is that our `example.ts` file contains syntax that the browser can't understand, but the TypeScript CLI isn't happy when we remove it.

So, in order to get the browser to understand our TypeScript code, we need to turn it into JavaScript.

## Transpiling TypeScript

The process of turning JavaScript to TypeScript (called 'transpilation') can be handled by the TypeScript CLI `tsc`, which is installed when you install TypeScript. But before we can use `tsc`, we need to set up our TypeScript project.

Open a terminal, and navigate to the parent directory of `example.ts` and `index.html`.

To double check that you have TypeScript installed properly, run `tsc --version` in your terminal. If you see a version number, you're good to go. Otherwise, install TypeScript globally with PNPM by running:

```bash
pnpm add -g typescript
```

With our terminal open to the correct directory and TypeScript installed, we can initialize our TypeScript project.

### Initializing a TypeScript Project

In order for TypeScript to know how to transpile our code, we need to create a `tsconfig.json` file in the root of our project.

Running the following command will generate the `tsconfig.json` file:

```bash
tsc --init
```

Inside of the newly created `tsconfig.json` file, you will find a number of useful starter configuration options as well as many other commented out options.

For now, we'll just stick with the defaults:

```json
// excerpt from tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

With our `tsconfig.json` file in place, we can begin transpilation.

### Running `tsc`

Running the `tsc` command in the terminal without any arguments will take advantage of the defaults in `tsconfig.json` and transpile all TypeScript files in the project to JavaScript.

```bash
tsc
```

In this case, this means that our TypeScript code in `example.ts` file will become JavaScript code inside of `example.js`.

Inside of `example.js`, we can see that the TypeScript syntax has been transpiled into JavaScript:

```javascript
// Inside of the example.js file

"use strict";

const run = (message) => {
  console.log(message);
};

run("Hello!");
```

Now that we have our JavaScript file, we can update the `index.html` file to reference `example.js` instead of `example.ts`:

```html
// inside of index.html

<script src="example.js"></script>
```

Opening the `index.html` file in the browser will now show the expected "Hello!" output in the console without any errors!

### Does TypeScript Change My JavaScript?

Looking at our JavaScript file, we can see how little has changed from the TypeScript code.

```javascript
"use strict";

const run = (message) => {
  console.log(message);
};

run("Hello!");
```

It's removed the `: string` from the `run` function, and added `"use strict";` to the top of the file. But other than that, the code is identical.

This is a key guiding principle for TypeScript - it gives you a thin layer of syntax on top of JavaScript, but it doesn't change the way your code works. It doesn't add runtime validation. It doesn't attempt to optimise your code's performance.

It just adds types (to give you better DX), and then removes them when it's time to turn your code into JavaScript.

> There are some exceptions to this guiding principle, such as enums, namespaces and class parameter properties - but we'll cover those later.

### A Note on Version Control

We've successfully transpiled our TypeScript code to JavaScript, but we've also added a new file to our project. Adding a `.gitignore` file to the root of the project and including `*.js` will prevent the JavaScript files from being added to version control.

This is important, because it communicates to other developers using the repo that the `*.ts` files are the source of truth for the JavaScript.

## Running TypeScript in Watch Mode

You might have noticed something. If you make some changes to your TypeScript file, you'll need to run `tsc` again in order to see the changes in the browser.

This will get old fast. You might forget it, and wonder why your changes aren't yet in the browser. Fortunately, the TypeScript CLI has a `--watch` flag that will automatically recompile your TypeScript files on save:

```
tsc --watch
```

To see it in action, open VS Code with the `example.ts` and `example.js` files side by side.

If you change the `message` being passed to the `run` function in `example.ts` to something else, you'll see the `example.js` file update automatically.

## Errors In The TypeScript CLI

If `tsc` encounters an error, it will display the error in the terminal and the file with the error will be marked with a red squiggly line in VS Code.

For example, try changing the `message: string` to `message: number` in the `run` function inside of `example.ts`:

```typescript
const run = (message: number) => {
  console.log(message);
};

run("Hello world!"); // red squiggly line under "Hello world!"
```

Inside the terminal, `tsc` will display an error message:

```
// inside the terminal

Argument of type 'string' is not assignable to parameter of type 'number'.

run("Hello world!");

Found 1 error. Watching for file changes.

```

Reversing the change back to `message: string` will remove the error and the `example.js` file will again update automatically.

Running `tsc` in watch mode is extremely useful for automatically compiling TypeScript files and catching errors as you write code.

It can be especially useful on large projects because it checks the entire project. This is different to your IDE, which only shows the errors of the file that's currently open.

## TypeScript With Modern Frameworks

The setup we have so far is pretty simple. A TypeScript file, a `tsc –watch` command, and a JavaScript file. But in order to build a frontend app, we're going to need to do a lot more. We'll need to handle CSS, minification, bundling, and a lot more. TypeScript can't help us with all of that.

Fortunately, there are many frontend frameworks that can help.

Vite is one example of a frontend tooling suite that not only transpiles `.ts` files to `.js` files, but also provides a dev server with Hot Module Replacement. Working with an HMR setup allows you to see changes in your code reflected in the browser without having to manually reload the page.

But there's a drawback. While Vite and other tools handle the actual transpilation of TypeScript to JavaScript, they don't provide type checking out of the box. This means that you could introduce errors into your code and Vite would continue running the dev server without telling you. It would even allow you to push errors into production, because it doesn't know any better.

So, we still need the TypeScript CLI in order to catch errors. But if Vite is transpiling our code, we don't need TypeScript to do it too.

### TypeScript as a Linter

Fortunately, we can configure TypeScript's CLI to allow for type checking without interfering with our other tools.

Inside the `tsconfig.json` file, there's an option called `noEmit` that tells `tsc` whether or not to emit JavaScript files.

By setting `noEmit` to `true`, no JavaScript files will be created when you run `tsc`. This makes TypeScript act more like a linter than a transpiler. This makes a `tsc` step a great addition to a CI/CD system, since it can prevent merging a pull request with TypeScript errors.

Later in the book, we'll look closer at more advanced TypeScript configurations for application development.

---

Part 2: Fundamentals

---

# 04. Essential Types and Annotations

Now we've covered most of the why of TypeScript, it's time to start with the how. We'll cover key concepts like type annotations and type inference, as well as how to start writing type-safe functions.

It's important to build a solid foundation, as everything you'll learn later builds upon what you'll learn in this chapter.

## Basic Annotations

One of the most common things you'll need to do as a TypeScript developer is to annotate your code. Annotations tell TypeScript what type something is supposed to be.

Annotations will often use a `:` - this is used to tell TypeScript that a variable or function parameter is of a certain type.

### Function Parameter Annotations

One of the most important annotations you'll use is for function parameters.

For example, here is a `logAlbumInfo` function that takes in a `title` string, a `trackCount` number, and an `isReleased` boolean:

```typescript
const logAlbumInfo = (
  title: string,

  trackCount: number,

  isReleased: boolean,
) => {
  // implementation
};
```

Each parameter's type annotation enables TypeScript to check that the arguments passed to the function are of the correct type. If the type doesn't match up, TypeScript will show a squiggly red line under the offending argument.

```typescript
logAlbumInfo("Black Gold", false, 15); // red squiggly lines first under `false`, then under `15`
```

In the example above, we would first get an error under `false` because a boolean isn't assignable to a number.

```typescript
logAlbumInfo("Black Gold", 20, 15);
```

After fixing that, we would have an error under `15` because a number isn't assignable to a boolean.

### Variable Annotations

As well as function parameters, you can also annotate variables.

Here's an example of some variables, with their associated types.

```typescript
let albumTitle: string = "Midnights";
let isReleased: boolean = true;
let trackCount: number = 13;
```

Notice how each variable name is followed by a `:` and its primitive type before its value is set.

Variable annotations are used to explicitly tell TypeScript what we expect the types of our variables to be.

Once a variable has been declared with a specific type annotation, TypeScript will ensure the variable remains compatible with the type you specified.

For example, this reassignment would work:

```typescript
let albumTitle: string = "Midnights";

albumTitle = "1989";
```

But this one would show an error:

```typescript
let isReleased: boolean = true;

isReleased = "yes"; // red squiggly line under `isReleased`
```

TypeScript's static type checking is able to spot errors at compile time, which is happening behind the scenes as you write your code.

In the case of the `isReleased` example above, the error message reads:

```txt
Type 'string' is not assignable to type 'boolean'.
```

In other words, TypeScript is telling us that it expects `isReleased` to be a boolean, but instead received a `string`.

It's nice to be warned about these kinds of errors before we even run our code!

### The Basic Types

TypeScript has a number of basic types that you can use to annotate your code. Here are a few of the most common ones:

```typescript
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;
let example6: null = null;
let example7: undefined = undefined;
```

Each of these types is used to tell TypeScript what type a variable or function parameter is supposed to be.

You can express much more complex types in TypeScript: arrays, objects, functions and much more. We'll cover these in later chapters.

### Type Inference

TypeScript gives you the ability to annotate almost any value, variable or function in your code. You might be thinking “wait, do I need to annotate everything? That's a lot of extra code.”

As it turns out, TypeScript can infer a lot from the context that your code is run.

#### Variables Don't Always Need Annotations

Let's look again at our variable annotation example, but drop the annotations:

```typescript
let albumTitle = "Midnights";
let isReleased = true;
let trackCount = 13;
```

We didn't add the annotations, but TypeScript isn't complaining. What's going on?

Try hovering your cursor over each variable.

```typescript
// hovering over each variable name

let albumTitle: string;
let isReleased: boolean;
let trackCount: number;
```

Even though they aren't annotated, TypeScript is still picking up the type that they're each supposed to be. This is TypeScript inferring the type of the variable from usage.

It behaves as if we'd annotated it, warning us if we try to assign it a different type from what it was assigned originally:

```typescript
let isReleased = true;

// Type 'string' is not assignable to type 'boolean'.(2322)

isReleased = "yes"; // red line under isReleased
```

And also giving us autocomplete on the variable:

```typescript
albumTitle.toUpper; // shows `toUpperCase` in autocomplete
```

This is an extremely powerful part of TypeScript. It means that you can mostly _not_ annotate variables and still have your IDE know what type things are.

#### Function Parameters Always Need Annotations

But type inference can't work everywhere. Let's see what happens if we remove the type annotations from the `logAlbumInfo` function's parameters:

```typescript
const logAlbumInfo = (
  title, // error: Parameter 'title' implicitly has an 'any' type.
  trackCount, // error: Parameter 'trackCount' implicitly has an 'any' type.
  isReleased, // error: Parameter 'isReleased' implicitly has an 'any' type.
) => {
  // rest of function body
};
```

On its own, TypeScript isn't able to infer the types of the parameters, so it shows an error under each parameter name:

```txt
// hovering over `title`

Parameter 'title' implicitly has an 'any' type.
```

This is because functions are very different to variables. TypeScript can see what value is assigned to which variable, so it can make a good guess about the type.

But TypeScript can't tell from a function parameter alone what type it's supposed to be. When you don't annotate it, it defaults the type to `any` - a scary, unsafe type.

It also can't detect it from usage. If we had an 'add' function that took two parameters, TypeScript wouldn't be able to tell that they were supposed to be numbers:

```typescript
function add(a, b) {
  return a + b;
}
```

`a` and `b` could be strings, booleans, or anything else. TypeScript can't know from the function body what type they're supposed to be.

So, when you're declaring a named function, their parameters always need annotations in TypeScript.

<!-- TODO - maybe add a caveat to talk about anonymous functions -->

### The `any` Type

The error we encountered in the 'Function Parameters Always Need Annotations' section was pretty scary:

```
Parameter 'title' implicitly has an 'any' type.
```

When TypeScript doesn't know what type something is, it assigns it the `any` type.

This type breaks TypeScript's type system. It turns off type safety on the thing it's assigned to.

This means that anything can be assigned to it, any property on it can be accessed/assigned to, and it can be called like a function.

```typescript
let anyVariable: any = "This can be anything!";

anyVariable(); // no error

anyVariable.deep.property.access; // no error
```

The code above will error at runtime, but TypeScript isn't giving us a warning!

So, using `any` can be used to turn off errors in TypeScript. It can be a useful escape hatch for when a type is too complex to describe.

But over-using `any` defeats the purpose of using TypeScript, so it's best to avoid using it whenever possible– whether implicitly or explicitly.

### Exercises

#### Exercise 1: Basic Types with Function Parameters

Let's start with an `add` function which takes two boolean parameters `a` and `b` and returns `a + b`:

```tsx
export const add = (a: boolean, b: boolean) => {
  return a + b; // red squiggly line under a + b
};
```

A `result` variable is created by calling the `add` function. The `result` variable is then checked to see if it is equal to a `number`:

```typescript
const result = add(1, 2); // red squiggly line under `1``

type test = Expect<Equal<typeof result, number>>; // red squiggly line under `Equal` through `number`
```

<!-- TODO - explain the Expect<Equal<>> syntax -->

Currently, there are a few errors in the code that are marked by red squiggly lines.

The first is on the `return` line of the `add` function, where we have `a + b`:

```
Operator '+' cannot be applied to types 'boolean' and 'boolean'
```

There's also an error below the `1` argument in the `add` function call:

```
Argument of type 'number' is not assignable to parameter of type 'boolean'
```

Finally, we can see that our `test` result has an error because the `result` is currently typed as `any`, which is not equal to `number`.

Your challenge is to consider how we can change the types to make the errors go away, and to ensure that `result` is a `number`. You can hover over `result` to check it.

#### Exercise 2: Annotating Empty Parameters

Here we have a `concatTwoStrings` function that is similar in shape to the `add` function. It takes two parameters, `a` and `b`, and returns a string.

```typescript
const concatTwoStrings = (a, b) => {
  // red squiggly lines under `a` and `b`

  return [a, b].join(" ");
};
```

There are currently errors on the `a` and `b` parameters, which have not been annotated with types:

```
Parameter 'a' implicitly has an 'any' type.

Parameter 'b' implicitly has an 'any' type.
```

The `result` of calling `concatTwoStrings` with `"Hello"` and `"World"` and checking if it is a `string` does not show any errors:

```typescript
const result = concatTwoStrings("Hello", "World");

type test = Expect<Equal<typeof result, string>>;
```

Your job is to add some function paramater annotations to the `concatTwoStrings` function to make the errors go away.

#### Exercise 3: The Basic Types

As we've seen, TypeScript will show errors when types don't match.

This set of examples shows us the basic types that TypeScript gives us to describe JavaScript:

```typescript
export let example1: string = "Hello World!";
export let example2: string = 42; // red squiggly line under `example2`
export let example3: string = true; // red squiggly line under `example3`
export let example4: string = Symbol(); // red squiggly line under `example4`
export let example5: string = 123n; // red squiggly line under `example5`
```

Note that the colon `:` is used to annotate the type of each variable, just like it was for typing the function parameters.

You'll also notice there are several errors.

Hovering over each of the underlined variables will display any associated error messages.

For example, hovering over `example2` will show:

```
Type 'number' is not assignable to type 'string'.
```

The type error for `example3` tells us:

```
Type 'boolean' is not assignable to type 'string'.
```

Change the types of the annotations on each variable to make the errors go away.

#### Exercise 4: The `any` Type

Here is a function called `handleFormData` that accepts an `e` typed as `any`. The function prevents the default form submission behavior, then creates an object from the form data and returns it:

```typescript
const handleFormData = (e: any) => {
  e.preventDefault();

  const data = new FormData(e.terget);

  const value = Object.fromEntries(data.entries());

  return value;
};
```

Here is a test for the function that creates a form, sets the `innerHTML` to add an input, and then manually submits the form. When it submits, we expect the value to equal the value that was in our form that we grafted in there:

```tsx
it("Should handle a form submit", () => {
  const form = document.createElement("form");

  form.innerHTML = `
<input name="name" value="John Doe" />
`;

  form.onsubmit = (e) => {
    const value = handleFormData(e);

    expect(value).toEqual({ name: "John Doe" });
  };

  form.requestSubmit();

  expect.assertions(1);
});
```

Note that this isn't the normal way you would test a form, but it provides a way to test the example `handleFormData` function more extensively.

In the code's current state, there are no red squiggly lines present.

However, when running the test with Vitest we get an error similar to the following:

```
This error originated in "any.problem.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.

The latest test that might've caused the error is "Should handle a form submit". It might mean one of the following:

- The error was thrown, while Vitest was running this test.

- This was the last recorded test before the error was thrown, if error originated after test finished its execution.
```

Why is this error happening? Why isn't TypeScript giving us an error here?

I'll give you a clue. I've hidden a nasty typo in there. Can you fix it?

#### Solution 1: Basic Types with Function Parameters

Common sense tells us that the `boolean`s in the `add` function should be replaced with some sort of `number` type.

If you are coming from another language, you might be tempted to try using `int` or `float`, but TypeScript only has the `number` type:

```typescript
function add(a: number, b: number) {
  return a + b;
}
```

Making this change resolves the errors, and also gives us some other bonuses.

If we try calling the `add` function with a string instead of a number, we'd get an error that type `string` is not assignable to type `number`:

```typescript
add("something", 2); // red squiggly line under `"something"`
```

Not only that, but the result of our function is now inferred for us:

```typescript
const result = add(1, 2); // result is a number!
```

So TypeScript can not only infer variables, but also the return types of functions.

#### Solution 2: Annotating Empty Parameters

As we know, function parameters always need annotations in TypeScript.

So, let's update the function declaration parameters so that `a` and `b` are both specified as `string`:

```typescript
const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(" ");
};
```

This change fixes the errors.

For a bonus point, what type will the return type be inferred as?

```typescript
const result = concatTwoStrings("Hello", "World"); // result is a string!
```

#### Solution 3: Updating Basic Types

Each of the examples represents the TypeScript's basic types, and would be annotated as follows:

```typescript
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;
```

We've already seen `string`, `number`, and `boolean`. The `symbol` type is used for `Symbol`s which are used to ensure property keys are unique. The `bigint` type is used for numbers that are too large for the `number` type.

However, in practice you mostly won't annotate variables like this. If we remove the explicit type annotations, there won't be any errors at all:

```typescript
let example1 = "Hello World!";
let example2 = 42;
let example3 = true;
let example4 = Symbol();
let example5 = 123n;
```

These basic types are very useful to know, even if you don't always need them for your variable declarations.

#### Solution 4: The `any` Type

In this case, using `any` did not help us at all. In fact, `any` annotations seem to actually turn off type checking!

With the `any` type, we're free to do anything we want to the variable, and TypeScript will not prevent it.

Using `any` also disables useful features like autocompletion, which can help you avoid typos.

That's right-- the error in the above code was caused by a typo of `e.terget` instead of `e.target` when creating the `FormData`!

```typescript
const handleFormData = (e: any) => {
  e.preventDefault();

  const data = new FormData(e.terget); // e.terget! Whoops!

  const value = Object.fromEntries(data.entries());

  return value;
};
```

If `e` had been properly typed, this error would have been caught by TypeScript right away. We'll come back to this example in the future to see the proper typing.

Using `any` may seem like a quick fix when you have trouble figuring out how to properly type something, but it can come back to bite you later.

## Object Literal Types

Now that we've done some exploration with basic types, let's move on to object types.

Object types are used to describe the shape of objects. Each property of an object can have its own type annotation.

When defining an object type, we use curly braces to contain the properties and their types:

```typescript
const talkToAnimal = (animal: { name: string; type: string; age: number }) => {
  // rest of function body
};
```

This curly braces syntax is called an object literal type.

### Optional Object Properties

We can use `?` operator to mark the `age` property as optional:

```typescript
const talkToAnimal = (animal: { name: string; type: string; age?: number }) => {
  // rest of function body
};
```

One cool thing about type annotations with object literals is that they provide auto-completion for the property names while you're typing.

For instance, when calling `talkToAnimal`, it will provide you with an auto-complete dropdown with suggestions for the `name`, `type`, and `age` properties.

This feature can save you a lot of time, and also helps to avoid typos in a situation when you have several properties with similar names.

### Exercises

#### Exercise 1: Object Literal Types

Here we have a `concatName` function that accepts a `user` object with `first` and `last` keys:

```typescript
const concatName = (user) => {
  // squiggly line under `user`

  return `${user.first} ${user.last}`;
};
```

The test expects that the full name should be returned, and it is passing:

```typescript
it("should return the full name", () => {
  const result = concatName({
    first: "John",
    last: "Doe",
  });

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Doe");
});
```

However, there is a familiar error on the `user` parameter in the `concatName` function:

```
Parameter 'user' implicitly has an 'any' type.
```

We can tell from the `concatName` function body that it expects `user.first` and `user.last` to be strings.

How could we type the `user` parameter to ensure that it has these properties and that they are of the correct type?

#### Exercise 2: Optional Property Types

Here's a version of the `concatName` function that has been updated to return just the first name if a last name wasn't provided:

```typescript
const concatName = (user: { first: string; last: string }) => {
  if (!user.last) {
    return user.first;
  }

  return `${user.first} ${user.last}`;
};
```

Like before, TypeScript gives us an error when testing that the function returns only the first name when no last name is provided passes:

```typescript
it("should only return the first name if last name not provided", () => {
  const result = concatName({
    first: "John",
  }); // red squiggly line under `{first: "John"}`

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John");
});
```

This time the entire `{first: "John"}` object is underlined in red, and the error message reads:

```
Argument of type '{ first: string; }' is not assignable to parameter of type '{ first: string; last: string; }'.
Property 'last' is missing in type '{ first: string; }' but required in type '{ first: string; last: string; }'.
```

The error tells us that we are missing a property, but the error is incorrect. We _do_ want to support objects that only include a `first` property. In other words, `last` needs to be optional.

How would you update this function to fix the errors?

#### Solution 1: Object Literal Types

In order to annotate the `user` parameter as an object, we can use the curly brace syntax `{}`.

Let's start by annotating the `user` parameter as an empty object:

```typescript
const concatName = (user: {}) => {
  return `${user.first} ${user.last}`; // red squiggly line under `.first` and `.last`
};
```

The errors change. This is progress, of a kind. The errors now show up under `.first` and `.last` in the function return.

```
Property 'first' does not exist on type '{}'.
Property 'last' does not exist on type '{}'.
```

In order to fix these errors, we need to add the `first` and `last` properties to the type annotation.

```typescript
const concatName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};
```

Now TypeScript knows that both the `first` and `last` properties of `user` are strings, and the test passes.

#### Solution 2: Optional Property Types

Similar to when we set a function parameter as optional, we can use the `?` to specify that an object's property is optional.

As seen in a previous exercise, we can add a question mark to function parameters to make them optional:

```typescript
function concatName(user: { first: string; last?: string }) {
  // implementation
}
```

Adding `?:` indicates to TypeScript that the property doesn't need to be present.

If we hover over the `last` property inside of the function body, we'll see that the `last` property is `string | undefined`:

```
// hovering over `user.last`

(property) last?: string | undefined
```

This means it's `string` OR `undefined`. This is a useful feature of TypeScript that we'll see more of in the future.

## Type Aliases

So far, we've been declaring all of our types inline. This is fine for these simple examples, but in a real application we're going to have types which repeat a lot across our app.

These might be users, products, or other domain-specific types. We don't want to have to repeat the same type definition in every file that needs it.

This is where the `type` keyword comes in. It allows us to define a type once and use it in multiple places.

```typescript
type Animal = {
  name: string;
  type: string;
  age?: number;
};
```

This is what's called a type alias. It's a way to give a name to a type, and then use that name wherever we need to use that type.

To create a new variable with the `Animal` type, we'll add it as a type annotation after the variable name:

```typescript
let pet: Animal = {
  name: "Karma",
  type: "cat",
};
```

We can also use the `Animal` type alias in place of the object type annotation in a function:

```typescript
const getAnimalDescription = (animal: Animal) => {};
```

And call the function with our `pet` variable:

```typescript
const desc = getAnimalDescription(pet);
```

Type aliases can be objects, but they can also use basic types:

```typescript
type Id = string | number;
```

We'll look at this syntax later, but it's basically saying that an `Id` can be either a `string` or a `number`.

Using a type alias is a great way to ensure there's a single source of truth for a type definition, which makes it easier to make changes in the future.

### Sharing Types Across Modules

Type aliases can be created in their own `.ts` files and imported into the files where you need them. This is useful when sharing types in multiple places, or when a type definition gets too large:

```typescript
// In shared-types.ts

export type Animal = {
  width: number;
  height: number;
};

// In index.ts

import { Animal } from "./shared-types";
```

As a convention, you can even create your own `.types.ts` files. This can help to keep your type definitions separate from your other code.

### Exercises

#### Exercise 1: The `type` Keyword

Here's some code that uses the same type in multiple places:

```typescript
const getRectangleArea = (rectangle: { width: number; height: number }) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: {
  width: number;
  height: number;
}) => {
  return 2 * (rectangle.width + rectangle.height);
};
```

The `getRectangleArea` and `getRectanglePerimeter` functions both take in a `rectangle` object with `width` and `height` properties.

Tests for each function pass as expected:

```typescript
it("should return the area of a rectangle", () => {
  const result = getRectangleArea({
    width: 10,
    height: 20,
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(200);
});

it("should return the perimeter of a rectangle", () => {
  const result = getRectanglePerimeter({
    width: 10,
    height: 20,
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(60);
});
```

Even though everything is working as expected, there's an opportunity for refactoring to clean things up.

How could you use the `type` keyword to make this code more readable?

#### Solution 1: The `type` Keyword

You can use the `type` keyword to create a `Rectangle` type with `width` and `height` properties:

```typescript
type Rectangle = {
  width: number;
  height: number;
};
```

With the type alias created, we can update the `getRectangleArea` and `getRectanglePerimeter` functions to use the `Rectangle` type:

```typescript
const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
```

This makes the code a lot more concise, and gives us a single source of truth for the `Rectangle` type.

## Arrays and Tuples

### Arrays

You can also describe the types of arrays in TypeScript. There are two different syntaxes for doing this.

The first option is the square bracket syntax. This syntax is similar to the type annotations we've made so far, but with the addition of two square brackets at the end to indicate an array.

```typescript
let albums: string[] = [
  "Rubber Soul",
  "Revolver",
  "Sgt. Pepper's Lonely Hearts Club Band",
];

let dates: number[] = [1965, 1966, 1967];
```

The second option is to explicitly use the `Array` type with angle brackets containing the type of data the array will hold:

```typescript
let albums: Array<string> = [
  "Rubber Soul",
  "Revolver",
  "Sgt. Pepper's Lonely Hearts Club Band",
];
```

Both of these syntaxes are equivalent, but the square bracket syntax is a bit more concise when creating arrays. It's also the way that TypeScript presents error messages. Keep the angle bracket syntax in mind, though– we'll see more examples of it later on.

#### Arrays Of Objects

When specifying an array's type, you can use any built-in types, inline types, or type aliases:

```typescript
type Album = {
  artist: string;
  title: string;
  year: number;
};

let selectedDiscography: Album[] = [
  {
    artist: "The Beatles",
    title: "Rubber Soul",
    year: 1965,
  },
  {
    artist: "The Beatles",
    title: "Revolver",
    year: 1966,
  },
];
```

And if you try to update the array with an item that doesn't match the type, TypeScript will give you an error:

```typescript
selectedDiscography.push({name: "Karma", type: "cat"};) // red squiggly line under `name`
// error message:
// Argument of type '{ name: string; type: string; }' is not assignable to parameter of type 'Album'.
```

### Tuples

Tuples let you specify an array with a fixed number of elements, where each element has its own type.

Creating a tuple is similar to an array's square bracket syntax - except the square brackets contain the types instead of abutting the variable name:

```typescript
// Tuple
let album: [string, number] = ["Rubber Soul", 1965];

// Array
let albums: string[] = [
  "Rubber Soul",
  "Revolver",
  "Sgt. Pepper's Lonely Hearts Club Band",
];
```

Tuples are useful for grouping related information together without having to create a new type.

For example, if we wanted to group an album with its play count, we could do something like this:

```typescript
let albumWithPlayCount: [Album, number] = [
  {
    artist: "The Beatles",
    title: "Revolver",
    year: 1965,
  },
  10000,
];
```

#### Named Tuples

To add more clarity to the tuple, names for each of the types can be added inside of the square brackets:

```typescript
type MyTuple = [album: Album, playCount: number];
```

This can be helpful when you have a tuple with a lot of elements, or when you want to make the code more readable.

### Exercises

#### Exercise 1: Array Type

Consider the following shopping cart code:

```typescript
type ShoppingCart = {
  userId: string;
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"], // squiggly line under `items`
});
```

We have a type alias for `ShoppingCart` that currently has a `userId` property of type `string`.

The `processCart` function takes in a `cart` parameter of type `ShoppingCart`. Its implementation doesn't matter at this point.

What does matter is that when we call `processCart`, we are passing in an object with a `userId` and an `items` property that is an array of strings.

There is an error underneath `items` that reads:

```
Argument of type '{ userId: string; items: string[]; }' is not assignable to parameter of type 'ShoppingCart'.

Object literal may only specify known properties, and 'items' does not exist in type 'ShoppingCart'.
```

As the error message points out, there is not currently a property called `items` on the `ShoppingCart` type.

How would you fix this error?

#### Exercise 2: Arrays of Objects

Consider this `processRecipe` function which takes in a `Recipe` type:

```typescript
type Recipe = {
  title: string;
  instructions: string;
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
```

The function is called with an object containing `title`, `instructions`, and `ingredients` properties, but there are currently errors because the `Recipe` type doesn't currently have an `ingredients` property:

```
Argument of type '{title: string; ingredients: { name: string; quantity: string; }[]; instructions: string; }' is not assignable to parameter of type 'Recipe'.

Object literal may only specify known properties, and 'ingredients' does not exist in type 'Recipe'.
```

By combining what you've seen with typing object properties and working with arrays, how would you specify ingredients for the `Recipe` type?

#### Exercise 3: Tuples

Here we have a `setRange` function that takes in an array of numbers:

```typescript
const setRange = (range: Array<number>) => {
  const x = range[0];
  const y = range[1];

  // Do something with x and y in here
  // x and y should both be numbers!

  type tests = [
    Expect<Equal<typeof x, number>>, // red squiggly line under Equal<> statement
    Expect<Equal<typeof y, number>>, // red squiggly line under Equal<> statement
  ];
};
```

Inside the function, we grab the first element of the array and assign it to `x`, and we grab the second element of the array and assign it to `y`.

There are two tests inside the `setRange` function that are currently failing.

Using the `// @ts-expect-error` directive, we find there are a couple more errors that need fixing. Recall that this directive tells TypeScript we know there will be an error on the next line, so ignore it. However, if we say we expect an error but there isn't one, we will get the red squiggly lines on the actual `//@ts-expect-error` line.

```typescript
// both of these show red squiggly lines under the ts-expect-error directive

// @ts-expect-error too few arguments
setRange([0]);

// @ts-expect-error too many arguments
setRange([0, 10, 20]);
```

The code for the `setRange` function needs an updated type annotation to specify that it only accepts a tuple of two numbers.

#### Exercise 4: Optional Members of Tuples

This `goToLocation` function takes in an array of coordinates. Each coordinate has a `latitude` and `longitude`, which are both numbers, as well as an optional `elevation` which is also a number:

```typescript
const goToLocation = (coordinates: Array<number>) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];

  // Do something with latitude, longitude, and elevation in here

  type tests = [
    Expect<Equal<typeof latitude, number>>, // red squiggly line under Equal<> statement
    Expect<Equal<typeof longitude, number>>, // red squiggly line under Equal<> statement
    Expect<Equal<typeof elevation, number | undefined>>,
  ];
};
```

Your challenge is to update the type annotation for the `coordinates` parameter to specify that it should be a tuple of three numbers, where the third number is optional.

#### Solution 1: Array Type

For the `ShoppingCart` example, defining an array of `item` strings would looks like this when using the square bracket syntax:

```typescript
type ShoppingCart = {
  userId: string;
  items: string[];
};
```

With this in place, we must pass in `items` as an array. A single string or other type would result in a type error.

The other syntax is to explicitly write `Array` and pass it a type inside the angle brackets:

```typescript
type ShoppingCart = {
  userId: string;
  items: Array<string>;
};
```

#### Solution 2: Arrays of Objects

There are a few different ways to express an array of objects.

One approach would be to to create a new `Ingredient` type that we can use to represent the objects in the array:

```typescript
type Ingredient = {
  name: string;
  quantity: string;
};
```

Then the `Recipe` type can be updated to include an `ingredients` property of type `Ingredient[]`:

```typescript
type Recipe = {
  title: string;
  instructions: string;
  ingredients: Ingredient[];
};
```

This solution reads nicely, fixes the errors, and helps to create a mental map of our domain model.

As seen previously, using the `Array<Ingredient>` syntax would also work:

```typescript
type Recipe = {
  title: string;
  instructions: string;
  ingredients: Array<Ingredient>;
};
```

It's also possible to specify the `ingredients` property as an inline object literal on the `Recipe` type using the square brackets:

```typescript
type Recipe = {
  title: string;
  instructions: string;
  ingredients: {
    name: string;
    quantity: string;
  }[];
};
```

Or using `Array<>`:

```typescript
type Recipe = {
  title: string;
  instructions: string;
  ingredients: Array<{
    name: string;
    quantity: string;
  }>;
};
```

The inline approaches are useful, but I prefer extracting them out to a new type. This means that if another part of your application needs to use the `Ingredient` type, it can.

#### Solution 3: Tuples

In this case, we would update the `setRange` function to use the tuple syntax instead of the array syntax:

```typescript
const setRange = (range: [number, number]) => {
  // rest of function body
};
```

If you want to add more clarity to the tuple, you can add names for each of the types:

```typescript
const setRange = (range: [x: number, y: number]) => {
  // rest of function body
};
```

#### Solution 4: Optional Members of Tuples

A good start would be to change the `coordinates` parameter to a tuple of `[number, number, number | undefined]`:

```tsx
const goToLocation = (coordinates: [number, number, number | undefined]) => {};
```

The problem here is that while the third member of the tuple is able to be a number or `undefined`, the function still is expecting something to be passed in. It's not a good solution to have to pass in `undefined` manually.

Using a named tuple in combination with the optional operator `?` is a better solution:

```tsx
const goToLocation = (
  coordinates: [latitude: number, longitude: number, elevation?: number],
) => {};
```

The values are clear, and using the `?` operator specifies the `elevation` is an optional number. It almost looks like an object, but it's still a tuple.

Alternatively, if you don't want to use named tuples, you can use the `?` operator after the definition:

```tsx
const goToLocation = (coordinates: [number, number, number?]) => {};
```

## Passing Types To Functions

Let's take a quick look back at the `Array` type we saw earlier.

```ts
Array<string>;
```

This type describes an array of strings. To make that happen, we're passing a type (`string`) as an argument to another type (`Array`).

There are lots of other types that can receive types, like `Promise<string>`, `Record<string, string>`, and others. In each of them, we use the angle brackets to pass a type to another type.

But we can also use that syntax to pass types to functions.

### Passing Types To `Set`

A `Set` is JavaScript feature that represents a collection of unique values.

To create a `Set`, use the `new` keyword and call `Set`:

```typescript
const formats = new Set();
```

If we hover over the `formats` variable, we can see that it is typed as `Set<unknown>`:

```typescript
// hovering over `formats` shows:

const formats: Set<unknown>;
```

That's because the `Set` doesn't know what type it's supposed to be! We haven't passed it any values, so it defaults to an `unknown` type.

One way to fix this would be to pass some values to `Set` so it understands what type it's supposed to be:

```typescript
const formats = new Set(["CD", "DVD"]);
```

But, we don't _want_ to pass any values to it initially.

We can get around this by passing a _type_ to `Set` when we call it, using the angle brackets syntax:

```typescript
const formats = new Set<string>();
```

Now, `formats` understands that it's a set of strings, and adding anything other than a string will fail:

```typescript
formats.add("Digital"); // this works

formats.add(8); // red squiggly line under `8`

// Error message:

// Argument of type 'number' is not assignable to parameter of type 'string'.ts
```

This is a really important thing to understand in TypeScript. You can pass types, as well as values, to functions.

### Not All Functions Can Receive Types

Most functions in TypeScript _can't_ receive types. A common example where you might want to pass a type is when calling `document.getElementById`.

```typescript
const audioElement = document.getElementById("player");
```

We know that `audioElement` is going to be a `HTMLAudioElement`. This type comes from the DOM typings, which we'll talk about later.

So, it makes sense that we should be able to pass it to `document.getElementById`:

```typescript
// Red line under HTMLAudioElement
// Expected 0 type arguments, but got 1.
const audioElement = document.getElementById<HTMLAudioElement>("player");
```

But unfortunately, we can't. We get an error saying that `.getElementById` expects zero type arguments.

We can see whether a function can receive type arguments by hovering over it. Let's try hovering `.getElementById`:

```
(method) Document.getElementById(elementId: string): HTMLElement | null
```

`.getElementById` contains no angle brackets (`<>`) in its hover. Let's contrasting it with a function that _can_ receive type arguments, like `document.querySelector`:

```
(method) ParentNode.querySelector<Element>(selectors: string): Element | null
```

`.querySelector` has some angle brackets before the parentheses. It shows the default value inside them - in this case, `Element`.

So, to fix our code above we could replace `.getElementById` with `.querySelector`.

```typescript
const audioElement = document.querySelector<HTMLAudioElement>("#player");
```

And everything works.

So, to tell whether a function can receive a type argument, hover it and check whether it has any angle brackets.

### Exercises

#### Exercise 1: Passing Types to Map

Here we are creating a `Map`, a JavaScript feature which represents a dictionary.

In this case we want to pass in a number for the key, and an object for the value:

```typescript
const userMap = new Map();

userMap.set(1, { name: "Max", age: 30 });

userMap.set(2, { name: "Manuel", age: 31 });

// @ts-expect-error  // red squiggly line under `@ts-expect-error`
userMap.set("3", { name: "Anna", age: 29 });

// @ts-expect-error // red squiggly line under `@ts-expect-error`
userMap.set(3, "123");
```

There are red lines on the `@ts-expect-error` directives because currently any type of key and value is allowed in the `Map`.

```typescript

// hovering over Map shows:
var Map: MapConstructor

new () => Map<any, any> (+3 overloads)

```

How would we type the `userMap` so the key must be a number and the value is an object with `name` and `age` properties?

#### Exercise 2: `JSON.parse()` Can't Receive Type Arguments

Consider the following code, which uses `JSON.parse` to parse some JSON:

```typescript
const parsedData = JSON.parse<{
  name: string; // red squiggly lines for the full {} argument
  age: number;
}>('{"name": "Alice", "age": 30}');
```

There is currently an error under the type argument for `JSON.parse`:

```
Expected 0 type arguments, but got 1.
```

A test that checks the type of `parsedData` is currently failing, since it is typed as `any` instead of the expected type:

```typescript
type test = Expect<
  Equal<
    // red squiggly lines for the full Equal<>
    typeof parsedData,
    {
      name: string;
      age: number;
    }
  >
>;

it("Should be the correct shape", () => {
  expect(parsedData).toEqual({
    name: "Alice",
    age: 30,
  });
});
```

We've tried to pass a type argument to the `JSON.parse` function. But it doesn't appear to be working in this case.

The test errors tell us that the type of `parsed` is not what we expect. The properties `name` and `age` are not being recognized.

Why this is happening? What would be an different way to correct these type errors?

#### Solution 1: Passing Types to Map

There are a few different ways to solve this problem, but we'll start with the most straightforward one.

The first thing to do is to create a `User` type:

```typescript
type User = {
  name: string;
  age: number;
};
```

Following the patterns we've seen so far, we can pass `number` and `User` as the types for the `Map`:

```typescript
const userMap = new Map<number, User>();
```

That's right - some functions can receive _multiple_ type arguments. In this case, the `Map` constructor can receive two types: one for the key, and one for the value.

With this change, the errors go away, and we can no longer pass in incorrect types into the `userMap.set` function.

You can also express the `User` type inline:

```typescript
const userMap = new Map<number, { name: string; age: number }>();
```

#### Solution 2: `JSON.parse()` Can't Receive Type Arguments

Let's look a bit closer at the error message we get when passing a type argument to `JSON.parse`:

```
Expected 0 type arguments, but got 1.
```

This message indicates that TypeScript is not expecting anything inside the angle braces when calling `JSON.parse`. To resolve this error, we can remove the angle braces:

```typescript
const parsedData = JSON.parse('{"name": "Alice", "age": 30}');
```

Now that `.parse` is receiving the correct number of type arguments, TypeScript is happy.

However, we want our parsed data to have the correct type. Hovering over `JSON.parse`, we can see its type definition:

```typescript

JSON.parse(text: string, reviver?: ((this: any, key: string, value: any) => any)  undefined): any

```

It always returns `any`, which is a bit of a problem.

To get around this issue, we can give `parsedData` a variable type annotation with `name: string` and `age: number`:

```typescript
const parsedData: {
  name: string;
  age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');
```

Now we have `parsedData` typed as we want it to be.

The reason this works is because `any` disables type checking. So, we can assign it any type we want to. We could assign it something that doesn't make sense, like `number`, and TypeScript wouldn't complain:

```typescript
const parsedData: number = JSON.parse('{"name": "Alice", "age": 30}');
```

So, this is more 'type faith' than 'type safe'. We are hoping that `parsedData` is the type we expect it to be. We'll explore this idea more later in the book.

## Typing Functions

### Optional Parameters

For cases where a function parameter is optional, we can add the `?` operator before the `:`.

Say we wanted to add an optional `releaseDate` parameter to the `logAlbumInfo` function. We could do so like this:

```typescript
const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean,
  releaseDate?: string,
) => {
  // rest of function body
};
```

Now we can call `logAlbumInfo` and include a release date string, or leave it out:

```typescript
logAlbumInfo("Midnights", 13, true, "2022-10-21");

logAlbumInfo("American Beauty", 10, true);
```

Hovering over the optional `releaseDate` parameter in VS Code will show us that it is now typed as `string | undefined`.

We'll discuss the `|` symbol more later, but this means that the parameter could either be a `string` or `undefined`. It would be acceptable to literally pass `undefined` as a second argument, or it can be omitted all together.

### Default Parameters

In addition to marking parameters as optional, you can set default values for parameters by using the `=` operator.

For example, we could set the `format` to default to `"CD"` if no format is provided:

```typescript
const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean,
  format: string = "CD",
) => {
  // rest of function body
};
```

The annotation of `: string` can also be omitted:

```typescript
const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean,
  format = "CD",
) => {
  // rest of function body
};
```

Since it can infer the type of the `format` parameter from the value provided. This is another nice example of type inference.

### Function Return Types

In addition to setting parameter types, we can also set the return type of a function.

The return type of a function can be annotated by placing a `:` and the type after the closing parentheses of the parameter list. For the `logAlbumInfo` function, we can specify that the function will return a string:

```typescript
const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean,
): string => {
  // rest of function body
};
```

If the value returned from a function doesn't match the type that was specified, TypeScript will show an error.

```typescript
const logAlbumInfo = (
  title: string,
  trackCount: number,
  isReleased: boolean,
): string => {
  return 123; // red squiggly line under `123`
};
```

Return types useful for when you want to ensure that a function returns a specific type of value.

### Rest Parameters

Just like in JavaScript, TypeScript supports rest parameters by using the `...` syntax for the final parameter. This allows you to pass in any number of arguments to a function.

For example, this `printAlbumFormats` is set up to accept an `album` and any number of `formats`:

```typescript
function getAlbumFormats(album: Album, ...formats: string[]) {
  return `${album.title} is available in the following formats: ${formats.join(
    ", ",
  )}`;
}
```

Declaring the parameter with the `...formats` syntax combined with an array of strings lets us pass in any number of strings to the function:

```typescript
getAlbumFormats(
  { artist: "Radiohead", title: "OK Computer", year: 1997 },
  "CD",
  "LP",
  "Cassette",
);
```

Or even by spreading in an array of strings:

```typescript
const albumFormats = ["CD", "LP", "Cassette"];

getAlbumFormats(
  { artist: "Radiohead", title: "OK Computer", year: 1997 },
  ...albumFormats,
);
```

As an alternative, we can use the `Array<>` syntax instead.

```typescript
function getAlbumFormats(album: Album, formats: Array<string>) {
  // function body
}
```

### Function Types

We've used type annotations to specify the types of function parameters, but we can also use TypeScript to describe the types of functions themselves.

We can do this using this syntax:

```typescript
type Mapper = (item: string) => number;
```

This is a type alias for a function that takes in a `string` and returns a `number`.

We could then use this to describe a callback function passed to another function:

```typescript
const mapOverItems = (items: string[], map: Mapper) => {
  return items.map(map);
};
```

Or, declare it inline:

```typescript
const mapOverItems = (items: string[], map: (item: string) => number) => {
  return items.map(map);
};
```

This lets us pass a function to `mapOverItems` that changes the value of the items in the array.

```typescript
const arrayOfNumbers = mapOverItems(["1", "2", "3"], (item) => {
  return parseInt(item) * 100;
});
```

Function types are as flexible as function definitions. You can declare multiple parameters, rest parameters, and optional parameters.

```typescript
// Optional parameters
type WithOptional = (index?: number) => number;

// Rest parameters
type WithRest = (...rest: string[]) => number;

// Multiple parameters
type WithMultiple = (first: string, second: string) => number;
```

### The `void` Type

Some functions don't return anything. They perform some kind of action, but they don't produce a value.

A great example is a `console.log`:

```typescript
const logResult = console.log("Hello!");
```

What type do you expect `logResult` to be? In JavaScript, the value is `undefined`. If we were to `console.log(logResult)`, that's what we'd see in the console.

But TypeScript has a special type for these situations - where a function's return value should be deliberately ignored. It's called `void`.

If we hover over `.log` in `console.log`, we'll see that it returns `void`:

```
(method) Console.log(...data: any[]): void
```

So, `logResult` is also `void`.

This is TypeScript's way of saying "ignore the result of this function call".

### Typing Async Functions

We've looked at how to strongly type what a function returns, via a return type:

```typescript
const getUser = (id: string): User => {
  // function body
};
```

But what about when the function is asynchronous?

```typescript
// The return type of an async function or method must
// be the global Promise<T> type. Did you mean to write
// 'Promise<User>'?
// red squiggle under User
const getUser = async (id: string): User => {
  // function body
};
```

Fortunately, TypeScript's error message is helpful here. It's telling us that the return type of an async function must be a `Promise`.

So, we can pass `User` to a `Promise`:

```typescript
const getUser = async (id: string): Promise<User> => {
  const user = await db.users.get(id);

  return user;
};
```

Now, our function must return a `Promise` that resolves to a `User`.

### Exercises

#### Exercise 1: Optional Function Parameters

Here we have a `concatName` function, whose implementation takes in two `string` parameters `first` and `last`.

If there's no `last` name passed, the return would be just the `first` name. Otherwise, it would return `first` concatenated with `last`:

```typescript
const concatName = (first: string, last: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};
```

When calling `concatName` with a first and last name, the function works as expected without errors:

```typescript
const result = concatName("John", "Doe");
```

However, when calling `concatName` with just a first name, we get an error:

```typescript
const result2 = concatName("John"); // red squiggly line under `concatName("John")`
```

The error message reads:

```
Expected 2 arguments, but got 1.
```

Try to use an optional parameter annotation to fix the error.

#### Exercise 2: Default Function Parameters

Here we have the same `concatName` function as before, where the `last` name is optional:

```typescript
const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};
```

We also have a couple of tests. This test checks that the function returns the full name when passed a first and last name:

```typescript
it("should return the full name", () => {
  const result = concatName("John", "Doe");

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Doe");
});
```

However, the second test expects that when `concatName` is called with just a first name as an argument, the function should use `Pocock` as the default last name:

```typescript
it("should return the first name", () => {
  const result = concatName("John");

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Pocock");
});
```

This test currently fails, with the output from `vitest` indicating the error is on the `expect` line:

```

AssertionError: expected 'John' to deeply equal 'John Pocock'

- Expected

+ Received

— John Pocock

+ John

expect(result).toEqual("John Pocock");

^

```

Update the `concatName` function to use `Pocock` as the default last name if one is not provided.

#### Exercise 3: Rest Parameters

Here we have a `concatenate` function that takes in a variable number of strings:

```typescript
export function concatenate(...strings) {
  // red squiggly line under `...strings`

  return strings.join("");
}

it("should concatenate strings", () => {
  const result = concatenate("Hello", " ", "World");

  expect(result).toEqual("Hello World");

  type test = Expect<Equal<typeof result, string>>;
});
```

The test passes, but there's an error on the `...strings` rest parameter:

```
Rest parameter 'strings' implicitly has an 'any[]' type.
```

How would you update the rest parameter to specify that it should be an array of strings?

#### Exercise 4: Function Types

Here, we have a `modifyUser` function that takes in an array of `users`, an `id` of the user that we want to change, and a `makeChange` function that makes that change:

```typescript
type User = {
  id: string;
  name: string;
};

const modifyUser = (user: User[], id: string, makeChange) => {
  // red squiggly line under `makeChange`

  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};
```

Currently there is an error under `makeChange`:

```
Parameter `makeChange` implicitly has an `any` type.
```

Here's an example of how this function would be called:

```typescript
const users: User[] = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
];

modifyUser(users, "1", (user) => {
  // red squiggly line under `user`
  return { ...user, name: "Waqas" };
});
```

In the above example, the `user` parameter to the error function also has the "implicit `any`" error.

The `modifyUser` type annotation for the `makeChange` function to be updated. It should return a modified user. For example, we should not be able to return a `name` of `123`, because in the `User` type, `name` is a `string`:

```typescript
modifyUser(
  users,
  "1",
  // @ts-expect-error
  (user) => {
    return { ...user, name: 123 };
  },
);
```

How would you type `makeChange` as a function takes in a `User` and returns a `User`?

#### Exercise 5: Functions Returning `void`

Here we explore a classic web development example.

We have an `addClickEventListener` function that takes in a listener function and adds it to the document:

```typescript
const addClickEventListener = (listener) => {
  // red squiggly line under `listener`

  document.addEventListener("click", listener);
};

addClickEventListener(() => {
  console.log("Clicked!");
});
```

Currently there is an error under `listener` because it doesn't have a type signature.

We're also _not_ getting an error when we pass an incorrect value to `addClickEventListener`.

```typescript
addClickEventListener(
  // @ts-expect-error // red squiggly line under `@ts-expect-error`
  "abc",
);
```

This is triggering our `@ts-expect-error` directive.

How should `addClickEventListener` be typed so that each error is resolved?

#### Exercise 6: `void` vs `undefined`

We've got a function that accepts a callback and calls it. The callback doesn't return anything, so we've typed it as `() => undefined`:

```typescript
const acceptsCallback = (callback: () => undefined) => {
  callback();
};
```

But we're getting an error when we try to pass in `returnString`, a function that _does_ return something:

```typescript
const returnString = () => {
  return "Hello!";
};

// Argument of type '() => string' is not
// assignable to parameter of type '() => undefined'.
acceptsCallback(returnString); // red squiggly line under `returnString`
```

Why is this happening? Can we alter the type of `acceptsCallback` to fix this error?

#### Exercise 7: Typing Async Functions

This `fetchData` function awaits the `response` from a call to `fetch`, then gets the `data` by calling `response.json()`:

```typescript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");

  const data = await response.json();

  return data;
}
```

There are a couple of things worth noting here.

Hovering over `response`, we can see that it has a type of `Response`, which is a globally available type:

```typescript
// hovering over response
const response: Response;
```

When hovering over `response.json()`, we can see that it returns a `Promise<any>`:

```typescript
// hovering over response.json()

const response.json(): Promise<any>
```

If we were to remove the `await` keyword from the call to `fetch`, the return type would also become `Promise<any>`:

```typescript
const response = fetch("https://api.example.com/data");

// hovering over response shows

const response: Promise<any>;
```

Consider this `example` and its test:

```typescript
const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>; // red squiggly line under Equal<>
};
```

The test is currently failing because `data` is typed as `any` instead of `number`.

How can we type `data` as a number without changing the calls to `fetch` or `response.json()`?

There are two possible solutions here.

#### Solution 1: Optional Function Parameters

By adding a question mark `?` to the end of a parameter, it will be marked as optional:

```typescript
function concatName(first: string, last?: string) {
  // ...implementation
}
```

#### Solution 2: Default Function Parameters

To add a default parameter in TypeScript, we would use the `=` syntax that is also used in JavaScript.

In this case, we will update `last` to default to "Pocock" if no value is provided:

```typescript
export const concatName = (first: string, last?: string = "Pocock") => {
  return `${first} ${last}`;
};
```

##### "Parameter cannot have question mark and initializer."

While this passes our runtime tests, it actually fails in TypeScript:

```
Parameter cannot have question mark and initializer.
```

This is because TypeScript doesn't allow us to have both an optional parameter and a default value. The optionality is already implied by the default value.

To fix the error, we can remove the question mark from the `last` parameter:

```typescript
export const concatName = (first: string, last = "Pocock") => {
  return `${first} ${last}`;
};
```

#### Solution 3: Rest Parameters

When using rest parameters, all of the arguments passed to the function will be collected into an array. This means that the `strings` parameter can be typed as an array of strings:

```typescript
export function concatenate(...strings: string[]) {
  return strings.join("");
}
```

Or, of course, using the `Array<>` syntax:

```typescript
export function concatenate(...strings: Array<string>) {
  return strings.join("");
}
```

#### Solution 4: Function Types

Let's start by annotating the `makeChange` parameter to be a function. For now, we'll specify that it returns `any`:

```typescript
const modifyUser = (user: User[], id: string, makeChange: () => any) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u); // red squiggly line under `u`
    }

    return u;
  });
};
```

With this first change in place, we get an error under `u` when calling `makeChange` since we said that `makeChange` takes in no arguments:

```
// inside the `user.map()` function

return makeChange(u)

// hovering over `u` shows:

Expected 0 arguments, but got 1.
```

This tells us we need to add a parameter to the `makeChange` function type.

In this case, we will specify that `user` is of type `User`.

```typescript
const modifyUser = (
  user: User[],
  id: string,
  makeChange: (user: User) => any,
) => {
  // function body
};
```

This is pretty good, but we also need to make sure our `makeChange` function returns a `User`:

```typescript
const modifyUser = (
  user: User[],
  id: string,
  makeChange: (user: User) => User,
) => {
  // function body
};
```

Now the errors are resolved, and we have autocompletion for the `User` properties when writing a `makeChange` function.

Optionally, we can clean up the code a bit by creating a type alias for the `makeChange` function type:

```typescript
type MakeChangeFunc = (user: User) => User;

const modifyUser = (user: User[], id: string, makeChange: MakeChangeFunc) => {
  // function body
};
```

Both techniques behave the same, but if you need to reuse the `makeChange` function type, a type alias is the way to go.

#### Solution 5: Functions Returning `void`

Let's start by annotating the `listener` parameter to be a function. For now, we'll specify that it returns a string:

```typescript
const addClickEventListener = (listener: () => string) => {
  document.addEventListener("click", listener);
};
```

The problem is that we now have an error when we call `addClickEventListener` with a function that returns nothing:

```typescript
addClickEventListener(() => {
  // red squiggly line under `() => {`

  console.log("Clicked!");
});
```

When we hover over the error, we see the following message:

```
Argument of type '() => void' is not assignable to parameter of type '() => string'.

Type 'void' is not assignable to type 'string'.
```

The error message tells us that the `listener` function is returning `void`, which is not assignable to `string`.

This suggests that instead of typing the `listener` parameter as a function that returns a string, we should type it as a function that returns `void`:

```typescript
const addClickEventListener = (listener: () => void) => {
  document.addEventListener("click", listener);
};
```

This is a great way to tell TypeScript that we don't care about the return value of the `listener` function.

#### Solution 6: `void` vs `undefined`

The solution is to change the of `callback` to `() => void`:

```typescript
const acceptsCallback = (callback: () => void) => {
  callback();
};
```

Now we can pass in `returnString` without any issues. This is because `returnString` returns a `string`, and `void` tells TypeScript to ignore the return value when comparing them.

So if you really don't care about the result of a function, you should type it as `() => void`.

#### Solution 7: Typing Async Functions

You might be tempted to try passing a type argument to `fetch`, similar to how you would with `Map` or `Set`.

However, hovering over `fetch`, we can see that it doesn't accept type arguments:

```typescript
// this won't work!

const response = fetch<number>("https://api.example.com/data"); // red squiggly line under number

// Hovering over fetch shows:

function fetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): Promise<Response>;
```

We also can't add a type annotation to `response.json()` because as it doesn't accept type arguments either:

```
// this won't work!

const data: number = await response.json<number>(); // red squiggly line under number

// Hovering over number shows:

Expected 0 type arguments, but got 1.
```

One thing that will work is to specify that `data` is a `number`:

```typescript
const data: number = await response.json();
```

This works because `data` was `any` before, and `await response.json()` returns `any`. So now we're putting `any` into a slot that requires a `number`.

However, the best way to solve this problem is to add a return type to the function. In this case, it should be a `number`:

```typescript
// red squiggly line under number
async function fetchData(): number {
  // function body
}
```

Now `data` is typed as a `number`, except we have an error under our return type annotation:

```
The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<number>'?
```

So, we should change the return type to `Promise<number>`:

```typescript
async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");

  const data = await response.json();

  return data;
}
```

By wrapping the `number` inside of `Promise<>`, we make sure that the `data` is awaited before the type is figured out.

##### "Type Safe" vs "Type Faith"

An interesting note here is that TypeScript is not really enforcing the return type of `fetchData`. It's just assuming that `data` is a `number` because we've told it to be.

This is a good example of "type faith" - we're telling TypeScript to trust us that `data` is a `number`. But if it's not, TypeScript won't catch it at runtime.

We'll return to this topic later in the book.

---

# 05. Unions, Literals and Narrowing

In this section, we're going to see how TypeScript can help when a value is one of many possible types. We'll first look at declaring those types using union types, then we'll see how TypeScript can narrow down the type of a value based on your runtime code.

## Unions and Literals

### Union Types

A union type is TypeScript's way of saying that a value can be "either this type or that type".

This situation comes up in JavaScript all the time. Imagine you have a value that is a `string` on Tuesdays, but `null` the rest of the time:

```typescript
const message = Date.now() % 2 === 0 ? "Hello Tuesdays!" : null;
```

If we hover over `message`, we can see that TypeScript has inferred its type as `string | null`:

```typescript
// hovering over message
const message: string | null;
```

This is a union type. It means that `message` can be either a `string` or `null`.

#### Declaring Union Types

We can declare our own union types.

For example, you might have an `id` that could be either a `string` or a `number`:

```typescript
const logId = (id: string | number) => {
  console.log(id);
};
```

This means that `logId` can accept either a `string` or a `number` as an argument, but not a `boolean`:

```typescript
logId("abc"); // "abc"

logId(123); // 123

logId(true); // red squiggly line under true
```

To create a union type, the `|` operator is used to separate the types. Each type of the union is called a 'member' of the union.

Union types also work when creating your own type aliases. For example, we can refactor our earlier definition into a type alias:

```typescript
type Id = number | string;

function logId(id: Id) {
  console.log(id);
}
```

Union types can contain many different types - they don't all have to be primitives, or don't need to be related in any way. When they get particularly large, you can use this syntax (with the `|` before the first member of the union) to make it more readable:

```typescript
type AllSortsOfStuff =
  | string
  | number
  | boolean
  | object
  | null
  | {
      name: string;
      age: number;
    };
```

Union types can be used in many different ways, and they're a powerful tool for creating flexible type definitions.

### Literal Types

Just as TypeScript allows us to create union types from multiple types, it also allows us to create types which represent a specific primitive value. These are called literal types.

Literal types can be used to represent strings, numbers, or booleans that have specific values.

```typescript
type YesOrNo = "yes" | "no";
type StatusCode = 200 | 404 | 500;
type TrueOrFalse = true | false;
```

In the `YesOrNo` type, the `|` operator is used to create a union of the string literals `"yes"` and `"no"`. This means that a value of type `YesOrNo` can only be one of these two strings.

This feature is what powers the autocomplete we've seen in functions like `document.addEventListener`:

```typescript
document.addEventListener(
  // DOMContentLoaded, mouseover, etc.
  "click",
  () => {},
);
```

The first argument to `addEventListener` is a union of string literals, which is why we get autocompletion for the different event types.

### Combining Unions With Unions

What happens when we make a union of two union types? They combine together to make one big union.

For example, we can create `DigitalFormat` and `PhysicalFormat` types that contain a union of literal values:

```tsx
type DigitalFormat = "MP3" | "FLAC";

type PhysicalFormat = "LP" | "CD" | "Cassette";
```

We could then specify `AlbumFormat` as a union of `DigitalFormat` and `PhysicalFormat:

```tsx
type AlbumFormat = DigitalFormat | PhysicalFormat;
```

Now, we can use the `DigitalFormat` type for functions that handle digital formats, and the `AnalogFormat` type for functions that handle analog formats. The `AlbumFormat` type can be used for functions that handle all cases.

This way, we can ensure that each function only handles the cases it's supposed to handle, and TypeScript will throw an error if we try to pass an incorrect format to a function.

```typescript
const getAlbumFormats = (format: PhysicalFormat) => {
  // function body
};

getAlbumFormats("MP3"); // red squiggly line under "MP3"
```

### Exercises

#### Exercise 1: `string` or `null`

Here we have a function called `getUsername` that takes in a `username` string. If the `username` is not equal to `null`, we return a new interpolated string. Otherwise, we return `"Guest"`:

```typescript
function getUsername(username: string) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}
```

In the first test, we call `getUsername` and pass in a string of "Alice" which passes as expected. However, in the second test, we have a red squiggly line under `null` when passing it into `getUsername`:

```typescript
const result = getUsername("Alice");

type test = Expect<Equal<typeof result, string>>;

const result2 = getUsername(null); // red squiggly line under `null`

type test2 = Expect<Equal<typeof result2, string>>;
```

Hovering over `null` shows us the following error message:

```
Argument of type 'null' is not assignable to parameter of type 'string'.
```

Normally we wouldn't explicitly call the `getUsername` function with `null`, but in this case it's important that we handle `null` values. For example, we might be getting the `username` from a user record in a database, and the user might or might not have a name depending on how they signed up.

Currently, the `username` parameter only accepts a `string` type, and the check for `null` isn't doing anything. Update the function parameter's type so the errors are resolved and the function can handle `null` .

#### Exercise 2: Restricting Function Parameters

Here we have a `move` function that takes in a `direction` of type string, and a `distance` of type number:

```tsx
function move(direction: string, distance: number) {
  // Move the specified distance in the given direction
}
```

The implementation of the function is not important, but the idea is that we want to be able to move either up, down, left, or right.

Here's what calling the `move` function might look like:

```typescript
move("up", 10);

move("left", 5);
```

To test this function, we have some `@ts-expect-error` directives that tell TypeScript we expect the following lines to throw an error.

However, since the `move` function currently takes in a `string` for the `direction` parameter, we can pass in any string we want, even if it's not a valid direction. There is also a test where we expect that passing `20` as a distance won't work, but it's being accepted as well.

This leads to TypeScript drawing red squiggly lines under the `@ts-expect-error` directives:

```typescript
move(
  // @ts-expect-error - "up-right" is not a valid direction // red squiggly line
  "up-right",
  10,
);

move(
  // @ts-expect-error - "down-left" is not a valid direction // red squiggly line
  "down-left",
  20,
);
```

Your challenge is to update the `move` function so that it only accepts the strings `"up"`, `"down"`, `"left"`, and `"right"`. This way, TypeScript will throw an error when we try to pass in any other string.

#### Solution 1: `string` or `null`

The solution is to update the `username` parameter to be a union of `string` and `null`:

```typescript
function getUsername(username: string | null) {
  // function body
}
```

With this change, the `getUsername` function will now accept `null` as a valid value for the `username` parameter, and the errors will be resolved.

#### Solution 2: Restricting Function Parameters

In order to restrict what the `direction` can be, we can use a union type of literal values (in this case strings).

Here's what this looks like:

```typescript
function move(direction: "up" | "down" | "left" | "right", distance: number) {
  // Move the specified distance in the given direction
}
```

With this change, we now have autocomplete for the possible `direction` values.

To clean things up a bit, we can create a new type alias called `Direction` and update the parameter accordingly:

```typescript
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction, distance: number) {
  // Move the specified distance in the given direction
}
```

## Narrowing

### Wider vs Narrower Types

Some types are wider versions of other types. For example, `string` is wider than the literal string `"small"`. This is because `string` can be any string, while `"small"` can only be the string `"small"`.

In reverse, we might say that `"small"` is a 'narrower' type than `string`. It's a more specific version of a string. `404` is a narrower type than `number`, and `true` is a narrower type than `boolean`.

This is only true of types which have some kind of shared relationship. For example, `"small"` is not a narrower version of `number` - because `"small"` itself is not a number.

In TypeScript, the narrower version of a type can always take the place of the wider version.

For example, if a function accepts a `string`, we can pass in `"small"`:

```typescript
const logSize = (size: string) => {
  console.log(size.toUpperCase());
};

logSize("small");
```

But if a function accepts `"small"`, we can't pass any random `string`:

```typescript
const recordOfSizes = {
  small: "small",
  large: "large",
};

const logSize = (size: "small" | "large") => {
  console.log(recordOfSizes[size]);
};

logSize("medium"); // red squiggly line under "medium"
```

If you're familiar with the concept of 'subtypes' and 'supertypes' in set theory, this is a similar idea. `"small"` is a subtype of `string` (it is more specific), and `string` is a supertype of `"small"`.

### Unions Are Wider Than Their Members

A union type is a wider type than its members. For example, `string | number` is wider than `string` or `number` on their own.

This means that we can pass a `string` or a `number` to a function that accepts `string | number`:

```typescript
function logId(id: string | number) {
  console.log(id);
}

logId("abc");
logId(123);
```

However, this doesn't work in reverse. We can't pass `string | number` to a function that only accepts `string`.

For example, if we changed this `logId` function to only accept a `number`, TypeScript would throw an error when we try to pass `string | number` to it:

```tsx
function logId(id: number) {
  console.log(`The id is ${id}`);
}

type User = {
  id: string | number;
};

const user: User = {
  id: 123,
};

logId(user.id); // red squiggly line under user.id
```

Hovering over `user.id` shows:

```
Argument of type 'string | number' is not assignable to parameter of type 'number'.
  Type 'string' is not assignable to type 'number'.
```

So, it's important to think of a union type as a wider type than its members.

### What is Narrowing?

Narrowing in TypeScript lets us take a wider type and make it narrower using runtime code.

This can be useful when we want to do different things based on the type of a value. For example, we might want to handle a `string` differently to a `number`, or `"small"` differently to `"large"`.

### Narrowing with `typeof`

One way we can narrow down the type of a value is to use the `typeof` operator, combined with an `if` statement.

Consider a function `getAlbumYear` that takes in a parameter `year`, which can either be a `string` or `number`. Here's how we could use the `typeof` operator to narrow down the type of `year`:

```typescript
const getAlbumYear = (year: string | number) => {
  if (typeof year === "string") {
    console.log(`The album was released in ${year.toUppercase()}.`); // `year` is string
  } else if (typeof year === "number") {
    console.log(`The album was released in ${year.toFixed(0)}.`); // `year` is number
  }
};
```

It looks straightforward, but there are some important things to realize about what's happening behind the scenes.

Scoping plays a big role in narrowing. In the first `if` block, TypeScript understands that `year` is a `string` because we've used the `typeof` operator to check its type. In the `else if` block, TypeScript understands that `year` is a `number` because we've used the `typeof` operator to check its type.

<!-- ILLUSTRATION HERE? -->

This lets us call `toUpperCase` on `year` when it's a `string`, and `toFixed` on `year` when it's a `number`.

However, anywhere outside of the conditional block the type of `year` is still the union `string | number`. This is because narrowing only applies within the block's scope.

For the sale of illustration, if we add a `boolean` to the `year` union, the first `if` block will still end up with a type of `string`, but the `else` block will end up with a type of `number | boolean`:

```typescript
const getAlbumYear = (year: string | number | boolean) => {
  if (typeof year === "string") {
    console.log(`The album was released in ${year}.`); // `year` is string
  } else if (typeof year === "number") {
    console.log(`The album was released in ${year}.`); // `year` is number | boolean
  }

  console.log(year); // `year` is string | number | boolean
};
```

This is a powerful example of how TypeScript can read your runtime code and use it to narrow down the type of a value.

### Other Ways to Narrow

The `typeof` operator is just one way to narrow types.

TypeScript can use other conditional operators like `&&` and `||`, and will take the truthiness into account for coercing the boolean value. It's also possible to use other operators like `instanceof` and `in` for checking object properties. You can even throw errors or use early returns to narrow types.

We'll take a closer look at these in the following exercises.

### Exercises

#### Exercise 1: Narrowing with `if` Statements

Here we have a function called `validateUsername` that takes in either a `string` or `null`, and will always return a `boolean`:

```typescript
function validateUsername(username: string | null): boolean {
  return username.length > 5; // red squiggly line under `username`

  return false;
}
```

Tests for checking the length of the username pass as expected:

```typescript
it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);

  expect(validateUsername("Bob")).toBe(false);
});
```

However, we have an error underneath `username` inside of the function body, because it could possibly be `null` and we are trying to access a property off of it.

```typescript
it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
```

Your task is to rewrite the `validateUsername` function to add narrowing so that the `null` case is handled and the tests all pass.

#### Exercise 2: Throwing Errors to Narrow

Here we have a line of code that uses `document.getElementById` to fetch an HTML element, which can return either an `HTMLElement` or `null`:

```typescript
const appElement = document.getElementById("app");
```

Currently, a test to see if the `appElement` is an `HTMLElement` fails:

```typescript
type Test = Expect<Equal<typeof appElement, HTMLElement>>; // red squiggly line under Equal<>
```

Your task is to use `throw` to narrow down the type of `appElement` before it's checked by the test.

#### Exercise 3: Using `in` to Narrow

Here we have a `handleResponse` function that takes in a type of `APIResponse`, which is a union of two types of objects.

The goal of the `handleResponse` function is to check whether the provided object has a `data` property. If it does, the function should return the `id` property. If not, it should throw an `Error` with the message from the `error` property.

```tsx
type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?

  if (true) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};
```

Currently, there are several errors being thrown as seen in the following tests.

The first error is `Property 'data' does not exist on type 'APIResponse'`

```tsx
test("passes the test even with the error", () => {
  // there is no error in runtime

  expect(() =>
    HandleResponseOrThrowError({
      error: "Invalid argument",
    }),
  ).not.toThrowError();

  // but the data is returned, instead of an error.

  expect(
    HandleResponseOrThrowError({
      error: "Invalid argument",
    }),
  ).toEqual("Should this be 'Error'?");
});
```

Then we have the inverse error, where `Property 'error' does not exist on type 'APIResponse'`:

```
Property data does not exist on type 'APIResponse'.
```

Your challenge is to find the correct syntax for narrowing down the types within the `handleResponse` function's `if` condition.

The changes should happen inside of the function without modifying any other parts of the code.

#### Solution 1: Narrowing with `if` Statements

There are several different ways to validate the username length.

##### Option 1: Check Truthiness

We could use an `if` statement to check if `username` is truthy. If it does, we can return `username.length > 5`, otherwise we can return `false`:

```typescript
function validateUsername(username: string | null): boolean {
  // Rewrite this function to make the error go away

  if (username) {
    return username.length > 5;
  }

  return false;
}
```

There is a catch to this piece of logic. If `username` is an empty string, it will return `false` because an empty string is falsy. This happens to match the behavior we want for this exercise - but it's important to bear that in mind.

##### Option 2: Check if `typeof username` is `"string"`

We could use `typeof` to check if the username is a string:

```typescript
function validateUsername(username: string | null): boolean {
  if (typeof username === "string") {
    return username.length > 5;
  }

  return false;
}
```

This avoids the issue with empty strings.

##### Option 3: Check if `typeof username` is not `"string"`

Similar to the above, we could check if `typeof username !== "string"`.

In this case, if `username` is not a string, we know it's `null` and could return `false` right away. Otherwise, we'd return the check for length being greater than 5:

```typescript
function validateUsername(username: string | null | undefined): boolean {
  if (typeof name !== "string") {
    return false;
  }

  return username.length > 5;
}
```

This shows that TypeScript understands the _reverse_ of a check. Very smart.

##### Option 4: Check if `typeof username` is `"object"`

A odd JavaScript quirk is that the type of `null` is equal to `"object"`.

TypeScript knows this, so we can actually use it to our advantage. We can check if `username` is an object, and if it is, we can return `false`:

```typescript
function validateUsername(username: string | null): boolean {
  if (typeof username === "object") {
    return false;
  }

  return username.length > 5;
}
```

##### Option 5: Extract the check into its own variable

Finally, for readability and reusability purposes you could store the check in its own variable `isUsernameOK`.

Here's what this would look like:

```typescript
function validateUsername(username: string | null): boolean {
  const isUsernameOK = typeof username === "string";

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}
```

TypeScript is smart enough to understand that the value of `isUsernameOK` corresponds to whether `username` is a string or not. Very smart.

All of the above options use `if` statements to perform checks by narrowing types by using `typeof`.

No matter which option you go with, remember that you can always use an `if` statement to narrow your type and add code to the case that the condition passes.

#### Solution 2: Throwing Errors to Narrow

The issue with this code is that `document.getElementById` returns `null | HTMLElement`. But we want to make sure that `appElement` is an `HTMLElement` before we use it.

We are pretty sure that `appElement` exists. If it doesn't exist, we probably want to crash the app early so that we can get an informative error about what's gone wrong.

So, we can add an `if` statement that checks if `appElement` is falsy, then throws an error:

```typescript
if (!appElement) {
  throw new Error("Could not find app element");
}
```

By adding this error condition, we can be sure that we will never reach any subsequent code if `appElement` is `null`.

If we hover over `appElement` after the `if` statement, we can see that TypeScript now knows that `appElement` is an `HTMLElement` - it's no longer `null`. This means our test also now passes:

```tsx
console.log(appElement);

// hovering over `appElement` shows:

const appElement: HTMLElement;

type Test = Expect<Equal<typeof appElement, HTMLElement>>; // passes
```

Throwing errors like this can help you identify issues at runtime. In this specific case, it narrows down the code _outside_ of the immediate `if` statement scope. Amazing.

#### Solution 3: Using `in` to Narrow

Your first instinct will be to check if `response.data` is truthy.

```typescript
const handleResponse = (response: APIResponse) => {
  // Property 'data' does not exist on type 'APIResponse'.
  // Red line under response.data
  if (response.data) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};
```

But you'll get an error. This is because `response.data` is only available on one of the members of the union. TypeScript doesn't know that `response` is the one with `data` on it.

##### Option 1: Changing the Type

It may be tempting to change the `APIResponse` type to add `.data` to both branches:

```tsx
type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      data?: undefined;
      error: string;
    };
```

This is certainly one way to handle it. But there is a built-in way to do it.

##### Option 2: Using `in`

We can use an `in` operator to check if a specific key exists on `response`.

In this example, it would check for the key `data`:

```typescript
const handleResponse = (response: APIResponse) => {
  if ("data" in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};
```

If the `response` isn't the one with `data` on it, then it must be the one with `error`, so we can throw an `Error` with the error message.

You can check this out by hovering over `.data` and `.error` in each of the branches of the `if` statement. TypeScript will show you that it knows the type of `response` in each case.

Using `in` here gives us a great way to narrow down objects that might have different keys from one another.

<!-- CONTINUE -->

## `unknown` and `never`

Let's pause for a moment to introduce a couple more types that play an important role in TypeScript, particularly when it comes to narrowing.

### The `unknown` Type

TypeScript has a special type called `unknown`. It represents something we don't know what it is, but we still want to keep type checking on it.

The `unknown` type sits at the top of our type hierarchy in TypeScript. All other types like strings, numbers, booleans, null, undefined, and their respective literals are assignable to `unknown`, as seen in its assignability chart:

<img src="https://res.cloudinary.com/total-typescript/image/upload/v1706814781/065-introduction-to-unknown.explainer_ohm9pd.png">

Consider this example function `fn` that takes in an `input` parameter of type `unknown`:

```typescript
const fn = (input: unknown) => {};

// Anything is assignable to unknown!

fn("hello");

fn(42);

fn(true);

fn({});

fn([]);

fn(() => {});
```

All of the above function calls are valid because `unknown` is assignable to any other type, and unlike the `any` type, it can be checked against.

The `unknown` type is the preferred choice when you want to represent something that's truly unknown in JavaScript. For example, it is extremely useful when you have things coming into your application from outside sources, like input from a form.

However, the `unknown` type must be narrowed before you can do anything with it. You can't access any properties on `unknown`, or call any functions except for those that expect `unknown`.

### The `never` Type

Let's go from the top of the assignability chart to the bottom.

But first, consider this function that doesn't return anything:

```typescript
const getNever = () => {
  // This function never returns!
};
```

When checking the type of this function, TypeScript will infer that it returns `void`, indicating that it essentially returns nothing.

```typescript
// hovering over `getNever` shows:

const getNever: () => void;
```

However, if we throw an error inside of the function, the function will never return:

```typescript
const getNever = () => {
  throw new Error("This function never returns");
};
```

With this change, TypeScript will infer that the function's type is `never`:

```typescript
// hovering over `getNever` shows:

const getNever: () => never;
```

The `never` type represents something that can never happen. Where the `unknown` type is like the "top" type in TypeScript, `never` is like the "bottom".

There are some weird implications for the `never` type.

You cannot assign anything to `never`, except for `never` itself.

```typescript
// red squiggly lines under everything in parens

fn("hello");

fn(42);

fn(true);

fn({});

fn([]);

fn(() => {});

// no error here, since we're assigning `never` to `never`

fn(getNever());
```

However, you can assign `never` to anything:

```typescript
const str: string = getNever();

const num: number = getNever();

const bool: boolean = getNever();

const arr: string[] = getNever();
```

Let's update the assignability chart to include `never`:

![](images/image2.png)

The `never` type can be assigned to any other type, but nothing can be assigned to it.

As shown in the diagram, `never` truly is the bottom type in TypeScript. Nothing can be assigned to the `never` type but the `never` type. The `unknown` type is at the top of the hierarchy and can have anything assigned to it, but you can't go the other way.

It might be confusing initially, but keeping this hierarchy in mind and understanding the relationship between `unknown` and `never` will help you grasp the concept more smoothly as you progress through the exercises.

### Exercises

#### Exercise 1: Dealing with Unknown Errors

In TypeScript, one of the most common places you'll encounter the `unknown` type is when using a `try...catch` statement to handle potentially dangerous code. Let's consider an example:

```typescript
const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  if (true) {
    console.error(error.message); // red squiggly line under error in `error.message`
  }
}
```

In the code snippet above, we have a function called `somethingDangerous` that has a 50-50 chance of either throwing an error with the message "Something went wrong" or returning "all good". We're using a `try...catch` block to handle any errors that might be thrown by the function.

Notice that the `error` variable in the `catch` clause is typed as `unknown`. This is the default behavior in TypeScript.

Now let's say we want to log the error using `console.error()` only if the error contains a `message` attribute. We know that errors typically come with a `message` attribute, like in the following example:

```typescript
const error = new Error("Some error message");

console.log(error.message);
```

Your task is to update the `if` statement to have the proper condition to check if the `error` has a message attribute before logging it. Remember, `error` is a class!

#### Exercise 2: Narrowing `unknown` to a Value

Here we have a `parseValue` function that takes in an `unknown` value:

```typescript
const parseValue = (value: unknown) => {
  if (true) {
    return value.data.id; // red squiggly line under `value`
  }

  throw new Error("Parsing error!");
};
```

The goal of this function is to return the `id` property of the `data` property of the `value` object. If the `value` object doesn't have a `data` property, then it should throw an error.

Here are some tests for the function that show us the amount of narrowing that needs to be done inside of the `parseValue` function:

```typescript
it("Should handle a { data: { id: string } }", () => {
  const result = parseValue({
    data: {
      id: "123",
    },
  });

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toBe("123");
});

it("Should error when anything else is passed in", () => {
  expect(() => parseValue("123")).toThrow("Parsing error!");

  expect(() => parseValue(123)).toThrow("Parsing error!");
});
```

Your challenge is to modify the `parseValue` function so that the tests pass and the errors go away. As a head's up, the solution requires a large conditional statement!

#### Solution 1: Dealing with Unknown Errors

The way to solve this challenge is to narrow types using the `instanceof` operator.

Where we check the error message, we'll check if `error` is an instance of `Error`:

```typescript
if (error instanceof Error) {
  console.log(error.message);
}
```

The `instanceof` operator covers all children that come from `Error` class as well, such as `TypeError`.

Even though it works in this particular example for all kinds of `Error`s, in the real world someone may be throwing a string in code instead. To be more safe from these edge cases, it's a good idea to include an `else` block that would throw the `error` variable like so:

```typescript
if (error instanceof Error) {
  console.log(error.message);
} else {
  throw error;
}
```

Now `unknown` has been narrowed down into a known class.

#### Solution 2: Narrowing `unknown` to a Value

Here's our starting point:

```typescript
const parseValue = (value: unknown) => {
  if (true) {
    return value.data.id; // red squiggly line under `value`
  }

  throw new Error("Parsing error!");
};
```

To fix the error, we'll need to narrow the type using conditional checks. Let's take it step-by-step.

First, we'll check if the type of `value` is an `object` by replacing the `true` with a type check:

```typescript
if (typeof value === "object") {
  return value.data.id; // red squiggly line under `value` and `data`
}
```

Then we'll check if the `value` argument has a `data` attribute using the `in` operator:

```typescript
if (typeof value === "object" && "data" in value) {
  // red squiggly line under `value`

  return value.data.id; // red squiggly line under `value` and `data`
}
```

With this change, TypeScript is complaining that `value` is possibly `null`.

To fix this, we can add `&& value` to our first condition to make sure it isn't `null`:

```typescript
if (typeof value === "object" && value && "data" in value) {
  return value.data.id; // red squiggly line under `value` and `data`
}
```

Now our condition check is passing, but we're still getting an error on `value.data` being typed as `unknown`.

What we need to do now is to narrow the type of `value.data` to an `object` and make sure that it isn't `null`. At this point we'll also add specify a return type of `string` to avoid returning an `unknown` type:

```typescript
const parseValue = (value: unknown): string => {
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null
  ) {
    return value.data.id; // red squiggly line under `id`
  }

  throw new Error("Parsing error!");
};
```

Finally, we'll add a check to ensure that the `id` is a string. If not, TypeScript will throw an error:

```typescript
const parseValue = (value: unknown): string => {
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  ) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};
```

Now when we hover over `parseValue`, we can see that it takes in an `unknown` input and always returns a `string`:

```typescript
// hovering over `parseValue` shows:

const parseValue: (value: unknown) => string;
```

Thanks to this huge conditional, our tests pass, and our error messages are gone!

As a side note, the Zod library would allow us to do this in a single line of code, but knowing how to do this manually is a great exercise to understand how narrowing works in TypeScript.

## Discriminated Unions

<!-- TODO - figure out a better title for this -->

We've seen how unions can be used to combine different types into a single type. However, there are situations where working with unions can get a bit cumbersome.

For example, when working with a union of types that share a common property but may have properties that are unique to each type, you may find yourself needing to write multiple type guards to narrow down the type.

Consider this `Album` type, which includes a required `format`, `title`, `artist`, and `totalLength` attributes, as well as optional attributes related to length and speed:

```typescript
type Album = {
  format: "CD" | "Cassette" | "Vinyl";

  title: string;

  artist: string;

  totalLength: number;

  maxCDLength?: 80;

  maxSideLength?: number;
};
```

Say we wanted to write a function that will determine the number of discs or records or cassettes that an album will be released on. We could check if the `format` is "CD", then return `album.totalLength` divided by `album.maxCDLength` since a CD only has one side. Otherwise, we would return `album.totalLength` divided by `album.maxSideLength` since we know it would be either cassette or vinyl which have two sides:

```tsx
function calculateUnitsNeeded(album: Album): number {
  if (album.format === "CD") {
    // Assuming maxCDLength is always 80 for CDs

    return Math.ceil(album.totalLength / album.maxCDLength); // red squiggly line under album.maxCDLength
  } else {
    // For Vinyl and Cassette, using maxSideLength

    return Math.ceil(album.totalLength / (album.maxSideLength * 2)); // red squiggly line under album.maxSideLength
  }
}
```

With this current implementation, TypeScript is giving us errors underneath `album.maxCDLength` and `album.maxSideLength`:

```tsx

// hovering over album.maxCDLength shows:

'album.maxCDLength' is possibly 'undefined'

// hovering over album.maxSideLength shows:

'album.maxSideLength' is possibly 'undefined'

```

The error messages tell us that the optional properties on the `Album` type could be `undefined`, so this code could cause a runtime error when trying to do math operations with them.

Instead of having a single type with multiple optional properties, we can create separate types for each that includes only the properties that are relevant to that format:

```tsx
type CD = {
  format: "CD";

  title: string;

  artist: string;

  totalLength: number;

  maxCDLength: 74;
};

type Cassette = {
  format: "Cassette";

  title: string;

  artist: string;

  totalLength: number;

  maxSideLength: 45;
};

type Vinyl = {
  format: "Vinyl";

  title: string;

  artist: string;

  totalLength: number;

  maxSideLength: 22;
};
```

### Introducing Discriminated Unions

Now that we have clear-cut types for each format, we can form a union that accurately represents the `Album`:

```typescript
type Album = CD | Cassette | Vinyl;
```

The `Album` type is now a discriminated union, as it consolidates distinct formats into a single type. The key to this union is the `format` property, which acts as the discriminator.

With this change, the `calculateUnitsNeeded` function makes use of the discriminated `Album` type to check for the `format` property and accordingly determine the album's type without errors:

```tsx
function calculateUnitsNeeded(album: Album): number {
  if (album.format === "CD") {
    return Math.ceil(album.totalLength / album.maxCDLength);
  } else {
    return Math.ceil(album.totalLength / (album.maxSideLength * 2));
  }
}
```

If the album's `format` is `"CD"`, we know it will have a `maxCDLength` property. Otherwise, we know that the `maxSideLength` property will be present. Using a discriminated union also provides us with autocomplete and type checking for the properties specific to each format.

It is important to keep the discriminator consistent across every type in the discriminated union. For example, changing `format` of `CD` to `type` would cause the union to crumble.

However, the type of the discriminator doesn't have to be a string literal. It could be a number, a boolean, or an enum value.

Similarly, you don't have to use types as the members of a discriminated union. You could use interfaces, tuples, or even classes– the only requirement is to have a discriminator property that is common to all members of the discriminated union. This ensures TypeScript will be able to narrow properly.

### Exercises

#### Exercise 1: Destructuring a Discriminated Union

Consider a discriminated union called `Shape` that is made up of two types: `Circle` and `Square`. Both types have a `kind` property that acts as the discriminator.

```tsx
type Circle = {
  kind: "circle";

  radius: number;
};

type Square = {
  kind: "square";

  sideLength: number;
};

type Shape = Circle | Square;
```

This `calculateArea` function destructures the `kind`, `radius`, and `sideLength` properties from the `Shape` that is passed in, and calculates the area of the shape accordingly:

```typescript
function calculateArea({ kind, radius, sideLength }: Shape) {
  // red squiggly lines under radius and sideLength

  if (kind === "circle") {
    return Math.PI * radius * radius;
  } else {
    return sideLength * sideLength;
  }
}
```

However, TypeScript is showing us errors below `'radius'` and `'sideLength'`:

```tsx

// hovering over radius shows:

Property 'radius' does not exist on type 'Shape'.

// hovering over sideLength shows:

Property 'sideLength' does not exist on type 'Shape'.

```

We get this error because TypeScript cannot guarantee that `radius` and `sideLength` will be present on the `Shape` type. A more accurate error would tell us that these properties do not exist on all branches of the `Shape` type. Because the `kind` property does exist on all branches, we do not have an error under that property.

Your task is to update the implementation of the `calculateArea` function so that destructuring properties from the passed in `Shape` works without errors. Hint: this may involve changing the location where the destructuring takes place.

#### Exercise 2: Narrowing a Discriminated Union with a Switch Statement

Here we have a version of the `calcuateArea` function that uses an `if-else` statement to calculate the area of a circle or square without doing any destructuring:

```typescript
function calculateArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}
```

Your challenge is to refactor this function to use a `switch` statement based on the `kind` property instead of an `if-else` statement.

The reason behind this refactor is that `switch` statements make it easier to extend the function to allow for more shapes without repeating `if (shape.kind === "whatever")` over and over again.

As you refactor, ensure that all the behavior is preserved. The area should be calculated accurately, regardless of the shape.

#### Exercise 3: Destructuring a Discriminated Union of Tuples

Here we have a `fetchData` function that returns a promise that resolves to an `ApiResponse` tuple that consists of two elements.

The first element is a string that indicates the type of the response. The second element can be either an array of `User` objects in the case of successful data retrieval, or a string in the event of an error:

```typescript

type APIResponse = [string, User[]] | string];

```

Here's what the `fetchData` function looks like:

```typescript
async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      return [
        "error",

        // Imagine some improved error handling here

        "An error occurred",
      ];
    }

    const data = await response.json();

    return ["success", data];
  } catch (error) {
    return ["error", "An error occurred"];
  }
}
```

However, as seen in the tests below, the `ApiResponse` type currently will allow for other combinations that aren't what we want. For example, it would allow for passing an error message when data is being returned:

```tsx
async function exampleFunc() {
  const [status, value] = await fetchData();

  if (status === "success") {
    console.log(value);

    type test = Expect<Equal<typeof value, User[]>>; // red squiggly lines under Equal<>
  } else {
    console.error(value);

    type test = Expect<Equal<typeof value, string>>; // red squiggly lines under Equal<>
  }
}
```

The problem stems from the `ApiResponse` type being too wide.

The `ApiResponse` type needs to be updated so that there are two possible combinations for the returned tuple:

If the first element is `"error"` then the tuple signifies an error occurred with the second element being the error message.

Otherwise, if the first element is `"success"` the tuple carries the successful payload, which is an array of `User` objects.

Your challenge is to redefine the `ApiResponse` type to be a discriminated unions of tuples that only allows for the specific combinations for the `success` and `error` states defined above.

#### Exercise 4: Handling Defaults with a Discriminated Union

We're back to the `calculateArea` function example:

```typescript
function calculateArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}
```

Until now, the test cases have involved checking if the `kind` of the `Shape` is a `circle` or a `square`, then calculating the area accordingly.

However, a new test case has been added for a situation where no `kind` value has been passed into the function:

```typescript
it("Should calculate the area of a circle when no kind is passed", () => {
  const result = calculateArea({
    radius: 5, // red squiggly line under radius
  });

  expect(result).toBe(78.53981633974483);

  type test = Expect<Equal<typeof result, number>>;
});
```

TypeScript is showing errors under `radius` in the test:

```typescript

Argument of type '{ radius: number; }' is not assignable to parameter of type 'Shape'.

Property 'kind' is missing in type '{ radius: number; }' but required in type 'Circle'.

```

The test expects that if a `kind` isn't passed in, the shape should be treated as a circle. However, the current implementation doesn't account for this.

Your challenge is to make updates to the `Shape` discriminated union that will allow for a missing value. Next, you'll need to make adjustments to the `calculateArea` function to ensure that TypeScript's type narrowing works properly within the function.

#### Solution 1: Destructuring a Discriminated Union

Before we look at the working solution, let's look at an attempt that doesn't work out.

##### A Non-Working Attempt at Destructuring Parameters

Since we know that `kind` is present in all branches of the discriminated union, we can try using the rest parameter syntax to bring along the other properties:

```typescript

function calculateArea({ kind, ...shape }: Shape) {

// rest of function

```

Then inside of the conditional branches, we can specify the `kind` and destructure from the `shape` object:

```typescript

if (kind === "circle") {

const { radius } = shape; // red squiggly line under radius

return Math.PI * radius * radius;

} else {

const { sideLength } = shape; // red squiggly line under sideLength

return sideLength * sideLength;

}

}

```

However, this approach doesn't work because the `kind` property has been separated from the rest of the shape. As a result, TypeScript can't track the relationship between `kind` and the other properties of `shape`.

Both `radius` and `sideLength` have error messages below them:

```typescript

Property 'radius' does not exist on type '{ radius: number; } | { sideLength: number; }'.

Property 'sideLength' does not exist on type '{ radius: number; } | { sideLength: number; }'.

```

TypeScript gives us these errors because it still cannot guarantee properties in the function parameters since it doesn't know yet whether it's dealing with a `Circle` or a `Square`.

##### The Working Destructuring Solution

Instead of doing the destructuring at the function parameter level, we instead will revert the function parameter back to `shape` and move the destructuring to take place inside of the conditional branches:

```typescript
function calculateArea(shape: Shape) {
  if (shape.kind === "circle") {
    const { radius } = shape;

    return Math.PI * radius * radius;
  } else {
    const { sideLength } = shape;

    return sideLength * sideLength;
  }
}
```

Now within the `if` condition, TypeScript can recognize that `shape` is indeed a `Circle` and allows us to safely access the `radius` property. A similar approach is taken for the `Square` in the `else` condition.

Destructuring is best used closer to where it's needed, especially when dealing with discriminated unions. Also note that TypeScript's auto-completion feature makes it convenient to work with properties directly, which don't require destructuring at all.

#### Solution 2: Narrowing a Discriminated Union with a Switch Statement

The first step is to clear out the `calcuateArea` function and add the `switch` keyword and specify `shape.kind` as our switch condition. TypeScript's intelligence kicks in and suggests autocompletion for `circle` and `square`, based on the discriminated union.

Each case will be handled as they were with the `if-else` statement:

```typescript
function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius * shape.radius;
    }

    case "square": {
      return shape.sideLength * shape.sideLength;
    }

    // Potential additional cases for more shapes
  }
}
```

##### Not Accounting for All Cases

As an experiment, comment out the case where the `kind` is `square`:

```typescript
function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius * shape.radius;
    }

    // case "square": {

    //   return shape.sideLength * shape.sideLength;

    // }

    // Potential additional cases for more shapes
  }
}
```

Now when we hover over the function, we see that the return type is `number | undefined`. This is because TypeScript is smart enough to know that if we don't return a value for the `square` case, the output will be `undefined` for any `square` shape.

```typescript
// hovering over `calculateArea` shows

function calculateArea(shape: Shape): number | undefined;
```

Switch statements work great with discriminated unions!

#### Solution 3: Destructuring a Discriminated Union of Tuples

At the start of this exercise, the `ApiResponse` type was too wide:

```tsx
type ApiResponse = [string, User[] | string];
```

We need to update the type to handle both the error and success states separately.

Let's start by handling the error state of our API response.

##### Handling the Error State

In this state, the first element of the tuple is `"error"` and the second element is a string that contains the error message:

```typescript
type ApiResponse = ["error", string];
```

##### Handling the Success State

Next, we need to add another option to our discriminated union with `"success"` as the first member and an array of users (`User[]`) as the second:

```typescript
type ApiResponse = ["error", string] | ["success", User[]];
```

With this update to the `ApiResponse` type, the errors have gone away!

##### Understanding Tuple Relationships

Inside of the `exampleFunc` function, we use array destructuring to pull out the `status` and `value` from the `ApiResponse` tuple:

```typescript
const [status, value] = await fetchData();
```

In this case, `status` is acting as the discriminator for the `ApiResponse` type.

Even though the `status` and `value` variables are separate, TypeScript keeps track of the relationships behind them. If `status` is checked and is equal to `"success"`, TypeScript can narrow down `value` to be of the `User[]` type automatically:

```typescript
// hovering over `status` shows

const status: "error" | "success";
```

Note that this intelligent behavior is specific to discriminated tuples, and won't work with discriminated objects.

##### Error Handling with Discriminated Unions

If you were to change the function to try to return a value that doesn't match the defined tuple structure, TypeScript would raise an error. For example, an empty object or an array where a string is expected would not be assignable. The type system checks that the pair of values in the tuple align with either the `["error", string]` or `["success", User[]]` format defined by the `ApiResponse` discriminated union.

#### Solution 4: Handling Defaults with a Discriminated Union

Before we look at the working solution, let's take a look at a couple of approaches that don't quite work out.

##### Attempt 1: Creating an `OptionalCircle` Type

One possible first step is to create an `OptionalCircle` type by discarding the `kind` property:

```typescript
type OptionalCircle = {
  radius: number;
};
```

Then we would update the `Shape` type to include the new type:

```typescript
type Shape = Circle | OptionalCircle | Square;
```

This solution appears to work initially since it resolves the error in the radius test case.

However, this approach brings back errors inside of the `calculateArea` function because the discriminated union is broken since not every member has a `kind` property.

##### Attempt 2: Updating the `Circle` Type

Rather than developing a new type, we could modify the `Circle` type to make the `kind` property optional:

```typescript
type Circle = {
  kind?: "circle";

  radius: number;
};

type Square = {
  kind: "square";

  sideLength: number;
};

type Shape = Circle | Square;
```

This modification allows us to distinguish between circles and squares. The discriminated union remains intact while also accommodating the optional case where `kind` is not specified.

However, there is now a new error inside of the `calculateArea` function:

```typescript
// inside the `calculateArea` function

if (shape.kind === "circle") {
  return Math.PI * shape.radius * shape.radius;
} else {
  return shape.sideLength * shape.sideLength; // red squiggly line under sideLength
}
```

The error tells us that TypeScript is no longer able to narrow down the type of `shape` to a `Square` because we're not checking to see if `shape.kind` is `undefined`.

##### Fixing the New Error

It would be possible to fix this error by adding additional checks for the `kind`, but instead we could just swap how our conditional checks work.

We'll check for a `square` first, then fall back to a `circle`:

```typescript
if (shape.kind === "square") {
  return shape.sideLength * shape.sideLength;
} else {
  return Math.PI * shape.radius * shape.radius;
}
```

By inspecting `square` first, all shape cases that aren't squares default to circles. The circle is treated as optional, which preserves our discriminated union and keeps the function flexible.

# 06. Objects

## Extending Objects

Creating new objects based on objects that already exist is a great way to promote modularity and reusability in your code. There are two primary methods for extending objects in TypeScript: using intersections and extending interfaces.

### Intersection Types

Unlike the union operator `|` which represents an "or" relationship between types, the intersection operator `&` signifies an 'and' relationship.

Using the intersection operator `&` combines multiple separate types into a single type that inherits all of the properties of the source types (formally known as "constituent types").

Consider these types for `Album` and `SalesData`:

```typescript
type Album = {
  title: string;

  artist: string;

  releaseYear: number;
};

type SalesData = {
  unitsSold: number;

  revenue: number;
};
```

On their own, each type represents a distinct set of properties. While the `SalesData` type on its own could be used to represent sales data for any product, using the `&` operator to create an intersection type allows us to combine the two types into a single type that represents an album's sales data:

```typescript
type AlbumSales = Album & SalesData;
```

The `AlbumSales` type now requires objects to include all of the properties from both `AlbumDetails` and `SalesData`:

```tsx

const wishYouWereHereSales: AlbumSales = {
  title: "Wish You Were Here",

  artist: "Pink Floyd",

  releaseYear: 1975

  unitsSold: 13000000,

  revenue: 65000000,
};
```

If the contract of the `AlbumSales` type isn't fulfilled when creating a new object, TypeScript will raise an error.

### Interfaces

<!-- TODO - introduce interfaces -->

Another option for creating new objects is to use TypeScript interfaces and the `extends` keyword. This approach is particularly useful when building hierarchies or when multiple extensions are needed.

In this example, we have a base `Album` interface that will be extended into `StudioAlbum` and `LiveAlbum` interfaces that allow us to provide more specific details about an album:

```typescript
interface Album {
  title: string;

  artist: string;

  releaseYear: number;
}

interface StudioAlbum extends Album {
  studio: string;

  producer: string;
}

interface LiveAlbum extends Album {
  concertVenue: string;

  concertDate: Date;
}
```

This structure allows us to create more specific album representations with a clear inheritance relationship:

```tsx
const americanBeauty: StudioAlbum = {
  title: "American Beauty",

  artist: "Grateful Dead",

  releaseYear: 1970,

  studio: "Wally Heider Studios",

  producer: "Grateful Dead and Stephen Barncard",
};

const oneFromTheVault: LiveAlbum = {
  title: "One from the Vault",

  artist: "Grateful Dead",

  releaseYear: 1991,

  concertVenue: "Great American Music Hall",

  concertDate: new Date("1975-08-13"),
};
```

Just as adding additional `&` operators add to an intersection, it's also possible for an interface to extend multiple other interfaces by separating them with commas:

```tsx
interface BoxSet extends StudioAlbum, LiveAlbum {
  numberOfDiscs: number;
}
```

### Types vs Interfaces

We've now seen two ways of extending objects in TypeScript: one using `type` and one using `interface`.

_So, what's the difference?_

A `type` can represent anything– union types, objects, intersection types, and more.

On the other hand, an `interface` primarily represents object types, though it can also be used to define function types. Interfaces are particularly important given the significance of object types in TypeScript and the broader context of JavaScript.

Generally speaking, it doesn't matter too much if you use `type` or `interface` in your code, though you will learn benefits and drawbacks of each as you continue to work with TypeScript.

### Intersections vs Interfaces

For the topic at hand, when it comes to extending objects you'll get better performance from using `interface extends`.

By using `interface extends`, TypeScript can cache interfaces based on their names. This effectively creates a reference for future use. It's also more expressive when reading the code, as it's clear that one interface is extending another.

In contrast, using `&` requires TypeScript to compute the intersection almost every time it's used. This is largely due to the potentially complex nature of intersections.

The debate between `type` vs `interface` will continue to arise in the TypeScript community, but when extending objects, using interfaces and the `extends` keyword is the way to go.

### Interface Declaration Merging

In addition to being able to `extend` interfaces, TypeScript also allows for interfaces to be declared more than once. When an interface is declared multiple times, TypeScript automatically merges the declarations into a single interface. This is known as interface declaration merging.

Here's an example of an `Album` interface with properties for the `title` and `artist`:

```typescript
interface Album {
  title: string;

  artist: string;
}
```

Suppose that as the application evolves, you want to add more details to the album's metadata, such as the release year and genre. With declaration merging, you can simply declare the `Album` interface again with the new properties:

```typescript
interface Album {
  releaseYear: number;

  genres: string[];
}
```

Behind the scenes, TypeScript automatically merges these two declarations into a single interface that includes all of the properties from both declarations:

```typescript
interface Album {
  title: string;

  artist: string;

  releaseYear: number;

  genres: string[];
}
```

This is a different behavior than in JavaScript, which would cause an error if you tried to redeclare an object in the same scope. You would also get an error in TypeScript if you tried to redeclare a type with the `type` keyword.

However, when using `interface` to declare a type, additional declarations are merged which may or may not be what you want.

This might give you pause about using `interface` instead of `type` by default.

There will be more advanced examples of interface declaration merging in the future, but for now, it's important to know that TypeScript automatically merges interfaces when they're declared multiple times.

### Exercises

#### Exercise 1: Create an Intersection Type

Here we have a `User` type and a `Product` type, both with some common properties like `id` and `createdAt`:

```tsx
type User = {
  id: string;

  createdAt: Date;

  name: string;

  email: string;
};

type Product = {
  id: string;

  createdAt: Date;

  name: string;

  price: number;
};
```

Your task is to create an intersection by refactoring the `User` and `Product` types such that they rely on the same `BaseEntity` type with properties `id` and `createdAt`.

#### Exercise 2: Extending Interfaces

After the previous exercise, you'll have a `BaseEntity` type along with `User` and `Product` types that intersect with it.

This time, your task is to refactor the types to be interfaces, and use the `extends` keyword to extend the `BaseEntity` type. For extra credit, try creating and extending multiple smaller interfaces.

#### Solution 1: Create an Intersection Type

To solve this challenge, we'll create a new `BaseEntity` type with the common properties:

```typescript
type BaseEntity = {
  id: string;

  createdAt: Date;
};
```

Once the `BaseEntity` type is created, we can use it to create the `User` and `Product` types that intersect it:

```typescript
type User = {
  name: string;

  email: string;
} & BaseEntity;

type Product = {
  name: string;

  price: number;
} & BaseEntity;
```

Now `User` and `Product` have exactly the same behavior that they did before, but with less duplication.

#### Solution 2: Extending Interfaces

Instead of using the `type` keyword, the `BaseEntity`, `User`, and `Product`, can be declared as interfaces. Remember, interfaces do not use an equals sign like `type` does:

```typescript
interface BaseEntity {
  id: string;

  createdAt: Date;
}

interface User {
  name: string;

  email: string;
}

interface Product {
  name: string;

  price: number;
}
```

Once the interfaces are created, we can use the `extends` keyword to extend the `BaseEntity` interface:

```typescript
interface User extends BaseEntity {
  name: string;

  email: string;
}

interface Product extends BaseEntity {
  name: string;

  price: number;
}
```

As eluded to by the extra credit, we can take this further by creating `WithId` and `WithCreatedAt` interfaces that represent objects with an `id` and `createdAt` property. Then, we can have `User` and `Product` extend from these interfaces by adding commas:

```typescript
interface WithId {
  id: string;
}

interface WithCreatedAt {
  createdAt: Date;
}

interface User extends WithId, WithCreatedAt {
  name: string;

  email: string;
}

interface Product extends WithId, WithCreatedAt {
  name: string;

  price: number;
}
```

Here, `User` represents an object with an `id`, `createdAt`, `name`, and `email` while `Product` represents an object with an `id`, `createdAt`, `name`, and `price`.

## Dynamic Object Keys

When using objects, it's common that we won't always know the exact keys that will be used.

In JavaScript, we can start with an empty object and add keys and values to it as we go:

```tsx
// JavaScript Example
const albumAwards = {};

albumAwards.Grammy = true;
albumAwards.MercuryPrize = false;
albumAwards.Billboard = true;
```

However, when we try to add keys to an empty prototype object in TypeScript, we'll get errors:

```tsx
// TypeScript Example
const albumAwards = {};

albumAwards.Grammy = true; // red squiggly line under Grammy
albumAwards.MercuryPrize = false; // red squiggly line under MercuryPrize
albumAwards.Billboard = true; // red squiggly line under Billboard

// hovering over Grammy shows:
Property 'Grammy' does not exist on type '{}'.
```

TypeScript is protecting us from adding keys to an object that doesn't have them defined.

We need to tell TypeScript that we want to be able to dynamically add keys. Let's look at some ways to do this.

### Index Signatures for Dynamic Keys

Index signatures are one way to specify we want to be able to add any key and value to an object. The syntax uses square brackets, just like we would if we were adding a dynamic key to an object literal.

Here's how we would specify an inline index signature for the `albumAwards` object literal. We'll call the key `award` as a string, and specify it should have a boolean value to match the example above:

```tsx
const albumAwards: {
  [award: string]: boolean;
} = {};
```

Note that with the inline index signature above, the values must always be a boolean. The `award` keys we add can't use a string or any other type.

The same syntax can also be used with types and interfaces:

```tsx
interface AlbumAwards {
  [award: string]: boolean;
}

const beyonceAwards: AlbumAwards = {
  Grammy: true,
  Billboard: true,
};
```

Index signatures are one way to handle dynamic keys, but there's a more readable way to do this with a type we've seen before.

### Using a Record Type for Dynamic Keys

The `Record` utility type is the preferred option for supporting dynamic keys. This type allows us to use any string, number, or symbol as a key, and supports any type for the value.

Here's how we would use `Record` for the `albumAwards` object, where the key will be a string and the value will be a boolean:

```tsx
const albumAwards: Record<string, boolean> = {};

albumAwards.Grammy = true;
```

The `Record` type helper is a repeatable pattern that's easy to read and understand. It's also an abstraction, which is generally preferred over using the lower-level index signature syntax. However, both options are valid and can even be used together.

### Combining Known and Dynamic Keys

In many cases there will be a base set of keys we know we want to include, but we also want to allow for additional keys to be added dynamically.

For example, say we are working with a base set of awards we know were nominations, but we don't know what other awards are in play. We can use the `Record` type to define a base set of awards and then use an intersection to extend it with an index signature for additional awards:

```typescript
type BaseAwards = "Grammy" | "MercuryPrize" | "Billboard";

type ExtendedAlbumAwards = Record<BaseAwards, boolean> & {
  [award: string]: boolean;
};

const extendedNominations: ExtendedAlbumAwards = {
  Grammy: true,
  MercuryPrize: false,
  Billboard: true, // Additional awards can be dynamically added
  "American Music Awards": true,
};
```

This technique would also work when using an interface and the `extends` keyword.

Being able to support both default and dynamic keys in our data structures allows us quite a bit of flexibility to adapt to changing requirements in your applications.

### Exercises

#### Exercise 1: Use an Index Signature for Dynamic Keys

Here we have an object called `scores`, and we are trying to assign several different properties to it:

```tsx
const scores = {};

scores.math = 95; // red squiggly line under math
scores.english = 90; // red squiggly line under english
scores.science = 85; // red squiggly line under science
```

Your task is to update `scores` to support the dynamic subject keys three ways: an inline index signature, a type, an interface, and a `Record`.

#### Exercise 2: Default Properties with Dynamic Keys

Here we have a `scores` object with default properties for `math` and `english`:

```tsx
interface Scores {}

// @ts-expect-error science is missing! // red squiggly line under @ts-expect-error
const scores: Scores = {
  math: 95,
  english: 90,
};
```

Here the `@ts-expect-error` directive is saying that we expect there to be an error because `science` is missing. However, there isn't actually an error with `scores` so instead TypeScript gives us an error below the directive.

Your task is to update the `Scores` interface to specify default keys for `math`, `english`, and `science` while allowing for any other subject to be added. Once you've updated the type correctly, the red squiggly line below `@ts-expect-error` will go away because `science` will be required but missing. For extra practice, create a `RequiredScores` interface that can be extended.

#### Exercise 3: Restricting Object Keys

Here we have a `configurations` object, typed as `Configurations` which is currently unknown.

The object holds keys for `development`, `production`, and `staging`, and each respective key is associated with configuration details such as `apiBaseUrl` and `timeout`.

There is also a `notAllowed` key, which is decorated with a `@ts-expect-error` comment. This is because, like the name says, the `notAllowed` key should not be allowed. However, there is an error below the directive because `notAllowed` is currently being allowed because of `Configuration`'s `unknown` type.

```typescript
type Environment = "development" | "production" | "staging";

type Configurations = unknown;

const configurations: Configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
  // @ts-expect-error   // red squiggly line under @ts-expect-error
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};
```

Update the `Configurations` type to be a Record that specifies the keys from `Environment`, while ensuring the `notAllowed` key is still not be allowed.

#### Solution 1: Use an Index Signature for Dynamic Keys

Inline index signature:

```typescript
const scores: {
  [key: string]: number;
} = {};
```

Interface:

```typescript
interface Scores {
  [key: string]: number;
}
```

Record:

```typescript
const scores: Record<string, number> = {};
```

#### Solution 2: Default Properties with Dynamic Keys

Here's how to add an index signature to the `Scores` interface to support dynamic keys along with the required keys:

```typescript
interface Scores {
  [subject: string]: number;
  math: number;
  english: number;
  science: number;
}
```

Creating a `RequiredScores` interface and extending it looks like this:

```typescript
interface RequiredScores {
  math: number;
  english: number;
  science: number;
}

interface Scores extends RequiredScores {
  [key: string]: number;
}
```

#### Solution 3: Restricting Object Keys

We know that the values of the `Configurations` object will be `apiBaseUrl`, which is a string, and `timeout`, which is a number.
These key-value pairs are added to the `Configurations` type like so:

```typescript
type Environment = "development" | "production" | "staging";

type Configurations = {
  apiBaseUrl: string;
  timeout: number;
};
```

##### A Failed First Attempt at Using Record

It may be tempting to use a Record to set the key as a string and the value an object with the properties `apiBaseUrl` and `timeout`:

```typescript
type Configurations = Record<
  string,
  {
    apiBaseUrl: string;
    timeout: number;
  }
>;
```

However, having the key as `string` still allows for the `notAllowed` key to be added to the object. We need to make the keys dependent on the `Environment` type.

##### The Correct Approach

Instead, we can specify the `key` as `Environment` inside the Record:

```typescript
type Configurations = Record<
  Environment,
  {
    apiBaseUrl: string;
    timeout: number;
  }
>;
```

Now TypeScript will throw an error when the object includes a key that doesn't exist in `Environment`, like `notAllowed`.

## Utility Types for Object Manipulation

TypeScript offers a variety of built-in types for you to use when working with objects. Whether you need to transform an existing object type or create a new type based on an existing one, there's likely a utility type that can help with that.

### `Partial`

We've seen how to use the question mark operator `?` to make properties optional in TypeScript. However, when dealing with an object type where every key is optional it gets a bit annoying to have to write (and read) the `?` over and over again.

The Partial utility type allows you to quickly transform all of the properties of a given type into optional properties.

Consider an Album interface that contains detailed information about an album:

```typescript
interface Album {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
}
```

When we want to update an album's information, we might not have all the information at once. For example, it can be difficult to decide what genre to assign to an album before it's released.

Using the `Partial` utility type and passing in `Album`, we can create a type that allows us to update any subset of an album's properties:

```typescript
type PartialAlbum = Partial<Album>;
```

Now we have a `PartialAlbum` type where `id`, `title`, `artist`, `releaseYear`, and `genre` are all optional.

This means we can create an album with only some of the properties of `Album`:

```typescript
const geogaddi: PartialAlbum = {
  title: "Geogaddi",
  artist: "Boards of Canada",
};
```

### `Required`

On the opposite side of `Partial` is the `Required` type, which makes sure all of the properties of a given type are required– even those that started as optional.

This `Album` interface has the `releaseYear` and `genre` properties marked as optional:

```typescript
interface Album {
  title: string;
  artist: string;
  releaseYear?: number;
  genre?: string;
}
```

We can use the `Required` utility type to create a new `RequiredAlbum` type:

```typescript
type RequiredAlbum = Required<Album>;
```

With `RequiredAlbum`, all of the original `Album` properties become required, and omitting any of them would result in an error:

```typescript
const doubleCup: RequiredAlbum = {
  title: "Double Cup",
  artist: "DJ Rashad",
  releaseYear: 2013,
  genre: "Juke",
};
```

#### Required with Nested Properties

An important thing to note is that `Required` only works one level deep. For example, if the `Album`'s `genre` contained nested properties, `Required<Album>` would not make the children required:

```tsx
type Album = {
  title: string;
  artist: string;
  releaseYear?: number;
  genre?: {
    parentGenre?: string;
    subGenre?: string;
  };
};

type RequiredAlbum = Required<Album>;
// hovering over RequiredAlbum shows:
type RequiredAlbum = {
  title: string;
  artist: string;
  releaseYear: number;
  genre: {
    parentGenre?: string;
    subGenre?: string;
  };
};
```

If you find yourself in a situation where you need a deeply Required type, check out the type-fest library by Sindre Sorhus.

### `PropertyKey`

The `PropertyKey` type is a global type that represents the set of all possible keys that can be used on an object, including string, number, and symbol. You can find its type definition inside of TypeScript's ES5 type definitions file:

```tsx
// inside lib.es5.d.ts
declare type PropertyKey = string | number | symbol;
```

Because `PropertyKey` works with all possible keys, it's great for working with dynamic keys where you aren't sure what the type of the key will be.

For example, when using an index signature you could set the key type to `PropertyKey` in order to allow for any valid key type:

```tsx
type Album = {
  [key: PropertyKey]: string;
};
```

The `PropertyKey` type is used behind the scenes of several TypeScript features

### `Pick`

The Pick utility type allows you to create a new type by selecting a subset of properties from an existing type. This type helper allows you to keep a main type as the source of truth while creating subtypes that contain only what you need.

For example, say we want to create a new type that only includes the `title` and `artist` properties from the `Album` type:

```typescript
type BasicAlbum = Pick<Album, "title" | "artist">;
```

An important thing to note is that Pick doesn't work well with union types, so it's best to stick with object types when using it.

Despite this limitation, Pick is a great way to ensure you're only working with the data you need.

### `Omit`

The Omit helper type is kind of like the opposite of Pick. It allows you to create a new type by excluding a subset of properties from an existing type.

For example, we could use Omit to create the same `BasicAlbum` type we created with Pick, but this time by excluding the `id`, `releaseYear` and `genre` properties:

```tsx
type BasicAlbum = Omit<Album, "id" | "releaseYear" | "genre">;
```

On the surface, using Omit is straightforward, but there are a couple of quirks to be aware of.

#### Omit is Loose

When using Omit, you are able to exclude properties that don't exist on an object.

For example, creating an `AlbumWithoutProducer` type with our `Album` type would not result in an error, even though `producer` doesn't exist on `Album`:

```typescript
type AlbumWithoutProducer = Omit<Album, "producer">;
```

If we tried to create an `AlbumWithOnlyProducer` type using Pick, we would get an error because `producer` doesn't exist on `Album`:

```tsx
type AlbumWithOnlyProducer = Pick<Album, "producer">; // red squiggly line under "producer"

// hovering over producer shows:
Type '"producer"' does not satisfy the constraint 'keyof Album'.
```

Why do these two seemingly related utility types behave differently?

When the TypeScript team was originally implementing Omit, they were faced with a decision to create a strict or loose version of Omit. The strict version would only permit the omission of valid keys (`id`, `title`, `artist`, `releaseYear`, `genre`), whereas the loose version wouldn't have this constraint

At the time, it was a more popular idea in the community to implement a loose version, so that's the one they went with. Given that global types in TypeScript are globally available and don't require an import statement, the looser version is seen as a safer choice, as it is more compatible and less likely to cause unforeseen errors.

However, having this loose implementation of Omit doesn't allow for autocompletion. You won't get any suggestions when you start typing the properties you want to omit, so anything is fair game.

While it is possible to create a strict version of Omit, the loose version should be sufficient for most cases. Just keep an eye out, since it may error in ways you don't expect.

For more insights into the decisions behind Omit, refer to the TypeScript team's original [discussion](https://github.com/microsoft/TypeScript/issues/30455) and [pull request](https://github.com/microsoft/TypeScript/pull/30552) adding `Omit`, and their [final note](https://github.com/microsoft/TypeScript/issues/30825#issuecomment-523668235) on the topic.

#### Omit Doesn't Distribute

Earlier it was mentioned that Pick doesn't work well with union types. Omit has a similar issue that we'll look at now.

Consider a scenario where we have three interface types for `Album`, `CollectorEdition`, and `DigitalRelease`:

```tsx
type Album = {
  id: string;
  title: string;
  genre: string;
  coverImageId: string;
};

type CollectorEdition = {
  id: string;
  title: string;
  limitedEditionFeatures: string[];
  coverImageId: string;
};

type DigitalRelease = {
  id: string;
  title: string;
  digitalFormat: string;
  coverImageId: string;
};
```

These types share common properties such as `id`, `title`, and `coverImageId`, but each also has unique attributes. The `Album` type includes `genre`, the `CollectorEdition` includes `limitedEditionFeatures`, and `DigitalRelease` has `digitalFormat`:

After creating a `MusicProduct` type that is a union of these three types, say we want to create a `MusicProductWithoutId` type, mirroring the structure of `MusicProduct` but excluding the `id` field:

```tsx
type MusicProduct = Album | CollectorEdition | DigitalRelease;

type MusicProductWithoutId = Omit<MusicProduct, "id">;
```

You might assume that `MusicProductWithoutId` would be a union of the three types minus the `id` field. However, what we get instead is a simplified object type containing only the `title` and `coverImageId`– the other properties that were shared across all types, without `id`.

```tsx
// hovering over MusicProductWithoutId shows:
type MusicProductWithoutId = {
  title: string;
  coverImageId: string;
};
```

This unexpected outcome stems from how Omit processes union types. Rather than iterating over each union member, it amalgamates them into a single structure it can understand.

##### The `DistributiveOmit` Type

In order to address this, we can create a `DistributiveOmit` type. It's defined similarly to Omit but operates individually on each union member. Note the inclusion of `PropertyKey` in the type definition to allow for any valid key type:

```tsx
type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;
```

When we apply `DistributiveOmit` to our `MusicProduct` type, we get the anticipated result: a union of `Album`, `CollectorEdition`, and `DigitalRelease` with the `id` field omitted:

```tsx
type MusicProductWithoutId = DistributiveOmit<MusicProduct, "id">;

// Hovering over MusicProductWithoutId shows:
type MusicProductWithoutId =
  | Omit<Album, "id">
  | Omit<CollectorEdition, "id">
  | Omit<DigitalRelease, "id">;
```

Structurally, this is the same as:

```tsx
type MusicProductWithoutId =
  | {
      title: string;
      genre: string;
      coverImageId: string;
    }
  | {
      title: string;
      limitedEditionFeatures: string[];
      coverImageId: string;
    }
  | {
      title: string;
      digitalFormat: string;
      coverImageId: string;
    };
```

In situations where you need to use Omit with union types, using a distributive version will give you a much more predictable result.

For practice, try creating a `DistributivePick` type based on the original type definition of `Pick`.

### Exercises

#### Exercise 1: Expecting Certain Properties

In this exercise, we have a `fetchUser` function that uses `fetch` to access an endpoint named `APIUser` and it return a `Promise<User>`:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const fetchUser = async (): Promise<User> => {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
};

const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>; // red squiggly line under Equal<>
};
```

Since we're in an asynchronous function, we do want to use a `Promise`, but there's a problem with this `User` type.

In the `example` function that calls `fetchUser`, we're only expecting to receive the `name` and `email` fields. These fields are only part of what exists in the `User` interface.

Your task is to update the typing so that only the `name` and `email` fields are expected to be returned from `fetchUser`.

You can use the helper types we've looked at to accomplish this, but for extra practice try using just interfaces.

#### Exercise 2: Dynamic Key Support

Consider this `hasKey` function that accepts an object and a key, then calls `object.hasOwnProperty` on that object:

```typescript
const hasKey = (obj: object, key: string) => {
  return obj.hasOwnProperty(key);
};
```

There are several test cases for this function:

The first test case checks that it works on string keys, which doesn't present any issues. As anticipated, `hasKey(obj, "foo")` would return true and `hasKey(obj, "bar")` would return false:

```typescript
it("Should work on string keys", () => {
  const obj = {
    foo: "bar",
  };

  expect(hasKey(obj, "foo")).toBe(true);
  expect(hasKey(obj, "bar")).toBe(false);
});
```

A test case that checks for numeric keys does have issues because the function is expecting a string key:

```typescript
it("Should work on number keys", () => {
  const obj = {
    1: "bar",
  };

  expect(hasKey(obj, 1)).toBe(true); // red squiggly line under 1
  expect(hasKey(obj, 2)).toBe(false); // red squiggly line under 2
});
```

Because an object can also have a symbol as a key, there is also a test for that case. It currently has type errors for `fooSymbol` and `barSymbol` when calling `hasKey`:

```typescript
it("Should work on symbol keys", () => {
  const fooSymbol = Symbol("foo");
  const barSymbol = Symbol("bar");

  const obj = {
    [fooSymbol]: "bar",
  };

  expect(hasKey(obj, fooSymbol)).toBe(true); // red squiggly line under fooSymbol
  expect(hasKey(obj, barSymbol)).toBe(false); // red squiggly line under barSymbol
});
```

Your task is to update the `hasKey` function so that all of these tests pass. Try to be as concise as possible!

#### Exercise 3: Updating a Product

Here we have a function `updateProduct` that takes two arguments: an `id`, and a `productInfo` object derived from the `Product` type, excluding the `id` field.

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const updateProduct = (id: number, productInfo: Omit<Product, "id">) => {
  // Do something with the productInfo
};
```

The twist here is that during a product update, we might not want to modify all of its properties at the same time. Because of this, not all properties have to be passed into the function.

This means we have several different test scenarios. For example, update just the name, just the price, or just the description. Combinations like updating the name and the price or the name and the description are also tested.

```tsx
updateProduct(1, {
  // red squiggly line under the entire object
  name: "Book",
});

updateProduct(1, {
  // red squiggly line under the entire object
  price: 12.99,
});

updateProduct(1, {
  // red squiggly line under the entire object
  description: "A book about Dragons",
});

updateProduct(1, {
  // red squiggly line under the entire object
  name: "Book",
  price: 12.99,
});

updateProduct(1, {
  // red squiggly line under the entire object
  name: "Book",
  description: "A book about Dragons",
});
```

Your challenge is to modify the `ProductInfo` type to reflect these requirements. The `id` should remain absent from `ProductInfo`, but we also want all other properties in `ProductInfo` to be optional.

#### Solution 1: Expecting Certain Properties

There are quite a few ways to solve this problem. Here are a few examples:

##### Using Pick

Using the Pick utility type, we can create a new type that only includes the `name` and `email` properties from the `User` interface:

```typescript
type PickedUser = Pick<User, "name" | "email">;
```

Then the `fetchUser` function can be updated to return a `Promise` of `PickedUser`:

```typescript
const fetchUser = async (): Promise<PickedUser> => {
  ...
```

##### Using Omit

The Omit utility type can also be used to create a new type that excludes the `id` and `role` properties from the `User` interface:

```typescript
type OmittedUser = Omit<User, "id" | "role">;
```

Then the `fetchUser` function can be updated to return a `Promise` of `OmittedUser`:

```typescript
const fetchUser = async (): Promise<OmittedUser> => {
  ...
```

##### Extending an Interface

We could create an interface `NameAndEmail` that contains a `name` and `email` property, along with updating the `User` interface to remove those properties in favor of extending them:

```tsx
interface NameAndEmail {
  name: string;
  email: string;
}

interface User extends NameAndEmail {
  id: string;
  role: string;
}
```

Then the `fetchUser` function could return a `Promise` of `NameAndEmail`:

```tsx
const fetchUser = async (): Promise<NameAndEmail> => {
  ...
```

#### Solution 2: Dynamic Key Support

The obvious answer is to change the `key`'s type to `string | number | symbol`:

```typescript
const hasKey = (obj: object, key: string | number | symbol) => {
  return obj.hasOwnProperty(key);
};
```

However, there's a much more succinct solution.

Hovering over `hasOwnProperty` shows us the type definition:

```typescript
(method) Object.hasOwnProperty(v: PropertyKey): boolean
```

Recall that the `PropertyKey` type represents every possible value a key can have. This means we can use it as the type for the key parameter:

```typescript
const hasKey = (obj: object, key: PropertyKey) => {
  return obj.hasOwnProperty(key);
};
```

#### Solution 3: Updating a Product

Using the `Partial` type helper is a good fit in this scenario.

In this case, wrapping `Ommit<Product, "id">` in `Partial` will remove the `id` while making all of the remaining properties optional:

```typescript
const updateProduct = (
  id: number,
  productInfo: Partial<Omit<Product, "id">>,
) => {
  // Do something with the productInfo
};
```

# 07. Mutability

The way you declare variables and object properties in TypeScript can significantly affect type inference and mutability. In this chapter, we'll explore the implications of using `let` and `const`, how to ensure proper object property inference, and techniques for enforcing immutability.

## How Mutability Affects Inference

### Variable Declaration and Type Inference

As with recent versions of JavaScript, TypeScript supports the `let` and `const` keywords for variable declaration.

When using the `let` keyword, the variable is mutable and can be reassigned. This mutability can lead to less precise type inference, as TypeScript must account for potential changes to the variable's value.

Using `const` indicates that the variable's value is immutable and cannot be changed once set. This immutability allows TypeScript to infer more precise types.

Consider this `AlbumGenre` type is a union of literal values representing possible genres for an album:

```typescript
type AlbumGenre = "rock" | "country" | "electronic";
```

Using `let`, we can declare a variable `albumGenre` and assign it the value `"rock"`:

```typescript
let albumGenre = "rock";

// hovering over albumGenre shows:
let albumGenre: string;
```

Then we can attempt to assign a genre inside of an `albumDetails` object:

```typescript
const albumDetails: { genre: AlbumGenre } = {
  genre: albumGenre, // red squiggly line under genre
};
```

TypeScript shows us an error below `genre` inside of the assignment:

```tsx
Type 'string' is not assignable to type 'AlbumGenre'.
```

Because `let` was used when declaring the variable, TypeScript sees that mutability has been implied. Therefore, it will infer a more general type in order to accommodate the variable being reassigned. In this case, it infers `albumGenre` as a `string` rather than the specific literal type `"rock"`.

When we change the variable declaration to use `const`, TypeScript will infer the type more precisely. There is no longer an error in the assignment, and hovering over `albumGenre` inside of the `albumDetails` object shows that TypeScript has inferred it as the literal type `"rock"`:

```typescript
const albumGenre = "rock";

const albumDetails: { genre: AlbumGenre } = {
  genre: albumGenre, // No error
};

// hovering over albumGenre shows:
const albumGenre: "rock";
```

If we try to change the value of `albumGenre` after declaring it as `const`, TypeScript will show an error:

```typescript
genre = "country"; // red squiggly line under genre

// Hovering over genre shows:
Error: Cannot assign to 'genre' because it is a constant
```

TypeScript is mirroring JavaScript's treatment of const in order to prevent possible runtime errors. When you declare a variable as `const`, TypeScript infers it as the literal type you specified.

Your choice between `let` and `const` when declaring variables impacts how TypeScript infers types. Using `let` is good for variables that you expect to change, while `const` is better for variables that won't.

### Object Property Inference

Just like in JavaScript, objects are mutable in TypeScript, meaning their properties can be changed after they are created. As we saw with variables, how you create objects in TypeScript can affect how well type inference works.

For this example, we have an `AlbumAttributes` type that includes a `status` property with a union of literal values representing possible album statuses:

```typescript
type AlbumAttributes = {
  status: "new release" | "on sale" | "staff pick";
};
```

Say we had an `updateStatus` function that takes an `AlbumAttributes` object and updates its `status` property (though for illustration purposes, we won't define the function here):

```typescript
const updateStatus = (attributes: AlbumAttributes) => {};

const albumAttributes = {
  status: "on sale",
};

updateStatus(albumAttributes); // red squiggly line under albumAttributes
```

TypeScript gives us an error below `albumAttributes` inside of the `updateStatus` function call, with messages similar to what we saw before:

```tsx
Argument of type '{ status: string; }' is not assignable to parameter of type 'AlbumAttributes'.
Types of property 'status' are incompatible.
Type 'string' is not assignable to type '"new release" | "on sale" | "staff pick"'.
```

Even though the `albumAttributes` object was declared with `const`, TypeScript treats object properties as mutable. We get the error when calling `updateStatus` because the `status` property is inferred as a `string` rather than the specific literal type `"on sale"`.

### Resolving Property Inference Errors

Let's look at a couple of ways to fix this inference issue.

#### Using an Inline Object

One approach is to inline the object when calling the `updateStatus` function instead of declaring it separately:

```typescript
updateStatus({
  status: "onSale",
}); // No error
```

When inlining the object, TypeScript knows that there is no way that `status` could be changed before it is passed into the function.

#### Adding a Type to the Object

Another option is to explicitly declare the type of the `albumAttributes` object to be `AlbumAttributes`:

```tsx
const albumAttributes: AlbumAttributes = {
  status: "on sale",
};

updateStatus(albumAttributes); // No error
```

When the object's type is specified, TypeScript can confidently infer that the `status` property matches one of the allowed literals from the union.

Whether working with a single object or an array of objects, these techniques for ensuring proper object property inference will help you avoid inference errors.

## Readonly Object Properties

For times when you want to ensure that an object's properties cannot be changed after they are set, TypeScript provides the `readonly` modifier.

Consider this `Album` interface, where the `title` and `artist` are marked as `readonly`:

```typescript
interface Album {
  readonly title: string;
  readonly artist: string;
  status?: "new release" | "on sale" | "staff pick";
  genre?: string[];
}
```

Once an `Album` object is created, its `title` and `artist` properties are locked in and cannot be changed. However, the optional `status` and `genre` properties can still be modified.

### The `Readonly` Type Helper

If you want to specify that all properties of an object should be read-only, TypeScript provides a type helper called `Readonly`.

To use it, you simply wrap the object type with `Readonly`.

Here's an example of using `Readonly` to create an `Album` object:

```typescript
const readOnlyWhiteAlbum: Readonly<Album> = {
  title: "The Beatles (White Album)",
  artist: "The Beatles",
  status: "staff pick",
};
```

Because the `readOnlyWhiteAlbum` object was created using the `Readonly` type helper, none of the properties can be modified:

```tsx
readOnlyWhiteAlbum.genre = ["rock", "pop", "unclassifiable"]; // red squiggly line under genre

// hovering over genre shows:
Cannot assign to 'genre' because it is a read-only property
```

Note that like many of TypeScript's type helpers, the immutability enforced by `Readonly` only operates on the first level. It won't make properties read-only recursively.

## Readonly Arrays

As with object properties, arrays and tuples can be made immutable by using the `readonly` modifier.

Here's how the `readonly` modifier can be used to create a read-only array of genres. Once the array is created, its contents cannot be modified:

```typescript
const readOnlyGenres: readonly string[] = ["rock", "pop", "unclassifiable"];
```

TypeScript also offers a `ReadonlyArray` type helper that functions in the same way to using the above syntax:

```tsx
const readOnlyGenres: ReadonlyArray<string> = ["rock", "pop", "unclassifiable"];
```

Both of these approaches are functionally the same. Hovering over the `readOnlyGenres` variable shows that TypeScript has inferred it as a read-only array:

```typescript
// hovering over `readOnlyGenres` shows:
const readOnlyGenres: readonly string[];
```

Note that while calling array methods that cause mutations will result in errors, methods like `map()` and `reduce()` will still work, as they create a copy of the array and do not mutate the original.

```tsx
const uppercaseGenres = readOnlyGenres.map((genre) => genre.toUpperCase()); // No error

readOnlyGenres.push("experimental"); // red squiggly line under push

// hovering over push shows:
Property 'push' does not exist on type 'readonly string[]'
```

### Distinguishing Assignability Between Read-Only and Mutable Arrays

To help drive the concept home, let's take compare assignability between read-only and mutable arrays.

Here are two `printGenre` functions that are functionally identical, except `printGenresReadOnly` takes a read-only array of genres as a parameter whereas `printGenresMutable` takes a mutable array:

```typescript
function printGenresReadOnly(genres: readonly string[]) {
  for (const genre of genres) {
    console.log(genre);
  }
}

function printGenresMutable(genres: string[]) {
  for (const genre of genres) {
    console.log(genre);
  }
}
```

When we create a mutable array of genres, it can be passed as an argument to both of these functions without error:

```typescript
const mutableGenres = ["rock", "pop", "unclassifiable"];

printGenresReadOnly(mutableGenres);
printGenresMutable(mutableGenres);
```

This works because specifying `readonly` on the `printGenresReadOnly` function parameter only guarantees that it won't alter the array's content. Thus, it doesn't matter if we pass a mutable array because it won't be changed.

However, the reverse is not true.

If we declare a read-only array, we can only pass it to `printGenresReadOnly`. Attempting to pass it to `printGenresMutable` will yield an error:

```typescript
const readOnlyGenres: readonly string[] = ["rock", "pop", "unclassifiable"];

printGenresReadOnly(readOnlyGenres);
printGenresMutable(readOnlyGenres); // red squiggly line under readOnlyGenres

// hovering over readOnlyGenres shows:
Error: Argument of type 'readonly ["rock", "pop", "unclassifiable"]' is not assignable to parameter of type 'string[]'
```

The error arises due to the potential for a mutable array to be altered inside of the function, which isn't acceptable for a read-only array.

Essentially, read-only arrays can only be assigned to other read-only types. This characteristic is somewhat viral: if a function deep down the call stack expects a `readonly` array, then that array must remain `readonly` throughout. Doing so ensures that the array won't be mutated in any manner as it moves down the stack.

The big takeaway here is that even though you can assign mutable arrays to read-only arrays, you cannot assign read-only arrays to mutable arrays.

## Exercises

### Exercise 1: Inference with an Array of Objects

Here we have a `modifyButtons` function that takes in an array of objects with `type` properties that are either `"button"`, `"submit"`, or `"reset"`.

When attempting to call `modifyButtons` with an array of objects that seem to meet the contract, TypeScript gives us an error:

```typescript
type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange); // red squiggly line under buttonsToChange
```

Your task is to determine why this error shows up, then resolve it.

### Exercise 2: Avoiding Array Mutation

This `printNames` function accepts an array of `name` strings and logs them to the console. However, there are also non-working `@ts-expect-error` comments that should not allow for names to be added or changed:

```typescript
function printNames(names: string[]) {
  for (const name of names) {
    console.log(name);
  }

  // @ts-expect-error // red squiggly line
  names.push("John");

  // @ts-expect-error // red squiggly line
  names[0] = "Billy";
}
```

Your task is to update the type of the `names` parameter so that the array cannot be mutated. There are two ways to solve this problem.

### Exercise 3: An Unsafe Tuple

Here we have a `dangerousFunction` which accepts an array of numbers as an argument:

```tsx
const dangerousFunction = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};
```

Additionally, we've defined a variable `myHouse` which is a tuple representing a `Coordinate`:

```tsx
type Coordinate = [number, number];
const myHouse: Coordinate = [0, 0];
```

Our tuple `myHouse` contains two elements, and the `dangerousFunction` is structured to pop two elements from the given array.

Given that `pop` removes the last element from an array, calling `dangerousFunction` with `myHouse` will remove its contents.

Currently, TypeScript does not alert us to this potential issue, as seen by the error line under `@ts-expect-error`:

```tsx
dangerousFunction(
  // @ts-expect-error // red squiggly line under @ts-expect-error
  myHouse,
);
```

Your task is to adjust the type of `Coordinate` such that TypeScript triggers an error when we attempt to pass `myHouse` into `dangerousFunction`.

Note that you should only change `Coordinate`, and leave the function untouched.

### Solution 1: Inference with an Array of Objects

Hovering over the `buttonsToChange` variable shows us that it is being inferred as an array of objects with a `type` property of type `string`:

```typescript
// hovering over buttonsToChange shows:
const buttonsToChange: {
  type: string;
}[];
```

This means that we could change the type of the first element in the array to something different:

```tsx
buttonsToChange[0].type = "something strange";
```

TypeScript doesn't like this, so it won't infer properly.

The fix here is to specify that `buttonsToChange` is an array of `ButtonAttributes`:

```tsx
type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes[]) => {};

const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange); // No error
```

### Solution 2: Avoiding Array Mutation

#### Option 1: Add the `readonly` Keyword

The first approach solution is to add the `readonly` keyword before the `string[]` array. It applies to the entire `string[]` array, converting it into a read-only array:

```typescript
function printNames(names: readonly string[]) {
  ...
}
```

With this setup, you can't call `.push()` or modify elements in the array. However, methods like `map()` and `reduce()` remain accessible since these create a copy of the array, and do not mutate the original.

#### Option 2: Use the `ReadonlyArray` Type Helper

Alternatively, you could use the `ReadonlyArray` type helper:

```typescript
function printNames(names: ReadonlyArray<string>) {
  ...
}
```

Regardless of which of these two methods you use, TypeScript will still display `readonly string[]` when hovering over the `names` parameter:

```typescript
// hovering over `names` shows:
(parameter) names: readonly string[]
```

### Solution 3: An Unsafe Tuple

The best way to prevent unwanted changes to the `Coordinate` tuple is to make it a `readonly` tuple:

```tsx
type Coordinate = readonly [number, number];
```

Now, `dangerousFunction` throws a TypeScript error when we try to pass `myHouse` to it:

```tsx
const dangerousFunction = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};

dangerousFunction(
  // @ts-expect-error
  myHouse, // red squiggly line under myHouse
);

// hovering over myHouse shows:
Argument of type 'Coordinate' is not assignable to parameter of type 'number[]'.
  The type 'Coordinate' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
```

We get an error because the function's signature expects a modifiable array of numbers, but `myHouse` is a read-only tuple. TypeScript is protecting us against unwanted changes.

It's a good practice to use `readonly` tuples as much as possible to avoid problems like the one in this exercise.

## Deep Immutability with `as const`

Earlier it was mentioned that the `Readonly` type helper only works on the first level of an object. However, TypeScript's `as const` assertion specifies that all of an object's properties should be treated as deeply read-only, no matter how deeply nested they are.

Let's revisit the example of the `AlbumAttributes` type that included a `status` property, along with a function to update it:

```typescript
type AlbumAttributes = {
  status: "new release" | "on sale" | "staff pick";
};

const updateStatus = (attributes: AlbumAttributes) => {};

const albumAttributes = {
  status: "on sale",
};

updateStatus(albumAttributes); // red squiggly line under albumAttributes
```

Recall that TypeScript presents an error when calling `updateStatus` because the `status` property was inferred as a `string` rather than the specific literal type `"on sale"`. We looked at two ways to solve the issue: using an inline object, or adding a type to the object.

The `as const` assertion gives us a third way. It ensures that an object and all of its properties are treated as constants, meaning that they cannot be changed once they are created.

The assertion gets added at the end of the object declaration:

```typescript
const albumAttributes = {
  status: "on sale",
} as const;
```

When using `as const`, TypeScript will add the `readonly` modifier to each of the object's properties. Hovering over the `albumAttributes` object, we can see that TypeScript has added the `readonly` modifier to the `status` property:

```tsx
// hovering over albumAttributes shows:
const albumAttributes: {
  readonly status: "on sale";
};
```

As before, TypeScript can see that the `status` property can't be modified, so the error goes away.

There's no cost to using `as const` since it disappears at runtime. This makes it a very useful tool for your TypeScript applications, especially when configuring objects.

### Comparing `as const` with `Object.freeze`

In JavaScript, the `Object.freeze` method is a common way to create immutable objects. While it is also possible to be used in TypeScript, there are some significant differences between `Object.freeze` and `as const`.

For this example, we'll rework the `AlbumAttributes` with nested `status` property to an `AlbumStatus` type that will be used inside of a `ShelfLocations` object:

```tsx
type AlbumStatus = "new release" | "on sale" | "staff pick";

type ShelfLocations = {
  entrance: {
    status: AlbumStatus;
  };
  frontCounter: {
    status: AlbumStatus;
  };
  endCap: {
    status: AlbumStatus;
  };
};
```

First, we'll create a `shelfLocations` object that uses `Object.freeze`:

```tsx
const shelfLocations = Object.freeze({
  entrance: {
    status: "on sale",
  },
  frontCounter: {
    status: "staff pick",
  },
  endCap: {
    status: "new release",
  },
});
```

Hovering over `shelfLocations` shows that the object has the `Readonly` modifier applied to it:

```tsx
// hovering over shelfLocations shows:
const shelfLocations: Readonly<{
  entrance: {
    status: string;
  };
  frontCounter: {
    status: string;
  };
  endCap: {
    status: string;
  };
}>;
```

Recall that the `Readonly` modifier only works on the first level of an object. If we try to add a new `backWall` property to the `shelfLocations` object, TypeScript will throw an error:

```tsx
shelfLocations.backWall = { status: "on sale" }; // red squiggly line under backWall

// hovering over backWall shows:
Property 'backWall' does not exist on type 'Readonly<{ entrance: { status: string; }; frontCounter: { status: string; }; endCap: { status: string; }; }>'
```

However, we are able to change the nested `status` property of a specific location:

```tsx
shelfLocations.entrance.status = "new release";
```

Again, using `as const` makes the entire object deeply read-only, including all nested properties:

```tsx
const shelfLocations = {
  entrance: {
    status: "on sale",
  },
  frontCounter: {
    status: "staff pick",
  },
  endCap: {
    status: "new release",
  },
} as const;

// hovering over shelfLocations shows:
const shelfLocations: {
  readonly entrance: {
    readonly status: "on sale";
  };
  readonly frontCounter: {
    readonly status: "staff pick";
  };
  readonly endCap: {
    readonly status: "new release";
  };
};
```

While both `as const` and `Object.freeze` will enforce immutability, `as const` is the more convenient and efficient choice. Unless you specifically need an object to be frozen at runtime with `Object.freeze`, you should stick with `as const`.

#### `as const` for Immutable Arrays

The `as const` assertion can also be used to create read-only arrays:

```tsx
const readOnlyGenres = ["rock", "pop", "unclassifiable"] as const;
```

For the most part, the rules of read-only arrays discussed earlier in the chapter still apply– mutations like `push` and `pop` won't work, but methods like `map` and `reduce` will.

However, there is a key difference when using `as const` with arrays. When you use `as const` with an array, TypeScript will infer the array's elements as literal types.

Let's compare the behavior:

```tsx
const readOnlyGenres: readonly string[] = ["rock", "pop", "unclassifiable"];

// hovering over readOnlyGenres shows:
const readOnlyGenres: readonly string[];

const readOnlyGenresAsConst = ["rock", "pop", "unclassifiable"] as const;

// hovering over readOnlyGenresAsConst shows:
const readOnlyGenresAsConst: readonly ["rock", "pop", "unclassifiable"];
```

Not only is `readOnlyGenresAsConst` an immutable array, but TypeScript has also inferred the array's elements as literal types. This means that the array can only contain the exact strings `"rock"`, `"pop"`, and `"unclassifiable"`.

This means that array methods like `includes` and `indexOf` won't behave as expected in all situations.

For example, when calling `indexOf` with a string that isn't in the array, the regular `readonly` array will return `-1`, but the `as const` array will return an error:

```tsx
readOnlyGenres.indexOf("jazz"); // -1

readOnlyGenresAsConst.indexOf("jazz"); // red squiggly line under "jazz"

// hovering over "jazz" shows:
Argument of type '"jazz"' is not assignable to parameter of type '"rock" | "pop" | "unclassifiable"'
```

While this specific typing adds predictability for TypeScript, it can be limiting and annoying when compared to behavior you're used to in JavaScript.

##### Improve Read-only Array Handling with `ts-reset`

Total TypeScript's `ts-reset` library can help with this. It globally adjusts some of TypeScript's types, including updating arrays to accept any string when using `includes` and `indexOf`:

```tsx
readOnlyGenresAsConst.indexOf("jazz"); // No error when `ts-reset` is imported
```

The `ts-reset` library offers a way of balancing between the strictness and flexibility that TypeScript provides. While some developers might prefer TypeScript's stricter approach, if you ever find read-only arrays troublesome, this library is a useful addition to your toolkit to make the TypeScript experience smoother. Find out [more about `ts-reset` on GitHub](https://github.com/total-typescript/ts-reset).

### Exercises

#### Exercise 1: Inferring a Tuple

In this exercise, we are dealing with an async function named `fetchData` that fetches data from a URL and returns a result.

If the fetch operation fails, this function returns a tuple. The first member of this tuple contains the error message and the second member is irrelevant in this case.

If the operation is successful, the function also returns a tuple. However, this time, the first member is `undefined` and the second member contains the fetched data.

Here's how the function is currently implemented:

```typescript
const fetchData = async () => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")];
  }

  const data = await result.json();

  return [undefined, data];
};
```

Here's an async `example` function that uses `fetchData` and includes a couple of test cases:

```typescript
const example = async () => {
  const [error, data] = await fetchData();

  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>, // red squiggly line under Equal<>
    Expect<Equal<typeof data, any>>,
  ];
};
```

Currently, both members of the tuple are inferred as `any`, which isn't ideal.

```typescript
const [error, data] = await fetchData();

// hovering over error and data shows:
const error: any;
const data: any;
```

Your challenge is to modify the `fetchData` function implementation so that TypeScript infers a Promise with a tuple for its return type.

Depending on whether or not the fetch operation is successful, the tuple should contain either an error message or a pair of `undefined` and the data fetched.

Hint: There are two possible approaches to solve this challenge. One way would be to define an explicit return type for the function. Alternatively, you could attempt to add or change type annotations for the `return` values within the function.

#### Exercise 2: Inferring Literal Values

#### Exercise 3: Ensuring Literal Type Inference

Let's revisit a previous exercise and evolve our solution.

The `modifyButtons` function accepts an array of objects with a `type` property:

```typescript
type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange); // red squiggly line under buttonsToChange
```

Previously, the error was solved by updating `buttonsToChange` to be specified as an array of `ButtonAttributes`:

```typescript
const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];
```

This time, your challenge is to solve the error by making alternative updates to `buttonsToChange`.

Try to find two ways to make modifications: one that makes the `type` property immutable, and one that infers a literal value and allows for changing the `type` to any that has been specified in the `ButtonAttributes` type.

You should not alter the `ButtonAttributes` type definition or the `modifyButtons` function.

#### Solution 1: Inferring a Tuple

As mentioned, there are two different solutions to this challenge.

##### Option 1: Defining a Return Type

The first solution is to define a return type for the `fetchData` function.

Inside the `Promise` type, a tuple is defined with either `Error` or `undefined` as the first member, and an optional `any` as the second member:

```typescript
const fetchData = async (): Promise<[Error | undefined, any?]> => {
  ...
```

This technique works, but it's a little cumbersome.

##### Option 2: Using `as const`

Instead of specifying a return type, the second solution is to use `as const` on the return values:

```typescript
import { Equal, Expect } from "@total-typescript/helpers";

const fetchData = async () => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")] as const; // added as const here
  }

  const data = await result.json();

  return [undefined, data] as const; // added as const here
};
```

With these changes in place, when we check the return type of `fetchData` in the `example` function, we can see that `error` is inferred as `Error | undefined`, and `data` is `any`:

```tsx
const example = async () => {
  const [error, data] = await fetchData();
  ...

// hovering over error shows:
const error: Error | undefined

// hovering over data shows:
const data: any
```

Using `as const` sets a variable is read-only, which assists TypeScript in accurately assigning the type of tuples.

In the case of this challenge, without `as const`, TypeScript could misinterpret the return value as `Promise<any[]>`. However, by using `as const`, TypeScript correctly observes the return value as a tuple (`Promise<[string | undefined, any]>`).

Overall, both solutions offer unique benefits. The first technique provides a straightforward approach to type definition, while the second leverages TypeScript's inference capabilities.

#### Solution 2: Ensuring Literal Type Inference

The `as const` assertion can be used to solve this challenge in a couple of ways– one with immutable `type` properties, and one that infers the literal type of the `type` property while allowing for changes.

#### Option 1: Making the `type` Property Immutable

Recall that adding `as const` to an object makes all of its properties read-only. This means that the `type` property of the objects inside of `buttonsToChange` can't be changed, so TypeScript will allow for the call to `modifyButtons`:

```typescript
const buttonsToChange = [
  {
    type: "button",
  } as const,
  {
    type: "submit",
  } as const,
];

// hovering over buttonsToChange shows:
const buttonsToChange: (
  | {
      readonly type: "button";
    }
  | {
      readonly type: "submit";
    }
)[];
```

#### Option 2: Infer the Literal Type

By adding `as const` directly to the `type` property of each of the objects, TypeScript will infer the literal type:

```typescript
const buttonsToChange = [
  {
    type: "button" as const,
  },
  {
    type: "submit" as const,
  },
];

// hovering over buttonsToChange shows:
const buttonsToChange: (
  | {
      type: "button";
    }
  | {
      type: "submit";
    }
)[];
```

Because the `type` properties in `buttonsToChange` are being inferred as literal types instead of strings, TypeScript no longer shows an error when calling `modifyButtons`.

Note that because the `type` properties inside of `buttonsToChange` are not marked as `readonly`, we are able to change them. However, assigning a value that isn't one of the specified literals in `ButtonAttributes` will result in an error when it is passed to `modifyButtons`:

```tsx
buttonsToChange[0].type = "reset"; // No error
buttonsToChange[1].type = "panic"; // No error, but now can't be passed to modifyButtons
```

Similarly, if we were to add an additional object with a `type` property to `buttonsToChange` that isn't one of the specified literals in `ButtonAttributes`, TypeScript would show an error:

```tsx
const buttonsToChange = [
  {
    type: "button" as const,
  },
  {
    type: "submit" as const,
  },
  {
    type: "panic" as const,
};

modifyButtons(buttonsToChange); // red squiggly line under buttonsToChange

// hovering over buttonsToChange shows:
Argument of type '({ type: "button"; } | { type: "submit"; } | { type: "panic"; })[]' is not assignable to parameter of type 'ButtonAttributes[]'.
```

Both of these solutions show how useful `as const` can be for helping TypeScript give us the best type inference possible.

# 08. Classes

Classes are a like a blueprint for creating special objects. These objects can hold more than just data– they also hold behaviors and methods for interacting with the data they contain.

For every class you declare using the `class` keyword, you can create an instance of that class using the `new` keyword. TypeScript will enforce that the instance you create follows the structure and requirements of the class you've defined.

Let's build a class from scratch and see how it works.

## Creating a Class

To create a class, you use the `class` keyword followed by the name of the class. Similar to types and interfaces, the convention is to have the name in PascalCase, which means the first letter of each word in the name is capitalized.

We'll start creating the `Album` class in a similar way to how a type or interface is created:

```tsx
class Album {
  title: string; // red squiggly line under title
  artist: string; // red squiggly line under artist
  releaseYear: number; // red squiggly line under releaseYear
}
```

At this point, even though it looks like a type or interface, TypeScript gives an error for each property in the class:

```tsx
// hovering over title shows:

Property 'title' has no initializer and is not definitely assigned in the constructor.
```

In order to fix these errors, we need to add a constructor to the class. The constructor is a special method that runs when a new instance of the class is created. It's where you can set up the initial state of the object.

### Adding a Constructor

To start, we'll add a constructor that hardcodes values for the properties of the `Album` class:

```tsx
class Album {
  title: string;
  artist: string;
  releaseYear: number;

  constructor() {
    this.title = "Loop Finding Jazz Records";
    this.artist = "Jan Jelinek";
    this.releaseYear = 2001;
  }
}
```

Now, when we create a new instance of the `Album` class, we can access the properties and values we've set in the constructor:

```tsx
const loopFindingJazzRecords = new Album();

console.log(loopFindingJazzRecords.title); // Output: Loop Finding Jazz Records
```

The `new` keyword creates a new instance of the `Album` class, and the constructor sets the initial state of the object. However, because the properties are hardcoded, every instance of the `Album` class will have the same values.

Note that TypeScript is able to infer the types of the properties from the constructor, so we don't need to specify the types again. However, it's common to see the types specified in the class body as well since they act as a form of documentation for the class that's quick to read.

Let's update the constructor to accept arguments for the properties of the `Album` class.

### Adding Arguments to the Constructor

Update the constructor to accept an optional `opts` argument that includes the properties of the `Album` class:

```tsx
// inside the Album class
constructor(opts?: { title: string; artist: string; releaseYear: number }) {
  ...
```

Then inside of the body of the constructor, we'll use assign `this.title`, `this.artist`, and `this.releaseYear` to the values of the `opts` argument. If the values are not provided, we'll use default values:

```tsx
// inside the Album class
constructor(opts?: { title: string; artist: string; releaseYear: number }) {
  this.title = opts?.title || "Unknown Album";
  this.artist = opts?.artist || "Unknown Artist";
  this.releaseYear = opts?.releaseYear || 0;
}
```

The `this` keyword refers to the instance of the class, and it's used to access the properties and methods of the class.

Now, when we create a new instance of the `Album` class, we can pass an object with the properties we want to set. If we don't provide any values, the default values will be used:

```tsx
const loopFindingJazzRecords = new Album({
  title: "Loop Finding Jazz Records",
  artist: "Jan Jelinek",
  releaseYear: 2001,
});

console.log(loopFindingJazzRecords.title); // Output: Loop Finding Jazz Records

const unknownAlbum = new Album();

console.log(unknownAlbum.title); // Output: Unknown Album
```

Note that it's not required to follow this pattern of using an `opts` object in the constructor parameters. You can still specify the properties or use default values directly:

```tsx
constructor(title: string = "Unknown Album", artist: string = "Unknown Artist", releaseYear: number = 0) {
  ...
```

The style you use is up to you, but the optional `opts` object is nice since it allows an easy way to create a default class instance.

### Creating a Class Without a Constructor

Depending on the needs of your application, it's also possible to create a class without a constructor. In this case, the initial state of the class properties need to be initialized when they're declared:

```tsx
class Album {
  title = "Unknown Album";
  artist = "Unknown Artist";
  releaseYear = 0;
}
```

## Properties in Classes

Now that we've seen how to create a class and create new instances of it, let's look a bit closer at how properties work.

### Immutable `readonly` Properties

As we've seen with types and interfaces, the `readonly` keyword can be used to make a property immutable. This means that once the property is set, it cannot be changed.

In the case of our `Album` example, all of the existing properties could be marked as `readonly` since they're unlikely to change:

```tsx
class Album {
  readonly title: string;
  readonly artist: string;
  readonly releaseYear: number;

  constructor(opts?: { title: string; artist: string; releaseYear: number; }) {
    ...
}
```

In addition to `readonly`, there are some additional modifiers we can add to our class properties.

### `public` and `private` Properties

The `public` and `private` keywords are used to control the visibility and accessibility of class properties.

By default, properties are `public`, which means that they can be accessed from outside the class. We saw this when calling `console.log()` to print the title of an `Album` instance.

If we want to restrict access to certain properties, we can mark them as `private`. This means that they can only be accessed from within the class itself.

For example, say we want to add a `rating` property to the album class that will only be used inside of the class:

```tsx
class Album {
  readonly title: string;
  readonly artist: string;
  readonly releaseYear: number;
  private rating = 0;

  constructor(opts?: { title: string; artist: string; releaseYear: number; }) {
    ...
}
```

Now if we try to access the `rating` property from outside of the class, TypeScript will give us an error:

```tsx
console.log(loopFindingJazzRecords.rating); // red squiggly line under rating

// hovering over rating shows:
Property 'rating' is private and only accessible within class 'Album'.
```

For an alternative syntax, you can also use the `#` symbol to mark a property as private:

```tsx
class Album {
  #rating = 0;
```

The `#` syntax behaves the same as `private`, but it's a newer feature that's part of the ECMAScript standard. This means that it can be used in JavaScript as well as TypeScript, if you ever need to convert your TypeScript code to JavaScript.

Regardless of which syntax you use, the `rating` of an album is a private property that is encapsulated within the class. However, just because the `rating` property is private doesn't mean it can't be accessed or modified.

## Class Methods

Along with properties, classes can also contain methods. These special functions define the behaviors of a class and can be used to interact with both public and private properties.

### Implementing Class Methods

Let's add a `printAlbumInfo` method to the `Album` class that will log the album's title, artist, and release year.

There are a couple of techniques for adding methods to a class.

The first is to follow the same pattern as the constructor and directly add the method to the class body:

```tsx
// inside of the Album class
printAlbumInfo() {
  console.log(`${this.title} by ${this.artist}, released in ${this.releaseYear}.`);
}
```

Another option is to use an arrow function to define the method. This has the benefit of automatically binding `this` to the class instance, which can be useful in certain scenarios:

```tsx
// inside of the Album class
printAlbumInfo = () => {
  console.log(
    `${this.title} by ${this.artist}, released in ${this.releaseYear}.`,
  );
};
```

Once the `printAlbumInfo` method has been added, we can call it to log the album's information:

```tsx
loopFindingJazzRecords.printAlbumInfo();

// Output: Loop Finding Jazz Records by Jan Jelinek, released in 2001.
```

The technique you choose for adding a method to a class essentially boils down to your personal preference. Both are similar to write, and both provide access to `this`. It shouldn't be a concern most of the time, though the arrow function syntax is useful when using legacy React Class Components or passing methods as callbacks.

### Accessing & Modifying Properties

Earlier we added a private `rating` property to the `Album` class. In order to access and modify this property, we can add special methods called getters and setters to the class.

As the names suggest, a getter is used to retrieve the value of a property, and a setter is used to modify the value of a property.

#### Add a Getter

To add a getter for the `rating` property, we use the `get` keyword followed by a method named similarly to property we want to access:

```tsx
// inside the Album class
get currentRating() {
  return this.rating;
}
```

This getter method will allow for the `rating` property to be accessed and modified in the setter method.

#### Add a Setter

Similarly, we'll add a setter for the `rating` property using the `set` keyword. Additional logic can be used to validate the new value before it's assigned:

```tsx
// inside the Album class
set currentRating(newRating: number) {
  if (newRating >= 0 && newRating <= 10) {
    this.rating = newRating;
  } else {
    throw new Error("Invalid rating");
  }
}
```

#### Bringing it All Together

To bring our examples of class methods and getters and setters together, let's add a `printRating` method to the `Album` class that will log the album's rating:

```tsx
// inside the Album class
printRating() {
  console.log(`Rating: ${this.rating}`);
}
```

Now we can use `currentRating` to set a rating, then print it using the `printRating` method:

```tsx
loopFindingJazzRecords.currentRating = 9;
loopFindingJazzRecords.printRating(); // Output: Rating: 9
```

To recap, getters and setters allows us to control how properties are accessed and modified within a class. Without using these methods, we would have to make the `rating` property public. This would allow it to be accessed and modified from outside of the class without any validation:

```tsx
// imagine if the rating property was public
loopFindingJazzRecords.rating = 999; // No error
```

Being smart about using `readonly` and `private` properties along with getters and setters can help you ensure that your class instances are used correctly.

## Class Inheritance

Similar to how we can extend types and interfaces, we can also extend classes in TypeScript. This allows you to create a hierarchy of classes that can inherit properties and methods from one another, making your code more organized and reusable.

For this example, we'll go back to our basic `Album` class that will act as our base class:

```typescript
class Album {
  title: string;
  artist: string;
  releaseYear: number;

  constructor(opts?: { title: string; artist: string; releaseYear: number }) {
    this.title = title;
    this.artist = artist;
    this.releaseYear = releaseYear;
  }

  displayInfo() {
    console.log(
      `${this.title} by ${this.artist}, released in ${this.releaseYear}.`,
    );
  }
}
```

The goal is to create a `SpecialEditionAlbum` class that extends the `Album` class and adds a `bonusTracks` property.

### Extending a Class

The first step is to use the `extends` keyword to create the `SpecialEditionAlbum` class:

```tsx
class SpecialEditionAlbum extends Album {}
```

Once the `extends` keyword is added, any new properties or methods added to the `SpecialEditionAlbum` class will be in addition to what it inherits from the `Album` class. For example, we can add a `bonusTracks` property to the `SpecialEditionAlbum` class:

```tsx
class SpecialEditionAlbum extends Album {
  bonusTracks: string[];
}
```

Next, we need to add a constructor that includes all of the properties from the `Album` class as well as the `bonusTracks` property. There are a couple of important things to note about the constructor when extending a class.

First, the arguments to the constructor should match the shape used in the parent class. In this case, that's an `opts` object with the properties of the `Album` class along with the new `bonusTracks` property.

Second, we need to include a call to `super()`. This is a special method that calls the constructor of the parent class and sets up the properties it defines. This is crucial to ensure that the base properties are initialized properly. We'll pass in the `title`, `artist`, and `releaseYear` properties to the `super()` method and then set the `bonusTracks` property:

```tsx
class SpecialEditionAlbum extends Album {
  bonusTracks: string[];

  constructor(opts?: {
    title: string;
    artist: string;
    releaseYear: number;
    bonusTracks: string[];
  }) {
    super(opts.title, opts.artist, opts.releaseYear);
    this.bonusTracks = opts.bonusTracks;
  }
}
```

Now that we have the `SpecialEditionAlbum` class set up, we can create a new instance similarly to how we would with the `Album` class:

```tsx
const plasticOnoBandSpecialEdition = new SpecialEditionAlbum({
  title: "Plastic Ono Band",
  artist: "John Lennon",
  releaseYear: 2000,
  bonusTracks: ["Power to the People", "Do the Oz"],
});
```

While this example only added a single property, you can imagine how following the pattern of extending a base class can be useful for creating a hierarchy of classes with shared properties and methods.

## Types & Interfaces with Classes

There are several ways that types and interfaces can be used in conjunction with classes to enforce structure and reduce repetition. Classes can even be used as types themselves!

### Types and Interfaces as Class Contracts

For situations where you want to enforce that a class adheres to a specific structure, you can use an interface or a type as a contract. If a class doesn't adhere to the contract, TypeScript will give an error.

The `SpecialEditionAlbum` class we created in the previous example adds a `bonusTracks` property to the `Album` class, but there is no `trackList` property for the regular `Album` class.

Let's create an interface to enforce that any class that implements it must have a `trackList` property.

Following the Hungarian naming convention, the interface will be named `IAlbum` and include properties for the `title`, `artist`, `releaseYear`, and `trackList` properties:

```tsx
interface IAlbum {
  title: string;
  artist: string;
  releaseYear: number;
  trackList: string[];
}
```

Note that the `I` prefix is used to indicate an interface, while a `T` indicates a type. It isn't required to use these prefixes, but it's a common convention and makes it more clear what the interface will be used for when reading the code.

With the interface created, we can associate it with the `Album` class.

#### The `implements` Keyword

The `implements` keyword is used to tell TypeScript which type or interface a class should adhere to. In this case, we'll use it to ensure that the `Album` class follows the structure of the `IAlbum` interface:

```tsx
class Album implements IAlbum {
  // red squiggly line under Album
  title: string;
  artist: string;
  releaseYear: number;

  constructor(opts?: { title: string; artist: string; releaseYear: number }) {
    this.title = opts.title;
    this.artist = opts.artist;
    this.releaseYear = opts.releaseYear;
  }
}
```

Because the `trackList` property is missing from the `Album` class, TypeScript now gives us an error. In order to fix it, the `trackList` property needs to be added to the `Album` class. Once the property is added, we could update the interface or set up getters and setters accordingly:

```tsx
class Album implements IAlbum {
  title: string;
  artist: string;
  releaseYear: number;
  trackList: string[] = [];

  constructor(opts?: { title: string, artist: string, releaseYear: number, trackList: string[] }) {
    this.title = opts.title;
    this.artist = opts.artist;
    this.releaseYear = opts.releaseYear;
    this.trackList = opts.trackList;
  }

  ...
}
```

### Types & Interfaces for Class Types

To save time when working with constructors or other class methods, you can use a type or interface to define the shape of the arguments that will be passed to the class.

For example, we could use the `IAlbum` interface to define the shape of the `opts` argument in the `Album` class:

```tsx
class Album {
  title: string;
  artist: string;
  releaseYear: number;
  trackList: string[] = [];

  constructor(opts: IAlbum) {
    this.title = opts.title;
    this.artist = opts.artist;
    this.releaseYear = opts.releaseYear;
    this.trackList = opts.trackList;
  }
}
```

We could also intersect `IAlbum` with the additional `bonusTracks` property for the extended `SpecialEditionAlbum` class:

```tsx
class SpecialEditionAlbum extends Album {
  bonusTracks: string[];

  constructor(opts: IAlbum & { bonusTracks: string[] }) {
    super(opts);
    this.bonusTracks = opts.bonusTracks;
  }
}
```

### Using a Class as a Type

An interesting property of classes in TypeScript is that they can be used as types for variables and function parameters. The syntax is similar to how you would use any other type or interface.

In this case, we'll use the `SpecialEditionAlbum` class to type the `album` parameter of a `printBonusInfo` function:

```tsx
function printBonusInfo(album: SpecialEditionAlbum) {
  const bonusTrackCount = album.bonusTracks.length;
  console.log(`${album.title} has ${bonusTrackCount} bonus tracks.`);
}
```

We can then call the function and pass in an instance of the `SpecialEditionAlbum` class:

```tsx
printBonusInfo(plasticOnoBandSpecialEdition);

// Output: Plastic Ono Band has 2 bonus tracks.
```

While using a class as a type is possible, it's a much more common pattern to require classes to implement a specific interface.

## Exercises

### Exercise 1: Creating a Class

Here we have a class called `CanvasNode` that currently functions identically to an empty object:

```typescript
class CanvasNode {}
```

Inside of a test case, we instantiate the class by calling `new CanvasNode()`.

However, have some errors since we expect it to house two properties, specifically `x` and `y`, each with a default value of `0`:

```typescript
it("Should store some basic properties", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0); // red squiggly line under x
  expect(canvasNode.y).toEqual(0); // red squiggly line under y

  // @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;
});
```

As seen from the `@ts-expect-error` directives, we also expect these properties to be readonly.

Your challenge is to implement the `CanvasNode` class to satisfy these requirements. For extra practice, solve the challenge with and without the use of a constructor.

### Exercise 2: Implementing Class Methods

In this exercise, we've simplified our `CanvasNode` class so that it no longer has read-only properties:

```typescript
class CanvasNode {
  x = 0;
  y = 0;
}
```

There is a test case for being able to move the `CanvasNode` object to a new location:

```typescript
it("Should be able to move to a new location", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  canvasNode.move(10, 20); // red squiggly line under move

  expect(canvasNode.x).toEqual(10);
  expect(canvasNode.y).toEqual(20);
});
```

Currently, there is an error under the `move` method call because the `CanvasNode` class does not have a `move` method.

Your task is to add a `move` method to the `CanvasNode` class that will update the `x` and `y` properties to the new location.

### Exercise 3: Implement a Getter

Let's continue working with the `CanvasNode` class, which now has a constructor that accepts an optional argument, renamed to `position`. This `position` is an object that replaces the individual `x` and `y` we had before:

```tsx
class CanvasNode {
  x: number;
  y: number;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

In these test cases, there are errors accessing the `position` property since it is not currently a property of the `CanvasNode` class:

```typescript
it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.position).toEqual({ x: 0, y: 0 }); // red squiggly line under position

  canvasNode.move(10, 20);

  expect(canvasNode.position).toEqual({ x: 10, y: 20 }); // red squiggly line under position
});

it("Should be able to receive an initial position", () => {
  const canvasNode = new CanvasNode({
    x: 10,
    y: 20,
  });

  expect(canvasNode.position).toEqual({ x: 10, y: 20 }); // red squiggly line under position
});
```

Your task is to update the `CanvasNode` class to include a `position` getter that will allow for the test cases to pass.

### Exercise 4: Implement a Setter

The `CanvasNode` class has been updated so that `x` and `y` are now private properties:

```tsx
class CanvasNode {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  // your `position` getter method here

  // move method as before
}
```

The `#` in front of the `x` and `y` properties means they are `readonly` and can't be modified directly outside of the class. In addition, when a getter is present without a setter, its property will also be treated as `readonly`, as seen in this test case:

```typescript
canvasNode.position = { x: 10, y: 20 }; // red squiggly line under position

// hovering over position shows:
Cannot assign to 'position' because it is a read-only property.
```

Your task is to write a setter for the `position` property that will allow for the test case to pass.

### Exercise 5: Extending a Class

Here we have a more complex version of the `CanvasNode` class.

In addition to the `x` and `y` properties, the class now has a `viewMode` property that is typed as `ViewMode` which can be set to `hidden`, `visible`, or `selected`:

```typescript
type ViewMode = "hidden" | "visible" | "selected";

class CanvasNode {
  x = 0;
  y = 0;
  viewMode: ViewMode = "visible";

  constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
    this.x = options?.x ?? 0;
    this.y = options?.y ?? 0;
    this.viewMode = options?.viewMode ?? "visible";
  }

  /* getter, setter, and move methods as before */
```

Imagine if our application had a `Shape` class that only needed the `x` and `y` properties and the ability to move around. It wouldn't need the `viewMode` property or the logic related to it.

Your task is to refactor the `CanvasNode` class to split the `x` and `y` properties into a separate class called `Shape`. Then, the `CanvasNode` class should extend the `Shape` class, adding the `viewMode` property and the logic related to it.

### Solution 1: Creating a Class

Here's an example of a `CanvasNode` class with a constructor that meets the requirements:

```typescript
class CanvasNode {
  readonly x: number;
  readonly y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
}
```

Without a constructor, the `CanvasNode` class can be implemented by assigning the properties directly:

```typescript
class CanvasNode {
  readonly x = 0;
  readonly y = 0;
}
```

### Solution 2: Implementing Class Methods

The `move` method can be implemented either as a regular method or as an arrow function:

Here's the regular method:

```typescript
class CanvasNode {
  x = 0;
  y = 0;

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

And the arrow function:

```typescript
class CanvasNode {
  x = 0;
  y = 0;

  move = (x: number, y: number) => {
    this.x = x;
    this.y = y;
  };
}
```

Note that these solutions did not use a constructor, but still satisfy the requirements of the test case.

### Solution 3: Implement a Getter

Here's how the `CanvasNode` class can be updated to include a getter for the `position` property:

```typescript
class CanvasNode {
  x: number;
  y: number;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get position() {
    return { x: this.x, y: this.y };
  }
}
```

With the getter in place, the test cases will pass.

Remember, when using a getter, you can access the property as if it were a regular property on the class instance:

```typescript
const canvasNode = new CanvasNode();
console.log(canvasNode.position.x); // 0
console.log(canvasNode.position.y); // 0
```

### Solution 4: Implement a Setter

Here's how a `position` setter can be added to the `CanvasNode` class:

```typescript
// inside the CanvasNode class
set position(pos) {
  this.x = pos.x;
  this.y = pos.y;
}
```

Note that we don't have to add a type to the `pos` parameter since TypeScript is smart enough to infer it based on the getter's return type.

### Solution 5: Extending a Class

The new `Shape` class would look very similar to the original `CanvasNode` class:

```tsx
class Shape {
  #x: number;
  #y: number;

  constructor(options?: { x: number; y: number }) {
    this.#x = options?.x ?? 0;
    this.#y = options?.y ?? 0;
  }

  // position getter and setter methods

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
```

The `CanvasNode` class would then extend the `Shape` class and add the `viewMode` property. The constructor would also be updated to accept the `viewMode` and call `super()` to pass the `x` and `y` properties to the `Shape` class:

```tsx
class CanvasNode extends Shape {
  #viewMode: ViewMode;

  constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
    super(options);
    this.#viewMode = options?.viewMode ?? "visible";
  }
}
```
