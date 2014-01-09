Todos.Router.map(function() {
    this.resource('todos', { path: '/'});   //render the todos template when path is /
});

//returns Todo models for Todo template
Todos.TodosRoute = Ember.Route.extend({
   model: function() {
       return this.store.find('todo');
   }
});