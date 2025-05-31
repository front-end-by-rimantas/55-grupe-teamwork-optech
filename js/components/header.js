export function header(isMainPage = false) {
    const path = isMainPage ? './' : '../';

    const HTML = `
    <div class="container1 header-row">
         <div class="row1">
            <div class="top-header">
                <div class="left-row-topheader">
                        <p class="fa fa-map-marker "> 2774 Oak Drive, Plattsburgh, New York</p>
                </div>
                <div class="right-row-topheader">
                      <a href="#" class="fa fa-phone "> 518-564-3200</a>
                      <a href="#" class="fa fa-envelope-o " > tecbolt@example.com</a>
                </div>
            </div>
         </div>
    </div>
    <div class="container1 main-header">
        <div class="row1">
          <div class="botm-part">
            <div class="left-row-header">
                <img src="${path}img/Logo-main.webp" alt="logo">
                <nav>
                    <a href="${path}">Home</a>
                    <a href="${path}aboutUs/">Pages</a>
                    <a href="${path}">Portfolio</a>
                    <a href="${path}">Blog</a>
                    <a href="${path}">Contact</a>
                    </nav>
            </div>
            <div class="right-row-header">
                <a href="#" class="fa fa-search"></a>
                <a href="${path}">Get in Touch</a>
            </div>
          </div>
        </div>
    </div>`;

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}