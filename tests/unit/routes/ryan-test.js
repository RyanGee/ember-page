import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ryan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ryan');
    assert.ok(route);
  });
});
