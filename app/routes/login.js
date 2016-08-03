import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      let ctrl = this.get('controller');

      ctrl.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      let email = ctrl.get('emailAddress'),
          password = ctrl.get('password');

      Ember.Logger.log('Email: ', email);
      Ember.Logger.log('Password: ', password);

      // this.transitionTo('index');

      //     TODO call to /login
      //     let request = $.post("/login", this.getProperties("username", "password"));
      //     request.then(this.success.bind(this), this.failure.bind(this));
    }
  },

  success() {
    this.transitionTo('index');
  },

  failure() {
    this.set('isProcessing', false);
    this.set('loginFailed', true);
  },

  resetController(ctrl) {

    ctrl.setProperties({
      emailAddress: null,
      password: null,
      isProcessing: false,
      loginFailed: false,
    });
  }
});
