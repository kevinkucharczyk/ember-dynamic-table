import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  age: faker.list.random(18, 20, 28, 32, 45, 60),
  createDate() { return faker.date.past(); }
});