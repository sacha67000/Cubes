

/*function Start () 
{
	yield WaitForSeconds(8);
	this.gameObject.renderer.material.color = Color(0.5, 0.5, 0.5, 1);
	yield WaitForSeconds(1);
	this.gameObject.renderer.material.color = Color(0.25, 0.25, 0.25, 1);
	yield WaitForSeconds(1);
	this.gameObject.renderer.material.color = Color(0, 0, 0, 1);
}*/

function Update()
{
	this.gameObject.renderer.material.color.b -= 0.002;
	this.gameObject.renderer.material.color.g -= 0.002;
	this.gameObject.renderer.material.color.r -= 0.002;
}