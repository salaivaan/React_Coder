import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <nav class="navbar navbar-expand-lg bg-dark row ">
    <div class="container-fluid ms-3">
      <a class="navbar-brand text-light bg-dark" href="#">Nene Basics</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-evenly bd-highlight" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item p-2 bd-highligh">
            <a class="nav-link active text-light bg-dark" aria-current="page" href="#">Abrigos</a>
          </li>
          <li class="nav-item p-2 bd-highligh">
            <a class="nav-link text-light bg-dark" href="#">Remeras</a>
          </li>
          <li class="nav-item p-2 bd-highligh">
            <a class="nav-link text-light bg-dark" href="#">Pantalones</a>
          </li>
          <li class="nav-item p-2 bd-highligh col-3 offset-8  d-flex justify-content-center bd-highlight mb-2">
            <a class="nav-link text-light bg-dark" href='#'>Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default App;
