$(function (){
    var $bank = $('.bank');
    var $list = $('li');
    
  
 $.ajax({
       type:'GET',
       url:'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI',
       success: function(banks){
        if(!$list){
          document.write("Loading.....");
        }
        // console.log(banks);
       $('#mumbai').click(function(){
        $('li').remove();
        $.each(banks, function(i, bank){
        if(bank.city == "MUMBAI"){
          // console.log(bank.city);
          $bank.append('<li>Bank Name: '+ bank.bank_name +', Bank Id: '+ bank.bank_id +', Address: '+ bank.address +', Branch: '+ bank.branch + ', City '+ bank.city +'</li>'); 
          $('li').attr('id','fav');

        }
      })
    });

       $('#banglore').click(function(){
        $('li').remove();
        $.each(banks, function(i, bank){
        if(bank.city == "BANGALORE"){
          // console.log(bank.city);
          $bank.append('<li>Bank Name: '+ bank.bank_name +', Bank Id: '+ bank.bank_id +', Address: '+ bank.address +', Branch: '+ bank.branch + ', City '+ bank.city +'</li>'); 
       }
       else{
         $bank.append("<li style='color:red;'>******BANK not available in  BANGALORE*****</li>");
         return false;
         
       }
      
      });
       }); 

       $('#delhi').click(function(){
        $('li').remove();
        $.each(banks, function(i, bank){
        if(bank.city == "DELHI"){
          // console.log(bank.city);
          $bank.append('<li>Bank Name: '+ bank.bank_name +', Bank Id: '+ bank.bank_id +', Address: '+ bank.address +', Branch: '+ bank.branch + ', City '+ bank.city +'</li>'); 
       }
       else{
         $bank.append("<li style='color:red;'>******BANK not available in DELHI*****</li>");
         return false;
         
       }
      
      });
       }); 
       $('#chennai').click(function(){
        $('li').remove();
        $.each(banks, function(i, bank){
        if(bank.city == "CHENNAI"){
          // console.log(bank.city);
          $bank.append('<li>Bank Name: '+ bank.bank_name +', Bank Id: '+ bank.bank_id +', Address: '+ bank.address +', Branch: '+ bank.branch + ', City '+ bank.city +'</li>'); 
       }
       else{
         $bank.append("<li style='color:red;'>******BRANCH not available in CHENNAI*****</li>");
         return false;
         
       }
      
      });
       }); 

       $.each(banks, function(i, bank){
        //  console.log(bank);
        //  console.log(bank.bank_name);
          if(bank.bank_name){
            $bank.append('<li>Bank Name: '+ bank.bank_name +', Bank Id: '+ bank.bank_id +', Address: '+ bank.address +', Branch: '+ bank.branch +'</li>'); 
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