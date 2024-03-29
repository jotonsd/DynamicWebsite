<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sign Up &middot; Elephant Template &middot; The fastest way to build Modern Admin APPS for any platform, browser, or device.</title>
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
    <link rel="icon" type="image/png" href="backend/backend/img/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="backend/backend/img/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="manifest.json">
    <link rel="mask-icon" href="safari-pinned-tab.png" color="#27ae60">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700">
    <link rel="stylesheet" href="backend/css/vendor.min.css">
    <link rel="stylesheet" href="backend/css/elephant.min.css">
    <link rel="stylesheet" href="backend/css/signup-3.min.css">
  </head>
  <body>
    <div class="signup">
      <div class="signup-body">
        <a class="signup-brand" href="index.html">
          {{-- <img class="img-responsive" src="backend/img/logo.png" alt="Elephant"> --}}
        </a>
        <p class="signup-heading">
          <em>Get started with a free account. 30 day free trial, unlimited users, no credit card required.</em>
        </p>
        <h3 class="signup-heading">Sign up</h3>
        <div class="signup-form">
            <form data-toggle="md-validator" data-groups='{"birthdate": "birth_month birth_day birth_year"}' method="POST" action="{{ route('register') }}">
            @csrf
            <div class="row">
            <div class="col-sm-12">
                <div class="md-form-group md-label-floating">
                    <input id="name"  type="text" class="md-form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required data-msg-required="Please enter your first name." autocomplete="name" >
                    <label for="name" class="md-control-label">{{ __('Name') }}</label>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            </div>

{{--             <div class="row">
              <div class="col-sm-6">
                <div class="md-form-group md-label-floating">
                  <input class="md-form-control" type="text" name="first_name" spellcheck="false"  required>
                  <label class="md-control-label">First name</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="md-form-group md-label-floating">
                  <input class="md-form-control" type="text" name="last_name" spellcheck="false" data-msg-required="Please enter your last name." required>
                  <label class="md-control-label">Last name</label>
                </div>
              </div>
            </div> --}}
            <div class="row">
              <div class="col-sm-12">
                <div class="md-form-group md-label-floating">
                  <input id="email" type="email" class="md-form-control @error('email') is-invalid @enderror" name="email" data-msg-required="Please enter your email address."  value="{{ old('email') }}" required autocomplete="email">
                 {{--  <input class="md-form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-msg-required="Please enter your email address." required> --}}
                  <label for="email" class="md-control-label">{{ __('E-Mail Address') }}</label>
                  {{-- <label class="md-control-label">Email</label> --}}
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="md-form-group md-label-floating">
                  <input id="password" type="password" class="md-form-control @error('password') is-invalid @enderror" name="password" minlength="6" data-msg-minlength="Password must be 6 characters or more." required autocomplete="new-password">

                  {{-- <input class="md-form-control" type="password" name="password" minlength="6" data-msg-minlength="Password must be 6 characters or more." data-msg-required="Please enter your password." required> --}}
                  <label for="password" class="md-control-label">{{ __('Password') }}</label>
                  {{-- <label class="md-control-label">Password</label> --}}
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
              </div>
              <div class="col-sm-6">
                <div class="md-form-group md-label-floating">
                  <input id="password-confirm" type="password" class="md-form-control" name="password_confirmation" required minlength="6" data-msg-minlength="Password must be 6 characters or more." autocomplete="new-password">
                 {{--  <input class="md-form-control" type="password" name="password" minlength="6" data-msg-minlength="Password must be 6 characters or more." data-msg-required="Please enter your password." required> --}}
                  <label for="password-confirm" class="md-control-label">{{ __('Confirm Password') }}</label>
                  {{-- <label class="md-control-label">Password</label> --}}
                </div>
              </div>
            </div>
{{--             <div class="row">
              <div class="col-xs-12">
                <div class="md-form-group">
                  <div class="row">
                    <div class="col-xs-6">
                      <div class="md-form-group">
                        <select class="md-form-control" name="birth_month" data-msg-required="Please enter your birthday." required>
                          <option value="" disabled="disabled" selected="selected">Birth Month</option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                        <label class="md-control-label"></label>
                      </div>
                    </div>
                    <div class="col-xs-3">
                      <div class="md-form-group">
                        <select class="md-form-control" name="birth_day" data-msg-required="Please enter your birthday." required>
                          <option value="" selected="selected" disabled="disabled">Day</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                        <label class="md-control-label"></label>
                      </div>
                    </div>
                    <div class="col-xs-3">
                      <div class="md-form-group">
                        <select class="md-form-control" name="birth_year" data-msg-required="Please enter your birthday." required>
                          <option value="" selected="selected" disabled="disabled">Year</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                          <option value="2014">2014</option>
                          <option value="2013">2013</option>
                          <option value="2012">2012</option>
                          <option value="2011">2011</option>
                          <option value="2010">2010</option>
                          <option value="2009">2009</option>
                          <option value="2008">2008</option>
                          <option value="2007">2007</option>
                          <option value="2006">2006</option>
                          <option value="2005">2005</option>
                          <option value="2004">2004</option>
                          <option value="2003">2003</option>
                          <option value="2002">2002</option>
                          <option value="2001">2001</option>
                          <option value="2000">2000</option>
                          <option value="1999">1999</option>
                          <option value="1998">1998</option>
                          <option value="1997">1997</option>
                          <option value="1996">1996</option>
                          <option value="1995">1995</option>
                          <option value="1994">1994</option>
                          <option value="1993">1993</option>
                          <option value="1992">1992</option>
                          <option value="1991">1991</option>
                          <option value="1990">1990</option>
                          <option value="1989">1989</option>
                          <option value="1988">1988</option>
                          <option value="1987">1987</option>
                          <option value="1986">1986</option>
                          <option value="1985">1985</option>
                          <option value="1984">1984</option>
                          <option value="1983">1983</option>
                          <option value="1982">1982</option>
                          <option value="1981">1981</option>
                          <option value="1980">1980</option>
                          <option value="1979">1979</option>
                          <option value="1978">1978</option>
                          <option value="1977">1977</option>
                          <option value="1976">1976</option>
                          <option value="1975">1975</option>
                          <option value="1974">1974</option>
                          <option value="1973">1973</option>
                          <option value="1972">1972</option>
                          <option value="1971">1971</option>
                          <option value="1970">1970</option>
                          <option value="1969">1969</option>
                          <option value="1968">1968</option>
                          <option value="1967">1967</option>
                          <option value="1966">1966</option>
                          <option value="1965">1965</option>
                          <option value="1964">1964</option>
                          <option value="1963">1963</option>
                          <option value="1962">1962</option>
                          <option value="1961">1961</option>
                          <option value="1960">1960</option>
                          <option value="1959">1959</option>
                          <option value="1958">1958</option>
                          <option value="1957">1957</option>
                          <option value="1956">1956</option>
                          <option value="1955">1955</option>
                          <option value="1954">1954</option>
                          <option value="1953">1953</option>
                          <option value="1952">1952</option>
                          <option value="1951">1951</option>
                          <option value="1950">1950</option>
                          <option value="1949">1949</option>
                          <option value="1948">1948</option>
                          <option value="1947">1947</option>
                          <option value="1946">1946</option>
                          <option value="1945">1945</option>
                          <option value="1944">1944</option>
                          <option value="1943">1943</option>
                          <option value="1942">1942</option>
                          <option value="1941">1941</option>
                          <option value="1940">1940</option>
                          <option value="1939">1939</option>
                          <option value="1938">1938</option>
                          <option value="1937">1937</option>
                          <option value="1936">1936</option>
                          <option value="1935">1935</option>
                          <option value="1934">1934</option>
                          <option value="1933">1933</option>
                          <option value="1932">1932</option>
                          <option value="1931">1931</option>
                          <option value="1930">1930</option>
                          <option value="1929">1929</option>
                          <option value="1928">1928</option>
                          <option value="1927">1927</option>
                          <option value="1926">1926</option>
                          <option value="1925">1925</option>
                          <option value="1924">1924</option>
                          <option value="1923">1923</option>
                          <option value="1922">1922</option>
                          <option value="1921">1921</option>
                          <option value="1920">1920</option>
                          <option value="1919">1919</option>
                          <option value="1918">1918</option>
                          <option value="1917">1917</option>
                          <option value="1916">1916</option>
                          <option value="1915">1915</option>
                          <option value="1914">1914</option>
                          <option value="1913">1913</option>
                          <option value="1912">1912</option>
                          <option value="1911">1911</option>
                          <option value="1910">1910</option>
                          <option value="1909">1909</option>
                          <option value="1908">1908</option>
                          <option value="1907">1907</option>
                          <option value="1906">1906</option>
                          <option value="1905">1905</option>
                          <option value="1904">1904</option>
                          <option value="1903">1903</option>
                          <option value="1902">1902</option>
                          <option value="1901">1901</option>
                          <option value="1900">1900</option>
                        </select>
                        <label class="md-control-label"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="md-form-group">
                  <select class="md-form-control" name="gender" data-msg-required="Please indicate your gender." required>
                    <option value="" disabled="disabled" selected="selected">Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Not specified</option>
                  </select>
                  <label class="md-control-label"></label>
                </div>
              </div>
            </div> --}}
            <button type="submit" class="btn btn-primary btn-block">{{ __('Register') }}</button>
            {{-- <button class="btn btn-primary btn-block" type="submit">Sign up</button> --}}
          </form>
        </div>
      </div>
      <div class="signup-footer">
        Already have an account? <a href="{{ route('login') }}">Log in</a>
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
