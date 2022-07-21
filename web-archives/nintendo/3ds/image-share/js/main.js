function auto_scroll(scroll_width){
    window.scroll(0, scroll_width);
}

/* サブミットボタンを無効にする(連打対応) */
function disableSubmit(window) {
    var forms = window.document.forms;
    for (var formIdx = 0; formIdx < forms.length; formIdx++) {
        var elements = forms[formIdx].elements;
        for (var i = 0; i < elements.length; i++) {
         elements[i].blur();
         if (elements[i].type == 'submit' || elements[i].type == 'button') {
              elements[i].disabled = true;
         } else if (elements[i].type == 'text') {
              //elements[i].readOnly = true;
              elements[i].disabled = true;

              // コメント内容を同名のhidden要素を作ってPOST
              var sub   = window.document.createElement('input');
              sub.type  = 'hidden';
              sub.name  = elements[i].name;
              sub.value = elements[i].value;

              var ex_form = window.document.getElementsByClassName('input-area');
              ex_form[0].appendChild(sub);

         }

        }
    }
}

/*
function set_share_buttons(){
    var share_url  = encodeURIComponent('https://i.nintendo.net/');
    var share_text = encodeURIComponent(document.title);
    var twitter_button  = '<a href="https://twitter.com/share?url='                 + share_url + '&text=' + share_text + '" class="twitter-share-button" data-width="10px" target="_blank"><img src="img/tweet.png" width="56px" alt="Tweet"/></a>';
    var facebook_button = '<a href="http://www.facebook.com/plugins/like.php?href=' + share_url + '&send=false&layout=standard&width=450&show_faces=false&font&colorscheme=light&action=like&height=35&appId=294416857326059" target="_blank"><img src="img/btn_like.png" width="51px" alt="share"/></a>';
    var tumblr_button   = '<a href="http://www.tumblr.com/share/link?url='          + share_url + '&name=' + share_text + '&title=Share on Tumblr" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url(\'img/tumblr-share.png\') top left no-repeat transparent;">Share on Tumblr</a><script src="js/tumblr-share.js"></script>';
    
    <?php if($tw_enable):?>$('.page-footer').find('.share-button').append('<div class="box" id="twitter">'+twitter_button+'</div>');<?php endif;?>
    <?php if($fb_enable):?>$('.page-footer').find('.share-button').append('<div class="box" id="facebook">'+facebook_button+'</div>');<?php endif;?>
    <?php if($tb_enable):?>$('.page-footer').find('.share-button').append('<div class="box" id="tumblr">'+tumblr_button+'</div>');<?php endif;?>
}
*/