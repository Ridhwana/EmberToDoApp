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
  }
});