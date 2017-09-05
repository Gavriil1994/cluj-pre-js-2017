const Footer = function() {
    return `
    <footer  id='footer'>
    <div class="container">
        <p class="footer-paragraph"> Copyright@Softvision 2017 </p>
        </div>
        </footer>

    `;

}
const NAV = function(options={}) {
    return `
    <div 
    class="topnav" id="Topnav">
    <img src="assets/logo.png" style="width:15%; height:30px;float:left">
    <a href="#evaluations">Evaluations</a>
    <a href="#newevaluations">New Evaluations</a>
    <a style="float:right" href="#logout">Logout</a>
</div>
`
    
}
