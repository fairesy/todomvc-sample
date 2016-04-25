var TodosModel = require("./todos.model");
var TodosView = require("./todos.view");

var stateFilter;
bindEvents();

function init(filter) {
	stateFilter = filter;
	var todos = TodosModel.getAll(stateFilter);

	TodosView.render(todos);
}

function bindEvents() {
	$(".new-todo")
		.on("keyup", onEnterNewTodo);

	$(".todo-list")
		.on("click", ".destroy", onClickDelete)
		.on("change", ".toggle", onChangeToggle);

	$(".clear-completed")
		.on("click", onClickClearCompleted);

	$(".toggle-all")
		.on("change", onChangeToggleAll)
}

function onClickDelete() {
	var id = $(this).closest("li").data("id");
	TodosModel.delete(id);

	var todos = TodosModel.getAll(stateFilter);
	TodosView.render(todos);
}

function onChangeToggle() {
	var id = $(this).closest("li").data("id");
	var checked = $(this).prop("checked");
	TodosModel.toggleCompleted(id, checked);

	var todos = TodosModel.getAll(stateFilter);
	TodosView.render(todos);
}

function onChangeToggleAll() {
	var checked = $(this).prop("checked");
	TodosModel.toggleCompletedAll(checked);

	var todos = TodosModel.getAll(stateFilter);
	TodosView.render(todos);
}

function onClickClearCompleted() {
	TodosModel.changeStateAll("active");

	var todos = TodosModel.getAll(stateFilter);
	TodosView.render(todos);
}

function onEnterNewTodo(e) {
	if (e.which === 13) {
		var contents = $(this).val();

		if(contents.length > 0) {
			var todos = TodosModel.create(contents);
			TodosView.render(todos);
			$(this).val("");
		}
	}
}

module.exports = {
	init: init
};