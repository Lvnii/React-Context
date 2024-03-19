import logo from './logo.svg';
import './App.css';
// import Modal from './Components/Modal';
// import Header from './Components/Header';
// import List from './Components/List';
// import useProducts from './Store/productContext';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';

function App() {
  // const { addNewData } = useProducts()

  return (
    <div className="App">
      {/* <Modal header={'Modal Header'}>
          <div className='body-from-outside'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, natus dolorem? Laborum at omnis asperiores adipisci quod aspernatur quaerat vitae eligendi facere odit dolorum, qui, et velit dolore saepe nemo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, natus dolorem? Laborum at omnis asperiores adipisci quod aspernatur quaerat vitae eligendi facere odit dolorum, qui, et velit dolore saepe nemo!
            </p>
          </div>
          <div>
            I am react developer!
          </div>
      </Modal> */}
      {/* <Header />
      <List />
      <button onClick={addNewData}>Add Elements</button> */}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
