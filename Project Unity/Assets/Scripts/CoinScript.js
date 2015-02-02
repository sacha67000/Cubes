
function Start () {
	this.gameObject.renderer.material.color = Color(1, 0.85, 0, 1);
}

function Update () {
	this.gameObject.transform.Rotate(Vector3.up * Time.deltaTime * 200, Space.World);
}

function OnTriggerEnter (other : Collider) 
{
	if (other.name ==  "Player")
		GameObject.Find("Score").GetComponent("ScoreCount").score += 100;
	Destroy(this.gameObject);
}