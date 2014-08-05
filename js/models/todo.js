// This code creates a new class Todo and places it within your application's namespace ()
Todos.Todo = DS.Model.extend({
// Each todo will have two attributes: title and isCompleted.
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
})

Todos.Todo.FIXTURES = [
{
  // assign id on the client side because we are not getting back id from the servre, not saving to server
  id: 1,
  title: 'Learn Ember.js',
  isCompleted: true
},
{
  id: 2,
  title: '.....',
  isCompleted: false
},
{
  id: 3,
  title: 'Profit.!',
  isCompleted: false
}
]