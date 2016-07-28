import Ember from 'ember';

export default Ember.Route.extend({
  loginFailed: false,
  isProcessing: false,
  isSlowConnection: false,
  timeout: null,
  actions: {
    login() {
      let ctrl = this.get('controller');

      ctrl.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      ctrl.set('timeout', setTimeout(this.slowConnection.bind(this), 5000));

      let username = ctrl.get('username'),
          password = ctrl.get('password');

      Ember.Logger.log('Username: ', username);
      Ember.Logger.log('Password: ', password);

      this.transitionTo('index');

      //     TODO call to /login
      //     let request = $.post("/login", this.getProperties("username", "password"));
      //     request.then(this.success.bind(this), this.failure.bind(this));
    },

    cancel() {
      this.transitionTo('index');
    }
  },

  success() {
    this.transitionTo('index');
  },

  failure() {
    clearTimeout(this.get('timeout'));

    this.set('isProcessing', false);
    this.set('loginFailed', true);
  },

  slowConnection() {
    this.set('isSlowConnection', true);
  },

  resetController(controller) {

    clearTimeout(controller.get('timeout'));

    controller.setProperties({
      username: null,
      password: null,
      isProcessing: false,
      loginFailed: false,
      isSlowConnection: false
    });
  }
});
