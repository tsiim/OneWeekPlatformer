/*
 * A simple script to kill the object that enters this trigger
 */
using UnityEngine;
using System.Collections;

public class deathontrigger : MonoBehaviour {

	 void OnTriggerEnter(Collider c)
	{
		c.gameObject.SendMessage ("OnDeath", SendMessageOptions.DontRequireReceiver);
	}
}
