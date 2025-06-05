export function serviceDetailsSection2 () {

    let HTML =  `
    <div class="container">
        <div class="row">
            <div class="col-12">
                <img class="serviceD-photo" src="../../img/service-details-section2/service-deatils.webp" alt="work"/>
                <div class="serviceD-content">
                    <h4 class="serviceD-title">Overview</h4>
                    <p class="serviceD-text">A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively. There are various kinds of content management systems available—from cloud-based to a headless</p>
                    <p class="serviceD-text">CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                </div>
                <div class="serviceD-content">
                    <h4 class="serviceD-title">Features</h4>
                    <p class="serviceD-text">A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                    <div class="serviceD-list">
                        <i class="fa2 fa fa-check"></i>
                        <p class="serviceD-list-text">Creating and editing content</p>
                        <i class="fa2 fa fa-check"></i>
                        <p class="serviceD-list-text">Workflows, reporting, and content organization</p>
                        <i class="fa2 fa fa-check"></i>
                        <p class="serviceD-list-text">User & role-based administration and security</p>
                        <i class="fa2 fa fa-check"></i>
                        <p class="serviceD-list-text">Flexibility, scalability, and performance and analysis</p>
                        <i class="fa2 fa fa-check"></i>
                        <p class="serviceD-list-text">Multilingual content capabilities</p>
                    </div>
                </div>
                <div class="serviceD-content">
                    <h4 class="serviceD-title">Goal</h4>
                    <p class="serviceD-text">A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                </div>
            </div>
            <div class="serviceD-links">
                <div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">Web Development<i></i></a>
                            </li>
                            <li>
                                <a href="#">App Development<i></i></a>
                            </li>
                            <li>
                                <a href="#">UI/UX Design<i></i></a>
                            </li>
                            <li>
                                <a href="#">Digital Marketing<i></i></a>
                            </li>
                            <li>
                                <a href="#">IT Management<i></i></a>
                            </li>
                            <li>
                                <a href="#">Cyber Security<i></i></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <img class="srviceD-icon" src="../../img/icon-2.png" alt="icon"></img>
                        </div>
                        <h3 class="serviceD-contact-title">Don't hesitate to contact us</h3>
                        <p class="serviceD-contact-text">At our IT solution company, we are committed to exceptional</p>
                        <button class="serviceD-contact-btn">Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}