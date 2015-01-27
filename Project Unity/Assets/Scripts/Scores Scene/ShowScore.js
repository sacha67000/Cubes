#pragma strict

function Start () {
	this.guiText.text = PlayerPrefs.GetInt("Score").ToString();
}
