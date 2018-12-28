function index() {
  var arguments$1 = arguments;


  function statee(key, defaultValue) {
    if (!(key in statee))
      { throw new Error('Key ' + key + ' not defined') }

    return function (value) { return statee[key] = value; }
  }

  var values = {};
  var observer;

  var loop = function ( i ) {
    var group = arguments$1[i];
    if (typeof group === 'function')
      { observer = group; }

    var keys = Object.keys(group);
    keys.forEach(function (key) {
      var getter = Object.getOwnPropertyDescriptor(group, key).get;
      values[key] = group[key];
      Object.defineProperty(statee, key, {
        enumerable: true,
        get: getter || (function () { return values[key]; }),
        set: getter ? undefined : (function (value) {
          if (value === values[key])
            { return }
          keys.forEach(function (k) { return values[k] = group[k]; });
          values[key] = value;
          observer && observe(key, value);
        })
      });
    });
  };

  for (var i = 0; i < arguments.length; i++) loop( i );

  statee.toJSON = function () { return values; };
  return typeof Object.seal === 'function'
    ? Object.seal(statee)
    : statee
}

export default index;
//# sourceMappingURL=statee.esm.js.map
