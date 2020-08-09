$("#face").hide();
$("#imgBgDerp").hide();
$(".eyes").hide();
$(".eye").hide();

window.sr = ScrollReveal(/*{ reset: true }*/);

$("[data-toggle='tooltip']").tooltip(); // Initialize Tooltip

var minWidth200px = window.matchMedia("(min-width:200px)");
var minWidth640px = window.matchMedia("(min-width:640px)");
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

        //Anim banner
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
            viewFactor: 0.5,
        });
        sr.reveal('hr.text-left', {
            duration: 1000,
            origin: 'right',
            distance: '1rem',
        });

        //banner icons anim
        sr.reveal('.gitIcon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
        });
        sr.reveal('.linkIcon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            delay: 100,
            viewFactor: 0,
        });
        sr.reveal('.twitIcon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            delay: 200,
            viewFactor: 0,
        });
        sr.reveal('.mailIcon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            delay: 300,
            viewFactor: 0,
        });
        sr.reveal('.cvIcon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            delay: 400,
            viewFactor: 0,
        });

        //about anim skills
        sr.reveal('#skills', {
            duration: 1000,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 1.0
        });
        sr.reveal('.Priority1', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            scale: 0.75,
            viewFactor: 0.5,
            
        });
        sr.reveal('.Priority2', {
            delay: 200,
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 0.5,
            scale: 0.75
        });
        sr.reveal('.Priority3', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 0.5,
            delay: 400,
            scale: 0.75
        });
        sr.reveal('.Priority4', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 0.5,
            delay: 600,
            scale: 0.75
        });
        sr.reveal('.Profile', {
            duration: 1000,
            origin: 'bottom',
            viewFactor: 0.5,
            distance: '2rem',
            viewFactor: 0.5,
        });
        sr.reveal('.allBars', {
            duration: 500,
            origin: 'bottom',
            viewFactor: 0.5,
            distance: '2rem',
        });
        sr.reveal('.bar1', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 200,

        });
        sr.reveal('.bar2', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 300,

        });
        sr.reveal('.bar3', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 400,

        });
        sr.reveal('.bar4', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 500,

        });
        sr.reveal('.bar5', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 600,

        });
        sr.reveal('.bar6', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 700,
            
        });
        sr.reveal('.bar7', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 800,

        });
        sr.reveal('.bar8', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 900,

        });
        sr.reveal('.bar9', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 1000,

        });
        sr.reveal('.bar10', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 1100,

        });
        sr.reveal('.bar11', {
            duration: 1000,
            origin: 'left',
            distance: '3rem',
            delay: 1200,

        });

        //Anim webdesign
        sr.reveal('.animWeb', {
            duration: 500,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            scale: 0.75
        });

        //Anim Games
        sr.reveal('.animGameLeft', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
        });
        sr.reveal('.animGameCenter', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
            delay: 200,
        });
        sr.reveal('.animGameRight', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
        });

        //Anim Graph
        sr.reveal('.animGraphLeft', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
        });
        sr.reveal('.animGraphCenter', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
            delay: 200,
        });
        sr.reveal('.animGraphRight', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
        });

        //Anim Freelance
        sr.reveal('.animFree1', {
            duration: 700,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            scale: 1.2,
        });
        sr.reveal('.animFree2', {
            duration: 700,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            delay: 200,
            scale: 1.2,
        });
        sr.reveal('.animFree3', {
            duration: 700,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            delay: 200,
            scale: 1.2,
        });

       
    };
    if (minWidth640px.matches) {
    
        $(".imgContainer").hover(function(){
            $("#imgBg").show();
            });
    
            //Anim banner
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
                viewFactor: 0.5,
            });
            sr.reveal('hr.text-left', {
                duration: 1000,
                origin: 'right',
                distance: '1rem',
            });
    
            //banner icons anim
            sr.reveal('.gitIcon', {
                duration: 1000,
                origin: 'left',
                distance: '2rem',
                viewFactor: 0,
            });
            sr.reveal('.linkIcon', {
                duration: 1000,
                origin: 'left',
                distance: '2rem',
                delay: 100,
                viewFactor: 0,
            });
            sr.reveal('.twitIcon', {
                duration: 1000,
                origin: 'left',
                distance: '2rem',
                delay: 200,
                viewFactor: 0,
            });
            sr.reveal('.mailIcon', {
                duration: 1000,
                origin: 'left',
                distance: '2rem',
                delay: 300,
                viewFactor: 0,
            });
            sr.reveal('.cvIcon', {
                duration: 1000,
                origin: 'left',
                distance: '2rem',
                delay: 400,
                viewFactor: 0,
            });
    
            //about anim skills
            sr.reveal('#skills', {
                duration: 1000,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 1.0
            });
            sr.reveal('.Priority1', {
                duration: 1000,
                origin: 'left',
                rotate: {
                    y: 100,
                },
                scale: 0.75,
                viewFactor: 0.5,
                
            });
            sr.reveal('.Priority2', {
                delay: 200,
                duration: 1000,
                origin: 'left',
                rotate: {
                    y: 100,
                },
                viewFactor: 0.5,
                scale: 0.75
            });
            sr.reveal('.Priority3', {
                duration: 1000,
                origin: 'left',
                rotate: {
                    y: 100,
                },
                viewFactor: 0.5,
                delay: 400,
                scale: 0.75
            });
            sr.reveal('.Priority4', {
                duration: 1000,
                origin: 'left',
                rotate: {
                    y: 100,
                },
                viewFactor: 0.5,
                delay: 600,
                scale: 0.75
            });
            sr.reveal('.Profile', {
                duration: 1000,
                origin: 'bottom',
                viewFactor: 0.5,
                distance: '2rem',
                viewFactor: 0.5,
            });
            sr.reveal('.allBars', {
                duration: 500,
                origin: 'bottom',
                viewFactor: 0.5,
                distance: '2rem',
            });
            sr.reveal('.bar1', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 200,
    
            });
            sr.reveal('.bar2', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 300,
    
            });
            sr.reveal('.bar3', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 400,
    
            });
            sr.reveal('.bar4', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 500,
    
            });
            sr.reveal('.bar5', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 600,
    
            });
            sr.reveal('.bar6', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 700,
                
            });
            sr.reveal('.bar7', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 800,
    
            });
            sr.reveal('.bar8', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 900,
    
            });
            sr.reveal('.bar9', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 1000,
    
            });
            sr.reveal('.bar10', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 1100,
    
            });
            sr.reveal('.bar11', {
                duration: 1000,
                origin: 'left',
                distance: '3rem',
                delay: 1200,
    
            });
    
            //Anim webdesign
            sr.reveal('.animWeb', {
                duration: 500,
                viewFactor: 0.5,
                rotate: {
                    y: 100,
                },
                scale: 0.75
            });
    
            //Anim Games
            sr.reveal('.animGameLeft', {
                duration: 700,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.5,
            });
            sr.reveal('.animGameCenter', {
                duration: 700,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.5,
                delay: 200,
            });
            sr.reveal('.animGameRight', {
                duration: 700,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.5,
            });
    
            //Anim Graph
            sr.reveal('.animGraphLeft', {
                duration: 700,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.5,
            });
            sr.reveal('.animGraphCenter', {
                duration: 700,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.5,
                delay: 200,
            });
            sr.reveal('.animGraphRight', {
                duration: 700,
                origin: 'bottom',
                distance: '2rem',
                viewFactor: 0.5,
            });
    
            //Anim Freelance
            sr.reveal('.animFree1', {
                duration: 700,
                viewFactor: 0.5,
                rotate: {
                    y: 100,
                },
                scale: 1.2,
            });
            sr.reveal('.animFree2', {
                duration: 700,
                viewFactor: 0.5,
                rotate: {
                    y: 100,
                },
                delay: 200,
                scale: 1.2,
            });
            sr.reveal('.animFree3', {
                duration: 700,
                viewFactor: 0.5,
                rotate: {
                    y: 100,
                },
                delay: 200,
                scale: 1.2,
            });
    
           
        };
//-------------------------------------END OF SMALL ANIMATIONS


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

        //about anim skills
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
            scale: 0.75,
            viewFactor: 1.0,
            
        });
        sr.reveal('.Priority2', {
            delay: 200,
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0,
            scale: 0.75
        });
        sr.reveal('.Priority3', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0,
            delay: 400,
            scale: 0.75
        });
        sr.reveal('.Priority4', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            viewFactor: 1.0,
            delay: 600,
            scale: 0.75
        });
        sr.reveal('.Profile', {
            duration: 1000,
            origin: 'left',
            viewFactor: 0.5,
            distance: '10rem',
            viewFactor: 0.5,
        });
        sr.reveal('.allBars', {
            duration: 500,
            origin: 'right',
            viewFactor: 0.5,
            distance: '10rem',
        });
        sr.reveal('.bar1', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 200,

        });
        sr.reveal('.bar2', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 300,
 
        });
        sr.reveal('.bar3', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 400,

        });
        sr.reveal('.bar4', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 500,

        });
        sr.reveal('.bar5', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 600,

        });
        sr.reveal('.bar6', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 700,
            
        });
        sr.reveal('.bar7', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 800,

        });
        sr.reveal('.bar8', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 900,

        });
        sr.reveal('.bar9', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 1000,

        });
        sr.reveal('.bar10', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 1100,

        });
        sr.reveal('.bar11', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            delay: 1200,

        });

        //Anim webdesign
        sr.reveal('.animWeb', {
            duration: 500,
            origin: 'left',
            distance: '10rem',
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            scale: 0.75
        });

        //Anim Games
        sr.reveal('.animGameLeft', {
            duration: 700,
            origin: 'left',
            distance: '20rem',
            viewFactor: 0.5,
        });
        sr.reveal('.animGameCenter', {
            duration: 700,
            origin: 'bottom',
            distance: '20rem',
            viewFactor: 0.5,
            delay: 200,
        });
        sr.reveal('.animGameRight', {
            duration: 700,
            origin: 'right',
            distance: '20rem',
            viewFactor: 0.5,
            delay: 300,
        });

        //Anim Graph
        sr.reveal('.animGraphLeft', {
            duration: 700,
            origin: 'left',
            distance: '20rem',
            viewFactor: 0.5,
            delay: 200,
        });
        sr.reveal('.animGraphCenter', {
            duration: 700,
            origin: 'bottom',
            distance: '20rem',
            viewFactor: 0.5,
        });
        sr.reveal('.animGraphRight', {
            duration: 700,
            origin: 'right',
            distance: '20rem',
            viewFactor: 0.5,
            delay: 200,
        });

        //Anim Freelance
        sr.reveal('.animFree1', {
            duration: 700,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
        });
        sr.reveal('.animFree2', {
            duration: 700,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            delay: 200,
        });
        sr.reveal('.animFree3', {
            duration: 700,
            viewFactor: 0.5,
            rotate: {
                y: 100,
            },
            delay: 200,
        });
    }
//END OF LARGE ANIMATIONS


    
    //document.getElementById("navbarSupportedContent").style.visibility = "visible";  
   // if (navigator.userAgent.includes("Firefox")){
    //}
});



