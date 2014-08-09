App = Ember.Application.create({
  rootElement: '#qunit-fixture'
});

App.setupForTesting();
emq.globalize();

App.Resolver = Ember.DefaultResolver.extend({namespace: App});
setResolver(App.Resolver.create());

test("should be an ember applicaiton", function() {
  equal(
    App.constructor, Ember.Application,
    'App is an Ember App!'
  );
});

// module('Unit:TodosController');
// test('number of todos whose isCompleted property is false', function() {
//   debugger
// });
