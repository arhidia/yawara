$( document ).ready(function() {
    $("#menu").append(
      '<nav class="navbar navbar-fixed-top navbar-inverse">'+
      '<div class="container">'+
        '<div class="navbar-header">'+
          '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'+
            '<span class="sr-only">Toggle navigation</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
          '</button>'+
          '<a class="navbar-brand" href="#">Yawara</a>'+
        '</div>'+
        '<div id="navbar" class="collapse navbar-collapse">'+
          '<ul class="nav navbar-nav">'+
            '<li class ="dropdown">'+
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Om klubben<span class="caret"></span></a>'+
            '<ul class="dropdown-menu">'+
              '<li><a href="omklubben/calendar.html"> Kalender</a></li>'+
              '<li><a href="#"> Træningstid og -sted</a></li>'+
              '<li><a href="#"> Instruktører</a></li>'+
            '</ul>'+
            '</li>'+
            '<li class ="dropdown">'+
              '<a href="#about" class="dropdown-toggle" data-toggle="dropdown">Om Jiu-Jitsu<span class="caret"></span></a>'+
              '<ul class="dropdown-menu">'+
                '<li><a href="#">Hvad laver vi?</a></li>'+
                '<li><a href="#">Historien</a></li>'+
                '<li><a href="#">Bæltesystem</a></li>'+
                '<li><a href="#">Konkurrencesystem</a></li>'+
              '</ul>   '+
            '</li>'+
            '<li class ="dropdown">'+
              '<a href="#contact" class="dropdown-toggle" data-toggle="dropdown">Arkiv<span class="caret"></span></a>'+
              '<ul class="dropdown-menu">'+
                '<li><a href="#">Gradueringer</a></li>'+
                '<li><a href="#">Klubarrangementer</a></li>'+
                '<li><a href="#">Andre arrangementer</a></li>'+
                '<li><a href="#">Galleri</a></li>'+
              '</ul>'+
            '</li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</nav>');
});

