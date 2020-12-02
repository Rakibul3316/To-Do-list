import React from "react";
import shortid from "shortid";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import TableView from "../tableview";
import ListView from "../listview";
import Controller from "../controller";
import CreateTodoForm from "../create-todo-form";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "asd344fsd",
        text: "first task",
        description: "this is first description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "asdfsfsd",
        text: "first task",
        description: "this is first description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id == todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id == todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  handleSearch = () => {};
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
        />
        <div>
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader>Create New Todo Item</ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
