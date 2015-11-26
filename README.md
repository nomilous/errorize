[![Build Status](https://travis-ci.org/nomilous/errorize.svg)](https://travis-ci.org/nomilous/errorize)

# errorize

Ensure it is (or make it an) error.

Because some folks throw strings or other stuff.

`npm install errorize --save`

```javascript
var errorize = require('errorize');
```

__It returns the object passed as an error__

```javascript
var e = errorize(object);
```

__It preserves the object's properties into the error__

```javascript
var obj = {
  key: 'value'
};

var e = errorize(obj);

e.key == 'value'
```

__It decorates functions to ensure arg1 (if present) is an error__

```javascript

.catch(errorize(function(e) {}))

// or

functionWithCallback('args', errorize(function(e, result) {}))
```

__It can transform error to (json) serializable object__

```javascript

JSON.stringify(errorize.encode(e));

```

__It can include a partial stack in the translation__

```javascript

JSON.stringify(errorize.encode(e, 3));

```