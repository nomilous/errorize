var os = require('os');

module.exports = function(obj) {

  if (obj instanceof Error) return obj;

  if (obj instanceof Function) return module.exports.decorate(obj);

  return module.exports.convert(obj);

}

module.exports.decorate = function(fn) {

  return function() {

    var args = Array.prototype.slice.call(arguments);

    if (args[0]) args[0] = module.exports.convert(args[0]);

    return fn.apply(this, args);

  }

}

module.exports.convert = function(obj) {
  
  if (obj instanceof Error) return obj;

  var e = new Error();

  Object.defineProperty(e, 'message', {
    configurable: true,
    writable: true,
    value: obj.message || obj.toString()
  });

  Object.defineProperty(e, 'name', {
    configurable: true,
    writable: true,
    value: obj.name || 'Error'
  });

  if (typeof obj == 'object') {
    Object.keys(obj).forEach(function(key) {
      e[key] = obj[key];
    });
  }

  return e;
}


module.exports.encode = function(obj, depth) {

  if (!(obj instanceof Error)) return obj;

  var e = {};
  e.name = obj.name;
  e.message = obj.message;

  for (var key in obj) e[key] = obj[key];

  if (obj.stack && depth) {
    e.stack = obj.stack.split(os.EOL).slice(1, depth + 1)
    .map(function(line) {
      return line.trim();
    });
  }
  
  return e;
}
