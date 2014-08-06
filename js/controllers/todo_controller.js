// matches the name todo as an itemController in the template.
Todos.TodoController = Ember.ObjectController.extend({

// when the editTodo action is called it should set the isEditing property of this controller 
// to true. This will automatically trigger the sections of template that use isEditing to 
// update their rendered content.

  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    }
  },

// Above we defined an initial isEditing value of false for controllers of this type
  isEditing: false,

// When called from the template to display the current isCompleted state of the todo,
// this property will proxy that question to its underlying model.
// When called with a value because a user has toggled the checkbox in the template, 
// this property will set the isCompleted property of its model to the passed value (true or false), 
// persist the model update, and return the passed value so the checkbox will display correctly.

// The isCompleted function is marked a computed property whose value is 
// dependent on the value of model.isCompleted.

  isCompleted: function(key, value){
    // the key is 'isCompleted', 
    // the value can be either undefined or true if you checking a list item that already exists 
    var model = this.get('model')

    if(value === undefined){
      // property being used as a getter
      return model.get('isCompleted')
    }
    else{
      // property being used as a setter
      model.set('isCompleted', value),
      model.save()
      return value
    }
  }.property('model.isCompleted')
});