/*
 * This script can be attached to a trigger and when the player 
 * steps in or out of the trigger the camera will either zoom in or out
 * 
 */

using UnityEngine;
using System.Collections;

public class CameraZoomOut: MonoBehaviour {

    void OnTriggerEnter(Collider c)
    {
		if(c.tag == "Player"){
			c.SendMessage("ZoomOut",SendMessageOptions.DontRequireReceiver);
		}
    }
	
	void OnTriggerExit(Collider c)
	{
		if(c.tag == "Player"){
			c.SendMessage("ZoomIn",SendMessageOptions.DontRequireReceiver);
		}
	}
}
