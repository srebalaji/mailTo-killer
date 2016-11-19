//alert("hello..I just got injected");
var letters = /^[A-Za-z]+$/;
var links = document.getElementsByTagName('a');
var patt2 = /mailto:/g;
var link;
for (var i=0; i<links.length; i++)
{
   if (patt2.exec(links[i]))
   {
    // alert(links[i]);
    set_listener(links[i]);
    break;
   }
}

function set_listener(e)
{
  e.addEventListener('click', function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      //alert("This is cool");
      var new_one="";
      e = String(e);
      
      for(var i=(e.indexOf(":")+1); i<=e.indexOf("."); i++)
        new_one += e[i];
      
      for(var i = (e.indexOf(".")+1); i<e.length; i++)
      {
        if (! e[i].match(letters))
          break;
        new_one += e[i];
      }
      window.prompt("Copy to clipboard: Ctrl+C, Enter", new_one);
    });
}