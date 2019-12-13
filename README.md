# Doubly Linked List

Javascript implementation of a doubly linked list data structure

## Install

### `npm install doubly-linked-list`

## Usage

```js
const DoublyLinkedList = require('doubly-linked-list');

// Create a new, empty list.
const list = new DoublyLinkedList();

// Insert value at the beginning of the list.
list.addFirst(1);

// Retrieve the first item of the list (without removing it).
const first = list.getFirst();

// Transform the linked list into an array.
const array = list.toArray();

// Remove the first item from the list.
const first = list.removeFirst();

// Remove the first occurrence the given value from the list.
// Returns true if an element was removed, false otherwise.
const wasRemoved = list.remove(1);
```

## Running the Tests

In the project directory:

### `npm install`

Install all the dependecies for the project.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Authors

* **Syed Muhammad Rizwan** - [syedmrizwan](https://github.com/syedmrizwan)