<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Answer is B, let greeting;: This line declares a variable named greeting using the let keyword. It is undefined because it value not assign.

greetign = {};: This Line is wrong because in the question you type greeting so its also wrong.

console.log(greetign);: greetign is not defined so I cann't get value, Then it give me the error. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The function sum takes two parameters, a and b. When you call sum(1, "2"), JavaScript performs type coercion to convert the number 1 and the string "2" into a common type for addition. It converts 1 to a string and then concatenates them, resulting in the string "12" as the return value.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The code first creates an array food with four emoji elements. Then, it creates an object info with a property favoriteFood that initially references the first element of the food array ("🍕"). Later, it updates info.favoriteFood to "🍝", but this does not affect the original food array. So, when you log food, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The sayHi function expects one argument name, but when you call sayHi() without passing an argument, it will use undefined as the value of name. Therefore, the function returns "Hi there, undefined", and that's what gets logged.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The code initializes a variable count to 0 and an array nums with four numbers. It then uses forEach to iterate through the nums array. The if (num) condition checks if the num is truthy (not equal to 0). For each truthy num, count is incremented by 1. Since three out of the four numbers in the array are truthy (1, 2, and 3), count becomes 3, and that's what gets logged. So, the answer is 3.</i>

</p>
</details>
