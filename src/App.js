import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
  }




  const [persons, setPersons] = useState([
    {
      name: 'yasir',
      age: 32
    },
    {
      name: 'Ahmed',
      age: 24
    },
    {
      name: 'Obaid',
      age: 25
    }
  ])


  const addNewPerson = () => {
    const per = {
      name: 'Faraz',
      age: 19
    }
    setPersons([...persons, per])
  }

  return (
    <div className="App">
      {/* <Form
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleSubmit={handleSubmit}
        title={title}
        description={description}
      /> */}

      {
        persons.map(person => {
          return (
            <>
              <p>{person.name}</p>
              <p>{person.age}</p>
            </>
          )
        })
      }
      <button onClick={addNewPerson}>Add New </button>
    </div>
  );
}

export default App;
