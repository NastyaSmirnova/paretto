import Ember from 'ember';

export default Ember.Controller.extend({
  loginFailed: false,
  isProcessing: false,
  emailAddress: 'admin@gmail.com',
  password: '',
  validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  inValidEmail: Ember.computed.not('validEmail'),
  inValidPass: Ember.computed.empty('password'),
  isDisabled: Ember.computed.or('inValidEmail', 'isProcessing', 'inValidPass')
});
