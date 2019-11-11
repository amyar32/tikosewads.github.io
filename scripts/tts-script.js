$(document).ready(function () {

  $('[data-trigger="dropdown"]').on("mouseover", function() {
    var submenu = $(this).parent().find('.sub-menu');
    submenu.addClass('active');
      $('.profile-menu').on("mouseleave", function() {
      submenu.removeClass('active');
      });
  });

  $('#append, #prepend, #replace').on("click", function(e) {
    var el = $(e.currentTarget);
    console.log(el);
    var action = el.attr('id');
    console.log(action);
    var content = $('#text').val();
    console.log(content);
    var sect = $('#editable-section');
    console.log(sect);
    if(action == "append") {
      sect.append(content);
    }
    else if(action == "prepend") {
      sect.prepend(content);
    }
    else if(action == "replace") {
      sect.html(content);
    }
  });
});
