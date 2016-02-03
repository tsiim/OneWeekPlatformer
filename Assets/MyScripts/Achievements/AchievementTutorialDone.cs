/*
 * Achievement script 
 * 
 * A simple script to update UI box elements and show some message on the screen
 * 
 * (the skeleton was loaned form a forum)
 */
using UnityEngine;
using System.Collections;

public class AchievementTutorialDone : MonoBehaviour {

    public GUIText myGUItextTitle;
	public GUIText myGUItextBody;
    public int guiTime = 2;
	public bool isTriggered = false;

    void Start()
    {
        myGUItextTitle.gameObject.active = false;
		myGUItextBody.gameObject.active = false;
    }

    void OnTriggerEnter(Collider c)
    {
		if(c.tag == "Player"){
			if(isTriggered){
				return;
			}
			GameObject.FindWithTag("Spawn").transform.position = gameObject.transform.position;
			isTriggered = true;
	        myGUItextTitle.text = "Congratulations!";
			myGUItextBody.text = "You have completed the tutorial,\nyou can continue to explore the level.";
	        myGUItextTitle.gameObject.active = true;
			myGUItextBody.gameObject.active = true;
			myGUIScript.box1 = "Tutorial Done";
	        // Start coroutine for deactivating gui elements
	        StartCoroutine(GuiDisplayTimer());
		}
    }

    IEnumerator GuiDisplayTimer()
    {
        // Waits an amount of time
        yield return new WaitForSeconds(guiTime);
        // Deactivate GUI objects;
        myGUItextBody.gameObject.active = false;
		myGUItextTitle.gameObject.active = false;
    }

}
