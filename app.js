
const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  )
}

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: 'ukochana/y' },
      { id: 2, name: 'mama' },
      { id: 3, name: 'tata' },
      { id: 4, name: 'syn/córka' },
      { id: 5, name: 'pies/kot' },
      { id: 6, name: 'szef! ☠' },
      { id: 7, name: 'kolega z pracy' },
      { id: 8, name: 'sekretarka' },
      { id: 9, name: 'ekspedientka' },
      { id: 10, name: 'taksówkarz' },
      { id: 11, name: 'piękna nieznajoma w autobusie' },
      { id: 12, name: 'portier' },
    ],
    value: ''
  }
  handleRemoveFromList(id) {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id)
    people.splice(index, 1)
    this.setState({
      people
    })
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  handleAddPerson = (id) => {
    if (this.state.value === '') return alert('Brak tekstu, wpisz coś :)')
    const people = [...this.state.people];
    const index = people.filter(person => id === person.id);
    const persona =
    {
      id: people.length + 1,
      name: this.state.value
    }
    people.push(persona)
    this.setState({
      people,
      value: ''
    })
  }

  render() {
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleRemoveFromList.bind(this, person.id)}
        add={this.handleAddPerson}
      />
    )
    )
    console.log(people.length)
    return (
      < div className="container" >
        <h1>Komu powiedziałeś DZIŚ coś miłego?<span> ❤</span></h1>
        <ul>
          {people}
        </ul>
        {
          people.length === 0 ? <h2>No ładnie, ładnie.. Wygląda na to, że naprawdę jesteś miły ☺ <br />Do zobaczenia jutro! ❀</h2> :
            <div className="content-bottom">
              <h3>Brakuje tu kogoś? No to doooodaj!</h3>
              <input
                placeholder="✎"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button className="btn-addPerson" onClick={this.handleAddPerson}>Dodaj</button>
            </div>
        }
      </div >
    );
  }
}

ReactDOM.render(<List />, document.getElementById('root'))