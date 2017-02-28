var message = '';
var foundStudent = false;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

var students = [
    {
        Student: 'Danny Aguinaldo', 
        Track: 'Full Stack JavaScript', 
        Achievements: '300', 
        Points: '1220'
    },
    {
        Student: 'Mia Gasataya', 
        Track: 'Web Design', 
        Achievements: '2000', 
        Points: '25000'
    },
    {
        Student: 'Enen Peregrino', 
        Track: 'Front End Web Developer', 
        Achievements: '2000', 
        Points: '25000'
    },
    {
        Student: 'Courtney Jones', 
        Track: 'Ruby on Rails', 
        Achievements: '500', 
        Points: '1500'
    },
    {
        Student: 'Jeremy Jones', 
        Track: 'ASP.NET Web Development', 
        Achievements: '9000', 
        Points: '900000'
    }
];

while (!foundStudent) {
    var search = prompt("Enter the name of the student: (Type 'quit' to exit)");

    if (search === null ||search.toLowerCase() == 'quit') {
        message = 'You quit the system.';
        break;
    }
    
    for (var i in students) {
        if (students[i]['Student'] == search) {
            for (var o in students[i]) {
                message += '<p>' + o + ": " + students[i][o] + '<p>';
            }
            foundStudent = true;
            break;
        }
    }

    if (message === '') {
        message = '<p> Student is not in the system <p>';
        break;
    }
}


// for (var i in students) {
//     for (var key in students[i]) {
//         message += '<p>' + key + ': ' + students[i][key] + '<p>';
//     }
//     message += '<br>';
// }

print(message);