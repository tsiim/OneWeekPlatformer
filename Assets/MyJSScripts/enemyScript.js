#pragma strict
/*
 *	A simple moving script to move stuff on the x-axis,
 * it will get waypoints to how far left and right we move from the original position.
 * 
 */
public var target : Transform;
public var waypointL : int;
public var waypointR : int;
public var speed : float;
private var originalPos : Vector3;
private var moveRight = true;
private var pastZero = true;
private var lastDist : float;
private var newDist : float;
private var mult : int;



function Start () {
	originalPos = target.position;
	moveRight = true;
}

function Update () {

	// because the distance vector gives all distances as positive, we need to check that are we going
	// back to the original position or away from the original position
	if(!pastZero)
			mult = -1;
		else
			mult = 1;
	if(moveRight){
		if((Vector3.Distance(target.position,originalPos)*mult) > waypointR){
			moveRight = false;
			pastZero = false;
		}
		else{
			target.Translate(speed,0,0);
			newDist = float.Parse(Vector3.Distance(target.position,originalPos).ToString());
			
			if(!pastZero){
				if(newDist > lastDist){
					pastZero = true;
				}
			}
			lastDist = newDist;
		}
	}
	else{
		// because the distance vector gives all distances as positive, we need to check that are we going
		// back to the original position or away from the original position
		if(!pastZero)
			mult = -1;
		else
			mult = 1;
			
		if((Vector3.Distance(target.position,originalPos)*mult) > waypointL){
			moveRight = true;
			pastZero = false;
		}
		else{
			target.Translate(speed*(-1),0,0);
			newDist = float.Parse(Vector3.Distance(target.position,originalPos).ToString());
			
			if(!pastZero){
				if(newDist > lastDist){
						pastZero = true;
				}
			}
			lastDist = newDist;
		}
	}

}