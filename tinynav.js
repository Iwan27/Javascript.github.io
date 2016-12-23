    $(function () {

      // TinyNav.js 1
      $(&#39;#topnav&#39;).tinyNav({
        active: &#39;current&#39;
      });
	  
	
      // TinyNav.js 2
      $(&#39;#navigation&#39;).tinyNav({
        active: &#39;current&#39;
      });

    });

$(function() {
    $(&#39;#top&#39;).click(function() {
        $(&#39;html, body&#39;).animate({scrollTop:0}, &#39;slow&#39;);
        return false;
    });
});
