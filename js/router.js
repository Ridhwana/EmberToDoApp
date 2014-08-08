// This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
// In js/router.js update the router to change the todos mapping, with an additional empty function parameter so it can accept child routes, 
// and add this first index route:

Todos.Router.map(function(){
  this.resource('todos', { path : '/' }, function(){
    //additional child routes will go here
    this.route('active');
    this.route('completed')
  });
});

Todos.TodosActiveRoute = Ember.Route.extend({
// The model data for this route is the collection of todos whose isCompleted property is false.
// When a todo's isCompleted property changes this collection will automatically update to add or remove the todo appropriately.
  model: function(){
    return this.store.filter('todo', function(todo){
      return !todo.get('isCompleted');
    });
  },
// Normally transitioning into a new route changes the template rendered into the parent {{outlet}},
// but in this case we'd like to reuse the existing todos/index template.
// We can accomplish this by implementing the renderTemplate method and calling render ourselves with 
// the specific template and controller options.
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo){
      return todo.get('isCompleted')
    });
  },

  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('todos');
  }
});
//  implement a TodosRoute class with a model function that returns all the existing todos:
Todos.TodosRoute = Ember.Route.extend({
  model: function(){
    // returning the models/collection todo
    return this.store.find('todo')
  }

});


// When the application loads at the url '/' Ember.js will enter the todos route and render the todos template
// as before. It will also transition into the todos.index route and fill the {{outlet}} in the todos template
// with the todos/index template. The model data for this template is the result of the model method of TodosIndexRoute,
// which indicates that the model for this route is the same model as for the TodosRoute.