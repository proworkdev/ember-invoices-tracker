'use strict';

define("invoices-tracker/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/application.js should pass ESLint\n\n1:10 - \'computed\' is defined but never used. (no-unused-vars)\n1:20 - \'set\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('components/invoice-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/invoice-list.js should pass ESLint\n\n1:10 - \'computed\' is defined but never used. (no-unused-vars)\n1:20 - \'set\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n22:12 - Empty block statement. (no-empty)\n24:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n24:5 - \'$\' is not defined. (no-undef)\n34:4 - \'$\' is not defined. (no-undef)');
  });
  QUnit.test('models/invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/invoice.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('services/repo.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/repo.js should pass ESLint\n\n25:3 - Unexpected console statement. (no-console)');
  });
});
define("invoices-tracker/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('invoices-tracker/templates/active.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'invoices-tracker/templates/active.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('invoices-tracker/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'invoices-tracker/templates/application.hbs should pass TemplateLint.\n\ninvoices-tracker/templates/application.hbs\n  36:8  error  Incorrect indentation for `div` beginning at L6:C4. Expected `</div>` ending at L36:C8 to be at an indentation of 4 but was found at 2.  block-indentation\n');
  });
  QUnit.test('invoices-tracker/templates/components/invoice-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'invoices-tracker/templates/components/invoice-list.hbs should pass TemplateLint.\n\ninvoices-tracker/templates/components/invoice-list.hbs\n  13:2  error  Incorrect indentation for `{{#if}}` beginning at L13:C2. Expected `{{#if}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  14:3  error  Incorrect indentation for `<div>` beginning at L14:C3. Expected `<div>` to be at an indentation of 4 but was found at 3.  block-indentation\n  15:4  error  Incorrect indentation for `<div>` beginning at L15:C4. Expected `<div>` to be at an indentation of 5 but was found at 4.  block-indentation\n  17:6  error  Incorrect indentation for `<table>` beginning at L17:C6. Expected `<table>` to be at an indentation of 7 but was found at 6.  block-indentation\n  18:7  error  Incorrect indentation for `<thead>` beginning at L18:C7. Expected `<thead>` to be at an indentation of 8 but was found at 7.  block-indentation\n  28:7  error  Incorrect indentation for `<tbody>` beginning at L28:C7. Expected `<tbody>` to be at an indentation of 8 but was found at 7.  block-indentation\n  19:8  error  Incorrect indentation for `<tr>` beginning at L19:C8. Expected `<tr>` to be at an indentation of 9 but was found at 8.  block-indentation\n  20:9  error  Incorrect indentation for `{{! <th>#</th> }}` beginning at L20:C9. Expected `{{! <th>#</th> }}` to be at an indentation of 10 but was found at 9.  block-indentation\n  21:9  error  Incorrect indentation for `<th>` beginning at L21:C9. Expected `<th>` to be at an indentation of 10 but was found at 9.  block-indentation\n  22:9  error  Incorrect indentation for `<th>` beginning at L22:C9. Expected `<th>` to be at an indentation of 10 but was found at 9.  block-indentation\n  23:9  error  Incorrect indentation for `<th>` beginning at L23:C9. Expected `<th>` to be at an indentation of 10 but was found at 9.  block-indentation\n  24:9  error  Incorrect indentation for `<th>` beginning at L24:C9. Expected `<th>` to be at an indentation of 10 but was found at 9.  block-indentation\n  29:8  error  Incorrect indentation for `{{#each}}` beginning at L29:C8. Expected `{{#each}}` to be at an indentation of 9 but was found at 8.  block-indentation\n  42:18  error  Incorrect indentation for `each` beginning at L29:C8. Expected `{{/each}}` ending at L42:C18 to be at an indentation of 8 but was found at 9.  block-indentation\n  30:8  error  Incorrect indentation for `<tr>` beginning at L30:C8. Expected `<tr>` to be at an indentation of 10 but was found at 8.  block-indentation\n  31:9  error  Incorrect indentation for `{{! <td>{{invoice.id}}</td> }}` beginning at L31:C9. Expected `{{! <td>{{invoice.id}}</td> }}` to be at an indentation of 10 but was found at 9.  block-indentation\n  32:9  error  Incorrect indentation for `<td>` beginning at L32:C9. Expected `<td>` to be at an indentation of 10 but was found at 9.  block-indentation\n  33:9  error  Incorrect indentation for `<td>` beginning at L33:C9. Expected `<td>` to be at an indentation of 10 but was found at 9.  block-indentation\n  34:9  error  Incorrect indentation for `<td>` beginning at L34:C9. Expected `<td>` to be at an indentation of 10 but was found at 9.  block-indentation\n  35:9  error  Incorrect indentation for `<td>` beginning at L35:C9. Expected `<td>` to be at an indentation of 10 but was found at 9.  block-indentation\n  36:10  error  Incorrect indentation for `<ul>` beginning at L36:C10. Expected `<ul>` to be at an indentation of 11 but was found at 10.  block-indentation\n  37:11  error  Incorrect indentation for `<li>` beginning at L37:C11. Expected `<li>` to be at an indentation of 12 but was found at 11.  block-indentation\n  38:11  error  Incorrect indentation for `<li>` beginning at L38:C11. Expected `<li>` to be at an indentation of 12 but was found at 11.  block-indentation\n');
  });
  QUnit.test('invoices-tracker/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'invoices-tracker/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("invoices-tracker/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("invoices-tracker/tests/test-helper", ["invoices-tracker/app", "invoices-tracker/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('invoices-tracker/config/environment', [], function() {
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

require('invoices-tracker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
