import React from "react";
import { ChangeAlert } from "../ChangeAlert";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { EmptyTodos } from "../EmptyTodos/index.js";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError/index.js";
import { TodosLoading } from "../TodosLoading/index.js";
import { useTodos } from "./useTodos";

function App() {
  const { states, statesUpdate } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states;

  const {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  } = statesUpdate

  return (
      <React.Fragment>
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos= {totalTodos} 
            completedTodos= {completedTodos}
          />
          <TodoSearch
            searchValue= {searchValue} 
            setSearchValue= {setSearchValue}
          />
        </TodoHeader>
        <TodoList
            error={error}
            loading={loading}
            totalTodos={totalTodos}
            searchedTodos={searchedTodos}
            searchText={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={
              (searchText) => <p>No hay resultados para {searchText}</p>
            }
        >
            {todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
          )}
        </TodoList>

        {!!openModal && (
        <Modal>
              <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              />
        </Modal>
        )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
        <ChangeAlert
          sincronize={sincronizeTodos}
        />
      </React.Fragment>  
    );
}

export default App;
