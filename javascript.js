playing = false;
var score;
var correctanswer;
var correctposition;
document.getElementById("startreset").onclick = function(){
	if(playing==true){
		location.reload();
	}
	else{
		document.getElementById("startreset").innerHTML=
		"Reset Game";
		playing=true;
		show("timeremaining")
		score = 0;
		document.getElementById("scorevalue").innerHTML=score;
		startCountdown()
		generateqa();
	}
}
for(i=1 ; i<5 ; i++){
	document.getElementById("box"+i).onclick= function(){
		if(playing== true){
			if(this.innerHTML == correctanswer){
				score++;
				document.getElementById("scorevalue").innerHTML
				= score;
				hide("wrong");
				show("correct");
				setTimeout(function(){
					hide("correct")
				},1000);
				generateqa();
			}
			else{
				hide("correct");
				show("wrong");
				setTimeout(function(){
					hide("wrong");
				},1000)

			}
		}
	}
}




//////////FUNCTIONSSSSSSSS/////////////
function show(id){
	document.getElementById(id).style.display="block";
}


function hide(id){
	document.getElementById(id).style.display="none";
}


function startCountdown(){
	timeremainingvalue = 60 
	action = setInterval(function(){
		timeremainingvalue = timeremainingvalue-1;
		document.getElementById("timeremainingvalue").innerHTML
		=timeremainingvalue +" sec" ;
		if(timeremainingvalue==0){
			stopCountdown()
			document.getElementById("gameover").innerHTML=
			"<p>gameover</p><p>your score is : "+score;
			show("gameover")

		} 
	},1000)

}


function stopCountdown(){
	clearInterval(action)
}


function generateqa(){
	var x =1 + Math.round(19*Math.random());
	var y =1 + Math.round(9*Math.random());
	correctanswer =  x*y ;
	document.getElementById("question").innerHTML=
	x +" X "+y; 
	correctposition = 1 + Math.round(3*Math.random());
	document.getElementById("box"+correctposition).innerHTML=
	correctanswer;
	answers= [correctanswer];
	for(i=1 ; i<5 ; i++ ){
		/*/if (i != correctposition){
			var wronganswer = 1 + Math.round(19*Math.random())*
			 1 + Math.round(9*Math.random());
			if(wronganswer!= correctanswer){
				if(answers.indexOf(wronganswer)<0){
					document.getElementById("box"+i).innerHTML=
				wronganswer;
				answers.push(wronganswer);

				}
				
			}
			
		}*/
		if (i != correctposition){
		var wronganswer;
		do{
			wronganswer = (1 + Math.round(19*Math.random()))*
			 (1 + Math.round(9*Math.random()));
		}
		while(answers.indexOf(wronganswer)>-1)
			document.getElementById("box"+i).innerHTML=
				wronganswer;
				answers.push(wronganswer);
									}	


	}


}