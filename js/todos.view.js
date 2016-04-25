var source = $("#todo-template").html();
var template = Handlebars.compile(source);

Handlebars.registerHelper("checkedIfCompleted", function(state) {
	return state === "completed" ? "checked": "";
});

function render(todos) {

	var leftItemCount = _.filter(todos, function(todo) {
		return todo.state !== "completed"
	}).length;

	renderTodos(todos);
	renderLeftItemCount(leftItemCount);
}

function renderTodos(todos) {
	var todosHtml = template(todos);
	$(".todo-list").html(todosHtml);
}

function renderLeftItemCount(count) {
	$(".todo-count").find("strong").text(count);
}

module.exports = {
	render: render
};