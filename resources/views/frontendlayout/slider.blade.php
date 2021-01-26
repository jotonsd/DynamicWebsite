      <section class="slider_section">
         <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">

            <div class="carousel-inner">

               @php
                  $key = 0;
               @endphp
               @foreach ($slider as $key=> $element)
               @if ($key==0)
               <div class="carousel-item active">
               @else

               <div class="carousel-item">
               @endif
                  <img class="first-slide" src="image/sliders/{{ $element->image }}" alt="First slide">
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1>Our <br> <strong class="black_bold">Latest </strong><br>
                           <strong class="yellow_bold">Product </strong></h1>
                        <p>{{ $element->description }}</p>
                        <a  href="#">see more Products</a>
                     </div>
                  </div>
               </div>
               @php
                  $key++;
               @endphp
               @endforeach
               
              
              {{--  <div class="carousel-item">
                  <img class="third-slide" src="frontend/images/banner2.jpg" alt="Third slide">
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1>Our <br> <strong class="black_bold">Latest </strong><br>
                           <strong class="yellow_bold">Product </strong></h1>
                        <p>It is a long established fact that a r <br>
                          eader will be distracted by the readable content of a page </p>
                        <a  href="#">see more Products</a>
                     </div>
                  </div>
               </div> --}}

            </div>
            <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i class='fa fa-angle-right'></i>
            </a>
            <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i class='fa fa-angle-left'></i>
            </a>
            
         </div>

      </section>