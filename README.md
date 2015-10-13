[![Build Status](https://travis-ci.org/nomilous/errorize.svg)](https://travis-ci.org/nomilous/errorize)

# errorize

Ensure it is (or make it an) error.

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

e.key == 'value'l
```