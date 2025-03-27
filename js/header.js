function criarHeader() {
    const headerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg bg-primary">
          <div class="container-fluid subtitulo--imagem">
            <div class="subtitulo--imagem">
              <a class="navbar-brand" href="#"><img class="img--logo--header img-fluid" src="assets/logo-header.png"></a>
              <p id="titulo-logo" class="nav-link text-white">TechNetify</p>
            </div>        
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Home One</a></li>
                    <li><a class="dropdown-item" href="#">Home Two</a></li>
                    <li><a class="dropdown-item" href="#">Home Three</a></li>
                    <li><a class="dropdown-item" href="#">Home Four</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a class="nav-link text-white" href="#">Service</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">It Solution</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">Blog</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#">Contact</a></li>
                <li class="nav-item"><button type="button" class="btn btn-secondary" id="btn-cabecalho">Get Started</button></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
    
    return headerHTML;
}

//Carregar o header quando o dom estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('header-container').innerHTML = criarHeader();
});