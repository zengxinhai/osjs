var zxh = function() {
  var state = {};
  var stateMap = {};

  function findAllElementWithDataAttribute(attributeValue) {
    var elements = document.querySelectorAll('[text=' + attributeValue + ']');
    return elements;
  }

  return {
    register: function(attributeValue) {
      Object.defineProperty(state, attributeValue, { 
        set: function(val) {
          var elements = findAllElementWithDataAttribute(attributeValue);
          stateMap.time = val;
          for (element of elements) {
            element.innerText = val;
          }
        },
        get: function() {
          return stateMap.time;
        },
      });
    },
    setState: function(key, val) {
      state[key] = val;
    },
    getState: function(key) {
      return stateMap[key];
    }
  }
}();
