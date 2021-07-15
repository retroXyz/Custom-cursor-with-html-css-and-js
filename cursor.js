// # customcursor?
  // # code?start

function customCursor(){

  const cursor = document.getElementById("cursor");
  
  // # EventListenersAdding??
  
  window.addEventListener('mousemove', (e)=>{
     
  cursor.style.top = e.pageY+"px";
  cursor.style.left = e.pageX+"px";
  cursor.setAttribute('data-fromtop', (cursor.offsetTop - scrollY));
     
  });
  
};
customCursor();
