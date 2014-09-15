;(function($){
  $.fn.mrjsfaq = function(){
    var $desc= this.children('.faq-description');
    var $title=this.children('.faq-title');
    $desc.first().css('display','block');
    console.log($desc);



    $title.on('click',function(){
        if($title.next().$desc.is(':visible')){return;}
        else{
          $desc.slideUp();
          $title.next().$desc.slideDown();
        }
    });
    return this;
  };

}(jQuery));
