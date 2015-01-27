
function OnMouseEnter ()
{
	this.guiText.fontSize *= 1.3;
}

function OnMouseUp () 
{
	Application.LoadLevel("Score");
}


function OnMouseExit () 
{
	this.guiText.fontSize = 40;
}