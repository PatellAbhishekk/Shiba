JS is a `synchronous` single threaded programming language

`callback`: when a function takes in another function

getData(callback) -renderUI

getData(renderUI)

It may take some time for the data to arrive; it is possible that the data does not come at all. I need to show some UI error `(handling errors)`.

Promise we can handle `async` behaviour

We can make a network request using `fetch(URL)` ,fetch gives us a `Promise`.

To deal with promises we can use `.then()`

The data will be in the format: `JSON`. To read and understand it, we need to parse JSON back to JavaScript.
