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
    },

    clearCompleted: function(){
      var completed = this.filterBy('isCompleted', true);
// invoke will execute a method on each object in the Array if the method exists on that object.
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

// The remaining property will return the number of todos whose isCompleted property is false.
// If the isCompleted value of any todo changes, this property will be recomputed.
// If the value has changed, the section of the template displaying the count will be automatically updated
// to reflect the new value.

  remaining: function(){
    return this.filterBy('isCompleted', false).get('length')
  }.property('@each.isCompleted'),

// The inflection property will return either a plural or singular version of the word "todo"
// depending on how many todos are currently in the list.
// The section of the template displaying the count will be automatically updated to reflect the new value.

  inflection: function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining'), 

// The completed and clearCompleted methods both invoke the filterBy method,
// which is part of the ArrayController API and returns an instance of EmberArray
// which contains only the items for which the callback returns true.
  hasCompleted: function(){
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function(){
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

// This property will be true if the controller has any todos and every todo's isCompleted property is true.
// If the isCompleted property of any todo changes, this property will be recomputed. 
// If the return value has changed, sections of the template that need to update will be automatically updated for us.

// If no value argument is passed this property is being used to populate the current value of the checkbox. 
// If a value is passed it indicates the checkbox was used by a user and we should set the isCompleted property 
// of each todo to this new value.
  allAreDone: function(){
    if(value === undefined){
      return !!this.get('length') && this.isEvery('isCompleted');
    }
    else{
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')

});