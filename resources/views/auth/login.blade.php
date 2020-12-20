<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Log In &middot; room scope &middot; </title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="description" content="Elephant is an admin template that helps you build modern Admin Applications, professionally fast! Built on top of Bootstrap, it includes a large collection of HTML, CSS and JS components that are simple to use and easy to customize.">
    <meta property="og:url" content="http://demo.madebytilde.com/elephant">
    <meta property="og:type" content="website">
    <meta property="og:title" content="The fastest way to build Modern Admin APPS for any platform, browser, or device.">
    <meta property="og:description" content="Elephant is an admin template that helps you build modern Admin Applications, professionally fast! Built on top of Bootstrap, it includes a large collection of HTML, CSS and JS components that are simple to use and easy to customize.">
    <meta property="og:image" content="http://demo.madebytilde.com/elephant.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@madebytilde">
    <meta name="twitter:creator" content="@madebytilde">
    <meta name="twitter:title" content="The fastest way to build Modern Admin APPS for any platform, browser, or device.">
    <meta name="twitter:description" content="Elephant is an admin template that helps you build modern Admin Applications, professionally fast! Built on top of Bootstrap, it includes a large collection of HTML, CSS and JS components that are simple to use and easy to customize.">
    <meta name="twitter:image" content="http://demo.madebytilde.com/elephant.jpg">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="manifest.json">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#27ae60">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700">
    <link rel="stylesheet" href="backend/css/vendor.min.css">
    <link rel="stylesheet" href="backend/css/elephant.min.css">
    <link rel="stylesheet" href="backend/css/login-3.min.css">
  </head>
  <body>
    <div class="login">
      <div class="login-body">
        <a class="login-brand" href="index.html">
          <img class="img-responsive" src="backend/img/logo.png" alt="Elephant">
        </a>
        <h3 class="login-heading">Sign in</h3>
        <div class="login-form">
          {{-- <form data-toggle="md-validator"> --}}
            <form method="POST" data-toggle="md-validator" action="{{ route('login') }}">
                        @csrf
            <div class="md-form-group md-label-floating">
                <input id="email" type="email" class="md-form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" >
              {{-- <input class="md-form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-msg-required="Please enter your email address." required> --}}
              {{-- <label class="md-control-label">Email</label> --}}
              <label for="email" class="md-control-label">{{ __('E-Mail Address') }}</label>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="md-form-group md-label-floating">
                <input id="password" type="password" class="md-form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
             {{--  <input class="md-form-control" type="password" name="password" minlength="6" data-msg-minlength="Password must be 6 characters or more." data-msg-required="Please enter your password." required> --}}
              <label for="password" class="md-control-label">{{ __('Password') }}</label>
              {{-- <label class="md-control-label">Password</label> --}}
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="md-form-group md-custom-controls">
              <label class="custom-control custom-control-primary custom-checkbox">
                <input class="custom-control-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                {{-- <input class="custom-control-input" type="checkbox" checked="checked"> --}}
                <span class="custom-control-indicator"></span>
                <span class="custom-control-label">Remember Me</span>
              </label>
              {{-- <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label> --}}
              <span aria-hidden="true"> · </span>
              <a href="password-3.html">Forgot password?</a>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
                                    {{ __('Login') }}
                                </button>
            {{-- <button class="btn btn-primary btn-block" type="submit">Sign in</button> --}}
          </form>
        </div>
      </div>
      <div class="login-footer">
        Don't have an account? <a href="{{ route('register') }}">Sign Up</a>
      </div>
    </div>
    <script src="backend/js/vendor.min.js"></script>
    <script src="backend/js/elephant.min.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-83990101-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
