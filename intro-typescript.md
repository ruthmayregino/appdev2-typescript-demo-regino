# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
This file uses literal types as an alternative to enums by restricting a variable to specific string values like 'admin', 'janitor', 'teacher', and 'student'. It ensures only valid roles can be assigned and used in functions.

## 07-custom-type-role.ts
This file introduces type aliases to define custom types like Role and User. It improves code readability and reusability, especially when the same type structure is used multiple times.

## 08-functions.ts
This file demonstrates function typing in TypeScript, including return types, void, and function types for callbacks. It also shows how to define methods inside objects with proper typing.

## 09-special-types.ts
This file focuses on special types like null and undefined. It shows how they can be assigned and combined with other types using union types.

## 10-form.html and 10-type-narrowing.ts
These files demonstrate type narrowing by checking if a DOM element exists before accessing its value. It prevents runtime errors by ensuring the element is not null.

## 11-optional.ts
This file shows how to use optional parameters and optional object properties. It also introduces the nullish coalescing operator (??) to handle null or undefined values safely.