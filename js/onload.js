window.onload = function () {
    if (document.getElementById('container-produtos')) {
        document.getElementById('container-produtos').innerHTML = `
   <section class="produtos-section py-3 py-md-5">
    <div class="container-fluid container-md px-2">
        <div class="produtos-header text-center mb-3 mb-md-4">
            <p class="produtos-header-subtitle fs-6 fw-bold mb-0">Services</p>
            <hr class="produtos-header-divider">
            <h2 class="produtos-header-title h3 h2-md">Streamline Your Business with our IT Solutions</h2>
        </div>

        <div class="row justify-content-center g-3 g-md-4">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="produtos-card h-100 p-3">
                    <p class="produtos-card-arrow">&rarr;</p>
                    <h4 class="produtos-card-title h5 h4-md">Software Development</h4>
                    <p class="produtos-card-description small">
                        We work closely with our clients to create software that meets their unique
                        business requirements. Our developers are skilled in a variety of programming languages and frameworks.
                    </p>
                    <div class="produtos-card-image-wrapper">
                        <img class="produtos-card-image img-fluid" src="/assets/orange-computer.png" alt="Software Development">
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="produtos-card h-100 p-3">
                    <p class="produtos-card-arrow">&rarr;</p>
                    <h4 class="produtos-card-title h5 h4-md">IT Consulting</h4>
                    <p class="produtos-card-description small">
                        Get expert advice and guidance on your IT strategy with our IT consulting services.
                        We offer assessments, audits, and roadmaps to help you optimize your IT investments.
                    </p>
                    <div class="produtos-card-image-wrapper">
                        <img class="produtos-card-image img-fluid" src="/assets/aperto-de-mao.png" alt="IT Consulting">
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="produtos-card h-100 p-3">
                    <p class="produtos-card-arrow">&rarr;</p>
                    <h4 class="produtos-card-title h5 h4-md">Managed Services</h4>
                    <p class="produtos-card-description small">
                        Take the hassle out of IT management with our managed services. We offer proactive
                        monitoring, maintenance, and support for your IT systems.
                    </p>
                    <div class="produtos-card-image-wrapper">
                        <img class="produtos-card-image img-fluid" src="/assets/people-empng-removebg-preview.png" alt="Managed Services">
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="produtos-card h-100 p-3">
                    <p class="produtos-card-arrow">&rarr;</p>
                    <h4 class="produtos-card-title h5 h4-md">Cloud Services</h4>
                    <p class="produtos-card-description small">
                        With our cloud services, you can securely store, manage, and access your business data from anywhere.
                        Our cloud solutions are scalable and customizable.
                    </p>
                    <div class="produtos-card-image-wrapper">
                        <img class="produtos-card-image img-fluid" src="/assets/cloud-empng-removebg-preview.png" alt="Cloud Services">
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="produtos-card h-100 p-3">
                    <p class="produtos-card-arrow">&rarr;</p>
                    <h4 class="produtos-card-title h5 h4-md">Cybersecurity</h4>
                    <p class="produtos-card-description small">
                        Protect your business against cyber threats with our comprehensive cybersecurity
                        solutions including threat detection, response, and training.
                    </p>
                    <div class="produtos-card-image-wrapper">
                         <img class="produtos-card-image img-fluid" src="/assets/shield-empng-removebg-preview.png" alt="Cybersecurity">
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="produtos-card h-100 p-3">
                    <p class="produtos-card-arrow">&rarr;</p>
                    <h4 class="produtos-card-title h5 h4-md">Network Solutions</h4>
                    <p class="produtos-card-description small">
                        Our network solutions keep your business connected. From setting up your infrastructure
                        to providing reliable connectivity—we've got you covered.
                    </p>
                    <div class="produtos-card-image-wrapper">
                         <img class="produtos-card-image img-fluid" src="/assets/cloud-empng-removebg-preview.png" alt="Network Solutions">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    `;

    }

    if (document.getElementById('servicos-container')) {
        document.getElementById('servicos-container').innerHTML = `        
<section class="container-fluid container-md my-3 my-md-5 px-2">
  <div class="row g-3 g-md-4 justify-content-center">

    <div class="col-6 col-md-6 col-lg-3">
      <div class="card text-center service-card h-100 hover-effect">
        <div class="icon-wrapper mx-auto my-2 my-md-3">
          <!-- Ícone -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
          </svg>
        </div>
        <div class="card-body p-2 p-md-3">
          <h5 class="card-title h6 h5-md">Security</h5>
          <p class="card-text small">Keep your data secure with our top-of-the-line security features.</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-6 col-lg-3">
      <div class="card text-center service-card h-100 hover-effect">
        <div class="icon-wrapper mx-auto my-2 my-md-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
            <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <div class="card-body p-2 p-md-3">
          <h5 class="card-title h6 h5-md">Scalability</h5>
          <p class="card-text small">As your business grows, so do your IT needs. Our solution is designed to scale with you</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-6 col-lg-3">
      <div class="card text-center service-card h-100 hover-effect">
        <div class="icon-wrapper mx-auto my-2 my-md-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
        </div>
        <div class="card-body p-2 p-md-3">
          <h5 class="card-title h6 h5-md">Reliability</h5>
          <p class="card-text small">Downtime is not an option. Our solution is built to deliver maximum uptime and reliability</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-6 col-lg-3">
      <div class="card text-center service-card h-100 hover-effect">
        <div class="icon-wrapper mx-auto my-2 my-md-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
        </div>
        <div class="card-body p-2 p-md-3">
          <h5 class="card-title h6 h5-md">Ease of Use</h5>
          <p class="card-text small">Our intuitive interface makes it easy to manage your IT infrastructure, even if you're not a tech expert.</p>
        </div>
      </div>
    </div>

  </div>
</section>

        `;
    };
    if (document.getElementById('team')) {
        document.getElementById('team').innerHTML = `
    <div class="team-titulo">
            <p class="team-subtitulo">Team Member</p>
            <hr class="linha-produtos">
        <div>
            <h2>Meet Our Team</h2>  
        </div>            
        </div>
        <div class="team-container row">
            <div class="team-card col-12 col-md-6 col-lg-3">
                <div class="team-card-image container text-center">
                    <img src="assets/Team/team1.jpg" alt="Team Member 1" class="img-fluid">
                </div>
                <div class="team-card-info container text-center shadow p-2 p-md-3 mb-3 mb-md-5 bg-body-tertiary rounded">
                    <h3 class="h5 h4-md">John Smith</h3>
                    <p class="team-card-info-cargo small">Marketing Manager</p>
                    <div class="team-card-social-icons container text-center">
                        <div class="row">
                            <div class="col cor-svg-team">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-card col-12 col-md-6 col-lg-3">
                <div class="team-card-image container text-center">
                    <img src="assets/Team/team2.jpg" alt="Team Member 2" class="img-fluid">
                </div>
                <div class="team-card-info container text-center shadow p-2 p-md-3 mb-3 mb-md-5 bg-body-tertiary rounded">
                    <h3 class="h5 h4-md">David Nguyen</h3>
                    <p class="team-card-info-cargo small">Software Engineer</p>
                    <div class="team-card-social-icons container text-center">
                        <div class="row">
                            <div class="col cor-svg-team">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-card col-12 col-md-6 col-lg-3">
                <div class="team-card-image container text-center">
                    <img src="assets/Team/team3.jpg" alt="Team Member 3" class="img-fluid">
                </div>
                <div class="team-card-info container text-center shadow p-2 p-md-3 mb-3 mb-md-5 bg-body-tertiary rounded">
                    <h3 class="h5 h4-md">Sarah Lee</h3>
                    <p class="team-card-info-cargo small">Product Designer</p>
                    <div class="team-card-social-icons container text-center">
                        <div class="row">
                            <div class="col cor-svg-team">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-card col-12 col-md-6 col-lg-3">
                <div class="team-card-image container text-center">
                    <img src="assets/Team/team4.jpg" alt="Team Member 3" class="img-fluid">
                </div>
                <div class="team-card-info container text-center shadow p-2 p-md-3 mb-3 mb-md-5 bg-body-tertiary rounded">
                    <h3 class="h5 h4-md">Emily Chen</h3>
                    <p class="team-card-info-cargo small">Customer Support Specialist</p>
                    <div class="team-card-social-icons container text-center">
                        <div class="row">
                            <div class="col cor-svg-team">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
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
        const gap = 20;
        const itemWidth = slideItems[0].offsetWidth + gap;
        const totalItems = slideItems.length;

        const firstItemClone = slideItems[0].cloneNode(true);
        carouselSlide.appendChild(firstItemClone);

        let position = 0;

        function moveCarousel() {
            position++;

            carouselSlide.style.transition = 'transform 0.5s ease';
            carouselSlide.style.transform = `translateX(-${position * itemWidth}px)`;

            if (position >= totalItems) {
                setTimeout(() => {
                    carouselSlide.style.transition = 'none';
                    position = 0;
                    carouselSlide.style.transform = 'translateX(0)';
                }, 500);
            }
        }

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
        document.getElementById('container-clients').innerHTML = `
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
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
        document.getElementById('feed').innerHTML = `
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                                <p class="mb-0 small">20th March 2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                                <p class="mb-0 small">20th March 2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                                <p class="mb-0 small">20th March 2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                </svg>
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
    if (document.getElementById('container-banner2')) {
        document.getElementById('container-banner2').innerHTML = `
        <div class="row text-center w-100 justify-content-center g-4">
            <div class="col-md-3 col-sm-6 px-5">
                <div class="card border border-secondary border-2 bg-transparent text-white py-5 px">
                    
                    <div class="d-flex justify-content-center align-items-center bg-primary rounded-circle mx-auto mb-3 cor-balao-banner2" style="width: 80px; height: 80px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>         
                    </div>
                    
                    <div class="card-body">
                        <h2 class="card-title mb-0 display-2">280</h2>
                        <p class="card-text small">Our Branchs</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 px-5 py-5">
                <div class="card border border-secondary border-2 bg-transparent text-white py-5">
                    <div class="d-flex justify-content-center align-items-center bg-light rounded-circle mx-auto mb-3 cor-balao-banner2-1" style="width: 80px; height: 80px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>          
                    </div>
                    <div class="card-body">
                        <h2 class="card-title mb-0 display-2">782</h2>
                        <p class="card-text small">Projects Done</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 px-5">
                <div class="card border border-secondary border-2 bg-transparent text-white py-5">
                    <div class="d-flex justify-content-center align-items-center bg-danger rounded-circle mx-auto mb-3 cor-balao-banner2" style="width: 80px; height: 80px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>           
                    </div>
                    <div class="card-body">
                        <h2 class="card-title mb-0 display-2">1M</h2>
                        <p class="card-text small">Happy Users</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 px-5 py-5">
                <div class="card border border-secondary border-2 bg-transparent text-white py-5 px">
                    <div class="d-flex justify-content-center align-items-center bg-warning rounded-circle mx-auto mb-3 cor-balao-banner2" style="width: 80px; height: 80px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title mb-0 display-2 ">100</h2>
                        <p class="card-text small">Awards</p>
                    </div>
                </div>
            </div>
        </div>
            `};
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = `
                <div class="container-fluid py-5 justify-content-around">
            <div class="row px-4 gx-5">
                <div class="col-md-3 mb-4">
                    <div class="logo-technetify d-flex align-items-center py-4">
                        <img class="img--logo--header img-fluid" src="assets/logo-header.png" alt="Logo">
                        <h3 class="text-white ms-2">TechNetify</h3>
                    </div>
                    <div class="texto-footer text-white">
                        <p>We are a team of highly skilled and experienced IT professionals who are
                            dedicated to delivering innovative and reliable solutions that meet
                            the unique needs of your business.</p>
                    </div>
                    <div class="redes-sociais d-flex justify-content-between">
                        <a href="#" class="social-icon generica-receber-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" fill="white"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon generica-receber-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" fill="white"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon generica-receber-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="white"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon generica-receber-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599.92s.546-.453.92-.598c.282-.11.705-.24 1.485.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" fill="white"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon generica-receber-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="our-services col-md-3 mb-4 contact-services">
                    <h3>Our Services</h3>
                    <br>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Marketing Strategy</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Interior Design</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Digital Services</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Product Selling</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Product Design</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Social Marketing</p></a>
                </div>
                <div class="our-services col-md-3 mb-4 contact-services">
                    <h3>Our Services</h3>
                    <br>
                    <a href="about.html" class="contact-services "><p class="generica-receber-hover">&gt;&gt; About Us</p></a>
                    <a href="contact.html" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Contact Us</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Projects</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Carrers</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; News</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Privacy Policy</p></a>
                    <a href="#" class="contact-services "><p class="generica-receber-hover">&gt;&gt; Terms of use</p></a>
                </div>
                <div class="contact col-md-3 mb-4 contact-services">
                    <h3>Contact</h3>
                    <br>
                    <div class="d-flex generica-receber-hover">                    
                        <div class="p-2">
                            <a href="#" class="footer-contact">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <p>818 SW 3RD Ave,#161,
                            <p>london Portland, OR</p>
                        </div>
                    </div>

                    <div class="d-flex generica-receber-hover ">                    
                        <div class="p-2">
                            <a class="footer-contact" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <p>info@example.com</p>
                            <p>info@example.com</p>
                        </div>
                    </div>

                    <div class="d-flex generica-receber-hover">                    
                        <div class="p-2">
                            <a href="#" class="footer-contact">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <p>+974 30007213</p>
                            <p>+974 30007213</p>
                        </div>
                    </div>
        
                </div>

                <div class="row text-center w-100 justify-content-center g-4">
                    <hr style="border-top: 1px solid white;">
                </div>
                <div class="text-center text-light p-3">
                    <p>© 2025 TechNetify.All Rights Reserved.</p>
                </div>
        </div>
        `;
    };

    if (document.getElementById('aboutus')) {
        document.getElementById('aboutus').innerHTML = `
            <section class="container py-5">
                <div class="container-fluid py-5">
                    <div class="row align-items-start justify-content-around">
                        <div class="col-md-6 d-flex align-items-start justify-content-center mt-5 mt-md-0 position-relative">
                            <img src="assets/about.jpg" alt="Pessoas trabalhando" class="position-absolute w-75 rounded shadow-sm" style="z-index: 1; animation: subirDescer 3s infinite alternate;">
                            <img src="assets/quadrado-animacao.png" alt="quadrado animado" class="w-80" style="transform: rotate(45deg);">
                        </div>
                        <div class="col-md-5 pe-md-3 texto-about-us ps-3">
                            <p class="fs-5 fw-bold mb-0" id="title">About Us</p>
                            <hr class="linha-produtos">
                            <br>
                            <h2>Empowering Your Business with Innovative <strong class="text-danger text-decoration-none">Technology Solutions</strong></h2>
                            <h3>Expert IT Consulting, Software Development, Cloud Solutions, and More at TechNetify IT Solutions.</h3>
                            <p>Welcome to TechNetify IT Solutions, your one-stop-shop for
                            all your technology needs. We are a team of highly skilled and experienced IT professionals who
                            are dedicated to delivering innovative and reliable solutions that meet the unique needs of your business.
                            </p>
                            <p>
                            At TechNetify, we understand that technology is constantly evolving, and keeping up with the latest trends
                            and advancements can be challenging. That's why we're here to help. Our team of experts stays up-to-date with the
                            latest developments in the tech industry, so you can rest assured that you're getting the best possible advice and solutions.
                            </p>
                            <button type="button" class="btn btn-lg btn-primary" id="btn-banner">More Details &rarr;</button>
                        </div>
                    </div>
                </div>
            </section>

        `;
    };

};