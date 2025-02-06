# React Memory Leak with setInterval in useEffect

This repository demonstrates a common memory leak in React applications caused by the improper use of `setInterval` within the `useEffect` hook.  The bug involves failing to clear the interval when the component unmounts, leading to continued updates and memory consumption even after the component is no longer needed.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides the corrected implementation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the continuously incrementing counter.  Even if you navigate away from the component, the interval continues to run.

## Solution

The solution involves adding a cleanup function to the `useEffect` hook. This function uses `clearInterval` to stop the interval when the component unmounts. See `bugSolution.js` for the corrected implementation.

## Key Learning Points

* Always include a cleanup function in `useEffect` hooks that use asynchronous operations such as `setInterval` and `setTimeout`.
* Memory leaks can significantly impact performance and stability, so it's crucial to write clean and efficient code.