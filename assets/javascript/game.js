	var randomWordArr = ["bianca", "john", "miake", "michael", "desmond","ceser","chris","forrest", "jeff","jose","tammy","luis","nicholas","omar","tatiana","nate","nick"];
	var randomWord = "";
	var indexRandom =0;
	





	//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	var s;
	var count = 0;
	var score  =0;
	var Myloses =0;
	var answerArray =[];
	globalcount = 0;
	var guessArray = [];
	var wrongkeys = [];
	var rightkeys = [];
	wCount = 6;

	function deleteArr() {

var indexRandom = randomWordArr.indexOf(randomWord);
randomWordArr.splice(indexRandom, 1);

}

	
	

	
	function startUp()
	
	{
		
		if (randomWordArr.length==0)
		{
			document.getElementById('gameOver').play();
			document.getElementById("text1").innerHTML = "<h3>Game Over</h3>";
			document.getElementById("pic3").innerHTML = " Wins = "+ score + " loses = " +Myloses;
			document.getElementById("pic3").style.display = "block";
			document.getElementById("myhide").style.display = "none";
			randomWordArr = ["bianca", "john", "miake", "michael", "desmond"];
			GameOverStart();
			}
		else
		{

		randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
		globalcount++;

		for (var i=0; i< randomWord.length; i++)
		{
			answerArray[i]= "_";
		}
		//put them in a string
		s= answerArray.join(" ");
		//document.getElementById("correct").innerHTML = "";
		document.getElementById("answer").innerHTML = s; // draws the bash at the page start
		document.getElementById("counter").innerHTML=" " +count;
		document.getElementById("answer").innerHTML = answerArray.join(" ");
		var myanswer= answerArray.join("");
		document.getElementById("rightkeyUsed").innerHTML =" [ " +guessArray.join(" ")+ " ]";
		document.getElementById("countWrong").innerHTML ="" +wCount+ " ";
		document.getElementById("wrongkeyUsed").innerHTML ="[ " +wrongkeys.join(" ")+" ]";
		document.getElementById("keypressed").innerHTML=" " +letter;
		}
	}
window.addEventListener("keyup", function myFunction (event)


	{
	var letter1 = event.key; 
	var letter =letter1.toLowerCase();
	//console.log(randomWordArr);
	document.getElementById("pic").style.display = "none";
	document.getElementById("correct").innerHTML = ""
	document.getElementById("pic2").style.display = "none";
	document.getElementById("text1").innerHTML = " ";
	document.getElementById("pic3").style.display = "none";
	document.getElementById('winTune').pause();
	document.getElementById('loseTune').pause();
	document.getElementById("score").innerHTML = score;


	
	
//


	var a = guessArray.indexOf(letter);
	
	if(a === -1) {
document.getElementById("keypressed").innerHTML=" " +letter;
guessArray.push(letter);
document.getElementById("rightkeyUsed").innerHTML ="  [ " +guessArray.join(" ")+ " ]";
count++;
	
		}


	
	var n = randomWord.includes(letter);
   // document.getElementById("keyPressed").innerHTML = n;
     

	//var letter = document.getElementById("letter").value;
	if(n == true)
		{
			for(var i=0; i<randomWord.length; i++)
			{
				if (randomWord[i]===letter)
					{
						answerArray[i] =letter;
					}
			}
		
		rightkeys.push(letter);
		document.getElementById("counter").innerHTML=" " +count;
		document.getElementById("answer").innerHTML = answerArray.join(" ");
		var myanswer= answerArray.join("");
		document.getElementById("rightkeyUsed").innerHTML =" [ " +guessArray.join(" ")+ " ]";
		//document.getElementById("countWrong").innerHTML ="You only have  " +wCount+ " wrong attempts left";
		document.getElementById("wrongkeyUsed").innerHTML ="[ " +wrongkeys.join(" ")+" ]";
	}
	else
	{
		//guessArray.push(letter);
	document.getElementById("counter").innerHTML=" " +count;
		var ab = wrongkeys.indexOf(letter);
	
	if(ab === -1) {
		wrongkeys.push(letter);
		
		var wCount = (6 - wrongkeys.length);
		document.getElementById("countWrong").innerHTML =" " +wCount+ " ";
		document.getElementById("wrongkeyUsed").innerHTML ="[ " +wrongkeys.join(" ")+" ]";
		if(wCount <= 0)
		{
			document.getElementById('loseTune').play();
			document.getElementById("correct").innerHTML ="You were wrong! It's " +randomWord;
			document.getElementById("pic2").style.display = "block";
			
			deleteArr();
			reStart();
			Myloses++;
		}
	}

		
	document.getElementById("wrongkeyUsed").innerHTML =" [ " +wrongkeys.join(" ")+" ]";
	
		
	}
	
	if (randomWord === myanswer)
	{
		document.getElementById('winTune').play();
		score++;
		document.getElementById("score").innerHTML = score;
		document.getElementById("correct").innerHTML ="You got it! It's " +randomWord;
		
		document.getElementById("pic").style.display = "block";
		
		deleteArr();
		reStart();

		

		//alert("correct!");
	}

	

	
	



})
function reStart()
{

	letter='';
	answerArray=[];
		guessArray=[];
		count = 0;
		//score = 0; 


	guessArray = [];
	wrongkeys = [];
	rightkeys = [];

		startUp();
}


function GameOverStart()
{

	letter='';
	answerArray=[];
		guessArray=[];
		count = 0;
		score = 0; 
		Myloses = 0;


	guessArray = [];
	wrongkeys = [];
	rightkeys = [];

		startUp();
}



			



window.addEventListener("click", function()
{ 
	count = 0;
		score = 0; 

		Myloses = 0;
document.getElementById("myhide").style.display = "block";

document.getElementById("text1").innerHTML = " ";
document.getElementById("pic").style.display = "none";
document.getElementById("counter").innerHTML=" " +count;
			document.getElementById("pic3").style.display = "none";
		document.getElementById('winTune').pause();
	document.getElementById('loseTune').pause();
	document.getElementById('gameOver').pause();
document.getElementById("score").innerHTML = score;
			
			


reStart();
 });

