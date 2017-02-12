$(function(){
  $('.tab-panels .tabs li').on('click', change)

  function change(){
    var $panelclick = $(this).closest('.tab-panels')
    console.log($panelclick);

    //$('.panel.active').css('background', 'orange');
    $panelclick.find('.tabs li.active').removeClass('active');
    //$('.tab-panels .tabs li.active').removeClass('active');
    $(this).addClass('active');

    //figure out which panel to show
    var $paneltoshow = $(this).attr('rel');
    // alert(paneltoshow);
    console.log($paneltoshow);

    //hide current panel
    //$('.tab-panels .panel.active').css('display', 'none');
    //$('.tab-panels ul li.active').removeClass('active');
    //$('.tab-panels .panel.active').removeClass('active'); //MB
    $panelclick.find('.panel.active').slideUp(300, function(){
    //$('.tab-panels .panel.active').slideUp(300, function(){
      $(this).removeClass('active')
      console.log(this);
      //show new panel
      $('#' + $paneltoshow).slideDown(300, function(){
        //console.log(this);
        $(this).addClass('active');
        console.log(this);
      });
    });

    //show new panel
    //$('#' + paneltoshow).addClass('active'); //MB


  };
});
