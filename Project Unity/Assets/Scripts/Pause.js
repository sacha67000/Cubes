
function Start ()
{
	GameObject.Find("MenuBackground").guiTexture.enabled = false;
	GameObject.Find("Back").guiText.enabled = false;
	Time.timeScale = 1;
}

function Update () {
	if (Input.GetKeyUp(KeyCode.Escape))
	{
		if (Time.timeScale == 1)
		{
			Time.timeScale = 0;
			Screen.showCursor = true;
			GameObject.Find("MenuBackground").guiTexture.enabled = true;
			GameObject.Find("Back").guiText.enabled = true;
		}
		else
		{
			Time.timeScale = 1;
			Screen.showCursor = false;
			GameObject.Find("MenuBackground").guiTexture.enabled = false;
			GameObject.Find("Back").guiText.enabled = false;
		}
	}

}