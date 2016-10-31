var app = angular.module("MainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "views/aboutMe.html"
        })
        .when("/resume", {
            templateUrl: "views/resume.html"
        })
        .when("/pony", {
            templateUrl: "projectLink/MyLittleBrony/index.html",
        })
        .when("/buildabot", {
            templateUrl: "projectLink/Build-A-botcopy/index.html",
        })
//        .when("/projectLink/kAndJ/index.html", {
//            templateUrl: "projectLink/kAndJ/index.html",
//        })
        .otherwise({
            templateUrl: "views/home.html"
        })

})
app.controller("mainController", ["$scope", function ($scope) {
    $scope.projects = [
        {
            name: "Build-A-Bot",
            imgUrl: "./ScreenShots/Build-A-Bot.png",
            description: "This is the first Project I built useing API's of my choice. It sends a request to a server that turns it in to a robot image. Then to another that sends back a random quote, that i put in to a mad lib. I also send a request to anothre server to create a QR code that links to the image.",
            codeUrl: "https://github.com/Rimski/vschool-assignments/tree/master/projects/Build-A-Bot",
            projectUrl: "/buildabot"
        }, {
            name: "My Little Pony",
            imgUrl: "./ScreenShots/Screen Shot 2016-06-09 at 11.56.24 PM.png",
            description: "This is one of the first projects that I used multipule views on. It pulls a list of ponies from a server, and displays them. You can also add ponies to the server from this site;",
            codeUrl: "https://github.com/Rimski/vschool-assignments/tree/master/projects/MyLittleBrony",
            projectUrl: "/pony"
        }, {
            name: "K & J Diaries",
            imgUrl: "./ScreenShots/K&J.png",
            description: "In this project i copied the styles of K & J Diaries, from scratch.",
            codeUrl: "https://github.com/Rimski/vschool-assignments/tree/master/projects/kAndJ",
            projectUrl: "wrst.ninja/projectLink/kAndJ/index.html"
        }
    ]
}])