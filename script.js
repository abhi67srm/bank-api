$(function (){
    var $bank = $('.bank');
  
 $.ajax({
       type:'GET',
       url:'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI',
       success: function(banks){
      
       $.each(banks, function(i, bank){
          if(bank.bank_name){
                $bank.append('<li>Bank Name: '+ bank.bank_name +', Bank Id: '+ bank.bank_id +', Address: '+ bank.address +', Branch: '+ bank.branch + '</li>'); 
             }
        });
 
         //   $('#target').keyup(function(e) {
         //     clearTimeout(timeoutID);
         //     //timeoutID = setTimeout(findMember.bind(undefined, e.target.value), 500);
         //     timeoutID = setTimeout(() => findMember(e.target.value), 500);
         //   });
            }
    });
     
    $("#target").on("keyup", function() {
     var value = $(this).val().toUpperCase();
     $(".bank li").filter(function() {
       $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
     });
   });
    
 });