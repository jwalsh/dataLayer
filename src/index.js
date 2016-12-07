export class dataLayer extends Array {

  constructor(data) {
    super();
    this.data = this.data ? this.data.concat(data) : [].push(data);
  }
}

// Object.defineProperty(
//   digitalData,
//   'push', {
//     configurable: false,
//     enumerable: false,
//     writable: false,
//     value: () => { }
//   });
