import List from "./components/list/List1"
import Chat from "./components/chat/Chat1"
import Detail from "./components/detail/Detail1"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  );
}

export default App