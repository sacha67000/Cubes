
function Start () {
	var rdm;
	rdm = Random.Range(0, 5);

	Debug.Log(rdm);
	if (rdm == 0)
		this.gameObject.renderer.material.color = Color.white;		
	else if(rdm == 1)
		this.gameObject.renderer.material.color = Color.blue;
	else if(rdm == 2)
		this.gameObject.renderer.material.color = Color.red;
	else if(rdm == 3)
		this.gameObject.renderer.material.color = Color.yellow;
	else if(rdm == 4)
		this.gameObject.renderer.material.color = Color.green;
}
