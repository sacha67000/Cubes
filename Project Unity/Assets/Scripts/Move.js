
function Update () 
{
	var sensitivity = 0.05;

	if (Input.GetButton("Up"))
	{
		this.gameObject.transform.position.x += sensitivity;
	}
	if (Input.GetButton("Down"))
	{
		this.gameObject.transform.position.x -= sensitivity;
	}
	if (Input.GetButton("Right"))
	{
		this.gameObject.transform.position.z -= sensitivity;
	}
	if (Input.GetButton("Left"))
	{
		this.gameObject.transform.position.z += sensitivity;
	}
}