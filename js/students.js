var message = '';

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

while (true) {
    var search = prompt("Enter the name of the student: (Type 'quit' to exit)");
    var studentInfo = '';

    if (search == 'quit') {
        break;
    }
    
    for (var i in students) {
        if (students[i][0] == search) {
            studentInfo = students[i];
        }
        else {

        }
    }
}

// for (var i in students) {
//     for (var key in students[i]) {
//         message += '<p>' + key + ': ' + students[i][key] + '<p>';
//     }
//     message += '<br>';
// }

// print(message);