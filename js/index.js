$("#face").hide();
$("#imgBgDerp").hide();
$(".eyes").hide();
$(".eye").hide();

$(function() {
    $('[class^="profileInfos"]').tooltip();
});

window.sr = ScrollReveal( /*{ reset: true }*/ );

var minWidth200px = window.matchMedia("(min-width:200px)");
var minWidth640px = window.matchMedia("(min-width:640px)");
var minWidth1024px = window.matchMedia("(min-width:1024px)");

$(document).ready(() => {
        //FREEFORM CONTACT FORM BOTTOM
        window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
        formbutton("create", {
            action: "https://formspree.io/mzbjqwpy",
            title: "<img style=' width: 16rem; height: 8rem; margin: auto auto; padding-top: 1.5rem; padding-bottom: 1.5rem;' src='css/images/marieronnauxLogo.png'></img>",
            description: "Contactez-moi !",
            theme: "classic",
            buttonImg: "<i class='fas fa-comment' style='font-size:2.5rem'/>", 
            fields: [
                {
                    type: "email",
                    label: "Email:",
                    name: "email",
                    required: true,
                    placeholder: "votre@email.com"
                },
                {
                    type: "input",
                    label: "Nom & prénom:",
                    name: "name",
                    placeholder: "Nom et prénom",
                },
                {
                    type: "textarea",
                    label: "Message:",
                    name: "message",
                    placeholder: "Je veux un site web tout neuf !",
                },
                
                { type: "submit" },
            ],
            styles: {
                description: {
                    background: "#e6b244",
                    fontSize: "1.5rem",
                    color: "rgb(116, 86, 31)",
                    fontWeight: "normal",
                    textAlign: "center",
                    borderRadius: "3rem"
                },
                modal: {
                    background: "#e6b244",
                    borderRadius: "0rem",
                  },
                fontFamily: "'Manrope', sans-serif",
                title: {
                    background:"linear-gradient( rgb(42, 170, 170), rgb(226, 179, 76))",
                    paddingLeft: "0rem",
                    paddingRight: "0rem",
                    paddingBottom: "0rem",
                    paddingTop: "0rem",
                    margin: "auto",
                    borderRadius: "0rem",
                },
                button: {
                    background: "linear-gradient(-25deg, rgb(252, 223, 57), rgb(42, 170, 170)60%)",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "10rem",
                    zIndex: "5000",
                },
                closeButton: {
                    //display: "none"
                    position: "fixed",
                    top: "1.5rem",
                    right: "1rem"
                  }
            },
            initiallyVisible: false
        });

        

    //SIDENAV OPEN AND CLOSE DEPENDING ON IF LINK IS CLICKED OR NOT
    var open = false;
    function openNav() {
        $("#mySidenav").css({"left": "0rem"});
        open = true;
    }

    function closeNav() {
        $("#mySidenav").css({"left": "-27rem"});
        open = false;
    }

    $("#openButton").click(function() {
        openNav();
        //console.log("Opening nav")
    });
    $("#closeButton").click(function() {
        closeNav();
        //console.log("Closing nav")
    });
    
    document.addEventListener("mouseup", function(event){
        var nav = document.getElementById('mySidenav');
        if(open == true && event.target != nav && event.target.parentNode != nav){
                closeNav();
                //console.log("Closing because the click was not on the nav and not on the nav links");
        } else if (open == false) {
            //console.log("Nav is closed by default")
        }  
    })

    //Change my age with time
    var myAge = document.getElementById("age");
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    myAge.innerHTML = getAge('1991-04-20');

    //change copyrights date to current
    var copyrightYear = document.getElementById("copyrights");
    copyrightYear.innerHTML = new Date().getFullYear();

    //make the video stop after closing the modal
    $(function() {
        $('.modal').on('hidden.bs.modal', function(e) {
            $iframe = $(this).find("iframe");
            $iframe.attr("src", $iframe.attr("src"));
        });
    });

    //smooth scroll to hash
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        //scroll to hash
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
    });


    //-------------------------------------SMALL SIZE SCREEN ANIM
    if (minWidth200px.matches) {

        $(".imgContainer").hover(function() {
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
        sr.reveal('.icon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            interval: 100,
            delay: 800
        });

        //about anim skills
        sr.reveal('h2.about', {
            duration: 1000,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0
        });
        sr.reveal('.Priority', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            scale: 0.75,
            viewFactor: 0.5,

        });
        sr.reveal('.Profile', {
            duration: 1000,
            origin: 'left',
            viewFactor: 0.5,
            distance: '2rem',
            viewFactor: 0.5,
            delay: 100
        });
        sr.reveal('.allBars', {
            duration: 500,
            origin: 'left',
            viewFactor: 1,
            distance: '2rem',
            interval: 150,
            scale: 1.1
        });
        sr.reveal('.bar', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            interval: 150,
            viewFactor: 0.5,
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
        sr.reveal('.animGame', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
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

        $(".imgContainer").hover(function() {
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
        sr.reveal('.icon', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            viewFactor: 0,
            interval: 100,
            delay: 800
        });

        //about anim skills
        sr.reveal('h2.about', {
            duration: 1000,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0
        });
        sr.reveal('.Priority', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            scale: 0.75,
            viewFactor: 0.5,

        });
        sr.reveal('.Profile', {
            duration: 1000,
            origin: 'left',
            viewFactor: 0.5,
            distance: '2rem',
            viewFactor: 0.5,
            delay: 100
        });
        sr.reveal('.allBars', {
            duration: 500,
            origin: 'left',
            viewFactor: 1,
            distance: '2rem',
            interval: 150,
            scale: 1.1
        });
        sr.reveal('.bar', {
            duration: 1000,
            origin: 'left',
            distance: '2rem',
            interval: 150,
            viewFactor: 0.5,
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

        //Anim Games & graph
        sr.reveal('.animGame', {
            duration: 700,
            origin: 'bottom',
            distance: '2rem',
            viewFactor: 0.5,
            interval: 150,
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
        $(".imgContainer").hover(function() {
            $("#imgBg").hide();
            $("#imgBgDerp").show();
            $("#face").show();
            $(".eyes").show();
            $(".eye").show();

        }, function() {

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
            eye.forEach(function(eye) {
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rot = (radian * (180 / Math.PI) * -1) + 270;
                eye.style.transform = "rotate(" + rot + "deg)";
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

        sr.reveal('.icon', {
            duration: 1000,
            origin: 'left',
            distance: '5rem',
            viewFactor: 0,
            interval: 100,
            delay: 800
        });

        //about anim skills
        sr.reveal('h2.about', {
            duration: 1000,
            origin: 'bottom',
            distance: '5rem',
            viewFactor: 1,
        });
        sr.reveal('.Priority', {
            duration: 1000,
            origin: 'left',
            rotate: {
                y: 100,
            },
            scale: 0.75,
            viewFactor: 1.0,
            interval: 200,
        });

        sr.reveal('.Profile', {
            duration: 1000,
            origin: 'left',
            viewFactor: 0.5,
            distance: '10rem',
            viewFactor: 0.5,
            delay: 100
        });
        sr.reveal('.allBars', {
            duration: 500,
            origin: 'left',
            viewFactor: 1,
            distance: '5rem',
            interval: 150,
            scale: 1.1
        });
        sr.reveal('.bar', {
            duration: 1000,
            origin: 'left',
            distance: '10rem',
            interval: 150,
            viewFactor: 0.5,
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

        //Anim Games and graph
        sr.reveal('.animGame', {
            duration: 700,
            origin: 'bottom',
            distance: '20rem',
            viewFactor: 0.5,
            interval: 150,
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