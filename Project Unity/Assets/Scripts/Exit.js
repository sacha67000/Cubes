function OnMouseUp () 
{
	Application.Quit();
}

function OnMouseEnter ()
{
	this.guiText.fontSize *= 1.3;
}

function OnMouseExit () 
{
	this.guiText.fontSize = 40;
}