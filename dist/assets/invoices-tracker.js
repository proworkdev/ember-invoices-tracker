'use strict';



;define("invoices-tracker/app", ["exports", "invoices-tracker/resolver", "ember-load-initializers", "invoices-tracker/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("invoices-tracker/components/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    repo: Ember.inject.service(),
    showPopupName: 'Add Invoice',
    actions: {}
  });

  _exports.default = _default;
});
;define("invoices-tracker/components/invoice-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    repo: Ember.inject.service(),
    showPopupName: 'Add Invoice',
    actions: {
      showPopup(name, item) {
        this.showPopup(name, item);
      },

      removeInvoice(item) {
        this.repo.delete(item);
      }

    }
  });

  _exports.default = _default;
});
;define("invoices-tracker/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("invoices-tracker/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    repo: Ember.inject.service(),
    showPopupName: 'Add Invoice',
    actions: {
      createInvoice() {
        const date = this.get('dateInput');
        const amount = this.get('amountInput');
        const ID = this.get('IDInput');

        if (!Ember.isBlank(date) && !Ember.isBlank(amount)) {
          if (Ember.isBlank(ID)) {
            this.repo.add({
              invoiceID: "INV" + Math.floor(Math.random() * 90000) + 10000,
              completed: false,
              date: date,
              amount: amount
            });
          } else {}

          $("#add-edit-invoice").modal('toggle');
        }
      },

      showPopup(name, {
        date = '',
        amount = '',
        id = ''
      }) {
        this.set('dateInput', date);
        this.set('amountInput', amount);
        this.set('IDInput', id);
        this.set('showPopupName', name); // eslint-disable-next-line ember/no-global-jquery

        $("#add-edit-invoice").modal('toggle');
      }

    }
  });

  _exports.default = _default;
});
;define("invoices-tracker/helpers/app-version", ["exports", "invoices-tracker/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("invoices-tracker/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("invoices-tracker/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("invoices-tracker/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "invoices-tracker/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("invoices-tracker/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("invoices-tracker/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("invoices-tracker/initializers/export-application-global", ["exports", "invoices-tracker/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("invoices-tracker/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("invoices-tracker/models/invoice", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    invoiceID: _emberData.default.attr('string'),
    date: _emberData.default.attr('string'),
    amount: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("invoices-tracker/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("invoices-tracker/router", ["exports", "invoices-tracker/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;define("invoices-tracker/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    repo: Ember.inject.service(),

    model() {
      return this.repo.findAll();
    }

  });

  _exports.default = _default;
});
;define("invoices-tracker/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("invoices-tracker/services/repo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    lastId: 0,
    data: null,

    findAll() {
      return this.data || this.set('data', JSON.parse(window.localStorage.getItem('invoices') || '[]'));
    },

    add(attrs) {
      let invoice = Object.assign({
        id: this.incrementProperty('lastId')
      }, attrs);
      this.data.pushObject(invoice);
      this.persist();
      return invoice;
    },

    delete(invoice) {
      this.data.removeObject(invoice);
      this.persist();
    },

    updateAll(data) {
      this.data = data;
      console.log(this.data);
      this.persist();
      return data;
    },

    persist() {
      window.localStorage.setItem('invoices', JSON.stringify(this.data));
    }

  });

  _exports.default = _default;
});
;define("invoices-tracker/templates/active", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tflYRlrn",
    "block": "{\"symbols\":[],\"statements\":[[1,[29,\"invoice-list\",null,[[\"invoices\"],[[25,[\"invoices\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-tracker/templates/active.hbs"
    }
  });

  _exports.default = _default;
});
;define("invoices-tracker/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "u5wQuemE",
    "block": "{\"symbols\":[],\"statements\":[[1,[29,\"invoice-list\",null,[[\"invoices\",\"showPopup\"],[[25,[\"model\"]],[29,\"action\",[[24,0,[]],\"showPopup\"],null]]]],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"modal fade\"],[11,\"id\",\"add-edit-invoice\"],[11,\"tabindex\",\"-1\"],[11,\"role\",\"dialog\"],[11,\"aria-labelledby\",\"exampleModalLabel\"],[11,\"aria-hidden\",\"true\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"modal-dialog\"],[11,\"role\",\"document\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"modal-content popup-box\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"modal-header\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"modal-title\"],[11,\"id\",\"exampleModalLabel\"],[9],[1,[23,\"showPopupName\"],false],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"close\"],[11,\"data-dismiss\",\"modal\"],[11,\"aria-label\",\"Close\"],[9],[0,\"\\n          \"],[7,\"span\"],[11,\"aria-hidden\",\"true\"],[9],[0,\"×\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"modal-body\"],[9],[0,\"\\n        \"],[1,[29,\"input\",null,[[\"type\",\"value\"],[\"hidden\",[25,[\"IDInput\"]]]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"input-form\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"label\"],[9],[0,\"\\n            Date\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-field\"],[9],[0,\"\\n            \"],[1,[29,\"input\",null,[[\"type\",\"value\",\"placeholder\",\"class\"],[\"date\",[25,[\"dateInput\"]],\"Enter Date\",\"form-control\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"input-form\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"label\"],[9],[0,\"\\n            Amount\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-field\"],[9],[0,\"\\n            \"],[1,[29,\"input\",null,[[\"type\",\"value\",\"placeholder\",\"class\"],[\"number\",[25,[\"amountInput\"]],\"Enter Amount\",\"form-control\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"modal-footer\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"btn close-btn\"],[11,\"data-dismiss\",\"modal\"],[9],[0,\"Close\"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"javascript:void(0);\"],[11,\"class\",\"btn save-btn\"],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"createInvoice\"],null]],[9],[0,\"Save changes\"],[10],[0,\"\\n      \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-tracker/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("invoices-tracker/templates/components/invoice-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "M39hDLMw",
    "block": "{\"symbols\":[\"invoice\"],\"statements\":[[7,\"div\"],[11,\"class\",\"main-panel\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"top-bar\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"right-actions\"],[9],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n\"],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"javascript:void(0);\"],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"showPopup\",\"Add Invoice\"],null]],[9],[0,\"Add\"],[10],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[25,[\"invoices\",\"length\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[7,\"div\"],[11,\"class\",\"listing-box\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[7,\"div\"],[11,\"class\",\"top-heading\"],[9],[0,\"Invoices List\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\"],[7,\"div\"],[11,\"class\",\"table-list table-overflow table-shadowsoverflow\"],[9],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[7,\"table\"],[11,\"class\",\"table table-nowhite-space table-shadows table-responsive\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"thead\"],[11,\"class\",\"thead-dark\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"tr\"],[9],[0,\"\\n\"],[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"th\"],[9],[0,\"Invoice No.\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"th\"],[9],[0,\"Date\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"th\"],[9],[0,\"Amount\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"th\"],[9],[0,\"Actions\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[25,[\"invoices\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"tr\"],[9],[0,\"\\n\"],[0,\"\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"td\"],[9],[1,[24,1,[\"invoiceID\"]],false],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"td\"],[9],[1,[24,1,[\"date\"]],false],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"td\"],[9],[0,\"$ \"],[1,[24,1,[\"amount\"]],false],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"td\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"ul\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"li\"],[9],[7,\"a\"],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"showPopup\",\"Edit Invoice\",[24,1,[]]],null]],[11,\"href\",\"javascript:void(0);\"],[11,\"class\",\"edit-btn\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-pencil\"],[11,\"aria-hidden\",\"true\"],[9],[10],[10],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[7,\"li\"],[9],[7,\"a\"],[12,\"onclick\",[29,\"action\",[[24,0,[]],\"removeInvoice\",[24,1,[]]],null]],[11,\"href\",\"javascript:void(0);\"],[11,\"class\",\"delete\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-trash-o\"],[11,\"aria-hidden\",\"true\"],[9],[10],[10],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\\t\\t\"],[10],[0,\"\\n\\t\\t\\t\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-tracker/templates/components/invoice-list.hbs"
    }
  });

  _exports.default = _default;
});
;define("invoices-tracker/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tqPlcDbT",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[25,[\"model\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[1,[29,\"invoice-list\",null,[[\"invoices\"],[[25,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "invoices-tracker/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('invoices-tracker/config/environment', [], function() {
  var prefix = 'invoices-tracker';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("invoices-tracker/app")["default"].create({"name":"invoices-tracker","version":"0.0.0+62cce0c5"});
          }
        
//# sourceMappingURL=invoices-tracker.map
