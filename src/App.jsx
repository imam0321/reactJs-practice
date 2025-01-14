import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="m-10">
      <h1 className="text-2xl m-2 text-center">Reusing Logic with Custom Hooks - Part 1</h1>
      <StatusBar />
      <SaveButton />
    </div>
  );
}

export default App;
