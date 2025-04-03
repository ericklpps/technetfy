function criarHeader() {
  const headerHTML = `
    <header>
      <nav class="navbar navbar-expand-lg bg-primary fixed-top">
        <div class="container-fluid">
          
          <!-- Logo e título -->
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img id="logo-header" src="assets/logo-header.png" class="img-fluid img--logo--header" alt="TechNetify Logo">
            <span id="titulo-logo" class="text-white ms-2">TechNetify</span>
          </a>

          <!-- Botão de menu para dispositivos móveis -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Itens do menu -->
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Home
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Home One</a></li>
                  <li><a class="dropdown-item" href="#">Home Two</a></li>
                  <li><a class="dropdown-item" href="#">Home Three</a></li>
                  <li><a class="dropdown-item" href="#">Home Four</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Company
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link text-white" href="#">Service</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">IT Solution</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">Blog</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="#">Contact</a></li>
              <li class="nav-item ps-2">
                <button type="button" class="btn btn-secondary" id="btn-cabecalho">Get Started</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;

  return headerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.getElementById('header-container');

  if (!headerContainer) {
    console.error("O elemento #header-container não foi encontrado!");
    return;
  }

  headerContainer.innerHTML = criarHeader();

  let navbar = document.querySelector(".navbar");
  let logo = document.getElementById("logo-header");

  if (!navbar || !logo) {
    console.error("Navbar ou logo não encontrados!");
    return;
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      logo.src = "assets/logo-header-azul.png"; 
    } else {
      navbar.classList.remove("scrolled");
      logo.src = "assets/logo-header.png"; 
    }
  });
});
