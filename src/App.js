import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value,setValue],replicate 'set state' for search field this.setState
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  /* creating search 'string' */
  //const [stringField, setStringField] = useState(""); //'string field' value is being updated,'set string field' is getting called.

  //console.log(searchField);
  //console.log("render");

  //trigger side effect using 'use Effect' hook,if nothing change,nothing trigger
  useEffect(() => {
    //console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); //empty array as dependency array

  //whenever monsters array has changed or if search field value has changed,it filters throught monsters
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    //console.log("effect is firing");

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  /* creating search 'string' 
  const onStringChange = (event) => {
    setStringField(event.target.value);
  };*/

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />

      {/* creating search 'string' 
      <SearchBox
        onChangeHandler={onStringChange}
        placeholder="set string"
        className="monsters-search-box"
  />*/}

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/* start Class component */
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             /*console.log(this.state);*/
//           }
//         )
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     //console.log("render from app");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         {/*filteredMonsters.map((monster) => {
//           return (
//             <div>
//               <h1 key={monster.id}>{monster.name}</h1>
//             </div>
//           );
//         })*/}
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
/* end Class component */

export default App;
