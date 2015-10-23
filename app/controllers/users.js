import Ember from 'ember';

export default Ember.Controller.extend({
  userColumns: Ember.A([
    {
      'key': 'firstName',
      'displayName': 'First Name'
    },
    {
      'key': 'lastName',
      'displayName': 'Last Name'
    },
    {
      'key': 'age',
      'displayName': 'Age'
    },
    {
      'key': 'createDate',
      'displayName': 'Created at'
    }
  ])
});
