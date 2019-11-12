HTML:
<div><a class="descript_long" href="#">show more 1</a></div>

<div><a class="descript_long" href="#">show more 2</a></div>

<div><a class="descript_long" href="#">show more 3</a></div>

<div><a class="descript_long" href="#">show more 4</a></div>


jQUERY:
$(document).ready(function() {
    var i = 0
    $(".descript_long").each(function() {
    
    if( i == 0) {
        $(this).show();
    }else{
    $(this).hide();
    }
    
     i ++;
    });
});
