//All you js code goe here!

//////////////
//INITIALIZE//
//////////////
$(document).ready(function() {
	getContent();
});


////////////
//NAV MENU//
////////////

$(".navbar .nav li").click(function() {
	var newLoc = $(this).children("a").attr("href");
	getContent(newLoc);
	
});


//////////////////
//SOCKET IO CODE//
//////////////////
var socket = io.connect('localhost');//connect to our server


socket.on('connectionMsg', function(data) {
	$(".socketConnectionStatus").css("color", "green");
	$(".socketConnectionMessage").html(data);
	$(".socketConnectionStatus").html("connected");
});

socket.on('disconnect', function () {//updates connection status
		$(".socketConnectionStatus").css("color", "red");
		$(".socketConnectionMessage").html("There is no connection to the server :(");
		$(".socketConnectionStatus").html("disconnected");
});

socket.on('modules', function(data) {
	$(".moduleList").html("");

	$(data).each(function() {
		var filename = this.substring(this.lastIndexOf("\\")+1);
		if(filename[0] !== ".") {
			$(".moduleList").append("<li><i class='icon-folder-open'></i> "+filename+"</li>");
		}
	});

});

/////////////
//FUNCTIONS//
/////////////

function getContent(content) {

	if(content !== undefined) {
		loc = content.substring(1, content.length);
	} else {
		var loc = ((window.location.href).split("#"))[1];
		if ((loc === undefined)||(loc === "")||(loc === "#")) {loc = "home"};	
	}

	$(".content").load(loc+ ".html", function() {
		

		/////////////////
		//TUTORIAL PAGE//
		/////////////////
		var resultsPerPage = 5;
		var months = [
			"JAN",
			"FEB",
			"MAR",
			"APR",
			"MAY",
			"JUN",
			"JUL",
			"AUG",
			"SEP",
			"OCT",
			"NOV",
			"DEC",
		]
		
		var results = [
		    {
		        "title": "test",
		        "description": "This is a description of the tutorial video. It needs to have a charachter cap!",
		        "url": "http://www.youtube.com/embed/QTIlNPmwISY",
		        "date": "7/1/13",
		        "comments": [
		            {
		                "Name": "Ron Swanson",
		                "date": "3/1/21",
		                "content": "I think teh government should be small!"
		            },
		            {
		                "Name": "Lesslie Knope",
		                "date": "2/3/13",
		                "content": "This is something else I could say! It should also have a charachter cap!"
		            },
		            {
		                "Name": "Ron Swanson",
		                "date": "4/3/13",
		                "content": "It's me again!"
		            }
		        ],
		        "tags": [
		            "node.js",
		            "begginer",
		            "npm"
		        ]
		    },
		    {
		        "title": "test2",
		        "description": "This is a description of the tutorial video. It needs to have a charachter cap!",
		        "url": "http://www.youtube.com/embed/QTIlNPmwISY",
		        "date": "4/20/13",
		        "comments": [
		            {
		                "Name": "Ron Swanson",
		                "date": "3/1/21",
		                "content": "I think teh government should be small!"
		            },
		            {
		                "Name": "Lesslie Knope",
		                "date": "2/3/13",
		                "content": "This is something else I could say! It should also have a charachter cap!"
		            },
		            {
		                "Name": "Ron Swanson",
		                "date": "4/3/13",
		                "content": "It's me again!"
		            }
		        ],
		        "tags": [
		            "passport",
		            "advanced",
		            "server",
		            "authentication"
		        ]
		    },
		    {
		        "title": "test3",
		        "description": "This is a description of the tutorial video. It needs to have a charachter cap!",
		        "url": "http://www.youtube.com/embed/QTIlNPmwISY",
		        "date": "1/12/13",
		        "comments": [
		            {
		                "Name": "Ron Swanson",
		                "date": "3/1/21",
		                "content": "I think teh government should be small!"
		            },
		            {
		                "Name": "Lesslie Knope",
		                "date": "2/3/13",
		                "content": "This is something else I could say! It should also have a charachter cap!"
		            },
		            {
		                "Name": "Ron Swanson",
		                "date": "4/3/13",
		                "content": "It's me again!"
		            }
		        ],
		        "tags": [
		            "ejs",
		            "templating",
		            "socket.io",
		            "intermediate"
		        ]
		    },
		    {
		        "title": "test",
		        "description": "This is a description of the tutorial video. It needs to have a charachter cap!",
		        "url": "http://www.youtube.com/embed/QTIlNPmwISY",
		        "date": "7/1/13",
		        "comments": [
		            {
		                "Name": "Ron Swanson",
		                "date": "3/1/21",
		                "content": "I think teh government should be small!"
		            },
		            {
		                "Name": "Lesslie Knope",
		                "date": "2/3/13",
		                "content": "This is something else I could say! It should also have a charachter cap!"
		            },
		            {
		                "Name": "Ron Swanson",
		                "date": "4/3/13",
		                "content": "It's me again!"
		            }
		        ],
		        "tags": [
		            "node.js",
		            "begginer",
		            "npm"
		        ]
		    },
		    {
		        "title": "test",
		        "description": "This is a description of the tutorial video. It needs to have a charachter cap!",
		        "url": "http://www.youtube.com/embed/QTIlNPmwISY",
		        "date": "7/1/13",
		        "comments": [
		            {
		                "Name": "Ron Swanson",
		                "date": "3/1/21",
		                "content": "I think teh government should be small!"
		            },
		            {
		                "Name": "Lesslie Knope",
		                "date": "2/3/13",
		                "content": "This is something else I could say! It should also have a charachter cap!"
		            },
		            {
		                "Name": "Ron Swanson",
		                "date": "4/3/13",
		                "content": "It's me again!"
		            }
		        ],
		        "tags": [
		            "node.js",
		            "begginer",
		            "npm"
		        ]
		    }
		]

		

		var currentTags = [];
		
		for(var i=0; i<results.length; i++) {
			var originalDate = results[i]['date'].split("/");
			var year = originalDate[2];
			var month = months[originalDate[0]-1];
			var day = originalDate[1];
			
			$(results[i]["tags"]).each(function(i) {
				currentTags.push(this);
			});			

			$(".tutField").append("<div class='row-fluid tutContainer'><div class='row-fluid'><div class='span3 tutThumbContainer'><iframe src='"+results[i]['url']+"' frameborder='0' allowfullscreen class='tutThumb'></iframe></div><div class='span7'><ul class='tut'><li class='tutDate pull-right'><span class='tutDay'>"+day+"</span><br><span class='tutMonth'>"+month+"</span><span class='tutYear'>"+year+"</span></li><li class='tutTitle'><h3>"+results[i]['title']+"</h3></li><li class='tutDesc'><em>"+results[i]['description']+"</em></li></ul></div><br style='clear:both'><div class='row-fluid commentContainer'><div class='span4 offset3'><textarea rows='5' class='commentField'></textarea><br><input type='text' placeholder='Name' class='commentNameField'><button class='btn'>SUBMIT COMMENT</button></div><div class='span4 offset1 well commentBox'><div class='comment'><h5 class='commentName'>Ron Swanson</h5><span class='commentDate'>1/2/13</span><p class='commentBody'>This is a comment in the comment box. It will be printed out each time</p><hr></div><div class='comment'><h5 class='commentName'>Ron Swanson</h5><span class='commentDate'>1/2/13</span><p class='commentBody'>This is a comment in the comment box. It will be printed out each time</p><hr></div><div class='comment'><h5 class='commentName'>Ron Swanson</h5><span class='commentDate'>1/2/13</span><p class='commentBody'>This is a comment in the comment box. It will be printed out each time</p><hr></div><div class='comment'><h5 class='commentName'>Ron Swanson</h5><span class='commentDate'>1/2/13</span><p class='commentBody'>This is a comment in the comment box. It will be printed out each time</p><hr></div></div></div></div></div><hr class='style-two'><div class='showComments'>comments</div>");
		}
		
		var uniqueTags = ArrNoDupe(currentTags);

		$(uniqueTags).each(function() {
			$(".tagField").append("<div class='btn-group'><button class='btn'>"+this+"</button><button class='btn'><i class='icon-check'></i></button><button class='btn'><i class='icon-ban-circle'></i></button></div>");
		});
		
		//the comments button
		$(".showComments").on("click", function() {
			$(this).prev("hr").prev("div.tutContainer").toggleClass("expandComments");
		});

		//
		//Tag field
		//

		//the main button
		$(".tagField .btn-group .btn:nth-child(1)").on("click", function() {
			
			if($(this).hasClass("btn-success")) {
				$(this).removeClass("btn-success").addClass("btn-danger").next(".btn").removeClass("btn-success active").next(".btn").addClass("btn-danger active");
			} else if($(this).hasClass("btn-danger")) {
				$(this).removeClass("btn-danger").next(".btn").removeClass("btn-success active").next(".btn").removeClass("btn-danger active");
			} else {
				$(this).addClass("btn-success").next(".btn").addClass("btn-success active").next(".btn").removeClass("btn-danger active");;
			}

		});

		//the check
		$(".tagField .btn-group .btn:nth-child(2)").on("click", function() {
			
			if($(this).hasClass("btn-success")) {
				$(this).removeClass("active btn-success").prev(".btn").removeClass("btn-success");
			} else {
				$(this).addClass("active btn-success").prev(".btn").addClass("btn-success");
				$(this).next(".btn").removeClass("active btn-danger");
			}
		
		});

		//the x
		$(".tagField .btn-group .btn:nth-child(3)").on("click", function() {
			
			if($(this).hasClass("btn-danger")) {
				$(this).removeClass("btn-danger active").siblings(".btn").removeClass("btn-danger");
			} else {
				$(this).addClass("btn-danger active").siblings(".btn").removeClass("btn-success active");
				$(this).prev().prev().addClass("btn-danger");
			}

		});

	});

	$(".navbar .nav li").removeClass("active");
	$(".navbar .nav li a[href='#"+loc+"']").parent("li").addClass("active");
	

}

function ArrNoDupe(a) {
    var temp = {};
    for (var i = 0; i < a.length; i++)
        temp[a[i]] = true;
    var r = [];
    for (var k in temp)
        r.push(k);
    return r;
}