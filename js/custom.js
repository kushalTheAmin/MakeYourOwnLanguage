
$(document).ready(function()
{
  var language;
  var choice;
  $('.btn.btn-primary.btn-lg').click(function() {
            $("#decription_section").html(" ");
            $('.primary_section').css("display","block");
            language = $(this).val();
            //$("#decription_section").html("<h1 style='padding-left:15px; color:red;'>"+language+"</h1>");
            
    });

  $('#myForm input').on('change', function() {
  	 $("#decription_section").html(" ");
    choice = $('input[name=radioName]:checked','#myForm').val(); 
    


   if(language == "Java")
   {
      var $log_java = $( "#decription_section");
      
      switch(choice)
      {

        case "dataTypes": 
                          var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1></br>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
       case "varDeclare":  var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;

      case "assignStatement": var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;

      case "varInit" : var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
      case "arithExpession" : var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
      case "relBoolExp" : var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
      case "typeBoolExp" : var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
      case "selectStatement": var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
      case "iterativeStatement": var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;

      case "typeConversion" : var  str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
                          html_java = $.parseHTML(str_java);  
                          $log_java.append(html_java);
                          break;
    
    }
   }
   

   else if(language == "Java" && choice == "dataTypes")
   {
    var $log_java = $( "#decription_section"),
         str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
         html_java = $.parseHTML(str_java);  
     
    $log_java.append(html_java);
   }


   else if(language == "Java" && choice == "dataTypes")
   {
    var $log_java = $( "#decription_section"),
         str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
         html_java = $.parseHTML(str_java);  
     
    $log_java.append(html_java);
   }


  else if(language == "Java" && choice == "dataTypes")
   {
    var $log_java = $( "#decription_section"),
         str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
         html_java = $.parseHTML(str_java);  
     
    $log_java.append(html_java);
   }


   else if(language == "Java" && choice == "dataTypes")
   {
    var $log_java = $( "#decription_section"),
         str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
         html_java = $.parseHTML(str_java);  
     
    $log_java.append(html_java);
   }


   else if(language == "Java" && choice == "dataTypes")
   {
    var $log_java = $( "#decription_section"),
         str_java= '<h1 style="padding-left:15px; color:red;"">'+language+'</h1>',
         html_java = $.parseHTML(str_java);  
     
    $log_java.append(html_java);
   }


    });


  
  
});





