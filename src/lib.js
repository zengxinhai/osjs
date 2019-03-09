const zxh = function() {
  const state = {};
  const stateMap = {};

  const findAllElementWithDataAttribute = (attributeValue) => {
    return  document.querySelectorAll('[text=' + attributeValue + ']');
  }

  return {
    register: (attributeValue) => {
      Object.defineProperty(state, attributeValue, { 
        set: (val) => {
          const elements = findAllElementWithDataAttribute(attributeValue);
          stateMap.time = val;
          for (const element of elements) {
            element.innerText = val;
          }
        },
        get: () => {
          return stateMap.time;
        },
      });
    },
    setState: (key, val) => {
      state[key] = val;
    },
    getState: (key) => {
      return stateMap[key];
    }
  }
}();

export default zxh;
