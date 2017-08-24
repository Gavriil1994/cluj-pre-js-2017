const LoginForm = function(option) {
    return `
    <section style="margin-top: auto">
    <div style="background-image:url(feedback-banner.jpg);width:100%;height:100%; opacity: 0.7"/>
     <hgroup >
   <h1>SV</h1>
 </hgroup>   
   <form>
       <hgroup >
   <h1>Interview Feedback</h1>
 </hgroup>
    
   <div class="group">
     <input type="text"><span class="highlight"></span><span class="bar"></span>
     <label>Username</label>
   </div>
   <div class="group">
     <input type="email">
       <span class="highlight"></span>
       <span class="bar"></span>
     <label>Password</label>
   </div>
   <button type="button" class="button buttonBlue">
     
       </div>
   </button>
 </form>
 </section>
    `;
}
const SubmitFeedbackSection = function(option) {
    return `<section  style="display:inline-flex; background-color: white">
    <img src="new feedback.jpg" width="20%" height="300px" >
    
  
<article style="width:1200px;margin:0 auto;" >
   <div style="display:inline-block; width:75%; padding-left: 30px; vertical-align: middle">
     <h3 style="vertical-align: middle; color:black"> Submit new feedback
       </h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.

     </p>
   </div>
    </article>
   

   </section>`;
}
const SubmitFeedbackResults = function(option) {
    return `
    <section style="background-color:ghostwhite;margin: 0 ; ">
    
      
   <article style="width:1200px;margin:0 auto;" >
        
       <div style="display:inline-block; width:75%; padding-right: 30px; vertical-align: middle">
       <h3 style="color:black"> View feedback results

</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.

    </p>
       </div>
       <img src="results.jpg" width="20%" height="250px" style="vertical-align: middle" />
    </article>

    </section >`;
}
const Footer = function(option) {
    return`
<section style="background-color: darkgray">
<footer >
    <h1 style="float: right">Copyright@SOftvision 2017
    </h1></footer>
   </section>`;
}
const LoginPage = function(option){
    return `
    ${LoginForm()}
    ${SubmitFeedbackSection()}
    ${SubmitFeedbackResults()}
    ${Footer()}
`;
}
window.onload = function() {
const result = document.querySelector("#app");
result.innerHTML = LoginPage();



}