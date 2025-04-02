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

    const carouselSlide = document.querySelector('.carrossel-slide');
    const slideItems = document.querySelectorAll('.carrossel-slide .slide-item');

    if (carouselSlide && slideItems.length > 0) {
        // Configurações básicas
        const gap = 20;
        const itemWidth = slideItems[0].offsetWidth + gap;
        const totalItems = slideItems.length;
        
        // Clonar o primeiro item e adicionar ao final para o loop
        const firstItemClone = slideItems[0].cloneNode(true);
        carouselSlide.appendChild(firstItemClone);
        
        // Variáveis de controle
        let position = 0;
        
        // Função para mover o carrossel
        function moveCarousel() {
            // Avançar para o próximo slide
            position++;
            
            // Aplicar a transição
            carouselSlide.style.transition = 'transform 0.5s ease';
            carouselSlide.style.transform = `translateX(-${position * itemWidth}px)`;
            
            // Resetar quando chegar ao final
            if (position >= totalItems) {
                // Após a transição terminar, voltar para o início sem animação
                setTimeout(() => {
                    carouselSlide.style.transition = 'none';
                    position = 0;
                    carouselSlide.style.transform = 'translateX(0)';
                }, 500);
            }
        }
        
        // Iniciar o carrossel com intervalo
        setInterval(moveCarousel, 1500);
    };
    if (document.getElementById('features-case')) {
        document.getElementById('features-case').innerHTML = `
            <div class="team-titulo">
                <p class="team-subtitulo">Features Case</p>
                <hr class="linha-produtos">
            <div>
                <h2>Our Working Process</h2>  
            </div>            
            </div>
            <div class="features-case-container">
                <div class="container text-center">
                    <div class="row" id="features-case-list">
                        <div class="col">
                            <div class="features-case-list-item-number">
                                <h5>
                                    1
                                </h5>
                            </div>
                            <div class="features-case-list-item-title">
                                <h4>
                                    Discover
                                </h4>
                            </div>
                            <div class="features-case-list-item-description">
                                <p>
                                    We ask questions to 
                                    understand your unique business needs and 
                                    give you a chance to get to know us and how we can help you.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="features-case-list-item-number">
                                <h5>
                                    2
                                </h5>
                            </div>
                            <div>
                                <h4 class="features-case-list-item-title">
                                    Access
                                </h4>
                            </div>
                            <div class="features-case-list-item-description">
                                <p>
                                    An IT specialist will make an on-site 
                                    visit to review all IT hardware, overall security, 
                                    and logical structure of your network.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="features-case-list-item-number">
                                <h5>
                                    3
                                </h5>
                            </div>
                            <div class="features-case-list-item-title">
                                <h4>
                                    Advise
                                </h4>
                            </div>
                            <div class="features-case-list-item-description">
                                <p>
                                    Our team will collect 
                                    and review all relevant information, 
                                    then present to you a comprehensive plan for the future.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="features-case-list-item-number">
                                <h5>
                                    4
                                </h5>
                            </div>
                            <div>
                                <h4 class="features-case-list-item-title">
                                    Discover
                                </h4>
                            </div>
                            <div class="features-case-list-item-description">
                                <p>
                                    Once we get your approval, the team will implement the 
                                    agreed upon solution and measure the results. 
                                    From there, we will make new recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        };
        if (document.getElementById('container-clients')) {
            document.getElementById('container-clients').innerHTML =`
            <div class="team-titulo py-5">
                <p class="team-subtitulo">Testimonial </p>
                <hr class="linha-produtos">
            <div>
                <h2>What Says Our Happy Clients</h2>
            </div>            
            </div>
            <div class="container text-center" id="container-ratings">
                <div class="row" id="container-ratings-row">
                    <div class="col" id="sombreamento-div">
                        <div class="rating-stars col">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                        </div>
                        <div class="rating-title">
                            <h4>Amazing Product</h4>
                        </div>
                        <div class="rating-text">
                            <p>
                                Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Asperiores voluptates laborum sed id aspernatur eveniet!
                            </p>
                        </div>
                        <div class="rating-use">
                            <div class="rating-picture">
                                <img src="assets/clients/user-1.png" alt="Foto do cliente 1">
                            </div>
                            <div class="rating-name">
                                <h5>Fig Nelson</h5>
                                <p>Manager</p>
                            </div>      
                        </div>
                    </div>
                    <div class="col" id="sombreamento-div">
                        <div class="rating-stars col">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                        </div>
                        <div class="rating-title">
                            <h4>Top Notch Support</h4>
                        </div>
                        <div class="rating-text">
                            <p>
                                Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Asperiores voluptates laborum sed id aspernatur eveniet!
                            </p>
                        </div>
                        <div class="rating-use">
                            <div class="rating-picture">
                                <img src="assets/clients/user-2.png" alt="Foto do cliente 2">
                            </div>
                            <div class="rating-name">
                                <h5>Eleanor Fant</h5>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col" id="sombreamento-div">
                        <div class="rating-stars col">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                            <img src="/assets/clients/star-fill.svg" alt="Estrela">
                        </div>
                        <div class="rating-title">
                            <h4>Featured Costumer</h4>
                        </div>
                        <div class="rating-text">
                            <p>
                                Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Asperiores voluptates laborum sed id aspernatur eveniet!
                            </p>
                        </div>
                        <div class="rating-use">
                            <div class="rating-picture">
                                <img src="assets/clients/user-3.png" alt="Foto do cliente 3">
                            </div>
                            <div class="rating-name">
                                <h5>Hilary Ouse</h5>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            `;
        };
        if (document.getElementById('feed')) {
            document.getElementById('feed').innerHTML =`
            <div class="row mx-auto px-5">
                <div class="col-12 px-3 py-5">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-auto">
                            <div>
                                <p class="mb-0 small feed-subtitulo">Blog</p>
                                <hr class="mt-1 mb-2 border-primary w-25 linha-produtos">
                            </div>
                            <h2 class="feed-titulo">Read Our Latest News Feed</h2>
                        </div>
                        <div class="col-md-auto">
                            <button type="button" class="btn btn-primary" id="btn-cabecalho">See All Blogs</button>
                        </div>
                    </div>
                </div>
        
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header fs-s d-flex justify-content-between align-items-center" id="feed-card-header">
                            <div class="d-flex align-items-center gap-2" id="feed-card-header">
                                <img alt="calendario" src="/assets/Feed/calendar3.svg" style="width: 16px; height: 16px;">
                                <p class="mb-0 small">20th March 2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <img alt="Balão de conversa" src="/assets/Feed/chat.svg" style="width: 16px; height: 16px;">
                                <p class="mb-0 small">10 comments</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <img alt="Imagem Pessoas" src="/assets/Feed/blog-1.jpg" class="img-fluid mb-3">
                            <h5 class="card-title pe-3 ps-3">Why startup turn to Jenny for their websites.</h5>
                            <p class="card-text pe-3 ps-3">Matie boy owt to do with bevvy blok haggle nice one starkers give us.</p>
                            <a href="#" class="pe-3 ps-3 read-more">Read More &rarr;</a>
                        </div>
                    </div>
                </div>
        
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header fs-s d-flex justify-content-between align-items-center" id="feed-card-header">
                            <div class="d-flex align-items-center gap-2">
                                <img alt="calendario" src="/assets/Feed/calendar3.svg" style="width: 16px; height: 16px;">
                                <p class="mb-0 small">20th March 2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <img alt="Balão de conversa" src="/assets/Feed/chat.svg" style="width: 16px; height: 16px;">
                                <p class="mb-0 small">10 comments</p>
                            </div>
                        </div>
                        <div class="card-body ">
                            <img alt="Imagem Pessoas" src="/assets/Feed/blog-2.png" class="img-fluid mb-3">
                            <h5 class="card-title pe-3 ps-3">How to organize your article links with Jenny</h5>
                            <p class="card-text pe-3 ps-3">Matie boy owt to do with bevvy blok haggle nice one starkers give us.</p>
                            <a href="#" class="pe-3 ps-3 read-more">Read More &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header fs-s d-flex justify-content-between align-items-center" id="feed-card-header">
                            <div class="d-flex align-items-center gap-2 ">
                                <img alt="calendario" src="/assets/Feed/calendar3.svg" style="width: 16px; height: 16px;">
                                <p class="mb-0 small">20th March 2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <img alt="Balão de conversa" src="/assets/Feed/chat.svg" style="width: 16px; height: 16px;">
                                <p class="mb-0 small">10 comments</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <img alt="Imagem Pessoas" src="/assets/Feed/blog-3.png" class="img-fluid mb-3">
                            <h5 class="card-title pe-3 ps-3">In house Design Thinking How I deal with it?</h5>
                            <p class="card-text pe-3 ps-3">Matie boy owt to do with bevvy blok haggle nice one starkers give us.</p>
                            <a href="#" class="pe-3 ps-3 read-more">Read More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        };
};