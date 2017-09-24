(() => {
  'use strict';

  const path = require('path');
  const HelperApi = global.helper.BaseHelperApi;

  const FILEPATH_SERVICE = path.resolve(__dirname, './lib/persistent-key-value-service');
  const FILEPATH_MANAGER = path.resolve(__dirname, './lib/persistent-key-value-manager');

  class ModuleApp {
    load(messageCenter) {
      const api = new HelperApi(messageCenter);
      return api.add({name: 'PersistentKeyValueServer', filepath: FILEPATH_SERVICE})
      .then(() => api.add({name: 'PersistentKeyValueManager', filepath: FILEPATH_MANAGER}));
    }

    unload() {
      return Promise.resolve();
    }
  }

  module.exports = new ModuleApp();
})();
