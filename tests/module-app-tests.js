(() => {
  'use strict';

  const path = require('path');
  const chai = require('chai');
  const chaiAsPromised = require('chai-as-promised');
  const MessageCenter = require('./mocks/message-center');
  const HelperApi = require('./mocks/helper-api');
  const KeyValueService = require('./mocks/key-value-service');
  const KeyValueManager = require('./mocks/key-value-manager');

  global.helper = {};
  global.helper.BaseHelperApi = HelperApi;
  global.helper.KeyValueService = KeyValueService;
  global.helper.KeyValueManager = KeyValueManager;

  chai.use(chaiAsPromised);

  describe('ModuleApp', () => {
    let messageCenter = null;
    beforeEach('Create message center', () => {
      messageCenter = new MessageCenter();
    });

    let moduleApp = null;
    beforeEach('Get module app', () => {
      moduleApp = require(path.resolve(__dirname, '..'));
    });

    afterEach('Clean up', () => {
      messageCenter = null;
      moduleApp = null;
      HelperApi.mockCleanUp();
    });

    describe('load', () => {
      it('should load', () => {
        moduleApp.loaded = true;
        return moduleApp.load(messageCenter);
      });
    });

    describe('unload', () => {
      it('should unload', () => {
        moduleApp.unloaded = true;
        return moduleApp.load(messageCenter)
        .then(() => moduleApp.unload());
      });
    });
  });
})();
