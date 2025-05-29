export function section5() {
    let HTML = `<div class="container bg-container">
        <div class="row">
            <h1 class="s5-title col-12">Explore our recent projects</h1>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 s5-card ">
                <img class="s5-foto" src="./img/section-5/Digital-product.webp" alt="Digital-product-design">
                <div class="col-12  s5-content">
                    <h2>Digital product design</h2>
                    <p>Design, graphics</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 s5-card ">
                <img class="s5-foto" src="./img/section-5/Cyber-security.webp" alt="Cyber Security Analysis">
                <div class="col-12 s5-content">
                    <h2>Cyber security analysis</h2>
                    <p>Security, technology</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 s5-card ">
                <img class="s5-foto" src="./img/section-5/health-app.webp" alt="Health App Development">
                <div class="col-12 s5-content">
                    <h2>Health app development</h2>
                    <p>Development, software</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 s5-card ">
                <img class="s5-foto " src="./img/section-5/Marketing-agency.webp" alt="Marketing Agency Website">
                <div class="col-12 s5-content">
                    <h2>Marketing agency website</h2>
                    <p>Development, marketing</p>
                </div>
            </div>
            <div class="col-12 col-xl-8 s5-card ">
                <img class="s5-foto" src="./img/section-5/project-marketing.webp" alt="Project for marketing">
                <div class="col-12 s5-content">
                    <h2>Project for marketing</h2>
                    <p>Marketing, buisness</p>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
};