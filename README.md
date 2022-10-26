# Wrapping Our Minds Around Closure
Intro to Closure via [The Good Parts of Javascript and the Web by Douglas Crockford](https://frontendmasters.com/courses/good-parts-javascript-web/)

1. `$ git clone https://github.com/michaelwehrley/Wrapping-Our-Minds-Around-Closure.git`

2. `$ cd Wrapping-Our-Minds-Around-Closure`

3. In your browser, visit `file:///path-to-this-file/Wrapping-Our-Minds-Around-Closure/index.html`

4. You should see an `h1` reading "Wrapping Our Minds Around Closure"

<img width="1005" alt="Screen Shot 2022-10-26 at 9 41 41 AM" src="https://user-images.githubusercontent.com/526136/198058140-4462bc91-dbcf-40d9-8f26-78b79d9716e4.png">

5. Open the `index.js` to write your functions (via `subl .` etc).  The first function `identity` is defined, but the implementation is not completed yet - that is your first task.

## Resources: 
* Frontend Masters: [The Good Parts of Javascript and the Web by Douglas Crockford](https://frontendmasters.com/courses/good-parts-javascript-web/)
* Wiki: [Douglas_Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford)
* Douglas Crockford's website: https://www.crockford.com/alphabet.html
* Kyle Simpson's [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

## Our Goal Primary Goal

Our goal is to write a *higher-order function* that has access to the declaration context's scope (i.e., *closure*):

### Higher Order Functions and Closure and Our Work

* `useMemo` & `useContext`
* `connect`

<img width="760" alt="Screen Shot 2022-10-26 at 10 03 11 AM" src="https://user-images.githubusercontent.com/526136/198063085-d2743651-045c-4745-a866-d9fdd949d9ea.png">

**Higher-Order Functions:** are functions that _**receive**_ one more more functions as parameter(s) and _**return**_ a function(s) as a result.

**Closure:** [Closure gives you access to an outer function's scope from an inner function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) or [You Don't Know JS - scopes and closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md)

```js
var addf = liftf(add);

addf(3)(4) // 7
```

## Problems

1. `identity(3) // 3`

2. `add(3, 4) // 7`

3. `sub(3, 4) // -1`

4. `mul(3, 4) // 12`

5. `identityf`
```js
var three = identityf(3)

three() // 3
```
6. `addf`
```js
addf(3)(4) // 7
```

7. `liftf`
```js
var addf = liftf(add);

addf(3)(4) // 7
liftf(mul)(5)(6) // 30 
```
