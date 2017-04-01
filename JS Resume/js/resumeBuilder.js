 var bio = {
    "name": "Niklas Donges",
    "role": "Web Developer",
    "contacts": {
        "mobile": "015141233439",
        "email": "n.donges@gmx.de",
        "github": "NiklasD",
        //"twitter": "None",
        "location": "Marburg, Germany"
    },
    "welcomeMessage": "",
    "skills": [
    "JavaScript", "Knockout JS", "jQuery", "JSON", "HTML", "CSS", "Website Speed Optimization", "AJAX"  ],
    "biopic": "http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png"
};

var work = {
  "jobs": [
    {
      "employer": "Front-End Web Developer Nanodegree, Udacity",
      "title": "Web Developer Nanodegree",
      "location": "www.udacity.com",
      "dates": "Feb 2016",
      "description": "HTML/CSS, JavaScript, Knockout, Bootsstrap, AJAX, jQuery, Object Oriented Programming, Test driven Development with Jasmine, JSON, Website Performace Optimization",
      "image": "http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png"
    },
  ]
};


var projects = {
    "projects": [
    {
        "title":"einlagen-sicherheitsschuhe-donges.de",
        "location":"Biedenkopf",
        "dates":"2017",
        "images": ["http://einlagen-sicherheitsschuhe-donges.de/project.png"],
        "description": "Website for a local business with 6 pages, build up with HTML, CSS and JavaScript."
    },
    {
        "title":"Google Maps Web Application",
        //"location":"",
        "dates":"2017",
        "images": [""],
        "description": "A single page application featuring a map of Marburg with highlighted locations, Google StreetView image and Wikipedia article. I used the KnockoutJS Framework and third-party APIs that provide the data sets."
    },
    {
        "title":"Arcade Game Frogger",
        //"location":"",
        "dates":"2017",
        "images": [""],
        "description": "I developed my own version of the classical arcade game Frogger using Object Oriented Javascript."
    },
    {
        "title":"Website Speed Optimization",
        //"location":"",
        "dates":"2017",
        "images": [""],
        "description": "Optimized Website for a 90/100 ranking."
    }
   ]
};

var education = {
    "schools": [
    {
        "name":"Fachoberschule",
        "location":"Biedenkopf",
        "degree":"Fachhochschulreife",
        "dates":"2015",
        "majors":["Economics"],
        "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
        "name":"Fachoberschule",
        "location":"Biedenkopfzwei",
        "degree":"Fachhochschulreife",
        "dates":"2015",
        "majors":["heyeins"],
        "url":"www.de"
    }
    ],
    "onlineCourses": [
    {
        "title":"JavaScript",
        "school":"CodeCademy",
        "dates":"2016",
        "url":"https://www.codecademy.com/"
    },
    {
        "title":"HTML & CSS",
        "school":"CodeCademy",
        "dates":"2016",
        "url":"https://www.codecademy.com/"
    },
    {
        "title":"Make a Website",
        "school":"CodeCademy",
        "dates":"2016",
        "url":"https://www.codecademy.com/"
    },
    {
        "title":"Deploy a Website",
        "school":"CodeCademy",
        "dates":"2016",
        "url":"https://www.codecademy.com/"
    }
  ]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", "Software-Engineer");
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", "Niklas Donges");
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#pic").append(formattedPic);
    var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile );
    $("#topContacts").append(formattedname);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );
    $("#topContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github );
    $("#topContacts").append(formattedgithub);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter );
    //$("#topContacts").append(formattedtwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location );
    $("#topContacts").append(formattedlocation);
    var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );
    $("#header").append(formattedworkDescription);
$("#header").append(HTMLskillsStart);
    /*var formattedSkill = HTMLskills.replace("%data%", bio.skills[0] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[5] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[6] );
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[7] );
    $("#skills").append(formattedSkill);*/
    var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile );
    $("#footerContacts").append(formattedname);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );
    $("#footerContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github );
    $("#footerContacts").append(formattedgithub);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter );
    //$("#footerContacts").append(formattedtwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location );
    $("#footerContacts").append(formattedlocation);
}

work.display = function() {
for (var i= 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    //var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    //var formattedEmployerTitle = formattedEmployer + formattedTitle;
    //$(".work-entry:last").append(formattedEmployer);
    //var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    //$(".work-entry:last").append(formattedDates);
    //var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    //$(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    //$(".work-entry:last").append(formattedDescription);  
   
    
}
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

$("#mapDiv").append(googleMap);

projects.display = function() {
        for (var i= 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);    
        /*var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedImage); 
        //var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[i]);
        //$(".project-entry:last").append(formattedImage); */
        };
}

education.display = function() {
    for (var i= 0; i < 1; i++){
    $("#education").append(HTMLschoolStart);
    var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolTitle = formattedschoolname + formattedschooldegree;
    $(".education-entry:last").prepend(formattedschoolTitle);
    var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschooldates);
    var formattedschoolcity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedschoolcity);
    var formattedschollmajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedschollmajors);
    };

    $("#education").append(HTMLonlineClasses);
    for (var i= 0; i < education.onlineCourses.length; i++){
   
    $("#education").append(HTMLschoolStart);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;
    $(".education-entry:last").append(formattedonlineschoolTitle);
    var formattedonlineschooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedonlineschooldates);
    var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedonlineUrl);
}
}

bio.display();
work.display();
projects.display();
education.display();

