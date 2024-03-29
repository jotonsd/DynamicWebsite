<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      @yield('title')
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="frontend/css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" href="frontend/css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="frontend/css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="frontend/images/fevicon.png" type="image/gif" />
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="frontend/css/jquery.mCustomScrollbar.min.css">
      <!-- Tweaks for older IEs-->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
      <style>
        .megamenu-li {
          position: static;
        }

        .megamenu {
            position: absolute;
            width: 200%;
            left: 0;
            right: 0;
            padding: 15px;
            margin-left: -55%;
        }

      </style>

   </head>
   <!-- body -->
   <body class="main-layout">
      <!-- loader  -->
      <div class="loader_bg">
         <div class="loader"><img src="frontend/images/logo.jpg" alt="#" /></div>
      </div>
      <!-- end loader --> 
      <!-- header -->
      <header>
         <!-- header inner -->
         <div class="header">
            <div class="head_top">
               <div class="container">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                       <div class="top-box">
                        <ul class="sociel_link">
                         <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                         <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                         <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                         <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>
                     </ul>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                       <div class="top-box">
                        <p>long established fact that a reader will be </p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                     <div class="center-desk">
                        <div class="logo"> <a href="index.html"><img src="frontend/images/logo.jpg" alt="logo"/></a> </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                  <div class="menu-area">
                     <div class="limit-box">
                        <nav class="main-menu navbar navbar-expand-lg">
                           <ul class="menu-area-main">
                              <li class="active"> <a href="index.html">Home</a> </li>
                              <li> <a href="about.html">About</a> </li>
                              <li class="nav-item dropdown position-static"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#">Software</a>
                    <div class="dropdown-menu w-100 top-auto">
                        <div class="container">
                            <div class="row w-100">
                                <div class="text-center col-sm-4">
                                    <h3 class="border border-top-0 border-right-0 border-left-0">Individuals</h3>
                                    <a href="https://www.pramukhime.com/windows-application" class="dropdown-item">Windows Application</a>
                                    <a title="Windows Application" href="https://www.pramukhime.com/windows-application" class="dropdown-item">Windows Application</a>
                                    <a title="Android App" href="https://www.pramukhime.com/android-app" class="dropdown-item">Android App</a>
                                    <a title="FireFox Extension" href="https://www.pramukhime.com/firefox-extension" class="dropdown-item">FireFox Extension</a>
                                </div>
                                <div class="text-center col-sm-4">
                                    <h3 class="border border-top-0 border-right-0 border-left-0">Owners</h3>
                                    <a title="WordPress Plugin" href="https://www.pramukhime.com/wordpress-plugin" class="dropdown-item">WordPress Plugin</a>
                                    <a title="Drupal Module" href="https://www.pramukhime.com/drupal-module" class="dropdown-item">Drupal Module</a>
                                    <a title="Joomla Extension" href="https://www.pramukhime.com/joomla-extension" class="dropdown-item">Joomla Extension</a>
                                </div>
                                <div class="text-center col-sm-4">
                                    <h3 class="border border-top-0 border-right-0 border-left-0">Developers</h3>
                                    <a title="JavaScript Library" href="https://www.pramukhime.com/javascript-library" class="dropdown-item">JavaScript Library</a>
                                    <a title="TinyMCE Plugin" href="https://www.pramukhime.com/tinymce-plugin" class="dropdown-item">TinyMCE Plugin</a>
                                    <a title="CKEditor Plugin" href="https://www.pramukhime.com/ckeditor-plugin" class="dropdown-item">CKEditor Plugin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                              <li> <a href="blog.html"> Blog</a> </li>
                              <li> <a href="contact.html">Contact</a> </li>
                              <li class="mean-last"> <a href="#contact">signup</a> </li>
                               
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
               <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  <li><a class="buy" href="/login">Login</a></li>
               </div>
            </div>
         </div>
         <!-- end header inner --> 
      </header>
      <!-- end header -->



      @yield('content')
      <!--  footer --> 

      <footr>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-6 offset-md-3">
                     <ul class="sociel">
                         <li> <a href="#"><i class="fa fa-facebook"></i></a></li>
                         <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                         <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                         <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>
                     </ul>
                  </div>
            </div>
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="contact">
                     <h3>conatct us</h3>
                     <span>123 Second Street Fifth Avenue,<br>
                       Manhattan, New York<br>
                        +987 654 3210</span>
                  </div>
               </div>
                 <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="contact">
                     <h3>ADDITIONAL LINKS</h3>
                     <ul class="lik">
                         <li> <a href="#">About us</a></li>
                         <li> <a href="#">Terms and conditions</a></li>
                         <li> <a href="#">Privacy policy</a></li>
                         <li> <a href="#">News</a></li>
                          <li> <a href="#">Contact us</a></li>
                     </ul>
                  </div>
               </div>
                 <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="contact">
                     <h3>service</h3>
                      <ul class="lik">
                    <li> <a href="#"> Data recovery</a></li>
                         <li> <a href="#">Computer repair</a></li>
                         <li> <a href="#">Mobile service</a></li>
                         <li> <a href="#">Network solutions</a></li>
                          <li> <a href="#">Technical support</a></li>
                  </div>
               </div>
                 <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="contact">
                     <h3>About lighten</h3>
                     <span>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices, </span>
                  </div>
               </div>
            </div>
         </div>
            <div class="copyright">
               <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
            </div>
         
      </div>
      </footr>
      <!-- end footer -->
      <!-- Javascript files--> 
      <script src="frontend/js/jquery.min.js"></script> 
      <script src="frontend/js/popper.min.js"></script> 
      <script src="frontend/js/bootstrap.bundle.min.js"></script> 
      <script src="frontend/js/jquery-3.0.0.min.js"></script> 
      <script src="frontend/js/plugin.js"></script> 
      <!-- sidebar --> 
      <script src="frontend/js/jquery.mCustomScrollbar.concat.min.js"></script> 
      <script src="frontend/js/custom.js"></script>
      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
      <script>
         $(document).ready(function(){
         $(".fancybox").fancybox({
         openEffect: "none",
         closeEffect: "none"
         });
         
         $(".zoom").hover(function(){
         
         $(this).addClass('transition');
         }, function(){
         
         $(this).removeClass('transition');
         });
         });

         $(document).ready(function() {
          $(".megamenu").click( function(e) {
            e.stopPropagation();
          });
        });

         
      </script> 
   </body>
</html>