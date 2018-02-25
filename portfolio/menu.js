const mq = window.matchMedia("(min-width:1000px)");
if (!mq.matches) {
  document.getElementById("mainList").style.display = "none";
  document.getElementById("title").style.borderRight = "0";
  document.getElementById("hideButton").style.display = "inherit";

  document.getElementById("title").addEventListener("click",function(){
    document.getElementById("mainList").style.display = "inline";
  });

  function hideMenu(){
    document.getElementById("mainList").style.display = "none";
  }
}

/* To reload css on page size change */
window.addEventListener('resize', function () {
    window.location.reload();
});
