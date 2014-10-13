/**
 * Created by luolinjia on 10/13/14.
 */

$(function(){
    var $point = $('#point'), $iPost = $('#w-post'), $iAbout = $('#w-about'), $iTags = $('#w-tags'), $iNone = $('#w-none');

    $point.mouseover(function() {
        $('#w-post').fadeIn(200);
        $('#w-about').fadeIn(600);
        $('#w-tags').fadeIn(1000);
        $('#w-none').fadeIn(1400);
        $('#word').fadeIn(800, function() {
            $(this).empty().append('当你驻足这里，便是故事！');
        });

    }).mouseleave(function () {
        $('#word').fadeOut(300).empty();
    });

    $iPost.mouseover(function() {
        var $word = $('#word');
        $word.fadeIn(800, function() {
            $word.empty().append('故事的主角总是善意地提醒周围人恶意的目光');
        });
    }).mouseleave(function() {
        $('#word').fadeOut(300).empty();
    }).click(function() {
        window.location = 'http://ideex.name/cn';
    });

    $iAbout.mouseover(function() {
        var $word = $('#word');
        $word.fadeIn(800, function() {
            $word.empty().append('偶尔，他也总是自欺欺人！');
        });
    }).mouseleave(function() {
        $('#word').fadeOut(300).empty();
    }).click(function() {
        window.location = 'http://ideex.name/cn/about';
    });

    $iTags.mouseover(function() {
        var $word = $('#word');
        $word.fadeIn(800, function() {
            $word.empty().append('他总是跟随在你的不远处，你向前，他也向前，你退后，他也退后，你转身，然后他却不见！');
        });
    }).mouseleave(function() {
        $('#word').fadeOut(300).empty();
    }).click(function() {
        window.location = 'http://ideex.name/cn/tags';
    });

    $iNone.mouseover(function() {
        var $word = $('#word');
        $word.fadeIn(800, function() {
            $word.empty().append('然后，他在你的心中驻留。');
        });
    }).mouseleave(function() {
        $('#word').fadeOut(300).empty();
    }).click(function() {
        window.location = 'http://ideex.name';
    });

});
