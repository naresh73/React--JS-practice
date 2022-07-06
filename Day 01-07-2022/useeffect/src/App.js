import { useEffect } from "react";

function App(){

  let arr = [1,2,3,4,5];
  // for (let i =0 ; i< arr.length ; i++){
  //   console.log(arr[i]);
  // }
  useEffect (() => {
    console.log("only once");
  },[arr]);
}

export default App;