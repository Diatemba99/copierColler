alert(020);


function copy(copyId) {
    var $inp = $("<input>");

    $("body").append($inp);

    $inp.val($("" + copyId).text()).select();

    document.execCommand("copy");

    $inp.remove();

    $(".alert").fadeIn(500,
        function () {
            $(".alert").fadeOut();
        });
}

$(document).ready(function () {
    $("#btn").click(function () {
        copy('#text1');
    });
    $("#btn2").click(function () {
        copy('#text2');
    });
});

