@extends('frontendlayout.main')
@section('title')
<title>Welcome to dynamic website</title>
@endsection
@section('content')
@include('frontendlayout.slider')
<!-- CHOOSE  -->
<div class="whyschose">
    <div class="container">

       <div class="row">
          <div class="col-md-7 offset-md-3">
             <div class="title">
                <h2>Why <strong class="black">choose us</strong></h2>
                <span>Fastest repair service with best price!</span>
             </div>
          </div>
       </div>
    </div>
 </div>
 <div class="choose_bg">
    <div class="container">
       <div class="white_bg">
       <div class="row">
        @foreach ($whyus as $element)
          <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div class="for_box">
                <i><img src="image/services/{{ $element->image}}"/></i>
                <h3>{{ $element->title}}</h3>
                <p>{{ $element->description}}</p>
             </div>
          </dir>
        @endforeach
          
          {{-- <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div class="for_box">
                <i><img src="frontend/icon/2.png"/></i>
                <h3>Computer repair</h3>
                <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
             </div>
          </dir>
          <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div class="for_box">
                <i><img src="frontend/icon/3.png"/></i>
                <h3>Mobile service</h3>
                <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
             </div>
          </dir>
          <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div class="for_box">
                <i><img src="frontend/icon/4.png"/></i>
                <h3>Network solutions</h3>
                <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
             </div>
          </dir> --}}
          <div class="col-md-12">
             <a class="read-more">Read More</a>
          </div>
       </div>
    </div>
  </div>
 </div>
<!-- end CHOOSE -->

 <!-- service --> 
 @include('frontendlayout.services')
 <!-- end service -->

 <!-- our product -->
 @include('frontendlayout.products')
 <!-- our product ends -->

<div class="product-bg">
    <div class="Clients_bg_white">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                    <h3>What Clients Say?</h3>
                    </div>
                </div>
            </div>
            <div id="client_slider" class="carousel slide banner_Client" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#client_slider" data-slide-to="0" class="active"></li>
                    <li data-target="#client_slider" data-slide-to="1"></li>
                    <li data-target="#client_slider" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="carousel-caption text-bg">
                                <div class="img_bg">
                                    <i><img src="frontend/images/lllll.png"/><span>Jone Due<br><strong class="date">12/02/2019</strong></span></i>
                                </div>
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br>
                                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="carousel-caption text-bg">
                                <div class="img_bg">
                                    <i><img src="frontend/images/lllll.png"/><span>Jone Due<br><strong class="date">12/02/2019</strong></span></i>
                                </div>
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br>
                                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="carousel-caption text-bg">
                                <div class="img_bg">
                                <i><img src="frontend/images/lllll.png"/><span>Jone Due<br><strong class="date">12/02/2019</strong></span></i>
                                </div>
                                <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br>
                                You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="yellow_bg">
            <div class="row">
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                    <div class="yellow-box">
                        <h3>REQUEST A FREE QUOTE<i><img src="frontend/icon/calll.png"/></i></h3>
                        
                        <p>Get answers and advice from people you want it from.</p>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                    <div class="yellow-box">
                        <a href="#">Get  Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- map -->
<div class="container-fluid padi">
    <div class="map">
        <img src="frontend/images/mapimg.jpg" alt="img"/>
    </div>
</div>
<!-- end map --> 

@endsection