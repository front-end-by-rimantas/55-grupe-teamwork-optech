export function singlePortfolioSection2 () {
   
   let HTML = `
    <div class="container">
        <div class="row">
           <div>
               <img src="../img/single-portfolio/p_details.webp" alt="">
           </div>
           <div>
               <div>
                   <h3>Project overview</h3>
                   <p>A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively. There are various kinds of content management systems available—from cloud-based to a headless</p>
                   <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                   <h3>The challenge of project</h3>
                   <p>A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                   <img src="../img/single-portfolio/p1.webp" alt="">
                   <img src="../img/single-portfolio/p2.webp" alt="">
                   <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                   <p class="fa fa-check">Creating and editing content</p>
                   <p class="fa fa-check">Workflows, reporting, and content organization</p>
                   <p class="fa fa-check">User & role-based administration and security</p>
                   <p class="fa fa-check">Flexibility, scalability, and performance and analysis</p>
                   <p class="fa fa-check">Multilingual content capabilities</p>
                   <h3>Final results</h3>
                   <p>Having a content management system for your website allows you to have control of your content. It means having the ability to update, change or delete any images, text, video, or audio. It allows you to keep your site organized, up to date and looking.</p>
               </div>
               <div>
                    <div>
                        <h3>Project Details</h3>
                        <div>
                           <h5>Client</h5>
                           <p>Porter Victoria</p>
                        </div>
                        <div>
                           <h5>Category</h5>
                           <p>Web Development</p>
                        </div>
                        <div>
                           <h5>Date</h5>
                           <p>20 January, 2023</p>
                        </div>
                        <div>
                           <h5>Website</h5>
                           <p>example@gmail.com</p>
                        </div>
                        <div>
                           <a href="#">Fb</a>
                           <a href="#">Li</a>
                           <a href="#">Tw</a>
                           <a href="#">In</a>
                        </div>
                    </div>
                    <div class="serviceD-contact">
                        <div class="serviceD-icon" >
                            <img src="../img/service-details-section2/icon-5.png" alt="icon">
                        </div>
                        <h3 class="serviceD-contact-title">Don't hesitate to contact us</h3>
                        <p class="serviceD-contact-text">At our IT solution company, we are committed to exceptional</p>
                        <button class="btn">Get in Touch</button>
                    </div>
               </div>    
           </div>
           <div></div>
           <div>
               <button class="grey-btn">
               <p>Prev Project</p>
               <h3>CMS Software Solution</h3>
               <p>Next Project</p>
               <h3>Health App Development</h3>
               <button class="grey-btn">
           </div>
        </div>
    </div>`;
        
    
        document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}