/**
 * Created by luolinjia on 10/13/14.
 * Updated by luolinjia on 10/16/14.
 * Updated by luolinjia on 12/11/14.
 */

$(function(){
    var point = $('#point'), iPost = $('#w-post'), iAbout = $('#w-about'), iTags = $('#w-tags'), iNone = $('#w-none'), word = $('#word');

    var _ = {
        showWord: function(obj, link){
            obj.mouseover(function() {
                var thiz = $(this), imgs = $('img', $('#imgs')),
                    relatedNo = thiz.attr('data-no');
                _.switchPic(relatedNo, imgs);
            }).mouseleave(function () {
                word.empty();
            }).click(function() {
                window.location = link;
            });
        }, switchPic: function (n, os) {
            os.hide();
            for (var i = 0, size = os.length; i < size; i++) {
                var item = $(os[i]);
                if (n === item.attr('src')) {
                    item.fadeIn(300);
                }
            }
            word.css('top', '');
            switch (n) {
                case '../medias/img/01.jpg': {
                    word.append($('<img/>', {'src': '../medias/img/1_story.png'}));
                } break;
                case '../medias/img/02.jpg': {
                    word.append($('<img/>', {'src': '../medias/img/2_actor.png'}));
                } break;
                case '../medias/img/03.jpg': {
                    word.append($('<img/>', {'src': '../medias/img/3_cheat.png'}));
                } break;
                case '../medias/img/04.jpg': {
                    word.append($('<img/>', {'src': '../medias/img/4_heart.png'}));
                } break;
                case '../medias/img/05.jpg': {
                    word.append($('<img/>', {'src': '../medias/img/5_start.png'}))
                        .css({'top':'500px'});
                } break;
                default: break;
            }

        }
    };

    point.mouseover(function() {
        $('#w-post').fadeIn(200);
        $('#w-about').fadeIn(600);
        $('#w-tags').fadeIn(1000);
        $('#w-none').fadeIn(1400);
        _.switchPic($(this).attr('data-no'), $('img', $('#imgs')));
    }).mouseleave(function () {
        word.empty();
    });

    _.showWord(iPost, 'http://ideex.name/cn');
    _.showWord(iAbout, 'http://ideex.name/cn/about');
    _.showWord(iTags, 'http://ideex.name/cn/tags');
    _.showWord(iNone, 'http://ideex.name');

    $('img').hide();
});