import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <nav class="navbar navbar-expand-lg bg-light row">
    <div class="container-fluid ms-3">
      <a class="navbar-brand" href="#">Nene Basics</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-evenly bd-highlight" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item p-4 bd-highligh">
            <a class="nav-link active" aria-current="page" href="#">Abrigos</a>
          </li>
          <li class="nav-item p-4 bd-highligh">
            <a class="nav-link" href="#">Remeras</a>
          </li>
          <li class="nav-item p-4 bd-highligh">
            <a class="nav-link" href="#">Pantalones</a>
          </li>
          <li class="nav-item p-4 bd-highligh col-3 offset-8">
            <a class="nav-link" href='#'>Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default App;
