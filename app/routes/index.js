import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: '123',
        colours: [
          {
            id: 1,
            colour: '#aaa'
          },
          {
            id: 2,
            colour: '#abc'
          },
          {
            id: 2,
            colour: '#efee12'
          }
        ]
       },
      {
        id: '234',
        colours: [
          {
            id: 1,
            colour: '#fba'
          },
          {
            id: 2,
            colour: '#abc'
          }
        ]
       },
      {
        id: '456',
        colours: [
          {
            id: 1,
            colour: '#acb'
          },
          {
            id: 2,
            colour: '#abc'
          }
        ]
       }
    ];
  }
});
