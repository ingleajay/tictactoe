import { useState } from "react";
import SetupBoard from "./components/SetupBoard";
import './Styled/SetupBoard.css'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
   
    <div className="App">
      <SetupBoard showAlert={showAlert} alert={alert}/>
    </div>
  );
}

export default App;
