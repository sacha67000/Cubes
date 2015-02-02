#pragma strict

function Start () {
	this.guiText.color = Color.black;
}

function OnMouseUp () 
{
	Time.timeScale = 1;
	Application.LoadLevel("Menu");
}

function OnMouseEnter ()
{
	this.guiText.fontSize *= 1.3;
}

function OnMouseExit () 
{
	this.guiText.fontSize = 40;
}