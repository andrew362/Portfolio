(function ($) {



    var one = $('.one');
    var two = $('.two');
    var three = $('.three');
    var four = $('.four');
    var five = $('.five');
    var six = $('.six');
    var seven = $('.seven');
    var snap = 180;
    var menuBtn = $('#btn');
    var innerDiv = $('.inner');
    var div = $('nav .nav');
    var box = $('.box');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var objectBG = document.getElementById('my-svg');
    var secondBG = document.getElementById('secondBG');


    $(window).on('load', function () {
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 0);
    });

    //deaktywacja animacji
    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older
            return true;
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11
            var rv = ua.indexOf('rv:');
            return true;
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) 
            return true;
        }
        // other browser
        return false;
    }

    if (detectIE()) {
        objectBG.style.display = 'none';
        secondBG.className = 'backupBG';
    }

    if (windowHeight > '1070' || windowWidth > '1910' || windowWidth < '767') {
        objectBG.style.display = 'none';
        secondBG.className = 'backupBG';
    }

    document.getElementById("my-svg").addEventListener("load", function () {
        var doc = this.getSVGDocument();
        var hand = doc.getElementById("svgback");
        var pol = hand.getElementsByTagName("polygon");
        for (var i = 0; i < pol.length; i++) {
            pol[i].setAttribute('style', 'transition: all 1s linear');
            pol[i].setAttribute("transform", "translate(0 0)");
            pol[i].addEventListener('mouseover', function (e) {
                this.parentElement.appendChild(this);
                this.setAttribute("filter", "url(#dropshadow)");
                this.setAttribute("transform", "scale(1.005)");
                this.setAttribute("transform", "translate(3 3)");
            });
            pol[i].addEventListener('mouseout', function (e) {
                this.removeAttribute("filter");
                this.setAttribute("transform", "translate(0 0)");
            });
        }
    });

    //Callback Hell! Yeah!!!   
    function openNav() {
        menuBtn.off('click');
        menuBtn.html('-').toggleClass('pulse');
        box.delay(snap * 4).animate({
            opacity: 0
        }, snap * 3);
        seven.animate({
            width: '6.25%'
        }, snap, function () {
            $(this).children().css('opacity', '1');
            six.animate({
                height: "12.5vh"
            }, snap, function () {
                $(this).children().css('opacity', '1');
                five.animate({
                    width: '12.5%'
                }, snap, function () {
                    $(this).children().css('opacity', '1');
                    four.animate({
                        height: '25vh'
                    }, snap, function () {
                        $(this).children().css('opacity', '1');
                        three.animate({
                            width: '25%'
                        }, snap, function () {
                            $(this).children().css('opacity', '1');
                            two.animate({
                                height: '50vh'
                            }, snap, function () {
                                $(this).children().css('opacity', '1');
                                one.animate({
                                    width: '50%'
                                }, snap, function () {
                                    $(this).children().css('opacity', '1');
                                    menuBtn.click(closeNav);
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    function closeNav() {
        menuBtn.off('click');
        menuBtn.html('+');
        innerDiv.css('opacity', '0');
        setTimeout(function () {
            box.delay(snap * 1).animate({
                opacity: 1
            }, snap * 5);
            one.animate({
                width: "0%"
            }, snap, function () {
                two.animate({
                    height: "0vh"
                }, snap, function () {
                    three.animate({
                        width: "0%"
                    }, snap, function () {
                        four.animate({
                            height: "0vh"
                        }, snap, function () {
                            five.animate({
                                width: "0%"
                            }, snap, function () {
                                six.animate({
                                    height: "0vh"
                                }, snap, function () {
                                    seven.animate({
                                        width: '0%'
                                    }, function () {
                                        menuBtn.click(openNav).toggleClass('pulse');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }, 700);
    }

    $('#btn').click(openNav);

    var portfolioList = [
        {
            name: 'Aplikacja pogodowa',
            image: 'weatherApp.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/myWeatherApp/',
            desc: 'Aplikacja pobierająca dane z portalu pogodowego dla wskazanych miast.'
            },
        {
            name: 'Gra w kolory',
            image: 'colorGame.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/ColorGame/',
            desc: 'Gra logiczna polegająca na odgadywaniu zadanych kolorów. Dwa tryby trudności. Zliczanie wyników.'
            },
        {
            name: 'Lista zadań',
            image: 'todo.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/ToDoList/',
            desc: 'Klasyczna lista zadań. Zapis do LocalStorage. Możliwość edycji.'
            },
        {
            name: 'Strona WWW',
            image: 'jarzebak.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/Jarzebak/',
            desc: 'Strona przygotowana dla firmy zajmującej się budową domów.'
            },
        {
            name: 'Gra Patatap',
            image: 'patatap.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/patatap/',
            desc: 'Aplikacja odtwarzająca dźwięk i wyświetlająca ksztalty na ekranie.'
            },
        {
            name: 'Strona WWW',
            image: 'automobile.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/AutomibileRenovation/',
            desc: 'Strona typu "landing page" z ciekawym efektem wizualnym.'
            },
        {
            name: 'Strona WWW',
            image: 'webdesign.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/WebDesign/',
            desc: 'Przykladowa testowa strona.'
            },
        {
            name: 'Front Page',
            image: 'beautifulgallery.jpg',
            src: 'http://andrzej-lichon-pl.stackstaging.com/projects/BeautifulGallery/',
            desc: 'Strona główna portalu z zastowowaniem biblioteki particles.js. Własny design i wykonanie.'
            },
        ];

    var oneInner = document.querySelector('.one .inner');
    console.log(oneInner);
    for (var i = 0; i < portfolioList.length; i++) {
        let node = document.createElement('div');
        node.className = 'container';
        node.style.display = 'flex';
        node.style.opacity = '1';
        node.innerHTML =
            `<div class="container-title">
                        <h3>${portfolioList[i].name}</h3>
                    </div>
                    <a target="_blank" href="${portfolioList[i].src}">
                        <div class="thumbnail-container" style="background-image: url('./img/${portfolioList[i].image}');">
                            <div class="container-description">
                                <p>
                                    ${portfolioList[i].desc}
                                </p>
                            </div>
                        </div>
                    </a>
                    `;
        oneInner.appendChild(node);
    };



})(jQuery);