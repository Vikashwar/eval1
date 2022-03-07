// import logo from './logo.svg';
// import './App.css';
// import {Counter} from "./components/Counter";
function App() {
  const [book,setbook]=useState(0)

  const handlebook=(value)=>{
    setbook(book +value)
  }
  return (
    <div className="items">
      <span>Books:{book}</span>
      <button className="addBook" onClick={()=>}
     
    </div>
  );
}

export default App;
