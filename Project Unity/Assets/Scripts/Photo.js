var prefab : Transform;
var x = 0;
var z = 0;

function Start () {
	while (z < 25)
	{
		while (x < 25)
		{
			yield WaitForSeconds(0.1);
			Instantiate (prefab, Vector3(x, 0, z), Quaternion.identity);
			x++;
		}
		x = 0;
		z++;
	}
}

function Update () {

}