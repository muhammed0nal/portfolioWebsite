import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 ">
      <AppRouter />
    </div>
  );
}

export default App;
