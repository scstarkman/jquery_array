$(document).ready(function(event){

var myArr = [{
              name:"Susie Starkman",
              picture: "https://avatars.githubusercontent.com/u/7594485?v=2",
              followers:4,
              following:8,
              repos:7
            },
              {name:"Calvin Webster",
              picture: "https://avatars.githubusercontent.com/u/115030?v=2",
              followers:64,
              following:96,
              repos:37
            },

              {name:"Chris Otten",
              picture:"https://avatars.githubusercontent.com/u/8238886?v=2",
              followers:9,
              following:40,
              repos:6
            },
              {name:"Ryan Huber",
              picture: "https://avatars.githubusercontent.com/u/7594485?v=2",
              followers:6,
              following:14,
              repos:7
            },
              {name:"Margaret Godowns",
              picture: "https://avatars.githubusercontent.com/u/8241756?v=2",
              followers:4,
              following:14,
              repos:8
            },

];




  var createTemplate = function(dataSource){
      var userProfile = "";

      for (var i = 0; i < dataSource.length; i++ ) {

      userProfile +=
         "<div class = \"user\">"
      +  "<h3>name: " + dataSource[i].name +" </h3>"
      +  "<p>picture: </p>"
      +  "<img src = \""+dataSource[i].picture +"\">"
      +  "<ul>"
      +  "<li>followers: " + dataSource[i].followers +" </li>"
      +  "<li>following: " + dataSource[i].following +"</li>"
      +  "<li>repos: " + dataSource[i].repos +"</li>"
      +  "</ul>"
      +  "</div>";

      } //end for-loop

  $(".container").append(userProfile);

  console.log(userProfile);

  }; //end create Template function

  createTemplate(myArr);


}); //end of document
