import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [name,setName] = useState(["Naresh"]);

  async function getdata(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data2 = data.json
    console.log(data2);
  }

  useEffect(() => {
    console.log("fsddsf");
    getdata()
  },[name]);

  return (
    <div className="App">
      <h1>{name}
      </h1>
      <button onClick={() => setName(["Sharma"])}>set my name</button>

      {
        data2.map((item) =>{
          <p>{item.id}</p>
        })
      }
    </div>
  );
}

export default App;
