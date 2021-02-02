function App() {
  const persons = (props) => {
    return (
      <label for = "name"> 
        {props.name}: 
      </label>
      //<label for = "gender"> {props.gender}: </label>
      //<input type= "text" name={props.name} />
    )
  }
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <person label ="name" name="Bob"> 
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <person label ="name" name="Bob"> 
            <td>Alice</td>
            <td>male</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <button>-</button>
      <button>reset</button>
      <button>+</button>
    </div>
  );
}

export default App;
