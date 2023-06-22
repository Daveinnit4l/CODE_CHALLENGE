**INTRODUCTION**
![Screenshot from 2023-06-01 14-04-49](https://github.com/Daveinnit4l/CODE_CHALLENGE/assets/125547881/8e1616d5-2a6e-43fd-b85e-c1cd7865c39b)
Function StudentGradeGenerator ()-it is used to generate the grades of students by promting the user to input the marks of the student.
if(isNaN (studentMarks>=0) ||(studentmarks<=100))-this if statement simply tells the systen to only accept input values between zero to a hundred
{
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
    else {return("Grade=E");}
}
the above code is exectuted after the students marks are inputed and provides a return value based on the conditoin the inputed students marks meet.
