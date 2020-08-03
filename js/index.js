$("#face").hide();
$("#imgBgDerp").hide();
$(".eyes").hide();
$(".eye").hide();
window.sr = ScrollReveal(/*{ reset: true }*/);

$("[data-toggle='tooltip']").tooltip(); // Initialize Tooltip
var minWidth200px = window.matchMedia("(min-width:200px)");
var minWidth1024px = window.matchMedia("(min-width:1024px)");

$(document).ready(() => {  
    //Change my age with time
    var myAge = document.getElementById("age");
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    myAge.innerHTML = getAge('1991-04-20');

    //change copyrights date to current
    var copyrightYear = document.getElementById("copyrights");
    copyrightYear.innerHTML = new Date().getFullYear();

    //make the video stop after closing the modal
    $(function(){
        $('.modal').on('hidden.bs.modal', function (e) {
          $iframe = $(this).find("iframe");
          $iframe.attr("src", $iframe.attr("src"));
        });
      });

    //smooth scroll to hash
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        //scroll to hash
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    
//-------------------------------------SMALL SIZE SCREEN ANIM
if (minWidth200px.matches) {
    
    $(".imgContainer").hover(function(){
        $("#imgBg").show();
        });

        sr.reveal('#imgBg', {
            duration: 500,
            origin: 'bottom',
            distance: '15rem',
        });

        sr.reveal('h1', {
            duration: 1000,
            origin: 'top',
            distance: '1rem',
        });
    
        sr.reveal('p.lead', {
            duration: 1000,
            origin: 'left',
            distance: '1rem',
        });
    
        sr.reveal('hr.text-left', {
            duration: 1000,
            origin: 'right',
            distance: '1rem',
        });

        sr.reveal('.animtop1', {
            duration: 1000,
            origin: 'bottom',
            distance: '3rem',
            delay: 50,
        });

        sr.reveal('.animtop2', {
            duration: 1000,
            origin: 'top',
            distance: '3rem',
            delay: 60,
        });

        sr.reveal('.animtop3', {
            duration: 1000,
            origin: 'top',
            distance: '3rem',
            delay: 70,
        });

       
    };

//END OF SMALL ANIMATIONS

//-------------------------------------LARGE SIZE SCREEN ANIM
    if (minWidth1024px.matches) {
        document.getElementById("imgBg").style.visibility = "visible";
        sr.reveal('#imgBg', {
            duration: 1000,
            origin: 'bottom',
            distance: '25rem',
            viewFactor: 0,
        });

         //PHOTO SHOW/HIDE
    $(".imgContainer").hover(function(){
        $("#imgBg").hide();
        $("#imgBgDerp").show();
        $("#face").show();
        $(".eyes").show();
        $(".eye").show(); 

        }, function(){

            $("#imgBg").show();
            $("#imgBgDerp").hide();
            $("#face").hide();
            $(".eyes").hide();
            $(".eye").hide(); 
    });

        //ANIMATION EYEBALLS
        document.querySelector('.imgContainer').addEventListener('mousemove', eyeball);
        function eyeball() {
            var eye = document.querySelectorAll('.eye');
            eye.forEach(function(eye){
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rot = (radian * (180 / Math.PI) * -1) + 270;
                eye.style.transform = "rotate("+ rot +"deg)";
            });
        };
//banner anim
        sr.reveal('h1', {
            duration: 1000,
            origin: 'top',
            distance: '10rem',
            delay: 100,
            viewFactor: 0,
        });
    
        sr.reveal('p.lead', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            delay: 500,
            viewFactor: 0,
        });
    
        sr.reveal('hr.text-left', {
            duration: 1000,
            origin: 'right',
            distance: '5rem',
            delay: 600,
            viewFactor: 0,
        });

//banner icons anim
        sr.reveal('.gitIcon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            delay: 700,
            viewFactor: 0,
        });

        sr.reveal('.linkIcon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            delay: 800,
            viewFactor: 0,
        });

        sr.reveal('.twitIcon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            delay: 900,
            viewFactor: 0,
        });

        sr.reveal('.mailIcon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            delay: 1000,
            viewFactor: 0,
        });

        sr.reveal('.cvIcon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            delay: 1100,
            viewFactor: 0,
        });

//about anim
        sr.reveal('#skills', {
            duration: 1000,
            origin: 'bottom',
            distance: '5rem',

            viewFactor: 1.0
        });

        sr.reveal('.Priority1', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0
        });
        sr.reveal('.Priority2', {
            delay: 200,
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0
        });
        sr.reveal('.Priority3', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0,
            delay: 400,
        });
        sr.reveal('.Priority4', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0,
            delay: 600,
        });

        sr.reveal('.Profile', {
            duration: 1000,
            origin: 'left',
            viewFactor: 0.5,
            distance: '10rem',
            delay: 700,
        });

        sr.reveal('.allBars', {
            duration: 1000,
            origin: 'right',
            viewFactor: 0.5,
            distance: '10rem',
            delay: 700,
        });

        sr.reveal('.progress-bar', {
            duration: 1000,
            origin: 'left',
            viewFactor: 0.5,
            distance: '10rem',
            delay: 1500,
        });


 
        sr.reveal('.animtop1', {
            duration: 1000,
            origin: 'bottom',
            distance: '3rem',
            delay: 50,
        });

        sr.reveal('.animRight', {
            duration: 1000,
            origin: 'right',
            distance: '5rem',
            delay: 50,
            rotate: {
                x: 20,
                z: 20
            }
        });

        sr.reveal('ul.liste', {
            duration: 1000,
            origin: 'right',
            distance: '5rem',
            delay: 200,
        });
    }
//END OF LARGE ANIMATIONS


    
    //document.getElementById("navbarSupportedContent").style.visibility = "visible";  
   // if (navigator.userAgent.includes("Firefox")){
    //}
});



