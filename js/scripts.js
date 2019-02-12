var warnings = 0
var symptoms = 0
var copings = 0
$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#warnings").show();
    $("input:checkbox[name=warning-sign]:checked").each(function(){
      warnings++;
    });
    $("#symptoms").show();
    $("input:checkbox[name=health-symptom]:checked").each(function(){
      symptoms++;
    });
    $("#methods").show();
    $("input:checkbox[name=coping-method]:checked").each(function(){
      copings++;
    });
    $('#stress-test').hide();
    if ((symptoms >= 4) && (warnings = 6)) {
      $('#high-stress').show();
      $('#low-stress').hide();
      $('#no-stress').hide();
    };
    if ((warnings <= 4) && (copings <= 5) && (symptoms < 4)) {
      $('#low-stress').show();
      $('#high-stress').hide();
      $('#no-stress').hide();
    };
    if ((warnings <= 1) && (symptoms <= 1) && (copings <= 1)) {
      $('#no-stress').show();
      $('#low-stress').hide();
      $('#high-stress').hide();
    };
  });
});
