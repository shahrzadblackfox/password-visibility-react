import {FaEye} from "react-icons/fa";

function App() {
  const handleClick = () =>{
    
  }
  return (
    <div className="wrapper">
      <div className="input-fields">
        
          <span onClick={handleClick}><FaEye /></span>
          <input type="password"/>


      </div>

    </div>
  );
}

export default App;
