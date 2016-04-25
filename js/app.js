var TodosController = require("./todos.controller");

var routes = {
	"/": {
		on: function() {
			console.log("111");
			TodosController.init();
		}
	},
	"/active": {
		on: function() {
			TodosController.init("active");
		}
	},
	"/completed": {
		on: function() {
			TodosController.init("completed");
		}
	}
};

var router = Router(routes);
router.init("/");