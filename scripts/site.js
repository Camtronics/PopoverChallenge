var myInterval;
var popoverOpen = false;
var scrollDirection;
var toolTop = 300;
var shavingTop = 100;

//Show and Hide Popoer Functions

function ShowPopover()
{
    $('#cover').css('display', 'block');
    popoverOpen = true;
}

function ClosePopover()
{
    $('#cover').css('display', 'none');
    popoverOpen = false;
    return false;
}


//Function to run after 3 secs

function OpenPopover()
{
    var haveSeen = getCookie("haveSeen");
    if(haveSeen == "false") 
    {
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "haveSeen=True;" + expires;
        ShowPopover(); 
    } 
    else
    {
        //var d = new Date();
        //d.setTime(d.getTime() + (1*24*60*60*1000));
        //var expires = "expires="+ d.toUTCString();
        //document.cookie = "haveSeen=True; " + expires;
        //ShowPopover();
    }
    clearInterval(myInterval);
}

function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) 
    {
        var c = ca[i];
        while (c.charAt(0)==' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length,c.length);
        }
    }
    return "false";
}

// Set timer to run after 3 seconds

$(document).ready(function(){
    myInterval = setInterval(OpenPopover, 3000);
});


//Chisel and Shaving Scroll Function
$(window).on('mousewheel DOMMouseScroll', function (e) {
    
    var direction = (function () {
        //find new mousewheel direction
        var delta = (e.type === 'DOMMouseScroll' ?
                     e.originalEvent.detail * -100 :
                     e.originalEvent.wheelDelta);

        //if origianl event value is greater - then moving up, if less - moving down
        return delta > 0 ? 0 : 1;
    }());
if(popoverOpen == true)
        {
            //if direction is 1 scrolling down, move images up
            if(direction === 1) {
                $("#tool").animate({top : '-=60' }, 100)
                $("#shaving").animate({top : '-=30' }, 100)

            }
            //if direction is 0 scrolling up, move images down
            if(direction === 0) {
                $("#tool").animate({top : '+=60' }, 100)
                $("#shaving").animate({top : '+=30' }, 100)
            }
        }
        
});