// this name ToDosController matches the name todos within template
Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function(){
      console.log("this in the controller", this)
      // Get the todo title set by the "New Todo text field"
      var title = this.get('newTitle')
      if (!title) {return false;}
      if (!title.trim()) {return; }

      // Crete the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New ToDo field"
      // newTitle property which will synchronize to the template and reset the textfield
      this.set('newTitle', '');

      // save the new model 
      console.log("todo model", todo)
      todo.save()
    }
  },

// The remaining property will return the number of todos whose isCompleted property is false.
// If the isCompleted value of any todo changes, this property will be recomputed.
// If the value has changed, the section of the template displaying the count will be automatically updated
// to reflect the new value.

  remaining: function(){
    return this.filterBy('isCompleted', false).get('length')
  }.property('@each.isCompleted')

});