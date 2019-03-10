// const zxh = function() {
//   const state = {};
//   const stateMap = {};

//   const findAllElementWithDataAttribute = (attributeValue) => {
//     return  document.querySelectorAll('[text=' + attributeValue + ']');
//   }

//   return {
//     register: (attributeValue) => {
//       Object.defineProperty(state, attributeValue, { 
//         set: (val) => {
//           const elements = findAllElementWithDataAttribute(attributeValue);
//           stateMap.time = val;
//           for (const element of elements) {
//             element.innerText = val;
//           }
//         },
//         get: () => {
//           return stateMap.time;
//         },
//       });
//     },
//     setState: (key, val) => {
//       state[key] = val;
//     },
//     getState: (key) => {
//       return stateMap[key];
//     }
//   }
// }();

// export default zxh;

class Zxh {
  constructor(private state: any, private stateMap: any) {
    this.state = state;
    this.stateMap = stateMap;
  }

  public register(attributeValue) {
    Object.defineProperty(this.state, attributeValue, { 
      set: (val) => {
        const elements = this.findAllElementWithDataAttribute(attributeValue);
        this.stateMap.time = val;
        for (const element of elements) {
          element.textContent = val;
        }
      },
      get: () => {
        return this.stateMap.time;
      },
    });
  };

  public setState(key, val) {
    this.state[key] = val;
  };

  public getState(key) {
    return this.stateMap[key];
  }

  private findAllElementWithDataAttribute(attributeValue) {
    return  document.querySelectorAll('[text=' + attributeValue + ']');
  }

}

export default new Zxh({}, {});
