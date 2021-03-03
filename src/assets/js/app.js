console.log('file 1');
$('.single-item').slick();
$("#phone").mask("+7(999) 999-9999")

$('#btn-scroll').click(function () {
    var scrollTop = $('#form1').offset().top;
    $(document).scrollTop(scrollTop);
});
$('#form1').validate({
    rules: {
      fname: 'required',
      user_email: {
        required: true,
        email: true,
      },
      phone: {
       required: true,
       minlength: 10,
   },
    },
    messages: {
      fname: 'Это поле является обязательным',
      user_email: 'Это поле является обязательным',
      phone: 'Это поле является обязательным'
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
$(function() {
	
    var target_block = $(".price"); // Ищем блок 
    var blockStatus = true;
    
    $(window).scroll(function() {
    
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        
        if(scrollEvent && blockStatus) {
        
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            
            $({numberValue: 0}).animate({numberValue: 1000}, {
            
                duration: 4000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                
                step: function(val) {
                
                    $(".price").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    
                }
                
            });
            
        }
        
    });
    
});

function CountdownTimer(elm,tl,mes){
    this.initialize.apply(this,arguments);
   }
   CountdownTimer.prototype={
    initialize:function(elm,tl,mes) {
     this.elem = document.getElementById(elm);
     this.tl = tl;
     this.mes = mes;
    },countDown:function(){
     var timer='';
     var today=new Date();
     var day=Math.floor((this.tl-today)/(24*60*60*1000));
     var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
     var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
     var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
     var me=this;
   
     if( ( this.tl - today ) > 0 ){
      timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
      timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">'+hour+'</span></span>';
      timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINS</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECS</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
      this.elem.innerHTML = timer;
      tid = setTimeout( function(){me.countDown();},10 );
     }else{
      this.elem.innerHTML = this.mes;
      return;
     }
    },addZero:function(num){ return ('0'+num).slice(-2); }
   }
   function CDT(){
   
    // Set countdown limit
    var tl = new Date('2021/03/08 00:00:00');
   
    // You can add time's up message here
    var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
    timer.countDown();
   }
   window.onload=function(){
    CDT();
   }