$(function() {
  $("#formOne").submit(function(event) {
    var work = $("#work").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var sports = $("#sports");

    if (work === '2') {
      alert("Python");
    }

    event.preventDefault();
  });
});
