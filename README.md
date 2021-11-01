![](poster.png)
# Bootcamp - Strängar

Notera att många av funktionerna nedan kan användas i senare övningar.

## repeat
Skriv en funktion som tar en sträng och ett number som input och repeterar strängen så många gånger som talet som output.

```js
function repeat(text, repetitions){
  // Your Code
}
```

### Exempel
```javascript
let text = "hello";
let num = 3;
repeat(text, 3) // => "hellohellohello"
repeat("omg", 5) // => "omgomgomgomgomg"
```

## containsChar
Skriv en funktion som tar en sträng och ett tecken som input
och ger true eller false som output beroende på om tecknet finns i strängen.

```js
function containsChar(text, character){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
let char = "o"
containsChar(str, char) // => true
containsChar(str, "x") // => false
```

## indexOfChar
Skriv en funktion som tar en sträng och ett tecken som input
och ger positionen för det första förekomna tecknet som output och -1 om tecknet inte finns.

```js
function indexOfChar(text, character){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
let char = "o"
indexOfChar(str, char) // => 4
indexOfChar(str, "x") // => -1
```

## startsWith
Skriv in funktion som avgör om strängen börjar på tecknet eller inte.


```js
function startsWith(text, character){
  // Your Code
}
```
### Exempel
```js
let str = "Hello";
let char = "H";
startsWith(str, char); // => true
startsWith(str, "X"); // => false
```

## endsWith
Skriv in funktion som avgör om strängen slutar på tecknet eller inte.
```js
function endsWith(text, character){
  // Your Code
}
```
### Exempel
```js
let str = "Hello";
let char = "o";
endsWith(str, char); // => true
endsWith(str, "X"); // => false
```

## reverse
Skriv en funktion som tar en sträng som input
och ger en ny omvänd sträng som output.

```js
function reverse(text){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
reverse(str) // => "dlrow olleH"
reverse("Sponge-Bob") // =>  "boB-egnopS"
```

## removeChar
Skriv en funktion som tar en sträng och ett tecken som input
och ger en ny sträng som output där tecknet är borttaget från strängen.

Notera att du bara ska ta bort alla förekomster av enbart ett tecken.

```js
function removeChar(text, char){
  // Your Code
}
```
### Exempel
```javascript
let str = "Hello world"
let char = "o"
removeChar(str, char) // => "Hell wrld"
removeChar(str, " ") // =>  "Helloworld"
```



## replaceChar
Skriv en funktion som tar en sträng och två tecken som input
och ger en ny sträng som output där det ena tecknet ersätts med det andra i strängen.

Notera att du bara ska ta ersätta alla förekomster av enbart ett tecken.

```js
function replaceChar(text, source, dest){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
let char1 = "o"
let char2 = "y"
replaceChar(str, char1, char2) // => "Helly wyrld"
replaceChar(str, " ", "-") // =>  "Hello-world"
```

## substring
Skriv en funktion som tar en sträng och två tal som input,
och ger en ny sträng med alla tecken mellan talen.

```js
function substring(text, start, stop){
  // Your Code
}
```

### Exempel

```javascript
let str = "Hello world"
let start = 1
let stop = 4
substring(str, start, stop) // "ello"
substring(str, 0, 3) // Hell
```

## contains
Skriv en funktion som tar två strängar som input
och ger true eller false som output beroende på om den ena strängen innehåller den andra.

```js
function contains(str, otherString){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
let char = "world"
containsChar(str, char) // => true
containsChar(str, "omg") // => false
```

## remove
Skriv en funktion som tar två strängar som input
och ger en ny sträng som output där den ena strängen är borttagen från den första strängen.

```js
function remove(str, otherString){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
let char = "world"
removeChar(str, char) // => "Hello "
removeChar(str, "lo wo") // =>  "Helrld"
```

## replace
Skriv en funktion som tar en sträng och ytterligare två strängar som input
och ger en ny sträng som output där det ena tecknet ersätts med det andra i strängen.

```js
function replace(str, source, destination){
  // Your Code
}
```

### Exempel
```javascript
let str = "Hello world"
let char1 = "ello"
let char2 = "ail"
replace(str, char1, char2) // => "Hail world"
replace(str, "world", "Sponge-Bob") // =>  "Hello Sponge-Bob"
```

## encrypt
Skriv en funktion som gör om en sträng till rövarspråket

```js
function encrypt(str){
  // Your Code
}
```

### Exempel
```javascript
let str = "hej på dig"
encrypt(str) // => "hohejoj popå dodigog"
```

## decrypt
Skriv en funktion som gör om en sträng från rövarspråket till vanligt

```js
function decrypt(str){
  // Your Code
}
```

### Exempel
```javascript
let str = "hohejoj popå dodigog"
decrypt(str) // => "hej på dig"
```