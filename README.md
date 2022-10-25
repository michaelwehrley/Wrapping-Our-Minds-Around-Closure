# Wrapping Our Minds Around Closure
Intro to Closure via [The Good Parts of Javascript and the Web by Douglas Crockford](https://frontendmasters.com/courses/good-parts-javascript-web/)

1. `$ git clone https://github.com/michaelwehrley/Wrapping-Our-Minds-Around-Closure.git`

2. `$ cd Wrapping-Our-Minds-Around-Closure`

3. In your browswer, visit `file:///path-to-this-file/Wrapping-Our-Minds-Around-Closure/index.html`

4. You should see an `h1` reading "Wrapping Our Minds Around Closure"

5. Open the `index.js` to write your functions (via `subl .` etc).  The first function `identity` is defined, but the implemention is not completed yet - that is your first task.

## Resources: 
* [The Good Parts of Javascript and the Web by Douglas Crockford](https://frontendmasters.com/courses/good-parts-javascript-web/)
* [Douglas_Crockford Wiki](https://en.wikipedia.org/wiki/Douglas_Crockford)
* Douglas Crockford's website: https://www.crockford.com/alphabet.html
* Kyle Simpson's [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

## Our Goal Primary Goal

Our goal is to write a *higher-order function* that has access to the declaration context's scope (i.e., *closure*):

### Higher Order Functions & Closure

**Higher-Order Functions:** are functions that _**receive**_ one more more functions as parameter(s) and _**return**_ a function(s) as a result.

**Closure:** Is when an expression has access to all the necessary variables it needs when evaluating. 

```js
var addf = liftf(add);

addf(3)(4) // 7
```

### Our Work:

* `useMemo` & `useContext`
* `connect`

```js
import { connect } from 'react-redux';

export default connect(mapStateToProps, mapDispatchToProps)(FooBarBaz);

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
