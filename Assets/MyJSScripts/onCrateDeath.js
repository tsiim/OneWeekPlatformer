// When this object dies, it will remove it self from the shooting array

function OnDestroy(){
	if(shoot.myArray.length>0){
		shoot.myArray.remove(this.gameObject);
	}
}
