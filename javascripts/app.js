/*global $*/

function main() {
    "use strict";
    
    function begin(workoutIdx, sets, rest) {
        $("img.icon").hide();
        $("#ex-img").attr("src", "images/high_knees.png");
    }
    
    function reset() {
        $("img.icon").show();
    }
    $("#begin").on("click", function (event) {
        var sets = $("#sets option:selected").text(),
            rest = $("#rest option:selected").text();
        begin(0, sets, rest);
    });
}

$(document).ready(main);