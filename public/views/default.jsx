var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
	        <link rel="icon" href="https://cdn.rawgit.com/nashy18/nodejs-reactjs/f17f056e/public/static/images/favicon.jpg" type="image/x-icon"/>
            <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://cdn.rawgit.com/nashy18/cdn/c703fb27/css/custom.css" />
	    <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		  ga('create', 'UA-104390018-1', 'auto');
		  ga('send', 'pageview');
	    </script>
        </head>
        <body>
            <header>  
                <div className="header-nav-top">
                    <div className="container">
                       <div className="col-md-4 header-nav-top-height">
                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/facebook_icon.png" />&nbsp;
                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/Linkedin_icon.png" />&nbsp;
                            <img src="https://cdn.rawgit.com/nashy18/cdn/47dd45eb/images/Twitter_icon.png" />&nbsp;
                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/Youtube_icon.png" />
                       </div>
                       <div className="col-md-8">&nbsp;</div>
                    </div>
                </div>            
                 <div className="container">
                   <div className="col-md-12">&nbsp;</div>
                   <div className="col-md-10 col-md-offset-2">
                        <nav className="navbar">
                          <div className="">
                            <ul className="nav navbar-nav">
                              <li><a href="#" className="color-dark-blue">ABOUT</a></li>
                              <li><a href="#" className="color-dark-blue">MEMBERSHIP BENIFITS</a></li>
                              <li><a href="#" className="color-dark-blue">RESOURCES</a></li>
                              <li className="active"><a href="/blog" className="color-yellow">BLOG</a></li>
                              <li><a href="#" className="color-dark-blue">CONTACT</a></li>
                              <li>&nbsp;</li>
                            </ul>
                            <button className="btn btn-yellow navbar-btn">CLAIM FREE REPORT</button>&nbsp;
                            <button className="btn btn-dark-blue navbar-btn">LOGIN</button>
                          </div>
                        </nav>
                   </div>                  
                 </div>
            </header>
            <div id="divMainContent">
                {this.props.children}               
            </div>
            <hr />	 
		    <footer>            
	             <div className="container">                        
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <h5>&nbsp;</h5>
        	                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d124924.7306030682!2d77.65012782263165!3d12.914560757412866!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1495644052857" width="100%" height="120px;" frameBorder="0"></iframe>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <p style={{paddingTop:'5px'}}>FOLLOW US</p>
                                        </div>
                                        <div className="col-md-7">
                                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/facebook_Blk_icon.png" className="img-rounded footer-icon" />&nbsp;
                                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/Twitter_Blk_icon.png" className="img-rounded footer-icon"/>&nbsp;
                                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/Linkedin_Blk_icon.png" className="img-rounded footer-icon" />&nbsp;
                                            <img src="https://cdn.rawgit.com/nashy18/cdn/adef8b6c/images/Youtube_Blk_icon.png" className="img-rounded footer-icon" />
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="col-md-1">
                                    &nbsp;
                                </div>
      	                        <div className="col-md-3">
    		                        <h5 className="text-uppercase"><strong>Quick Links</strong></h5>
                                    <p><a href="#">Existing Members? Login</a></p>
                                    <p><a href="/blog">Blogs</a></p>
                                    <p><a href="#">Webinars</a></p>
                                    <p><a href="#">Videos</a></p>
                                    <p><a href="#">eBooks</a></p>
                                    <p><a href="#">Customer Service</a></p>
      	                        </div>
                                <div className="col-md-1">
                                    &nbsp;
                                </div>
                                <div className="col-md-4 pull-right">
    		                        <h5 className="text-uppercase"><strong>Download Free Ebook</strong></h5>
    		                        <form>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input id="name" type="text" className="form-control" name="name" placeholder="Name" required/>
                                      </div>
                                      <div className="input-group form-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                        <input id="email" type="email" className="form-control" name="email" placeholder="Email" required/>
                                      </div>
                                      <div className="input-group">
                                        <button type="button" className="btn btn-sm btn-yellow">DOWNLOAD BOOK</button>
                                      </div>
    		                        </form>
                                </div>                              
                            </div>
                            <div className="row">
                                  <hr />
                            </div>
                            <div className="row text-center form-group">
                                <p>2017 &copy; All Rights Reserved</p>
                            </div> 
	                </div>
			    </div>
		    </footer>
		</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
