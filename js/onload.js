window.onload = function() {
    if (document.getElementById('container-produtos')) {
        document.getElementById('container-produtos').innerHTML = `
            <div class="produtos-titulo">
                <p id="produtos-subtitulo">Services</p>
                <hr class="linha-produtos">
            <div>
                <h2>Streamline Your Business with our IT Solutions</h2>  
            </div>            
            </div>
            <div class="primeira-linha-produtos" >
                <div class="produtos-card"> <!--Produto começa aqui-->
                    <p class="seta-card2">&rarr;</p>
                    <h4 class="titulo-card2">Software Development</h4>
                    <p class="texto-card2">
                        Custom software development is our specialty. We work closely with our clients to create software that 
                        meets their unique business requirements. 
                        Our developers are skilled in a variety of programming languages and frameworks.
                    </p>
                    <img class="img-fluid img-card2" src="/assets/orange-computer.png">
                </div><!--Produto acaba aqui-->
                <div class="produtos-card"> <!--Produto começa aqui-->
                    <p class="seta-card2">&rarr;</p>
                    <h4 class="titulo-card2">IT Consulting</h4>
                    <p class="texto-card2">
                        Get expert advice and guidance on your IT strategy with our IT consulting services. 
                        We offer assessments, audits, and roadmaps to help 
                        you optimize your IT investments and improve business performance.
                    </p>
                    <img class="img-fluid img-card2" src="/assets/aperto-de-mao.png">
                </div><!--Produto acaba aqui-->
                <div class="produtos-card"> <!--Produto começa aqui-->
                    <p class="seta-card2">&rarr;</p>
                    <h4 class="titulo-card2">Managed Services</h4>
                    <p class="texto-card2">
                        Take the hassle out of IT management with our managed services. We offer proactive
                        monitoring, maintenance, and support for your IT systems, 
                        ensuring they are always up-to-date and performing at their best.
                    </p>
                    <img class="img-fluid img-card2" src="/assets/people-empng-removebg-preview.png">
                </div><!--Produto acaba aqui-->
            </div><!--primeira linha de produtos acaba aqui-->
            
            <div class="primeira-linha-produtos" >
                <div class="produtos-card"> <!--Produto começa aqui-->
                    <p class="seta-card2">&rarr;</p>
                    <h4 class="titulo-card2">Cloud services</h4>
                    <p class="texto-card2">With our cloud services, you can securely store, manage, and access your business 
                        data from anywhere in the world. Our cloud solutions are scalable and customizable 
                        to meet your specific business needs.
                    </p>
                    <img class="img-fluid img-card2" src="assets/cloud-empng-removebg-preview.png">
                </div><!--Produto acaba aqui-->
                <div class="produtos-card"> <!--Produto começa aqui-->
                    <p class="seta-card2">&rarr;</p>
                    <h4 class="titulo-card2">Cybersecurity</h4>
                    <p class="texto-card2">Protect your business against cyber threats with our comprehensive cybersecurity 
                        solutions. We offer a range of services including 
                        threat detection, incident response, and security awareness training.
                    </p>
                    <img class="img-fluid img-card2" src="assets/shield-empng-removebg-preview.png">
                </div><!--Produto acaba aqui-->
                <div class="produtos-card"> <!--Produto começa aqui-->
                    <p class="seta-card2">&rarr;</p>
                    <h4 class="titulo-card2">Network Solutions</h4>
                    <p class="texto-card2">
                        Our network solutions are designed to keep your business connected and running smoothly. From 
                        setting up and maintaining your network infrastructure to 
                        providing reliable internet connectivity, we have you covered.
                    </p>
                    <img class="img-fluid img-card2" src="/assets/cloud-empng-removebg-preview.png">
                </div><!--Produto acaba aqui-->
            </div><!--segunda linha de produtos acaba aqui-->
    `;
        
    }
    
    // Preencher o container de serviços
    if (document.getElementById('servicos-container')) {
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
    if (document.getElementById('team')) {
      document.getElementById('team').innerHTML =`
        <div class="team-titulo">
                <p class="team-subtitulo">Team Member</p>
                <hr class="linha-produtos">
            <div>
                <h2>Meet Our Team</h2>  
            </div>            
            </div>
            <div class="team-container row"> <!--width pré definido numa variavel global-->
                <div class="team-card col">
                    <div class="team-card-image container text-center">
                        <img src="assets/Team/team1.jpg" alt="Team Member 1" class="img-fluid">
                    </div>
                    <div class="team-card-info container text-center shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h3>John Smith</h3>
                        <p class="team-card-info-cargo">Marketing Manager</p>
                        <div class="team-card-social-icons container text-center ">
                            <div class="row">
                                <div class="col">
                                    <img src="assets/Team/facebook.svg" alt="Facebook Icon" class="img-fluid" id="img-icon">
                                    <img src="assets/Team/twitter-x.svg" alt="Twitter Icon" class="img-fluid" id="img-icon">
                                    <img src="assets/Team/linkedin.svg" alt="LinkedIn Icon" class="img-fluid" id="img-icon">
                                    <img src="assets/Team/instagram.svg" alt="Instagram Icon" class="img-fluid" id="img-icon">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team-card col">
                    <div class="team-card-image container text-center">
                        <img src="assets/Team/team2.jpg" alt="Team Member 2" class="img-fluid">
                    </div>
                    <div class="team-card-info container text-center shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h3>David Nguyen</h3>
                        <p class="team-card-info-cargo">Software Engineer</p>
                        <div class="team-card-social-icons container text-center">
                            <div class="row">
                                <div class="col">
                                    <img src="assets/Team/facebook.svg" alt="Facebook Icon" class="img-fluid">
                                    <img src="assets/Team/twitter-x.svg" alt="Twitter Icon" class="img-fluid">
                                    <img src="assets/Team/linkedin.svg" alt="LinkedIn Icon" class="img-fluid">
                                    <img src="assets/Team/instagram.svg" alt="Instagram Icon" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team-card col">
                    <div class="team-card-image container text-center">
                        <img src="assets/Team/team3.jpg" alt="Team Member 2" class="img-fluid">
                    </div>
                    <div class="team-card-info container text-center shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h3>Sarah Lee</h3>
                        <p class="team-card-info-cargo">Product Designer</p>
                        <div class="team-card-social-icons container text-center">
                            <div class="row">
                                <div class="col">
                                    <img src="assets/Team/facebook.svg" alt="Facebook Icon" class="img-fluid">
                                    <img src="assets/Team/twitter-x.svg" alt="Twitter Icon" class="img-fluid">
                                    <img src="assets/Team/linkedin.svg" alt="LinkedIn Icon" class="img-fluid">
                                    <img src="assets/Team/instagram.svg" alt="Instagram Icon" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team-card col">
                    <div class="team-card-image container text-center ">
                        <img src="assets/Team/team4.jpg" alt="Team Member 2" class="img-fluid">
                    </div>
                    <div class="team-card-info container text-center shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h3>Emily Chen</h3>
                        <p class="team-card-info-cargo">Customer Support Specialist</p>
                        <div class="team-card-social-icons container text-center">
                            <div class="row">
                                <div class="col">
                                    <img src="assets/Team/facebook.svg" alt="Facebook Icon" class="img-fluid">
                                    <img src="assets/Team/twitter-x.svg" alt="Twitter Icon" class="img-fluid">
                                    <img src="assets/Team/linkedin.svg" alt="LinkedIn Icon" class="img-fluid">
                                    <img src="assets/Team/instagram.svg" alt="Instagram Icon" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `;
    };

    const carouselContainer = document.querySelector('.carrossel-case-study');
    const carouselSlide = document.querySelector('.carrossel-slide');
    const slideItems = document.querySelectorAll('.carrossel-slide .slide-item'); // Alterado para selecionar slide-item
    
    if (carouselSlide && slideItems.length > 0) {
        // Limpar quaisquer clones existentes
        document.querySelectorAll('[data-clone="true"]').forEach(el => el.remove());
        
        // Obter os itens originais
        const originalItems = Array.from(slideItems);
        
        // Clonar todo o conjunto de itens e adicionar ao final
        originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('data-clone', 'true');
            carouselSlide.appendChild(clone);
        });
        
        // Obter a largura real de um item incluindo o gap
        const gap = 20; // Mesmo valor do CSS
        const itemWidth = originalItems[0].offsetWidth + gap;
        const totalItems = originalItems.length;
        
        let currentIndex = 0;
        
        function moveToNextSlide() {
            currentIndex++;
            carouselSlide.style.transition = 'transform 0.5s ease';
            carouselSlide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            // Se chegamos ao final do primeiro conjunto, resetamos para o início
            if (currentIndex >= totalItems) {
                setTimeout(() => {
                    carouselSlide.style.transition = 'none';
                    currentIndex = 0;
                    carouselSlide.style.transform = `translateX(0)`;
                    
                    // Forçar reflow
                    void carouselSlide.offsetHeight;
                    
                    // Restaurar transição para o próximo movimento
                    carouselSlide.style.transition = 'transform 0.5s ease';
                }, 500); // Tempo igual à duração da transição
            }
        }
        
        // Iniciar o carrossel
        setInterval(moveToNextSlide, 3000);
    }
};