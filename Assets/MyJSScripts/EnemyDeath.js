// when owner "dies", it will be replaced by this
public var destroyedPrefab : GameObject;
var myGUItext : GUIText;
var guiTime :int;
function Start()
{
        myGUItext.gameObject.active = false;
}


// on update we check if the object is not flat on his back, if it is then it dies
function Update(){
	var temprotz = float.Parse(gameObject.transform.rotation.eulerAngles.z.ToString());
	var temprotx = float.Parse(gameObject.transform.rotation.eulerAngles.x.ToString());

	if(((temprotz > -270 && temprotz < -45) || (temprotz > 45 && temprotz < 270)) ||
		((temprotx > -270 && temprotx < -45) || (temprotx > 45 && temprotx < 270))){
		
		// if the boss dies, end the game after a few seconds
		if(gameObject.tag == "Boss"){
			Instantiate(destroyedPrefab, gameObject.transform.position, gameObject.transform.rotation);
			myGUItext.text = "The final robot lies broken.\nYou have completed your mission";
    		myGUItext.gameObject.active = true;
    		StartCoroutine(GuiDisplayTimer());
		}
		else{
		Instantiate(destroyedPrefab, gameObject.transform.position, gameObject.transform.rotation);
		Destroy(gameObject);
		}
		
		
	}
}

function GuiDisplayTimer()
{
        // Waits an amount of time
        yield WaitForSeconds(guiTime);
        // Deactivate GUI objects;
        myGUItext.gameObject.active = false;
		Application.LoadLevel("End");
}