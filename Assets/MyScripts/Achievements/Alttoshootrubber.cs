/*
 * A simple help text to inform the player about the alt button
 * 
 */
using UnityEngine;
using System.Collections;

public class Alttoshootrubber: MonoBehaviour {

    public GUIText myGUItext;
    public int guiTime = 2;
	public bool isTriggered = false;

    void Start()
    {
        myGUItext.gameObject.active = false;
    }

    void OnTriggerEnter(Collider c)
    {
		if(c.tag == "Player"){
			if(isTriggered){
				return;
			}
			isTriggered = true;
	        myGUItext.text = "Press Alt while shooting\n to shoot Rubberboxes(They bounce).\n ps. Lasers kill.";
	        myGUItext.gameObject.active = true;
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
