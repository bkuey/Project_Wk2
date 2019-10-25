$(function() {
  $("#formOne").submit(function(event) {
    var work = $("#work").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var sports = $("#sports");

    if (work === '1' && question1 === 'yes' && question2 === 'yup' && question3 === 'in') {
      alert("Swift");
      $('#success').show();
    } else if (work === '2' && question1 === 'yes' && question2 === 'yup' && question3 === 'in') {
      alert("Python");
    }

    if (work === '1' && question1 === 'no' && question2 === 'nah' && question3 === 'ex') {
      alert("JavaScript");
    } else if (work === '2' && question1 === 'yes' && question2 === 'yup' && question3 === 'in') {
      alert("Python");
    }

    if (work === '1' && question1 === 'no' && question2 === 'yup' && question3 === 'in') {
      alert("JavaScript");
    } else if (work === '2' && question1 === 'no' && question2 === 'yup' && question3 === 'ex') {
      alert("Swift");
    }

    event.preventDefault();
  });
});
