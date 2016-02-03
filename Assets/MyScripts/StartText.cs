/*
 * A simple script to update UI box elements and show some message on the screen
 * 
 * (the skeleton was loaned form a forum)
 */
using UnityEngine;
using System.Collections;

public class StartText : MonoBehaviour {

    public GUIText myGUItextTitle;
    public int guiTime = 2;
	public bool isTriggered = false;

    void Start()
    {
        myGUItextTitle.gameObject.active = false;
    }

    void OnTriggerEnter(Collider c)
    {
		if(c.tag == "Player"){
			if(isTriggered){
				return;
			}
			isTriggered = true;
	        myGUItextTitle.text = "Hello.\n You are Boxman.\nDestroy The Boss";
	        myGUItextTitle.gameObject.active = true;
	        // Start coroutine for deactivating gui elements
	        StartCoroutine(GuiDisplayTimer());
		}
    }

    IEnumerator GuiDisplayTimer()
    {
        // Waits an amount of time
        yield return new WaitForSeconds(guiTime);
        // Deactivate GUI objects;
        myGUItextTitle.gameObject.active = false;
    }

}
