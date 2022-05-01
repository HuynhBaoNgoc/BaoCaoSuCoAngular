//#region
function sidebarToggle() {
  document.getElementById('mainBody').classList.toggle('collapsed-sidebar');
  var listLabel = document.getElementsByClassName("label-menu");
  
  for (let i = 0; i <= listLabel.length; i++) {
      listLabel[i].classList.toggle('d-none');
  }
}
//#endregion
//select2 report create
function trigger(){
  $(".js-example-tags").select2({
    tags: true
  });
}
//select2 classify incident đánh giá sự cố
function discuss (){
  $(".js-discuss").select2({
    tags: true
  });
}
//select2 classify incident đánh giá sự cố
function fit (){
  $(".js-fit").select2({
    tags: true
  });
}

