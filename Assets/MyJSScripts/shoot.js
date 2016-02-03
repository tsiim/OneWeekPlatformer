#pragma strict

/*
 * Gives the object ability to shoot stuff
 * stuff is created where the ShootSphere-gameobject is found.
 * shot stuff will be placed in an array if the array is not full,
 * if the array is full, then we don't shoot at all.
 * When stuff is shot, it will stay in the game for 15 sec until destroyed from game and the array.
 *
 * if left alt is being pressed, then we shoot different stuff
 */
public var Crate : Transform;
public var CrateRubber : Transform;
public var speed : float = 1;
public static var myArray = new Array();
private var CrateToUse : Transform;

function Update () {
	if(Input.GetMouseButtonDown(0))
	{
		if(!Crate || !speed){
			Debug.Log("[Shoot] 'Crate' or 'speed' is undefined");			
		}
		else{
			if(myArray.length < 10){
				if(Input.GetKey("left alt")){
					CrateToUse = CrateRubber;
				}
				else{
					CrateToUse = Crate;
				}
				var boxCreate = Instantiate(CrateToUse, GameObject.Find("ShootSphere").transform.position, Quaternion.identity);
				
				boxCreate.rigidbody.AddForce(transform.forward*speed);
				boxCreate.rigidbody.AddForce(transform.up*(speed));
				myArray.push(boxCreate.gameObject);
				Destroy(boxCreate.gameObject,15);
			}
		}
	}
}