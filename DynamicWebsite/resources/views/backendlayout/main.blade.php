<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    @yield('title')
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="description" content="">
    <meta property="og:type" content="website">
    <meta property="og:description" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="manifest.json">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#27ae60">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700">
    <link rel="stylesheet" href="backend/css/vendor.min.css">
    <link rel="stylesheet" href="backend/css/elephant.min.css">
    <link rel="stylesheet" href="backend/css/application.min.css">
    
    <script src="https://use.fontawesome.com/bf5fc1365b.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


    <style type="text/css">
      .headcircle{
        color: white;text-align: left;margin-left: 2px;
      }
      .headcirclediv{
        background-color: #607D8B; border-radius: 0px 25px 25px 0px;height: 40px;width: 130px;
        margin-bottom: 5px;
      }
      .headcirclediv1{
        background-color: #607D8B; border-radius: 0px 25px 25px 0px;height: 40px;width: 180px;
        margin-bottom: 5px;
      }
      .headcirclediv2{
        background-color: #607D8B; border-radius: 0px 25px 25px 0px;height: 40px;width: 225px;
        margin-bottom: 5px;
      }
      .headcirclediv3{
        background-color: #607D8B; border-radius: 0px 25px 25px 0px;height: 40px;width: 155px;
        margin-bottom: 5px;
      }
      .headcirclediv4{
        background-color: #607D8B; border-radius: 0px 25px 25px 0px;height: 40px;width: 175px;
        margin-bottom: 5px;
      }
      .headcirclediv5{
        background-color: #607D8B; border-radius: 0px 25px 25px 0px;height: 40px;width: 190px;
        margin-bottom: 5px;
      }
      .margintb{
        margin-top:5px;margin-bottom: 5px;
      }
    </style>
    {{-- image upload css --}}
    {{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" /> --}}
    {{-- image upload css --}}
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> --}}
  </head>
  <body class="layout layout-header-fixed">
    <div class="layout-header">
      <div class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand navbar-brand-center" href="{{route('home')}}">
            {{-- <img class="navbar-brand-logo" src="backend/img/logo.png" alt="Elephant"> --}}
            Admin Panel
          </a>
          <button class="navbar-toggler visible-xs-block collapsed" type="button" data-toggle="collapse" data-target="#sidenav">
            <span class="sr-only">Toggle navigation</span>
            <span class="bars">
              <span class="bar-line bar-line-1 out"></span>
              <span class="bar-line bar-line-2 out"></span>
              <span class="bar-line bar-line-3 out"></span>
            </span>
            <span class="bars bars-x">
              <span class="bar-line bar-line-4"></span>
              <span class="bar-line bar-line-5"></span>
            </span>
          </button>
          <button class="navbar-toggler visible-xs-block collapsed" type="button" data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="arrow-up"></span>
            <span class="ellipsis ellipsis-vertical">
              <img class="ellipsis-object" width="32" height="32" src="backend/img/avatar.png" alt="{{ Auth::User()->name }}">
            </span>
          </button>
        </div>
        <div class="navbar-toggleable">
          <nav id="navbar" class="navbar-collapse collapse">
            <button class="sidenav-toggler hidden-xs" title="Collapse sidenav ( [ )" aria-expanded="true" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="bars">
                <span class="bar-line bar-line-1 out"></span>
                <span class="bar-line bar-line-2 out"></span>
                <span class="bar-line bar-line-3 out"></span>
                <span class="bar-line bar-line-4 in"></span>
                <span class="bar-line bar-line-5 in"></span>
                <span class="bar-line bar-line-6 in"></span>
              </span>
            </button>
            <ul class="nav navbar-nav navbar-right">
              <li class="visible-xs-block">
                <h4 class="navbar-text text-center">Hi, {{Auth::User()->name}}</h4>
              </li>
              {{-- <li class="hidden-xs hidden-sm">
                <form class="navbar-search navbar-search-collapsed">
                  <div class="navbar-search-group">
                    <input class="navbar-search-input" type="text" placeholder="Search for people, companies, and more&hellip;">
                    <button class="navbar-search-toggler" title="Expand search form ( S )" aria-expanded="false" type="submit">
                      <span class="icon icon-search icon-lg"></span>
                    </button>
                    <button class="navbar-search-adv-btn" type="button">Advanced</button>
                  </div>
                </form>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="index.html#" role="button" data-toggle="dropdown" aria-haspopup="true">
                  <span class="icon-with-child hidden-xs">
                    <span class="icon icon-envelope-o icon-lg"></span>
                    <span class="badge badge-danger badge-above right">8</span>
                  </span>
                  <span class="visible-xs-block">
                    <span class="icon icon-envelope icon-lg icon-fw"></span>
                    <span class="badge badge-danger pull-right">8</span>
                    Messages
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                  <div class="dropdown-header">
                    <a class="dropdown-link" href="compose.html">New Message</a>
                    <h5 class="dropdown-heading">Recent messages</h5>
                  </div>
                  <div class="dropdown-body">
                    <div class="list-group list-group-divided custom-scrollbar">
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0299419341.jpg" alt="Harry Jones">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">16 min</small>
                            <h5 class="notification-heading">Harry Jones</h5>
                            <p class="notification-text">
                              <small class="truncate">Hi Teddy, Just wanted to let you know we got the project! We should be starting the planning next week. Harry</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0310728269.jpg" alt="Daniel Taylor">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">2 hr</small>
                            <h5 class="notification-heading">Daniel Taylor</h5>
                            <p class="notification-text">
                              <small class="truncate">Teddy Boyyyy, label text isn't vertically aligned with value text in grid forms when using .form-control... DT</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0460697039.jpg" alt="Charlotte Harrison">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">Sep 20</small>
                            <h5 class="notification-heading">Charlotte Harrison</h5>
                            <p class="notification-text">
                              <small class="truncate">Dear Teddy, Can we discuss the benefits of this approach during our Monday meeting? Best regards Charlotte Harrison</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0531871454.jpg" alt="Ethan Walker">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">Sep 19</small>
                            <h5 class="notification-heading">Ethan Walker</h5>
                            <p class="notification-text">
                              <small class="truncate">If you need any further assistance, please feel free to contact us. We are always happy to assist you. Regards, Ethan</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0601274412.jpg" alt="Sophia Evans">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">Sep 18</small>
                            <h5 class="notification-heading">Sophia Evans</h5>
                            <p class="notification-text">
                              <small class="truncate">Teddy, Please call me when you finish your work! I have many things to discuss. Don't forget call me !! Sophia</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0777931269.jpg" alt="Harry Walker">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">Sep 17</small>
                            <h5 class="notification-heading">Harry Walker</h5>
                            <p class="notification-text">
                              <small class="truncate">Thank you for your message. I am currently out of the office, with no email access. I will be returning on 20 Jun.</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0872116906.jpg" alt="Emma Lewis">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">Sep 15</small>
                            <h5 class="notification-heading">Emma Lewis</h5>
                            <p class="notification-text">
                              <small class="truncate">Teddy, Please find the attached report. I am truly sorry and very embarrassed about not finishing the report by the deadline.</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0980726243.jpg" alt="Eliot Morgan">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">Sep 15</small>
                            <h5 class="notification-heading">Eliot Morgan</h5>
                            <p class="notification-text">
                              <small class="truncate">Dear Teddy, Please accept this message as notification that I was unable to work yesterday, due to personal illness.m</small>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="dropdown-footer">
                    <a class="dropdown-btn" href="index.html#">See All</a>
                  </div>
                </div>
              </li> --}}
              {{-- <li class="dropdown">
                <a class="dropdown-toggle" href="index.html#" role="button" data-toggle="dropdown" aria-haspopup="true">
                  <span class="icon-with-child hidden-xs">
                    <span class="icon icon-bell-o icon-lg"></span>
                    <span class="badge badge-danger badge-above right">7</span>
                  </span>
                  <span class="visible-xs-block">
                    <span class="icon icon-bell icon-lg icon-fw"></span>
                    <span class="badge badge-danger pull-right">7</span>
                    Notifications
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                  <div class="dropdown-header">
                    <a class="dropdown-link" href="index.html#">Mark all as read</a>
                    <h5 class="dropdown-heading">Recent Notifications</h5>
                  </div>
                  <div class="dropdown-body">
                    <div class="list-group list-group-divided custom-scrollbar">
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <span class="icon icon-exclamation-triangle bg-warning rounded sq-40"></span>
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">35 min</small>
                            <h5 class="notification-heading">Update Status</h5>
                            <p class="notification-text">
                              <small class="truncate">Failed to get available update data. To ensure the proper functioning of your application, update now.</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <span class="icon icon-flag bg-success rounded sq-40"></span>
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">43 min</small>
                            <h5 class="notification-heading">Account Contact Change</h5>
                            <p class="notification-text">
                              <small class="truncate">A contact detail associated with your account teddy.wilson, has recently changed.</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <span class="icon icon-exclamation-triangle bg-warning rounded sq-40"></span>
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">1 hr</small>
                            <h5 class="notification-heading">Failed Login Warning</h5>
                            <p class="notification-text">
                              <small class="truncate">There was a failed login attempt from "192.98.19.164" into the account teddy.wilson.</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0310728269.jpg" alt="Daniel Taylor">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">4 hr</small>
                            <h5 class="notification-heading">Daniel Taylor</h5>
                            <p class="notification-text">
                              <small class="truncate">Like your post: "Everything you know about Bootstrap is wrong".</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0872116906.jpg" alt="Emma Lewis">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">8 hr</small>
                            <h5 class="notification-heading">Emma Lewis</h5>
                            <p class="notification-text">
                              <small class="truncate">Like your post: "Everything you know about Bootstrap is wrong".</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0601274412.jpg" alt="Sophia Evans">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">8 hr</small>
                            <h5 class="notification-heading">Sophia Evans</h5>
                            <p class="notification-text">
                              <small class="truncate">Like your post: "Everything you know about Bootstrap is wrong".</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <a class="list-group-item" href="index.html#">
                        <div class="notification">
                          <div class="notification-media">
                            <img class="rounded" width="40" height="40" src="backend/img/0180441436.jpg" alt="Teddy Wilson">
                          </div>
                          <div class="notification-content">
                            <small class="notification-timestamp">9 hr</small>
                            <h5 class="notification-heading">Teddy Wilson</h5>
                            <p class="notification-text">
                              <small class="truncate">Published a new post: "Everything you know about Bootstrap is wrong".</small>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="dropdown-footer">
                    <a class="dropdown-btn" href="index.html#">See All</a>
                  </div>
                </div>
              </li> --}}
              <li class="dropdown hidden-xs">
                <button class="navbar-account-btn" data-toggle="dropdown" aria-haspopup="true">
                  <img class="rounded" width="36" height="36" src="backend/img/avatar.png" alt="{{ Auth::User()->name}}"> {{ Auth::User()->name}}
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                  {{-- <li>
                    <a href="upgrade.html">
                      <h5 class="navbar-upgrade-heading">
                        Upgrade Now
                        <small class="navbar-upgrade-notification">You have 15 days left in your trial.</small>
                      </h5>
                    </a>
                  </li> --}}
                  {{-- <li class="divider"></li>
                  <li class="navbar-upgrade-version">Version: 1.0.0</li>
                  <li class="divider"></li> --}}
                  <li><a href="/">Back to website</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="profile.html">Profile</a></li>
                  <li><a href="{{ route('log_out') }}">Sign out</a></li>
                </ul>
              </li>
              <li class="visible-xs-block">
                <a href="/">
                  <span class="icon icon-globe icon-lg icon-fw"></span>
                  Back to website
                </a>
              </li>
              <li class="visible-xs-block">
                <a href="contacts.html">
                  <span class="icon icon-users icon-lg icon-fw"></span>
                  Contacts
                </a>
              </li>
              <li class="visible-xs-block">
                <a href="profile.html">
                  <span class="icon icon-user icon-lg icon-fw"></span>
                  Profile
                </a>
              </li>
              <li class="visible-xs-block">
                <a href="login-1.html">
                  <span class="icon icon-power-off icon-lg icon-fw"></span>
                  Sign out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="layout-main">
      <div class="layout-sidebar">
        <div class="layout-sidebar-backdrop"></div>
        <div class="layout-sidebar-body">
          <div class="custom-scrollbar">
            <nav id="sidenav" class="sidenav-collapse collapse">
              <ul class="sidenav">
                <li class="sidenav-search hidden-md hidden-lg">
                  <form class="sidenav-form" action="../../demo_madebytilde_default_2.html">
                    <div class="form-group form-group-sm">
                      <div class="input-with-icon">
                        <input class="form-control" type="text" placeholder="Search…">
                        <span class="icon icon-search input-icon"></span>
                      </div>
                    </div>
                  </form>
                </li>
                <li class="sidenav-heading">Navigation</li>
                <li class="sidenav-item">
                  
                  <a href="/home" aria-haspopup="true">
                    <span class="sidenav-icon"><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                    <span class="sidenav-label">Dashboard</span>
                  </a>
                </li>

                @foreach($menus as $menu)
                <li class="sidenav-item" class="treeview" id="tree1">
                  
                  <a href="{{ $menu->url }}" aria-haspopup="true">
                    <span class="sidenav-icon"><i class="fa fa-folder-open" aria-hidden="true"></i></span>
                    <span class="sidenav-label">{{ $menu->title }}
                  </a>
                  {{-- @if(count($menu->childs))
                     @include('backendlayout.manageChild',['childs' => $menu->childs])
                  @endif --}}
                </li>

                  @endforeach
                {{--  --}}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      @yield('content')
      <div class="layout-footer">
        <div class="layout-footer-body">
          <small class="copyright">2021 &copy; a2jsoft.com</small>
        </div>
      </div>
    </div>
    
    <script src="backend/js/vendor.min.js"></script>
    <script src="backend/js/elephant.min.js"></script>
    <script src="backend/js/application.min.js"></script>

  </body>
</html>