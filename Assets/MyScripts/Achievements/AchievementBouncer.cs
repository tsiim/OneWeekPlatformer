/*
 * Achievement script 
 * 
 * A simple script to update UI box elements and show some message on the screen
 * (the skeleton was loaned form a forum)
 */
using UnityEngine;
using System.Collections;

public class AchievementBouncer : MonoBehaviour {

    public GUIText myGUItext;
    public int guiTime = 2;
	public bool isTriggered = false;

    void Start()
    {
        myGUItext.gameObject.active = false;
    }

    void OnTriggerEnter(Collider c)
    {
		if(c.tag == "Crate"){
			if(isTriggered){
				return;
			}
			isTriggered = true;
	        myGUItext.text = "Achevement gained, Bouncer!\nYou can now become a bouncer!";
	        myGUItext.gameObject.active = true;
			myGUIScript.box4 = "The Bouncer";
	        // Start coroutine for deactivating gui elements
	        StartCoroutine(GuiDisplayTimer());
		}
    }

    IEnumerator GuiDisplayTimer()
    {
        // Waits an amount of time
        yield return new WaitForSeconds(guiTime);
        // Deactivate GUI objects;
        myGUItext.gameObject.active = false;
    }

}
