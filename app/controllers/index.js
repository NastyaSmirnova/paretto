import Ember from 'ember';

export default Ember.Controller.extend({
  filterBy: 'date',
  filters: [
    {
      label: 'Latest',
      value: 'date'
    },
    {
      label: 'Favourites',
      value: 'pined'
    }
  ],
  changeFilter(filter) {
    this.set('filterBy', filter);
  }
});
