// create a new instance of the todos and make it available as a variable named TODos within your web browsers JS Env
window.Todos = Ember.Application.create({
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps

});

// Fixtures are a way to put sample data into an application before connecting the application to long-term persistence.
// indicate that your application's ApplicationAdapter is an extension of the DS.FixtureAdapter.
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

