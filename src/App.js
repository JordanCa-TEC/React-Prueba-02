import React, { useState } from 'react';
import './App.css';
import myImage from './assets/images/book.jpg';
import FilteredList from './FilteredList';
import SearchBox from './SearchBox';

const App = () => {
  const [books, setBooks] = useState([
    'The Great Gatsby',
    'To Kill a Mockingbird',
    'Harry Potter y la piedra Filosofal (Harry Potter 3 ) de J. K. Rowling',
    'Pride and Prejudice',
    'The Catcher in the Rye',
    'Cien años de soledad, de Gabriel García Márquez',
    'El señor de los anillos (Trilogía), de J. R. R. Tolkien.',
    '1984, de George Orwell.',
    'Un mundo feliz, de Aldous Huxley.',
    'Orgullo y prejuicio, de Jane Austen.',
    'Crimen y castigo, de Fiódor Dostoyevski.',
    'Lolita, de Vladimir Nabokov.',
    'Ulises, de James Joyce.',
    'Madame Bovary, de Gustave Flaubert.',
    'En busca del tiempo perdido, de Marcel Proust.',
    'El extranjero, de Albert Camus',
    'Los hermanos Karamázov, de Fiódor Dostoyevski',
    'El amor en los tiempos del cólera, de Gabriel García Márquez',
    'Harry Potter y las reliquias de la muerte (Harry Potter 7 ) de J. K. Rowling',
    'El código Da Vinci, de Dan Brown',
    'Harry Potter y el prisionero de Azkaban (Harry Potter 3 ) de J. K. Rowling',
    'Cometas en el cielo, de Khaled Hosseini',
    'Ensayo sobre la ceguera, de José Saramago',
    'Las crónicas de Narnia, de C. S. Lewis',
    'Los renglones torcidos de Dios, de Torcuato Luca de Tena',
    'En llamas, de Suzanne Collins',
    'Harry Potter y el cáliz de fuego (Harry Potter 4 ) de J. K. Rowling',
    'La sombra del viento, de Carlos Ruiz Zafón',
    'Viaje al fin de la noche, de Louis Ferdinand Céline',
    'Harry Potter y el misterio del príncipe ( Harry Potter 6 ) de J. K. Rowling',
  ]);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="app">
      <h1>Book and Search</h1>
      <img src={myImage} alt="Icono de libro" className="book-image" />
      <h1>Lista de Libros</h1>
      <SearchBox setSearchText={setSearchText} />
      <FilteredList books={books} searchText={searchText} />
    </div>
  );
};

export default App;
