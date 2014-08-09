// put Ember into testing mode, which will disable the automatic run loop behavior. 
// This is needed because we do not want asynchronous functions firing in between or during other tests. We don't need to worry about this,
// Ember is going to handle everything for us.

Todos.rootElement = '#qunit-fixture'
// turn on testing mode
Todos.setupForTesting();

// inject test helpers onto window
emq.globalize();

// if you don't have a custom resolver, setup one:
Todos.Resolver = Ember.DefaultResolver.extend({namespace: Todos});
setResolver(Todos.Resolver.create());


test("should be an ember application", function() {
  equal(
    Todos.constructor, Ember.Application,
    'App is an Ember App!'
  );
});

moduleFor('controller:todo', 'Todo Controller');

test('check that we set isEditing to false initially', function() {
  var controller = this.subject();
  equal(controller.get('isEditing'), false);

});