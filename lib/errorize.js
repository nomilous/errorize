module.exports = function(obj) {

  if (obj instanceof Error) return obj;

  if (obj instanceof Function) return module.exports.decorate(obj);

  return module.exports.convert(obj);

}

module.exports.decorate = function(fn) {

  return function() {

    var args = Array.prototype.slice.call(arguments);

    args[0] = module.exports.convert(args[0]);

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

