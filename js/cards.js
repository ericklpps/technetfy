window.onload = function() {
    document.getElementById('servicos-container').innerHTML = `
      <section class="container-servicos"> <!--Container-->
        <div id="agrupamento" class="servicos"> <!--agrupamento dos 4 elementos-->
          
          <div class="servicos-conteudo"><!--Area que o elemento vai ser exibida-->
            <div id="elemento-individual" class="servico-item"> <!--informações do elemento-->
              <img src="/assets/escudo-de-seguranca.svg" alt="Escudo de segurança">
              <h3>Security</h3>
              <p>Keep your data secure with our top-of-the-line security features.</p>
            </div>
          </div> <!--Aqui acaba um elemento-->
          
          <!--Aqui inicia um novo elemento-->
          <div class="servicos-conteudo"><!--Area que o elemento vai ser exibida-->
            <div id="elemento-individual" class="servico-item"> <!--informações do elemento-->
              <img src="/assets/balancas.svg" alt="Balança">
              <h3>Scalability</h3>
              <p>As your business grows, so do your IT needs. Our solution is designed to scale with you </p>
            </div>
          </div> <!--Aqui acaba um elemento-->
          
          <div class="servicos-conteudo"><!--Area que o elemento vai ser exibida-->
            <div id="elemento-individual" class="servico-item"> <!--informações do elemento-->
              <img src="/assets/coracao.svg" alt="Coração">
              <h3>Reliability</h3>
              <p>Downtime is not an option. Our solution is built to deliver maximum uptime and reliability</p>
            </div>
          </div> <!--Aqui acaba um elemento-->
          
          <div class="servicos-conteudo"><!--Area que o elemento vai ser exibida-->
            <div id="elemento-individual" class="servico-item"> <!--informações do elemento-->
              <img src="/assets/pessoas.svg" alt="Pessoas">
              <h3>Ease of Use</h3>
              <p>Our intuitive interface makes it easy to manage your IT infrastructure, even if you're not a tech expert.</p>
            </div>
          </div> <!--Aqui acaba um elemento-->
          
        </div>
      </section>
    `;
  };
  