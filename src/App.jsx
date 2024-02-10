import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProject from './components/NoProject/NoProject';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {/* <NewProject /> */}
      <NoProject />
    </main>
  );
}

export default App;
