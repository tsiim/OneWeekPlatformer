#pragma strict
// which door is to be opened/closed
// current state, 0 = closed,1 = open
public var gateDoorClosed : Transform;
public var onoff : int;

function OnCollisionEnter(other : Collision) 
{
	// if a crate hits the button, only then will the door be "opened" or "closed"
	if(other.gameObject.tag == "Crate"){
		if(onoff == 1){
			gateDoorClosed.gameObject.active = true;
			onoff = 0;
		}
		else{
			gateDoorClosed.gameObject.active = false;
			onoff = 1;
		}
	}
}