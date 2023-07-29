
(function ($) {
    "use strict";

function calculatePercentage(partialValue, totalValue) {
    return (partialValue / totalValue) * 100;
}

    async function setScore(num) {
       const totalValue = 410;
       const partialValue = num; 
       const percentage = calculatePercentage(partialValue, totalValue);
       let digit = parseInt(percentage);
       let digitOneFixed = parseFloat(percentage).toFixed(1);

        let perc = digitOneFixed + "%"
        document.getElementById('scrr').textContent = perc;
        let classname = 'c100 p' + digit + ' big green'
        document.getElementById("circl").className = classname;
    }

    /*==================================================================
    [ Validate ]*/

    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check == true) {
            var totalScore = 0;

            for (var i = 0; i < input.length; i++) {
                totalScore += parseInt(input[i].value);
            }

            setScore(totalScore); // Pass the totalScore to the setScore function
        }

        return check;
    });




    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });









    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'score') {
            if($(input).val().trim().match(/^([0-9_\-\.]{1,3})(\]?)$/) == null) {
                return false;
            }
         if($(input).val().trim() > 410){
                return false;
         }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);