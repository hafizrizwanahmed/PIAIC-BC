          document.write('<br> Question 1 <br>');
        //1) Declare and Initialize an array and store available education qualifications in Pakistan 
        //(e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

        var education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
        document.write("<h1> Qualifications: </h1><br>");
        for (let i = 0; i < education.length; i++) {
             document.write(i+1 + ") "+ education[i] +" </br> ");
        }

        
        document.write('<br> --------------------------------------------------------------------- <br>');
        document.write('<br> Question 2 <br>');
        // 2) Write a program to store 3 student names in an array.Take anotherarray to store score of these three students. 
        //Assume that total marks are 500 for each student, display the scores & percentages of students like:
var students = ['Ali', 'Tahir', 'Rizwan'];
var scores = [320, 230, 480];
var totalMarks = 500;
for (let i = 0; i < students.length; i++) {
    document.write('Score of ' + students[i] + ' is ' + scores[i] + '. Percentage: ' + (scores[i]/totalMarks*100) + "% <br>");
}





