var prefab : Transform;

function Get_X()
{
	var x;
	x = Random.value;

	if (x < 0.1)
		return (-5);
	else if (x < 0.2)
		return (-4);
	else if (x < 0.3)
		return (-3);
	else if (x < 0.4)
		return (-2);
	else if (x < 0.5)
		return (-1);
	else if (x < 0.6)
		return (1);
	else if (x < 0.7)
		return (2);
	else if (x < 0.8)
		return (3);
	else if (x < 0.9)
		return (4);
	else if (x < 1)
		return (5);
}

function Start () {
	yield WaitForSeconds(0.5);
	Instantiate (prefab, Vector3(this.gameObject.transform.position.x + Get_X(), this.gameObject.transform.position.y,
								 this.gameObject.transform.position.z + Get_X() ), Quaternion.identity);
	yield WaitForSeconds(10);
	Destroy(gameObject);
}