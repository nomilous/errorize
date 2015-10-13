module.exports = function(obj) {
  
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
