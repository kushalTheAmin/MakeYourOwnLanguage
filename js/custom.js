
$(document).ready(function()
{
  var language;
  var choice;
  $('.btn.btn-primary.btn-lg').click(function() {
            $('input[name=radioName]').prop('checked',false);
            $("#decription_section").html(" ");
            $('.primary_section').css("display","block");
            language = $(this).val();
            //$("#decription_section").html("<h1 style='padding-left:15px; color:red;'>"+language+"</h1>");
            
    });

  $('#myForm input').on('change', function() {
  	 $("#decription_section").html(" ");
    choice = $('input[name=radioName]:checked','#myForm').val(); 
    
var printFunction = function (str_language)
                     {
                        var $log_language = $( "#decription_section");
                        html_language = $.parseHTML(str_language);  
                        $log_language.append(html_language);
                     }

   switch(language)
   {
    case "Java" :  
       
                   switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= ' <div class="container"><h2> Java </h2><br><br> <p> &#8620; Data Type:- <p id="pId">it have eight different integer types in a language like real, integer, or Boolean.In the java, the “int” represent 32-bit size. It provide additional data type, by combining multiple elements.</p></p><br><br><ul> <div> &#8620;Classes of Data Type: </div><li><h4>Primitive data type :</h4>  int gear = 1; there are eight data primitive types supported by java programmer. Which are - Byte, short, int,long, float, double, Boolean, char.</li><li><h4>Machine data type :</h4> computer based on digital electronics bits( 0 and 1 )format.</li><li><h4>Boolean type :</h4> it represent true and false value only.it represent logical structure of interpreted to a machine language.</li><li><h4>Composite types :</h4> it derived from more than one primitive type. It stores number of elements of same type in specific order and also can store different data types in that.</li><li><h4>String and text type :</h4> character and string types can store sequence of character from a character set such as ASCII. It can have different subtypes according to the required character.</li><li><h4>Abstract type :</h4>  Array, List, Map, Queue, Set, Stack, Table, Tree, and Vector are ADTs. Each of these ADTs have many implementations i.e. CDT.Container is a high-level ADT of above all ADTs.</li></ul> </div>  ';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> Java </h2><br><br> <p> Variable Declaration:- <p id="pId">We must declare all variable before they can be used. Global variable declaration is- <br><b>Data type variable [=value] [, variable [ = value] … ];</b></p></p><br><p style="color:blue; font-size:20px;">Example:<b> int a,b,c; char name;</b></p><br>&nbsp;The name given to a variable is known as an identifier. As the term suggests, the way the compiler knows which variables it is dealing with is through the variable name.<br><br><ul><p style="color:blue; font-size: 15px;">&#8620;Declaring variables for other data types is exactly the same:</p><li>byte nextInStream;</li><li>short hour;</li><li>long totalNumberOfStars;</li><li>float reactionTime;</li><li>double itemPrice;</li></ul></div> ';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> Java </h2><br><br> <p> Variable Initialization:- <p id="pId">before variable can used it can have initial value which known as initialization of variable.</p></p><br><p>&#8620;Example: </p><p style="font-size:15px; padding-left: 140px;"><b> int i;<br>I = I +10; //  it will throw an error…</b></p></p><br> &nbsp; To initialize a variable we use an assignment statement. An assignment statement follows the same pattern as an equation in mathematics (e.g., 2 + 2 = 4). There is a left side of the equation, a right side and an equals sign (i.e., "=") in the middle. To give a variable a value, the left side is the name of the variable and the right side is the value:<br><p>&#8620;Example: </p> <p style="font-size:15px; padding-left: 140 px;"><b>int numberOfDays;<br>numberOfDays = 7;</b></p><br> &nbsp;In the above example, numberOfDays has been declared with a data type of int and has been giving aninitial value of 7.';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= ' <div class="container"><h2> Java </h2><br><br> <p> Assignment Statement :- <p id="pId">An assignment statement in Java uses the assignment operator (=) to assign the result of an expression to a variable.</p></p><br><p>&#8620;Example: </p><p style="font-size:15px; padding-left: 140px;"><b> variable = expression;<br>int a= (b *c) /4;</b></p></p><br> &nbsp;A compound assignment operator is an operator that performs a calculation and an assignment at the same time. All Java binary arithmetic operators (that is, the ones that work on two operands) have equivalent compound assignment operators:<br><br><table><tr><td>+=</td><td>Addition and assignment</td></tr><tr><td>-=</td><td>Subtraction and Assignment</td></tr><tr><td>*=</td><td>Multiplication and assignment</td></tr><tr><td>/=</td><td>Division and assignment</td></tr><tr><td>%=</td><td>Reminder and assignment</td></tr></table>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> Java </h2><br><br><p> Arithmetic expression :- <p id="pId">arithmetic in Java, one must first declareat least one variable. Typically one declares a variable and assigns it a value before any arithmetic is done. After creating multiple variable java uses</p></p><br><p style="font-size:25px; padding-left: 140px;"><b>&#8620;&nbsp;&nbsp; +, -, *, /, %, ++, --.</b></p></p><br> <p>&#8620; Example:</p><p style="font-size: 15px;">The division operator rounds towards zero: 5/2 is 2, and -5/2 is -2. The remainder operator has the same sign asthe left operand; it is defined such that ((a/b)*b) + (a%b) is always equal to a.</p><br> More complex arithmetic expressions can be formed by connecting literals and variables with one of the arithmetic operators:<br><table><tr><th>Operator</th><th>Meaning</th></tr><tr><td>+</td><td>Add</td></tr><tr><td>-</td><td>Subtraction</td></tr><tr><td>*</td><td>Multiply</td></tr><tr><td>/</td><td>Divide</td></tr><tr><td>%</td><td>Mod(reminder)</td></tr></table><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> Java </h2><br><br><p> Relational and Conditional Operator : <p id="pId">A relational operator comparestwo values and determines the relationship between them. For example, != returns true if its two operands are unequal.</p></p><br><table><tr><th>Operator</th><th>Use</th><th>Decription</th></tr><tr><td>></td><td>op1> op2 </td><td>Returns true if op1 is greater than op2 </td></tr><tr><td>>=</td><td>op1 >= op2</td><td>Returns true if op1 is greater than or equal to op2</td></tr><tr><td><</td><td>op1 < op2</td><td>Returns true if op1 is less than op2</td></tr><tr><td><=</td><td>op1 <= op2</td><td>Returns true if op1 is less than or equal to op2</td></tr><tr><td>--</td><td>op1 -- op2</td><td>Returns true if op1 and op2 are equal</td></tr></table><br><br>Relational operators often are used with conditional operators to construct more complex decision-making expressions.<br><br><table><tr><th>Operator</th><th>Use</th><th>Decription</th></tr><tr><td>&nbsp;&&</td><td>op1 && op2</td><td>Returns true if op1 and op2 are both true; conditionally evaluates op2</td></tr><tr><td>&nbsp;||</td><td>op1 || op2</td><td>Returns true if either op1 or op2 is true; conditionally evaluates op2</td></tr><tr><td>&nbsp;!</td><td>!op</td><td>Returns true if op is false</td></tr><tr><td>&nbsp;&</td><td>op1&op2</td><td>Returns true if op1 and op2 are both boolean and both true; always evaluates op1 and op2; if both operands are numbers, performs bitwise AND operation</td></tr><tr><td>&nbsp;|</td><td>op1 | op2</td><td>Returns true if both op1 and op2 are boolean and either op1 or op2 is true; always evaluates op1 and op2; if both operands are numbers, performs bitwise inclusive OR operation</td></tr></table><br><br></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= ' <div class="container"><h2> Java </h2><br><br><p> Type conversion : <p id="pId">it’s a converting one data type to another either implicitly or explicitly.Java data type casting comes with 3 types.</p></p><br>  <b><ul><li>Implicit casting</li><li>Explicit casting</li><li>Boolean casting</li></ul></b><p style="font-size: 15px;"><p style="color: blue;">&#8620; Implicit casting (widening conversion) :</p>A data type of lower size (occupying less memory) is assigned to a data type of higher size. This is done implicitly by the JVM. The lower size is widened to higher size. This is also named as automatic type conversion.<b><ol style="font-size: 15px;"><li>int x=10; // occuppies 4 bytes</li><li>double y=x; //occupies 8 bytes</li><li>system.out.println(y);</li> </ol></b></p><p style="font-size: 15px;"><p style="color: blue;"> &#8620;Implicit casting :</p>A data type of lower size (occupying less memory) is assigned to a data type of higher size. This is done implicitly by the JVM. The lower size is widened to higher size. This is also named as automatic type conversion.</p><p style="font-size: 15px;"><p style="color: blue;"> &#8620;Boolean casting :</p>A boolean value cannot be assigned to any other data type. Except boolean, all the remaining 7 data types can be assigned to one another either implicitly or explicitly</p><br><b>boolean x= true;</b><br><b>int y=x; //error</b><br><br></div> ';
                         printFunction(str_language);
                          break;
      
                 case "iterativeStatement": var  str_language= '<div class="container"><h2> Java </h2><br><br><p> Iterative Statements : <p id="pId">iteration statement are statements which appear in the source code only once, but it execute many times.it’s called of statements are called loops.</p></p><br><p style="font-size: 20px; color: blue;">Example :</p><p style="font-size: 15px;"><b>while(a>=5)<br>{<br>B= 9 + a;<br> a--;<br>} //while loop</b></p> </div>';
                         printFunction(str_language);
                          break;

                 case "selectStatement" : var  str_language= '<div class="container"> <h2> Java </h2><br><br><p> Select Statements : <p id="pId">java have select statement which includes following statements:</p></p><br><b><ul><li>If and If-else statements : if(condition expression) java statement></li><li>conditional expressions : int temperature = inBox.getInteger(“Enter your temperature.”);</li><li>comparision operators : a==b </li><li>nested if-else : if(a==b){ else if(b==c){ }}</li><li>boolean operators : AND, OR, NOT</li><li>switch statement : switch(op){case 1: statment}</li></ul></b></div>';
                        printFunction(str_language);
                          break;
    
                      }break;

   case "Objective C" :  
       
                   switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> Objective C</h2><br><br> <p> Data Types : <p id="pId">The C language provides the four basic arithmetic type specifiers char, int, float and double, and the modifiers signed, unsigned, short and long.It includes definitions of several new integer types to enhance the portability of programs.</p></p><br><ul><li><p style="color: blue; font-size: 20px;"><b>Structure :  </b></p><p style="font-size: 15px;">it’s way to define multiple pieces of data in one variable.example is given bellow...<br> Struct student<br>{<br>&nbsp;&nbsp;&nbsp;int id;<br>&nbsp;&nbsp;&nbsp;Char name[20];<br>};</p></li></ul><ul><li><p style="color: blue; font-size: 20px;"><b>Array :  </b></p><p style="font-size: 15px;">it’s way to define multiple pieces of data in one variable.example is given bellow...<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8620;int student[100];</b></p></li></ul><ul><li><p style="color: blue; font-size: 20px;"><b>Pointer :  </b></p><p style="font-size: 15px;">it’s point to address of that variable.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8620;Char *name;</b></p></li></ul><ul><li><p style="color: blue; font-size: 20px;"><b>Union :  </b></p><p style="font-size: 15px;">it’s special structure which allow access to the same memory using different type decription...<br><br><b> <p style="font-size:15px;">union<br>{<br> &nbsp;int i;<br>&nbsp;float f<br>&nbsp; struct<br>&nbsp;{<br>&nbsp;&nbsp; int id;<br>&nbsp;&nbsp;string name;<br>&nbsp;}s;<br>&nbsp;}u;</b></p></div>';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> Objective C</h2><br><br> <p> Variable Declaration: <p id="pId">variable declaration provides assurance to the compiler that there exists a variable with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail about the variable. A variable definition has its meaning at the time of compilation only, the compiler needs actual variable definition at the time of linking the program.</p></p><br>Example:<br><b>&nbsp;&nbsp;&nbsp; int a,b;<br>&nbsp;&nbsp;&nbsp;&nbsp;float f;</b></div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Variable initialization:  <p id="pId">time of declaration of variable there are two kind of expresstion lvalue and rvalue.</p><br><b>Lvalue :</b> expression that refer to a memory location are called "lvalue" expressions. An lvalue may appear as either the left-hand or right-hand side of an assignment.<br><br><b>Rvalue :</b> The term rvalue refers to a data value that is stored at some address in memory. An rvalue is an expression that cannot have a value assigned to it which means an rvalue may appear on the right-hand side but not on the left-hand side of an assignment.<br><br><b style="font-size: 20px;">int g = 20; //valid statement...</b><br><br>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Assignment Statement :  <p id="pId">The assignment statement has the following form in C: <br> <b>variable = expression</b></p><br><ul><b style="font-size: 15px;">&#8620;Its purpose is saving the result of the expression to the right of the assignment operator to the variableon the left.</b><br><li>The expression is evaluated first with the rules discussed in the single mode or the mixed modeexpressions pages.</li><li>If the type of the expression is identical to that of the variable, the result is saved in the variable.</li><li>Otherwise, the result is converted to the type of the variable and saved there.<ol><li>If the type of the variable is INTEGER while the type of the result is REAL, the fractional part, including the decimal point, is removed making it an integer result.</li><li>If the type of the variable is REAL while the type of the result is INTEGER, then a decimal point is appended to the integer making it a real number.</li></ol></li><li>Once the variable receives a new value, the original one disappears and is no more available.</li><li>CHARACTER assignment follows the rules stated in the discussion of the PARAMETER attribute.</li></ul></div> ';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Arithmetic Expression :  <p id="pId">Arithmetic Expressions consist of numeric literals, arithmetic operators, and numeric variables. They simplify to a single value, when evaluated.</p><br><p><b>Example: 3.14*10*10</b></p><p style="font-size: 15px; ">Multiplication and division have a higher order of precedence than addition and subtraction. What this means is that in an arithmetic expression, you should first run through it left to right, only performing the multiplications and divisions.</p><b>Example: 3+ 4*5 - 6/3 *4/8 + 2*6 - 4*3*2</b><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Relational operation : <p id="pId">The relational operators such as <, <=, >, and >= are in fact operators, just like +, -, *, and /. The relational operators take two values, look at them, and -return- a value of 1 or 0 depending on whether the tested relation was true or false.</p><br><table><tr><td>&nbsp;<</td><td>less than</td></tr><tr><td>&nbsp;<=</td><td>less than or equal </td></tr><tr><td>&nbsp;></td><td>greater than</td></tr><tr><td>&nbsp;>=</td><td>greater than or equal</td></tr><tr><td>&nbsp;!=</td><td>not equal</td></tr><tr><td>&nbsp;==</td><td>equal</td></tr></table><br> Relational and Boolean expressions are usually used in contexts such as an if statement, where something is to be done or not done depending on some condition. In these cases what is actually checked is whether the expression representing the condition has a zero or nonzero value.</div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Type conversion : <p id="pId">In C, operands of different types can be combined in one operation.the operands have different types, the compiler tries to convert them to a uniform type before performing the operation. In certain cases, furthermore, you must insert type conversion instructions in your program. The compiler provides implicit type conversions when operands have mismatched types, or when you call a function using an argument whose type does not match the function is corresponding parameter. Programs also perform implicit type conversion as necessary when initializing variables or otherwise assigning values to them. </p><br><p style="font-size: 20px; color: blue;"><b>Example:</b></p><p style="font-size: 15px;"><b>double var=2.5;</b> //define var as a variable of type double...<br><b>var = 3; </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//multiply var value as a integer...</p> ';
                         printFunction(str_language);
                          break;
      
                 case "iterativeStatement": var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Selection Statements : <p id="pId">it contains  kind of selection statements.</p><br><ol><li>logical expression</li><li>if statement</li><li>switch statement</li></ol><br><p style="font-size: 15px;"><b>If else and nested if statement :</b> It is always legal in C programming to nest if-else statements, which means we can use one if or else if statement inside another if or else if statement(s).</p><p style="font-size: 15px;"><b>Switch Statement :</b> When the variable being switched on is equal to a case, the statements following that case will execute until a break statement is reached. When a break statement is reached, the switch terminates, and the flow of control jumps to the next line following the switch statement.</p><p style="font-size: 15px;"><b>Iterative Statements :</b> The repeated execution of a statement or compound statement is accomplished either by iteration or recursion<b>Example: for ([expr_1] ; [expr_2] ; [expr_3]) statement</b> </p><br>&nbsp;&nbsp;The expressions can be whole statements, or even statement sequences, with the statements separated by commas • If the second expression is absent, it is an infinite loop. The first expression is evaluated once, but the other two are evaluated with each iteration.</div> ';
                         printFunction(str_language);
                          break;

                 case "selectStatement" : var  str_language= '<div class="container"><h2> Objective C</h2><br><br><p>Iterative Statements : <p id="pId">The repeated execution of a statement or compound statement is accomplished either by iteration or recursion</p><br><b>Example: for ([expr_1] ; [expr_2] ; [expr_3]) statement</b><br><br>&nbsp;The expressions can be whole statements, or even statement sequences, with the statements separated by commas • If the second expression is absent, it is an infinite loop. The first expression is evaluated once, but the other two are evaluated with each iteration.</div>';
                        printFunction(str_language);
                          break;
    
                      }break;

  case "C#" :  
       
                   switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> C#</h2><br><br> <p>Data type : <p id="pId">C# has a unified type system.it’s called comman type system.it include primitive such as integers, are subclasses of the System.Object class. We can use methods with this class for example ToString() method.</p><br><b>Types of Data Types :</b> variable declaration provides assurance to the compiler that there exists a variable with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail about the variable. A variable definition has its meaning at the time of compilation only, the compiler needs actual variable definition at the time of linking the program.<br><br>It seprates data types into two categories :<br><ol><li>reference types</li><li>value types</li></ol><br><b>Boxing Opeartion :</b> it’s way to converting a value –type object into a value of a corresponding reference type.it’s implicit type of operation.<br><b>Unboxing Operation :</b> it’s operation of converting a value of a reference type into a value type.<br> <b>Example :<br>int i;<br>object obj=i;<br>int i1 = (int)obj;</b></div>';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Variable declaration : <p id="pId">A variable declaration can be essentially declare like this.</p><br><b>{data type} {name}; <br> string name;<br> private string name; </b><br><br>The visibility part is explained hear, so let concentrate on the variable part.<br>variable declaration provides assurance to the compiler that there exists a variable with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail about the variable. A variable definition has its meaning at the time of compilation only, the compiler needs actual variable definition at the time of linking the program.</div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Variable initialization : <p id="pId">Field declarations may include variable-initializers. For static fields, variable initializers correspond to assignment statements that are executed during class initialization. For instance fields, variable initializers correspond to assignment statements that are executed when an instance of the class is created.</p><br> for example: <br><b> using system;<br>class test<br>{<br>&nbsp;static double x= Math.sqrt(2.0);<br>&nbsp; int i= 100;<br>}</b></p></div>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Assignment Statements : <p id="pId">Assignment statements carry out assignment operations, which consist of taking the value on the right side of the assignment operator (=) and storing it in the element on the left, as in the following example.</p><ul><li><b>Example: v = 42 </b><br>The programming element on the left side of the assignment operator must be able to accept and store a value.</li><li><b>Example: x = y + z + findResult(3)</b><br>The value on the right side of the assignment operator is generated by an expression, which can consist of any combination of literals, constants, variables, properties, array elements, other expressions, or function calls.<ol><li>Eligible Programming Element : x = y + z + findResult(3)</li><li>Data type in Assignment Statement:  Dim a, b As String<br><b> a="String variable assignment: Dim a, b As String</b></li><li>compound assignment statement:  n += 1</li><li>type conversion assignment astatement the value assigned to variable, properties, or array element must be of a data type appropiate to that destination element.</li></ol></li></ul></div>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Arithmetic Expressions : <p id="pId">In c# there are unary expression(*, /, %),multiplicity expression (+, -).</p><b><br> Expression : <br> add numbers: X= num1+num2;<br>Subtract number: X= num1-num2;<br>Multiply number: X=num1*num2;<br>Divide number: X= num1/num2;<br>Devide two numbers: x=number1 %  num2 will be give reminder.</b><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Relational operators: <p id="pId">The relational operators compare values to one other. The comparison operators are =, <>, <, >, <=, and >=. All of the relational operators result in a Boolean value.</p><ul><li>The = operator tests whether the two operands are equal.</li><li>The <> operator tests whether the two operands are not equal.</li><li>The < operator tests whether the first operand is less than the second operand.</li><li>The > operator tests whether the first operand is greater than the second operand.</li><li>The <= operator tests whether the first operand is less than or equal to the second operand.</li><li>The >= operator tests whether the first operand is greater than or equal to the second operand.</li></ul><br>The relational operators are defined for the following types:<br> <ol><li>boolean</li><li>byte</li><li>short</li><li>integer</li><li>single</li><li>double</li><li>decimal</li><li>date</li><li>char</li><li>string</li></ol></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Type conversion : <p id="pId">C# is statically-typed at compile time, after a variable is declared, it cannot be declared again or used to store values of another type unless that type is convertible to the variable type. For example, there is no conversion from an integer to any arbitrary string.</p><br> <b>Example :<br>int i;<br>i = "hello"; -- cannot convert implicitly from string to int.</b><br><br>there are 4 kind of type conversion:<br> <ol><li>implicit conversion</li><li>explicit conversion</li><li>user defined</li><li>user defined</li><li>conversion with helper class</li></ol></div>';
                         printFunction(str_language);
                          break;
      
                 case "selectStatement": var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Selection Statements : <p id="pId">A selection statement causes the program control to be transferred to a specific flow based upon whether a certain condition is true or not.The following keywords are used in selection statements:</p><br>&nbsp;<b> IF :</b> <br> if(condition)<br>{<br>Console.WriteLine("The variable is set to true.");<br>}<br> &nbsp;<b> ELSE </b>: <br> else<br>{<br> Console.WriteLine("The variable is set to false.");<br>}<br><b>&nbsp; switch :</b> <br> int caseSwitch =1;<br> switch(caseSwitch)<br>{<br>case 1 : console.writeLine("case 1"); break;<br>default: console.writeLine("case 2");<br> break;<br>}</div>';
                         printFunction(str_language);
                          break;

                 case "iterativeStatement" : var  str_language= '<div class="container"><h2> C#</h2><br><br><p>Iterative Statements : <p id="pId">You can create loops by using the iteration statements. Iteration statements cause embedded statements to be executed a number of times, subject to the loop-termination criteria. These statements are executed in order, except when a jump statement is encountered. The following keywords are used in iteration statements:</p><br> <b>DO :</b><br>do<br>{ console.writeLine(x);<br>x++;<br> } <br> <b> FOR : </b> <br>for (int i=1; i<=5; i++)<br> { <br> console.writeLine(i);<br>}<br><b>foreach : </b><br> foreach (int element in fibarray)<br> { <br> system.console.writeLine(element);<br> }<br><b> IN : </b><br> foreach (int element in fibarray)<br> {<br> count + 1;<br> system.console.writeLine("Element #{0}: {1}", count, element);<br> }<br><b>While : </b><br> while (n< 0)<br> {<br> console.writeline("current value of n is {0}", n ); <br> n++;<br> }</div>';
                        printFunction(str_language);
                          break;
    
                      }break;
 
 case "Python" :  
       
                   switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> Python</h2><br><br> <p>Data Type : <p id="pId">python’s data type can be grouped into classes.<br><b>Boolean –</b> build in data type with values True and False.<b>Numerical types –</b>int, long, float, complex.<br> <b>Sequence -</b>str, bytes, byte array, list, tuple.<br> <b>Sets -</b>set, frozen set<br> <b>Mapping -</b>dict: it’s python dictionaries.</p><br>data type, python can be distinguished based on whether objects of the types are mutable and immutable<br> <b> Immutable types : </b> <ul><li>int float, long, comple</li><li>str</li><li>bytes</li><li>tuple</li><li>frozen set</li></ul> <br> <b> Mutable Types :</b> <ol><li>list</li><li>set</li><li>dict</li></ol></div>';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> Python</h2><br><br><p>Variable Declarations : <p id="pId"> In python, variable are nothing but reserved memory location to store value.this means that when you create a variable you reserved some space in memory. There is no need to declare data type in python.we can directly assign value directly.and at run time it will declare it’s data type automatically. <br> &nbsp;Python is dynamic, so you do not need to declare things; they exist automatically in the first scope where they are assigned. So, all you need is a regular old assignment statement as above.<br> <br><b>var= none;</b></p></div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> Python</h2><br><br><p>Variable Initialization : <p id="pId">The operand to the left of the = operator is the name of the variable and the operand to the right of the = operator is the value stored in the variable.</p><br><b>For Example :</b><br><b> counter = 100  # An integer assignment<br> miles =100.0 # A floating point <br> name = "kushal" # A string<br><br></b> We can also assign multiple objects to multiple variables. <b>For example −<br> <b>a, b, c = 1, 2, "kushal" </b></div>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> Python</h2><br><br><p> Assignment Statement : <p id="pId">&nbsp;The purpose of python’s assignment statement is to  associated names with value in program. It is only statement that does not start with keyword.an assignment statement is a line containing at least one single equal sign(=) that is not inside parentheses.<br><br> <p style="font-size: 15px;"><b> Target0 = taget1 = ...=expression.<br></b><br><b>Example :<br></b> >>> x = 5 <br> >>> x = "some string"</p> </p></div>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> Python</h2><br><br><p>  Arithmetic Expressions : <p id="pId"> Different arithmetic expression are defined and decribed bellow :<br><table><tr><th>Operator</th><th>Example</th></tr><tr><td>&nbsp;+</td><td>a + b =10</td></tr><tr><td>&nbsp;-</td><td>a - b =10</td></tr><tr><td>&nbsp;*</td><td>a * b =10</td></tr><tr><td>&nbsp;/</td><td>a / b =10</td></tr><tr><td>&nbsp;%</td><td>a % b =0</td></tr><tr><td>&nbsp;**</td><td>a ** b =10</td></tr><tr><td>&nbsp;//</td><td>floor division - 9 // 2 =4 </td></tr></table></p><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> Python</h2><br><br><p>  Relational and Boolean Expression : <p id="pId">A boolean expression (or logical expression) evaluates to one of two states true or false. Python provides the boolean type that can be either set to False or True. Many functions and operations returns boolean objects.The not keyword can also be used to inverse a boolean type.<br><br><b>>> not True<br>False.</b><br><br>The <, <=, >, >=, ==, != operators compare the values of 2 objects and returns True or False. Comparison depends on the type of the objects. See the Classes to see how to refedine the comparison operator of a type.<br><p style="font-size: 15px;"><b>Example :</b><br> 10 == 10<br> 10 <= 10.</p></p><br><br></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> Python</h2><br><br><p> Type Conversion : <p id="pId">we perform conversions between the built-in types. To convert between types you simply use the type name as a function. In addition, several built-in functions are supplied to perform special kinds of conversions. All of these functions return a new object representing the converted value.</p><br><table><tr><th>Function</th><th>Decription</th></tr><tr><td>int (x, [, base])</td><td>Convert x to an integer. base specification the base if x is a string.</td></tr><tr><td>long(x [,base] )</td><td>Converts x to a long integer. base specifies the base if x is a string.</td></tr><tr><td>float(x)</td><td>Converts x to a floating-point number.</td></tr><tr><td>complex(real[,imag])</td><td>Creates a complex number.</td></tr></table><br><br></div>';
                         printFunction(str_language);
                          break;
      
                 case "selectStatement": var  str_language= '<div class="container"><h2> Python</h2><br><br><p> Selection Statements : <p id="pId">the sequence of statements that the computer executes. In procedurally written code, the computer usually executes instructions in the order that they appear. However, this is not always the case. One of the ways in which programmers can change the flow of control is the use of selection control statements.<br>For example, a program might choose how to proceed on the basis of the user’s input. As you will be able to see, such statements make a program more versatile.<br>Decision-making by a computer is based on the same two-step process. In Python, decisions are made with the if statement, also known as the selection statement. When processing an if statement, the computer first evaluates some criterion or condition. If it is met, the specified action is performed. Here is the syntax for the if statement:<br><br> <b>if condition <br> &nbsp;&nbsp;if body</b></b></div>';
                         printFunction(str_language);
                          break;

                 case "iterativeStatement" : var  str_language= '<div class="container"><h2> Python</h2><br><br><p> Iterative Statements : <p id="pId">we can perform iteration  using different kind of methods wich are described bellow :</p><br><b>Updating variable :</b> A common pattern in assignment statements is an assignment statement that updates a variable - where the new value of the variable depends on the old.<br> <b> x = x + 1<br> or x ++ </b><br><br> <b>The while statement </b><br> <b>while n>0 : <br> &nbsp;&nbsp; print n;<br> &nbsp;&nbsp; n = n-1 </b><br> <br>The body of the loop should change the value of one or more variables so that eventually the condition becomes false and the loop terminates. We call the variable that changes each time the loop executes and controls when the loop finishes the iteration variable.<br><b><br>Infinity Loops : </b>An endless source of amusement for programmers is the observation that the directions on shampoo, "Lather, rinse, repeat," are an infinite loop because there is no iteration variable telling you how many times to execute the loop.</p></div>';
                        printFunction(str_language);
                          break;
    
                      }break;

case "JavaScript" :  
       
                   switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> Java Script</h2><br><br> <p> Data Type : <p id="pId">It provide dynamic data type.Javascript language provide primitive data type. It provides named value pair.<br> <br><p style="font-size: 15px;"> <b>Undefined :</b>It’s considered a genuine primitive type.the undefined value may behave uninitialized variables.it have different kind of data type which are listed bellow:</p><br><ul><li>Boolian</li><li>Null</li><li>Undefined</li><li>Number</li><li>String</li><li>Symbol</li></ul></p></div>';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Variable declaration :  <p id="pId">We can declare variable using “var” keyword.<br><br> <b>Example : var num; // it give an error !!!</b><br><br>&nbsp;&nbsp;We have to give value in right side which will be compile time declare data type of variable.Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container. Before you use a variable in a JavaScript program, you must declare it. <br><br>JavaScript allows you to work with three primitive data types: <br><br> <ol><li><b>Numbers, eg. 123, 120.50 etc.</b></li><li><b>String of text e.g "This text" etc.</b></li><li><b>Boolean e.g true or false</b></li></ol> <br><br></p></div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Variable initialization :  <p id="pId">In javascript data initialization is needed for initializing the data type.<br><br> <b>Example :</b><br>var a = 10; // a is now a Number<br>var a = "nyit" //a is now String.<br> var a = true; // a is now Boolean. </p></div>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Assignment statement :  <p id="pId"> &#8620;assignment operators assign value to javascript variables. <br> <b>Example :</b><br> var x = 10;<br> x += 5; <br><br> Different assignment operators are decribed bellow :<br><br><ol><li> =</li><li> += </li><li> -=</li><li> *=</li><li> /=</li><li> %=</li><li>>>=</li><li>>>>=</li><li>&=</li><li>^=</li><li>|=</li></ol> </p></div>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Arithmetic Expression :  <p id="pId"> &#8620; arithmetic operators performs arithmetic on numbers. <br> <ol><li> + </li><li> - </li><li> * </li><li> / </li><li> % </li><li> ++ </li><li> -- </li></ol><br><br> <b>Example :</b><br> 10 + 20 // hear 10 is operand, + is operator, and 20 is also operand.<br>In arithmetic operation the numbers called oprands.the operation is defined by an operator.<br><br><b>Example :</b><br> var x = 100+50;</p></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Relational and Boolean Expression :  <p id="pId"> &#8620;any program code is mean to do some action based on conditions.These condition is normally based on an evaluation of value using relational operators.<br><br> <ul><li>== : Returns true when both operands are equal. The operands are converted to the same type before being compared. </li><li>!= : Returns true when both operands are not equal. The operands are converted to the same type before being compared.</li><li>=== : Returns true if both operands are equal and of the same type.</li><li>!= : Returns true if both operands are not equal and of the same type.</li><li>> : return true if the left operand is greater than the right one.</li><li>>= : Returns true if the left operand is greater than or equal to the right one.</li><li><  : Returns true if the left operand is greater than the right one.</li><li><= : Returns true if the left operand is greater than or equal to the right one.<br> <b> <br>Example : </b> converting to string: var x=5; var str= String(x);</li></ul> </p></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Type conversion :  <p id="pId"> &#8620; Javascript being loosely typed and willing to type-convert still does not save the programmer from needing to think about the actual type of values that they are dealing with. A very common error in browser scripting, for example, is to read the value property of a form control into which the user is expected to type a number and then add that value to another number.<br> <br> <b>Example :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; converting to string: var x = 5; var str = String(x);</b> </p></div>';
                         printFunction(str_language);
                          break;
      
                 case "selectStatement": var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Selection statement :  <p id="pId"> &#8620;In JavaScript we have the following conditional statements: <ul><li> Use<b> if</b> </b>to specify a block of code to be executed, if a specified condition is true</li><li>Use <b>else</b> to specify a block of code to be executed, if the same condition is false</li><li>Use<b> else if</b> to specify a new condition to test, if the first condition is false</li><li>Use <b>switch</b> to specify many alternative blocks of code to be executed</li></ul><br> <br> <b>Example :</b><br> if (x < 10 )<br>{<br> &nbsp;&nbsp;name = "kushal";<br>} else if(x < 20){ <br>&nbsp;&nbsp;name = "nyit";<br>}else { <br>&nbsp;&nbsp;name= "id#1144329";<br>} <br><br> </p></div>';
                         printFunction(str_language);
                          break;

                 case "iterativeStatement" : var  str_language= '<div class="container"><h2> Java Script</h2><br><br><p> Iterative statement :  <p id="pId"> &#8620; There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times (and it is actually possible that number could be zero). The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.<br><br> The statements for loops provided in JavaScript are:<br><br><ul><li>for statement</li><li>do..while statement</li><li>while statement</li><li>labeled statement</li><li>break statement</li><li>continue statement</li><li>for..in statement</li><li>for..of statement</li></ul> </p><br><br></div>';
                        printFunction(str_language);
                          break;
    
                      }break;

case "PHP" :  
       
                   switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Data Type :  <p id="pId"> &#8620;PHP stores integers in a platform-dependent range, in both 32 bit and 64 bit range.it’s equivalent to C-language long type.PHP has a native Boolean type that similar to native Boolean types in Java and C ++. The Boolean type that is similar to native types.<br><br>It support following data types :<ol><li>String : $name= “kushal amin”;</li><li>Float : $i= 10.5;</li><li>Integer : $i =10;</li><li>Boolean  : $bool =true;</li><li>Array : $name= array(“abc”,”def”,”ghi”);</li><li>Object : $student ->name =”kushal”;</li><li>Null : $i =null;</li><li>Resource : it’s a not an actual data type.it’s actually stores references in it.</li></ol> </p><br><br></div>';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Variable Declaration :  <p id="pId"> &#8620;php is loosely types language.it’s automatically converts the variable to correct data type, depending on it’s value.Declaring variable without it’s value assign a NULL value.<br><b><br> var a;</b><br><br>As an addendum to David has on 10-Nov-2005 posting, remember that curly braces literally mean "evaluate what is inside the curly braces" so, you can squeeze the variable variable creation into one line, like this:<br>  <br> &nbsp;&nbsp;&nbsp; ${"title_default_" . $title} = "selected";</p><br><br></div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Variable Initialization :  <p id="pId"> &#8620; A variable starts with the $ sign, followed by the name of the variable.<br><br>$txt = "Hello world!";<br>$x = 5;<br>$y = 1<0.5;<br><br> We can assign value NULL to variable..<br> It has different variable scope;<br> &nbsp;&nbsp;<br><b> Local, global, static. </b> </p><br><br></div>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Assignment Statement :  <p id="pId"> &#8620; The basic assignment operator is "=". Your first inclination might be to think of this as "equal to". Do not. It really means that the left operand gets set to the value of the expression on the right. The value of an assignment expression is the value assigned. That is, the value of "$a = 3" is 3.<br><br><b>Example :<br> &nbsp;&nbsp;&nbsp;&nbsp;$a = ($b = 4) + 5; // $a is equal to 9 now, and $b has been set to 4.</b><br><br>Assignment by reference is also supported, using the "$var = &$othervar;" syntax. Assignment by reference means that both variables end up pointing at the same data, and nothing is copied anywhere.<br><br><b>Example : $b = &$a; // $b is a reference to $a<br> </b> </p><br><br></div>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> PHP</h2><br><br>  <p> Arithmetic expression :  <p id="pId"> &#8620;It uses identity, negation, addition, subtraction, multiplication, division, modulo, exponentiation.<br><br><b>Example : <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+$a, -$a, $a+$b, $a-$b, $a*$b, $a/$b, $a%$b, $a**$b</b><br><br>The division operator ("/") returns a float value unless the two operands are integers (or strings that get converted to integers) and the numbers are evenly divisible, in which case an integer value will be returned. For integer division, see intdiv().<br><br>Operands of modulo are converted to integers (by stripping the decimal part) before processing. For floating-point modulo, see fmod(). </p><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Relational and boolean expression :  <p id="pId"> &#8620; There are some relational operation which are decribed bellow :<br> <br><ul><li>$var = “10”;</li><li>$value = 10 +$var;</li><li>$value = (string)$value;</li></ul><br><br><b>Var_dump($var); // it’s give result “20”.<br><br>//example 1 <br> $foo = 0;<br> $foo =(string)$foo;</b></p><br><br></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Type conversion :  <p id="pId"> &#8620; Unlike other language, php has week typing.for example: <b> <br><br> $var = “10”;<br>$value = 10 +$var;<br>  $value = (string)$value;<br>Var_dump($var); // it’s give result “20”.</b> <br><br> // example 1 <br> $foo = 0;<br> $foo = (string)$foo;</p><br><br></div>';
                         printFunction(str_language);
                          break;
      
                 case "iterativeStatement": var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Iterative statement :  <p id="pId"> &#8620;for loops are the most complex loops in PHP. They behave like their C counterparts. The syntax of a for loop is: <br><br> for (expr1; expr2; expr3)<br> &nbsp;&nbsp; statement;<br><br>The first expression (expr1) is evaluated (executed) once unconditionally at the beginning of the loop.In the beginning of each iteration, expr2 is evaluated. If it evaluates to TRUE, the loop continues and the nested statement(s) are executed. If it evaluates to FALSE, the execution of the loop ends.At the end of each iteration, expr3 is evaluated (executed).<br><br><b>Example :</b><br>$people = array(<br>array("name" => "Kalle", "salt" => 856412),<br>array("name" => "Pierre", "salt" => 215863)<br>);</p><br><br></div>';
                         printFunction(str_language);
                          break;

                 case "selectStatement" : var  str_language= '<div class="container"><h2> PHP</h2><br><br><p> Select statement :  <p id="pId"> &#8620;In PHP we have the following conditional statements: <br><br><ul><li><b>if statement</b> - executes some code if one condition is true</li><li><b>if...else statement</b> - executes some code if a condition is true and another code if that condition is false</li><li><b>if...elseif....else statement </b>- executes different codes for more than two conditions</li><li><b>switch statement</b> - selects one of many blocks of code to be executed</li></ul><br><br><b>Example : <br> if (condition)<br> { <br> //code to be executed if condition is true...<br>}</b><br>The if....else statement executes some code if a condition is true and another code if that condition is false.<br><br>$t = date("H");<br>if ($t < "20") {<br>echo "Have a good day!";<br>} else {<br>echo "Have a good night!";<br>}</p><br><br></div>';
                        printFunction(str_language);
                          break;
    
                      }break;

case "Ruby" :    switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Data Type :  <p id="pId"> &#8620;ruby has 8 primary data types and 3 more data types derives from the numeric superclass.<br><br><ol><li>string</li><li>fixnum</li><li>integer</li><li>numeric</li><li>float</li><li>nilclass</li><li>hash</li><li>symbol</li><li>array</li><li>range</li></ol><br><br> In ruby everything is an object.we can add variables and methods to a class at any time during the execution of code.<br><b>Example : <br> P 1.class<br>P 4.5.class<br>P 3_463_456_457.class</p><br><br></div> ';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Variable Declaration :  <p id="pId"> &#8620; In ruby varibles begin with $. <br><br><b> Global Variable :</b> Utilization global variable have value nil and produce warning with “-w” option.use of global variable make program more cryptic.<br><br><b>Example : <br>$global_var =100<br>Global variable in class is 100</b><br><br> <b>Intence variable : </b>it begin with the @ sign and have value nil.<br><br><b>Example : </b>@example_id=10<br><br><b>Constant Declaration :</b>constant begin with uppercase letter.it define with class or module.constant may be defined within methods.<br><br><b>Example : var = 100 </b></p><br><br></div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Variable Initialization :  <p id="pId"> &#8620; Variable initialization is a special variable with local variable but use like constant. We can not assign any value to these variable.<br><br><ul><li><b>self :</b> The receiver object of the current method.</li><li><b>true :</b> Value representing true.</li><li><b>false :</b> Value representing false.</li><li><b>nil :</b> Value representing undefined.</li><li><b>__FILE__ :</b> The name of the current source file.</li><li><b>__LINE__ :</b> The current line number in the source file</li></ul></p><br><br></div>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Assignment Statement :  <p id="pId"> &#8620;for example a=b+c is standard in ruby. One of the difference between ruby is that it’s reasonably returns a value.in left side of equal it’s variable and right end side is value or any expression.<br><br><b>Example :<br>$a= $b= $c= 0<br><br>It has different operator:<br>=, c=a+b<br> +=, c += a<br>-=, c -=a<br>*=, c*=a<br>**=, c **=a</b></p><br><br></div>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Arithmetic Expression :  <p id="pId"> &#8620;Ruby provide different kind of arithmetic operators: +, -, *, /, %,**. Arithmetic expression are used for do arithmetic operation using different arithmetic operators.<br> <b><br>Example : <br> a = b + c; // addition operation<br>a = b ** 2 //operation b ^2 </b></p><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Relational and boolean expression :  <p id="pId"> &#8620;Different relational operators for ruby are decribed bellow : <br> <br><table><tr><th>Operation</th><th>Decription</th></tr><tr><td>== </td><td>check if the value of operand are equal</td></tr><tr><td>!= </td><td>check value is equal to or not </td></tr><tr><td>> </td><td>check if value of left operand is greater than the value of right. </td></tr><tr><td>< </td><td>Checks if the value of left operand is greater than or equal to the value of right operand </td></tr><tr><td>>= </td><td>Checks if the value of left operand is greater than or equal to the value of right operand  </td></tr><tr><td><= </td><td>Checks if the value of left operand is less than or equal to the value of right operand  </td></tr><tr><td>== </td><td>check if the value of operand are equal</td></tr></table></p><br><br></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Type conversion :  <p id="pId"> &#8620; In ruby, select statement offers conditional structure that are pretty comman to morden language.<br><br><b>Example :<br>if condition [then] <br> code ...<br> [elseif conditional [then] <br> code ... ]...<br> [else <br> code...]<br>end</b><br><br>if expressions are used for conditional execution. The values false and nil are false, and everything else are true. Notice Ruby uses elsif, not else if nor elif.Executes code if the conditional is true. If the conditional is not true, codespecified in the else clause is executed.</p><br><br></div>';
                         printFunction(str_language);
                          break;
      
                 case "selectStatement": var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Select statement :  <p id="pId"> &#8620; Select statement is used to Executes code if the conditional is true. If the conditional is not true, codespecified in the else clause is executed.<br><br><b>Example : </b><br>x = 1<br>if x > 2 <br> puts " x is greater than 2"<br>elseif x <=2 and x!= 0<br> puts "x is 1"<br>else<br> puts "I can not guess number "<br>end </p><br><br></div>';
                         printFunction(str_language);
                          break;

                 case "iterativeStatement" : var  str_language= '<div class="container"><h2> Ruby</h2><br><br><p> Iterative statement :  <p id="pId"> &#8620; Using a loop, we can repeat a command as many times.it provides output depending on how many it has run:<br><br> <b>Example: <br> <br> for number in 1 ...10 do<br> puts "nyit" <br> End.</b><br><br>This is a variable name that serves as the reference to the current iteration of the loop.hear “1..10”, this is a special kind of Range class. </p><br><br></div>';
                        printFunction(str_language);
                          break;
    
                      }break;

case "C++" :    switch(choice)
                  {

                   case "dataTypes": 
                          var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Data type : <p id="pId"> &#8620; Variable are reserved memory locations to store values. This means that when you create a variable you reserve some space in memory.<br><br><b>Primitive Built-in Types :</b><br>C++ offer the programmer a rich assortment of built-in as well as user defined data types. Following table lists down seven basic C++ data types:<br><br><table><tr><th>Type</th><th>Keyword</th></tr><tr><td>Boolean</td><td>bool</td></tr> <tr><td>Characher</td><td>char</td></tr><tr><td>Integer</td><td>int</td></tr><tr><td>Floating point</td><td>float</td></tr><tr><td>Valueless</td><td>void</td></tr></table> <br><br>Several of the basic types can be modified using one or more of these type modifiers :<br><ul><li>signed</li><li>unsigned</li><li>short</li><li>long</li></ul></p><br><br></div>';
                          printFunction(str_language);
                          break;
                   case "varDeclare":  var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Variable declaration :  <p id="pId"> &#8620;In C++ (as in many other programming languages) all the variables that a program is going to use must be declared prior to use. Declaration of a variable serves two purposes :<br><br><ul><li>It associates a type and an identifier (or name) with the variable. The type allows the compiler to interpret statements correctly. For example in the CPU the instruction to add two integer values together is different from the instruction to add two floating-point values together. Hence the compiler must know the type of the variables so it can generate the correct add instruction.</li><li>It allows the compiler to decide how much storage space to allocate for storage of the value associated with the identifier and to assign an address for each variable which can be used in code generation.</li></ul><br><br>Examples of values for such variables are:<br><b>int 123 -56 0 5645<br>float 16.315 -0.67 31.567<br>char "+"" "A" "a" "*"<br></b><br>A typical set of variable declarations that might appear at the beginning of a program could be as follows:<br><b>int i, j, count;<br>float sum, product;<br>char ch;<br>bool passed_exam;</p></b><br><br></div>';
                         printFunction(str_language);
                          break;

                   case "varInit": var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Variable Initialization :  <p id="pId"> &#8620;This is the initialization performed when a variable is constructed with an empty initializer.<br><br><b>Syntax :</b><br><ul><li>T( );</li><li>new T ( );</li><li>Class::Class(..) : member() {...}</li><li> T object</li><li>T{ };</li><li>new T { };</li></ul><br><b>Explanation : </b><br>When a nameless temporary object is created with the initializer consisting of an empty pair of parentheses <br>When an object with dynamic storage duration is created by a new-expression with the initializer consisting of an empty pair of parentheses<br>When a non-static data member or a base class is initialized using a member initializer with an empty pair of parentheses. </p></b><br><br></div>';
                        printFunction(str_language);
                          break;

                   case "assignStatement" : var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Assignment statement :  <p id="pId"> &#8620;The main statement in C++ for carrying out computation and assigning values to variables is the assignment statement. For example the following assignment statement: <br><b>average = (a + b)/2;</b> <br><br>Assigns half the sum of a and b to the variable average. The general form of an assignment statement is:<br><b>result = expression ;</b><br><br>The expression can be a single variable, a single constant or involve variables and constants combined by the arithmetic operators listed below. Rounded brackets () may also be used in matched pairs in expressions to indicate the order of evaluation : <br> <br><ol><li>+ addition</li><li>- subtraction</li><li>* multiplication</li><li>/ division</li><li>% remainder after division (modulus)</li></ol><br><br><b>For Example :</b><br>i = 3;<br>sum = 0.0;<br>perimeter = 2.0 * (length + breadth);<br>ratio = (a + b)/(c + d);</p></b><br><br></div>';
                         printFunction(str_language);
                          break;
      
                  case "arithExpession" : var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Arithmetic Expression :  <p id="pId"> &#8620;The plus sign (+) is used to add two values, the minus sign (-) to subtract one value from another, the asterisk(*) to multiply two values, the division (/) to divide a value and the modulus (%) to obtain the reminder of integer division. These are known as binary operators since they operate on two values or variables.<br><br>Following are example of arithmetic exression : <br><b> result = x - y; <br>total = principle + interest; <br>numsquare = x * x; <br>celcius = (fahrenheit - 32) / 1.8</b><br><br>In the last expression, parentheses are used to perform a certain operation first. This is because in C++, operators follow a precedence rule. *, / and % have a higher precedence over + and -. Hence to override the precedence, parentheses should be used. Expressions having operators of the same precedence are generally evaluated from left to right. Another point to note is that in an expression which involves division, care should be taken to avoid a division by zero, since this results in infinity or an abnormal value.  </p></b><br><br></div>';
                          printFunction(str_language);
                          break;
      
                  case "relBoolExp" : var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Relational Expression :  <p id="pId"> &#8620;A condition or logical expression is an expression that can only take the values true or false. A simple form of logical expression is the relational expression. The following is an example of a relational expression:<br><br><b>x < y</b><br>Which takes the value true if the value of the variable x is less than the value of the variable y.The general form of a relational expression is: <br><br><b>operand1 relational-operator operand2</b><br><br>< less than <br>> greater than<br> <= less than or equal to<br> >= greater than or equal to <br>== equals <br>!= not equals<br></p><br><br></div>';
                         printFunction(str_language);
                          break;
     
                 case "typeConversion": var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Type conversion :  <p id="pId"> &#8620;Implicit conversions are automatically performed when a value is copied to a compatible type.<br><br><b>Example :</b><br>short a=2000;<br>int b;<br>b=a;<br><br>Here, the value of a is promoted from short to int without the need of any explicit operator. This is known as a standard conversion. Standard conversions affect fundamental data types, and allow the conversions between numerical types (short to int, int to float, double to int...), to or from bool, and some pointer conversions.<br><br>Converting to int from some smaller integer type, or to double from float is known as promotion, and is guaranteed to produce the exact same value in the destination type. Other conversions between arithmetic types may not always be able to represent the same value exactly:<br><br><ul><li>If a negative integer value is converted to an unsigned type, the resulting value corresponds to its 2 is complement bitwise representation (i.e., -1 becomes the largest value representable by the type, -2 the second largest, ...).</li><li>The conversions from/to bool consider false equivalent to zero (for numeric types) and to null pointer (for pointer types); true is equivalent to all other values and is converted to the equivalent of 1.</li><li>If the conversion is from a floating-point type to an integer type, the value is truncated (the decimal part is removed). If the result lies outside the range of representable values by the type, the conversion causes undefined behavior</li><li>Otherwise, if the conversion is between numeric types of the same kind (integer-to-integer or floating-to-floating), the conversion is valid, but the value is implementation-specific (and may not be portable).</li></ul></p><br><br>';
                         printFunction(str_language);
                          break;
      
                 case "selectStatement": var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Selection statement :  <p id="pId"> &#8620;C++ statement is each of the individual instructions of a program, like the variable declarations and expressions seen in previous sections. They always end with a semicolon (;), and are executed in the same order in which they appear in a program.Many of the flow control statements explained in this section require a generic (sub)statement as part of its syntax. This statement may either be a simple C++ statement, -such as a single instruction, terminated with a semicolon (;) - or a compound statement. A compound statement is a group of statements (each of them terminated by its own semicolon), but all grouped together in a block, enclosed in curly braces: {}:<br><br><b>{ statement1; statement2; statement3; }</b><br><br>The entire block is considered a single statement (composed itself of multiple substatements). Whenever a generic statement is part of the syntax of a flow control statement, this can either be a simple statement or a compound statement.<br><br><b>If and Else : <br></b>The if keyword is used to execute a statement or block, if, and only if, a condition is fulfilled. Here, condition is the expression that is being evaluated. If this condition is true, statement is executed. If it is false, statement is not executed (it is simply ignored), and the program continues right after the entire selection statement.For example, the following code fragment prints the message (x is 100), only if the value stored in the x variable is indeed 100:<br><br><b>if (x == 100)<br>cout << "x is 100";</b><br><br></p><br><br></div>';
                         printFunction(str_language);
                          break;

                 case "iterativeStatement" : var  str_language= '<div class="container"><h2> C++</h2><br><br><p> Iterative statement :  <p id="pId"> &#8620;The statements that cause a set of statements to be executed repeatedly either for a specific number of times or until some condition is satisfied are known as iteration statements. That is, as long as the condition evaluates to True, the set of statement(s) is executed. The various iteration statements used in C++ are for loop, while loop and do while loop.<br><br>Loops repeat a statement a certain number of times, or while a condition is fulfilled. They are introduced by the keywords while, do, and for.<br><br><b>The while loop :</b><br>The while-loop simply repeats statement while expression is true. If, after any execution of statement, expression is no longer true, the loop ends, and the program continues right after the loop.<br><br><b>The do-while loop :</b><br>It behaves like a while-loop, except that condition is evaluated after the execution of statement instead of before, guaranteeing at least one execution of statement, even if condition is never fulfilled.</p><br><br></div>';
                        printFunction(str_language);
                          break;
    
                      }break;


   
 
  }

  
});


  
  
});





