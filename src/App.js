import TextArea from "./components/TextArea";

function App() {
  const restrictedWords = ["stupid", "silly"];
  return (
    <div>
      <h2 className="heading">Simple text editor</h2>
      <TextArea highlighted={restrictedWords} />
    </div>
  );
}

export default App;
