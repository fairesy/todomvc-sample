var todos = require("./_data");

module.exports = TodosModel = {
	getAll: function(filter) {
		if (filter === "active") {
			return TodosModel.getActive();
		} else if (filter === "completed") {
			return TodosModel.getCompleted();
		} else {
			return todos;
		}
	},

	getActive: function() {
		return _.filter(todos, function(todo) {
			return todo.state === "active";
		});
	},

	getCompleted: function() {
		return _.filter(todos, function(todo) {
			return todo.state === "completed";
		});
	},

	create: function(contents) {
		var todo = {
			id: todos.length,
			contents: contents,
			state: "active"
		};

		return todos = _.concat(todo, todos);
	},

	toggleCompleted: function(id, completed) {
		return todos = _.map(todos, function(todo) {
			if (todo.id === id) {
				todo.state = completed ? "completed" : "active";
			}

			return todo;
		});
	},

	toggleCompletedAll: function(state, completed) {
		return todos = _.map(todos, function(todo) {
			todo.state = completed ? "completed" : "active";
			return todo;
		});
	},

	delete: function(id) {
		return todos = _.filter(todos, function(todo) {
			return todo.id !== id;
		});
	},


};