$(document).ready(function () {
    var islem = "";

    $(".calc-keys button").click(function() { 
        if($(this).html() == "CE") {
            $(".calc-screen").val(0);

        }
        else if($(this).html() == "C") {
            var array = $(".calc-screen").val().split(islem);
            array.pop();
            $(".calc-screen").val(array);
        }
        else if($(this).attr("id") == "backspace") {
            var screenArray = $(".calc-screen").val().split("");
            screenArray.pop();
            $(".calc-screen").val("");
            for(let i = 0; i < screenArray.length; i++) {
                $(".calc-screen").val($(".calc-screen").val() + screenArray[i]);
            }
        }
        else if($(this).html() == "=") {
            try {
                $(".calc-screen").val(eval($(".calc-screen").val()));
            } catch {
                $(".cacl-screen").val(0);
            }
        }
        else {
            if($(".calc-screen").val() == 0) {
                $(".calc-screen").val("");
            }
            if($(this).html() == "+" || $(this).html() == "-" || $(this).html() == "*" || $(this).html() == "/") {
                islem = $(this).html();
            }
            $(".calc-screen").val($(".calc-screen").val() + $(this).html());
        }
    });
});