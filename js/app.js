/**
* @name: Assignement1
* @Course SODV1201
* @class: Introduction to Web Programming
* @author: Elizabeth Handerson
* @description: JavaScript code page
*/

/** Minor modifications were made to the orginal dataset that was provide.
 * For each element of the array, a descriptor was added, this was to allow a wider manipulation of the array
 * the numbers were converted from the original visual aspect into numbers so that they could be easily sorted correctly
 * the display of the numbers was manipulated for the output of the data back to the user.
 */
const staff = [
    { Name: "Brielle Williamson", Position: "Integration Specialist", Location: "New York", EmployeeNumber: 4804, StartDate: "12/2/2012", Salary: 372000 },
    { Name: "Herrod Chandler", Position: "Sales Assistant", Location: "San Francisco", EmployeeNumber: 9608, StartDate: "8/6/2012", Salary: 137500 },
    { Name: "Rhona Davidson", Position: "Integration Specialist", Location: "Tokyo", EmployeeNumber: 6200, StartDate: "10/14/2010", Salary: 327900 },
    { Name: "Colleen Hurst", Position: "Javascript Developer", Location: "San Francisco", EmployeeNumber: 2360, StartDate: "9/15/2009", Salary: 205500 },
    { Name: "Sonya Frost", Position: "Software Engineer", Location: "Edinburgh", EmployeeNumber: 1667, StartDate: "12/13/2008", Salary: 103600 },
    { Name: "Jena Gaines", Position: "Office Manager", Location: "London", EmployeeNumber: 3814, StartDate: "12/19/2008", Salary: 90560 },
    { Name: "Quinn Flynn", Position: "Support Lead", Location: "Edinburgh", EmployeeNumber: 9497, StartDate: "3/3/2013", Salary: 342000 },
    { Name: "Tiger Nixon", Position: "System Architect", Location: "Edinburgh", EmployeeNumber: 5421, StartDate: "4/25/2011", Salary: 320800 },
    { Name: "Garrett Winters", Position: "Accountant", Location: "Tokyo", EmployeeNumber: 8422, StartDate: "7/25/2011", Salary: 170750 },
    { Name: "Ashton Cox", Position: "Junior Technical Author", Location: "San Francisco", EmployeeNumber: 1562, StartDate: "1/12/2009", Salary: 86000 },
    { Name: "Cedric Kelly", Position: "Senior Javascript Developer", Location: "Edinburgh", EmployeeNumber: 6224, StartDate: "3/29/2012", Salary: 433060 },
    { Name: "Airi Satou", Position: "Accountant", Location: "Tokyo", EmployeeNumber: 5407, StartDate: "11/28/2008", Salary: 162700 },
    { Name: "Charde Marshall", Position: "Regional Director", Location: "San Francisco", EmployeeNumber: 6741, StartDate: "10/16/2008", Salary: 470600 },
    { Name: "Haley Kennedy", Position: "Senior Marketing Designer", Location: "London", EmployeeNumber: 3597, StartDate: "12/18/2012", Salary: 313500 },
    { Name: "Tatyana Fitzpatrick", Position: "Regional Director", Location: "London", EmployeeNumber: 1965, StartDate: "3/17/2010", Salary: 385750 },
    { Name: "Michael Silva", Position: "Marketing Designer", Location: "London", EmployeeNumber: 1581, StartDate: "11/27/2012", Salary: 198500 },
    { Name: "Paul Byrd", Position: "Chief Financial Officer (CFO)", Location: "New York", EmployeeNumber: 3059, StartDate: "6/9/2010", Salary: 725000 },
    { Name: "Gloria Little", Position: "Systems Administrator", Location: "New York", EmployeeNumber: 1721, StartDate: "4/10/2009", Salary: 237500 },
    { Name: "Bradley Greer", Position: "Software Engineer", Location: "London", EmployeeNumber: 2558, StartDate: "10/13/2012", Salary: 132000 },
    { Name: "Dai Rios", Position: "Personnel Lead", Location: "Edinburgh", EmployeeNumber: 2290, StartDate: "9/26/2012", Salary: 217500 },
    { Name: "Jenette Caldwell", Position: "Development Lead", Location: "New York", EmployeeNumber: 1937, StartDate: "9/3/2011", Salary: 345000 },
    { Name: "Yuri Berry", Position: "Chief Marketing Officer (CMO)", Location: "New York", EmployeeNumber: 6154, StartDate: "6/25/2009", Salary: 675000 },
    { Name: "Caesar Vance", Position: "Pre-Sales Support", Location: "New York", EmployeeNumber: 8330, StartDate: "12/12/2011", Salary: 106450 },
    { Name: "Doris Wilder", Position: "Sales Assistant", Location: "Sidney", EmployeeNumber: 3023, StartDate: "9/20/2010", Salary: 85600 },
    { Name: "Angelica Ramos", Position: "Chief Executive Officer (CEO)", Location: "London", EmployeeNumber: 5797, StartDate: "10/9/2009", Salary: 1200000 },
    { Name: "Gavin Joyce", Position: "Developer", Location: "Edinburgh", EmployeeNumber: 8822, StartDate: "12/22/2010", Salary: 92575 },
    { Name: "Jennifer Chang", Position: "Regional Director", Location: "Singapore", EmployeeNumber: 9239, StartDate: "11/14/2010", Salary: 357650 },
    { Name: "Brenden Wagner", Position: "Software Engineer", Location: "San Francisco", EmployeeNumber: 1314, StartDate: "6/7/2011", Salary: 206850 },
    { Name: "Fiona Green", Position: "Chief Operating Officer (COO)", Location: "San Francisco", EmployeeNumber: 2947, StartDate: "3/11/2010", Salary: 850000 },
    { Name: "Shou Itou", Position: "Regional Marketing", Location: "Tokyo", EmployeeNumber: 8899, StartDate: "8/14/2011", Salary: 163000 },
    { Name: "Michelle House", Position: "Integration Specialist", Location: "Sidney", EmployeeNumber: 2769, StartDate: "6/2/2011", Salary: 95400 },
    { Name: "Suki Burks", Position: "Developer", Location: "London", EmployeeNumber: 6832, StartDate: "10/22/2009", Salary: 114500 },
    { Name: "Prescott Bartlett", Position: "Technical Author", Location: "London", EmployeeNumber: 3606, StartDate: "5/7/2011", Salary: 145000 },
    { Name: "Gavin Cortez", Position: "Team Leader", Location: "San Francisco", EmployeeNumber: 2860, StartDate: "10/26/2008", Salary: 235500 },
    { Name: "Martena Mccray", Position: "Post-Sales support", Location: "Edinburgh", EmployeeNumber: 8240, StartDate: "3/9/2011", Salary: 324050 },
    { Name: "Unity Butler", Position: "Marketing Designer", Location: "San Francisco", EmployeeNumber: 5384, StartDate: "12/9/2009", Salary: 85675 }
];

/**This function builds the table for the staff information. The function is called from the body element onload
 * the first few lines create the output variable and generate a table with header information
 * the second section of code iterates thorugh the array of staff, while building each row, adhering to the css formatting
 * the Salary variable was written to display a $ sign and the proper commas where the numbers split, with no cents factor
 * the last line of the function uses the placeholder element in the html page to write the table to, 
 * including the HTML code to ensure the table is formatted
  */

function listStaff() {
    var staffTable = `<table class='table' id='staffInformation'><tr class='tr'>`;
        staffTable += `<th class='th hover' onclick='sortName()'>Employee Name</th>`;
        staffTable += `<th class='th noHover'>Employee Position</th>`;
        staffTable += `<th class='th noHover'>Office Location</th>`;
        staffTable += `<th class='th noHover'>Employee ID</th>`;
        staffTable += `<th class='th noHover'>Start Date</th>`;
        staffTable += `<th class='th' onclick='sortSalary()'>Salary</th></tr>`;

    staff.forEach(employee =>{
            staffTable += `<tr><td class='td'>${employee.Name}</td> 
                <td class='td'>${employee.Position}</td>
                <td class='td'>${employee.Location}</td>
                <td class='td'>${employee.EmployeeNumber}</td>
                <td class='td'>${employee.StartDate}</td>
                <td class='td'>$${employee.Salary.toLocaleString('en-US')}</td></tr>`;
    })

    staffTable += `</table>`;

    document.getElementById('staffList').innerHTML = staffTable;
}

/**This function takes the Name from each element of the array, and sorts it alphabetically
 * and then calls to have the staff listed again, rebuilding the table, and displaying the 
 * table back to the user as requested.
 */
function sortName() {
    staff.sort(function(a, b){
        let x = a.Name.toLowerCase();
        let y = b.Name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
  
      listStaff();
    
}

/**This function takes the Salary from each element of the array, and sorts it alphabetically
 * and then calls to have the staff listed again, rebuilding the table, and displaying the 
 * table back to the user as requested.
 */
function sortSalary() {
    staff.sort(function(a, b){
        let x = a.Salary;
        let y = b.Salary;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

    listStaff();
}

//determine the temperature in Fahrenheit from
//the Celsius temperature input
function celToFahr() {
    document.getElementById('int_fahrFromCel').value = ((parseInt(document.getElementById('int_celToFahr').value, 10) * (9/5)) + 32).toFixed(1);
}

//determine the temperature in Celsius from
//the Fahrenheit temperature input
function fahrToCel () {
    document.getElementById('int_celFromFahr').value = ((parseInt(document.getElementById('int_fahrToCel').value, 10) - 32) * (5/9)).toFixed(1);
}

//determine the temperature in Celsius from
//the Kelvin temperature input
function kelToCel (){
    document.getElementById('int_celFromKel').value = ((parseInt(document.getElementById('int_kelToCel').value, 10) - 273.15)).toFixed(1);
}

//determine the temperature in Kelvin from
//the Celsius temperature input
function celToKel () {
    document.getElementById('int_kelFromCel').value = ((parseInt(document.getElementById('int_celToKel').value, 10) + 273.15)).toFixed(1);
}

//determine the temperature in Kelvin from
//the Fahrenheit temperature input
function kelToFahr (){
    document.getElementById('int_fahrFromKel').value = ((parseInt(document.getElementById('int_kelToFahr').value, 10) - 273.15) * (9/5) + 32).toFixed(1);
}

//determine the temperature in Fahrenheit from 
//the Kelvin temperature input
function fahrToKel () {
    document.getElementById('int_kelFromFahr').value = ((parseInt(document.getElementById('int_fahrToKel').value, 10) - 32) * (5/9) + 273.15).toFixed(1);
}

function MarkToGrad(){

    /**  setting up the variables used in this function. 
     * text is a strin gfor holding response information
     * valid is a boolean used for displaying the grade information on a valid mark entry
     * mark is the value that hte user has entered
    */
    var text;
    var valid = false;
    var mark = document.getElementById('txt_mark').value;

    /** this section is for validating the input from the user
     * for each option, we first clear the message display of legacy information
     * first we check if there is input, no empty string
     * then we check that the value is not a special character of letter
     * then we make sure the user does not enter a negative number
     * then we check the user is not entering a number over 101
     * the mark validates if it is between 0 and 100
     */
    if(mark == ""){
        document.getElementById("markInfo").innerText = "";
        document.getElementById("validationMessage").innerHTML = "";
        document.getElementById("validationMessage").innerHTML = 'The input cannot be blank.';
        return;
    }

    if(isNaN(mark)){
        valid = false;
        document.getElementById("validationMessage").innerHTML = "";
        document.getElementById("validationMessage").innerHTML = 'The input has to be a number.';
    }

    mark = Number(mark);
    if (mark < 0) {
        valid = false;
        document.getElementById("validationMessage").innerHTML = "";
        document.getElementById("validationMessage").innerHTML = 'The value of the mark has to be 0 or higher, it cannot be a negative number';
    } 
    if(mark > 100){
        valid = false;
        document.getElementById("validationMessage").innerHTML = "";
        document.getElementById("validationMessage").innerHTML = 'The number entered has to be 100 or lower.';
    }
    if(mark <=100 && mark >= 0){
        valid = true;
        document.getElementById("validationMessage").innerHTML = "";
        document.getElementById("validationMessage").innerHTML = 'The mark entered is a valid mark.';
    }
    

    /** in this section we compare the mark to the grade letter range, and return the appropriate letter for the user*/
    switch (true){
        case (mark >= 90):
            text = 'Congratulations, with a mark of ' + mark + ' your graade is an A';            
            break;
        case (mark >= 80):
            text = 'Congratulations, with a mark of ' + mark + ' your graade is a B';
            break;
        case (mark >= 70):
            text = 'You did not too bad, with a mark of ' + mark + ' your mark is a C';
            break;
        case (mark >= 60):
            text = 'You may want to consider taking this class again, with a markmark of ' + mark + ' your mark is a D';
            break;
        default:
            text = 'Sorry, you did not pass, with a mark of ' + mark + ' your mark is an F';
            break;
    }
    
    /** if the mark has been deemed valid, and it receives a grade value, then we return the grade letter to the user
     * if it isn't valid, we make sure there is no display in the grade letter area
    */
    if(valid){
        document.getElementById("markInfo").innerText = text;
    }
    else{
        document.getElementById("markInfo").innerText = "";
    }
    
}
