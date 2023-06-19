function StudentGradeGenerator(){
    let studentMarks=prompt("Input student marks")//students marks should be input
    studentMarks=typeof(Number)//The data type for students marks is number
 if(isNaN (studentMarks>=0) ||(studentmarks<=100))//only values between 0-100 wull be accepted
 if (studentMarks >=79){
    return ("Grade=A");
 }
 else if (studentMarks >=60){
    return ("Grade=B");}
    else if (studentMarks>=49){
        return('Grade=C');
    }
    else if (studentMarks>=40){
        return("Grade=D");
    }
    else {return("Grade=E");}//"Grade=E"is retuned if grade is less than 40
 }
    
 


 



