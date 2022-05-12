(function () {
  'use strict'

  // menu js 
  $('a[data-bs-toggle="dropdown"]').on('show.bs.dropdown', function () {
    $(this).parents().find("nav").addClass("overflow_none");
})

$('a[data-bs-toggle="dropdown"]').on('hide.bs.dropdown', function () {
    $(this).parents().find("nav").removeClass("overflow_none");
})


  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })

})()
