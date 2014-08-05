// This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
Todos.Router.map(function(){
  this.resource('todos', {
    path : '/'
  });
});

//  implement a TodosRoute class with a model function that returns all the existing todos:
Todos.TodosRoute = Ember.Route.extend({
  model: function(){
    // returning the models/collection todo
    return this.store.find('todo')
  }

});