import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ id: '123' }, { id: '234' }, { id: '456' }];
  }
});
