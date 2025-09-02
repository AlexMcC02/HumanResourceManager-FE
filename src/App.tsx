import Navbar from "./Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Human Resource Manager</h1>
          <p className="text-xl text-red-400">This is the homepage!</p>
        </div>
      </div>
    </>
  );
}

export default App;
