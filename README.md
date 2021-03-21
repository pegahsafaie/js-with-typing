## Motivation
Add typescript to your projects? There are many good reasons why you might not be a fan: migration cost, additional transpiling step, or lack of knowledge.
On the other hand we cant overlook the advantages of typing like validation, problem detection at compile time and better debugging experience.
[This article](https://dev.to/puruvj/using-typescript-without-typescript-3pke) shows how the combination of VSCode + ESLint + **JSDOC** allows you to type your project without using typescript. I created this small JS sample project with a practical readme to play around with this concept.

What I like best about this approach is that you can gradually introduce typing into your project without the need for any extra transpilation step in build or configuration boilerplates in the project.

## Requirement
- VSCode IDE
- ESLint extension installed and enabled
- You must be familiar with JSDoc. Maybe you already used it but did not know its name ;)
- A little bit! understanding of typing

## Explain the project

#### What is our goal?
We have a small simple JS project and we want to add typing advantages to that without using typescript. These advantages are:

1. We want VSCode to show us intelligent code completion, hover info, and signature information.
2. We want to detect the potential bugs while writing the code, not during runtime.

#### What is our plan?
1. Review our JS code to find potential problems caused by lack of typings. 
2. Add JSDoc documentation to our JS files and enable the eslint plugin to see how that changes things. 
3. We will also go over some advanced typing features, such as custom types, imports and unions. Check out the source code for more examples of inheritance, declaration files and modifiers. 
4. Finally, we will talk about the challenges we might face using this approach.


**Start**  
Our project consists of a number of utils functions(left), and a main file(right) that uses them.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c3jms14w7zfg1nlowsvi.jpg)

See any problems? Yes! Did eslint or vsCode complain? Not yet!

![Weak JS typing issues](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0r9v1l10clpqfa3nep8r.jpg)

OK! time to fix them in two steps:
1. Adding JSDoc to the util methods.
2. Telling ESLint to be strict with the main.js file!


![Adding JSDoc to the util methods](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9fk1jbd7tisq13akwydt.jpg)

Still no errors from IDE or ESLint, but autocompleting works now.

Now add // @ts-check to the top of the main.js file and you should see errors appearing! Although `isPositive` doesn't report any errors, using autocomplete we can see the output which is a string and we can therefore avoid the bug.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/19w71i5tprg26gm8icly.jpg)

**Q**: Is it possible to define our own custom types? Sure we can, with @typedef annotations of JSDoc. Let's see how. 

- using `@typedef` we define a new type named `Animal` with two properties.
- using `@type` we assign this type to a variable.
![Define and use custom types](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qavkkw4e73jwy7rycxrh.jpg)

**Q**: Can we use the same type in multiple places? Like we use modules to organize our code? Yes! We can do it by using @import and here's how:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/am85d1wrd0bf2b262mog.jpg)

If someone changes the `race` property to `type` in the future, our JSCode annotations help him to see the side effect and fix it!
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/48f64vx6n32uwvpiyteg.jpg)

The `Animal` type can be defined once at the top of a file and be used many times there afterwards.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m65lek7dzgijnb82h2y5.jpg)



## The challenges of moving to JSDoc: 

Enough talking through the flowers. Things are not always so easy as they are discussed here.
**Learning Curve:** By complicated typings, you will still need to know about typing concepts and learn JSCode syntax.

**Organizing** : Organizing your JSDocs and avoiding duplication. (JSDoc can tie into the modules concept)
 
**maintenance**: Think of JSDoc as some meta data that needs maintenance. If people don't care, and no longer update it as they make changes, there is no benefit to that. Maybe you should include it in your MR process and ask reviewers to double check it.

## How to run the project

go to your project folder and run 

```bash

npm install

npm run build // build your project using rollup and put the bundle under the dist/cjs

node dist/cjs/index.js // execute the index.js using node

```

## Useful links:

JSDOC cheat sheet: https://devhints.io/jsdoc

Microsoft repo ts boilerplates for all different type of javascript projects: https://github.com/microsoft/TypeScriptSamples

https://www.mobiquity.com/insights/typescript-to-javascript-with-jsdoc-and-back

https://dev.to/puruvj/using-typescript-without-typescript-3pke