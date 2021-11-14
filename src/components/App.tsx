import React from "react";
import { connect } from "react-redux";
import { deleteTodo, fetchTodos, Todo } from "../action";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void => {
    if (this.props.todos.length === 0) {
      this.props.fetchTodos();
      this.setState({ fetching: true });
    }
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  rednerList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo, ind: number) => {
      return (
        <p
          onClick={() => this.onTodoClick(todo.id)}
          key={todo.id}
          style={{
            padding: "10px",
            border: "1px solid #dddddd",
            width: "50%",
            margin: ".4em auto",
            background: "#f1f1f1",
            color: "#58585",
            boxShadow: "1px 0px 5px 1px rgb(8 8 8 / 19%)"
          }}
        >
          {todo.title}
        </p>
      );
    });
  }
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING...." : null}
        {this.rednerList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
