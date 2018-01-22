var unit = 500;

function isLetterOrDigit(c){
  if ( /\d/.test(c) ||  /[A-Z]/.test(c) ||  /[a-z]/.test(c) )
    return true;
  else return false;
}

function convertToMorse(message){
                /*
                    # only letters, numbers and spaces will be sent, all other chars will be ignored
                    dot = 1 unit on
                    between parts of letter = 1 unit off
                    dash = 3 units on
                    between letters = 3 units off
                    between words = 7 units off

                    each element of the array will be in the form "0/1" (off/on), "number-of-miliseconds", examples:
                     - 0,1000
                     - 1,3000
                */

            var dot = 1 * unit;
            var between_parts = 1 * unit;
            var dash = 3 * unit;
            var on = 1;
            var off = 0;
            var result = [];
  	    var iRes = 0;
            message = message.toUpperCase();

            for (i=0; i<message.length; i++){

                if (isLetterOrDigit(message[i]))
                      result = fixSpaces(message, i, result);

                switch (message[i]) {
                    case 'A':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'B':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'C':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'D':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'E':
                        result.push([on, dot]);
                        break;

                    case 'F':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'G':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'H':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'I':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'J':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'K':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'L':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'M':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'N':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'O':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'P':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'Q':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'R':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'S':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case 'T':
                        result.push([on, dash]);
                        break;

                    case 'U':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'V':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'W':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'X':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'Y':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case 'Z':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case '1':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case '2':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case '3':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case '4':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    case '5':
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case '6':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case '7':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case '8':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case '9':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dot]);
                        break;

                    case '0':
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        result.push([off, between_parts]);
                        result.push([on, dash]);
                        break;

                    default:
                        break;
                }
            }

            return result;
}

function fixSpaces(message, i, result){
    var between_letters = 3 * unit;
    var between_words = 7 * unit;

    if (i == 0)
            return result;

    if (isLetterOrDigit(message[i - 1]))
        result.push([0, between_letters]);
    else if (message[i - 1] == ' ')
        result.push([0, between_words]);

    return result;
}

function sendMessage (message) {                                 
	    var op;                                   
	    var milisec;                              
	    var code = convertToMorse(message);

	    for (i=0; i<code.length; i++) {       
	            op = code[i][0];                  
	            milisec = code[i][1];             
	            if (op == 0)                          
		         Android.flashOff(milisec);                 
	            else if (op == 1)                     
		         Android.flashOn(milisec);               
	    }                           
	    return 1;                                      
}
