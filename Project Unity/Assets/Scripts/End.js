function Update () {
	if (this.gameObject.transform.position.y < -10)
	{
		if (PlayerPrefs.GetInt("Score") < GameObject.Find("Score").GetComponent("ScoreCount").score)
			PlayerPrefs.SetInt("Score", GameObject.Find("Score").GetComponent("ScoreCount").score);
		Application.LoadLevel(Application.loadedLevel);
	}
	Debug.Log(PlayerPrefs.GetInt("Score"));
}