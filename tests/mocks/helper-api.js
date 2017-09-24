(() => {
  'use strict';

  const sAdded = new Map();

  class MockHelperApi {
    constructor() {
    }

    add({name, filepath}) {
      global.helper[name] = require(filepath);
      sAdded.set(name, true);
      return Promise.resolve();
    }

    static mockCleanUp() {
      sAdded.forEach((filepath, name) => {
        delete global.helper[name];
      });
    }
  }

  module.exports = MockHelperApi;
})();
