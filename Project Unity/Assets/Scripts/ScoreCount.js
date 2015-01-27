var score = 0;

function Start()
{
	Screen.showCursor = false;
	this.guiText.color = Color.black;
}

function Scores()
{
	score += 1;
	this.guiText.text = "Score: " + score;
}

InvokeRepeating("Scores", 0, 0.1);