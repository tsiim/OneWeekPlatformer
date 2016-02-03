/*
 * UI script to print some boxes (achievements) to the screen 
 * the "?" will be replaced by achievement text when they are gained 
 *  
 */
using UnityEngine;
using System.Collections;
using System.IO;

public class myGUIScript : MonoBehaviour {
	public static string box1 = "?";
	public static string box2 = "?";
	public static string box3 = "?";
	public static string box4 = "?";
	
	void OnGUI() {
		string temp = "?";
		int counter = 0;
		while(counter < 4){
			switch(counter){
				case 0 : temp = box1;
						break;
				case 1 : temp = box2;
						break;
				case 2 : temp = box3;
						break;
				case 3 : temp = box4;
						break;
			}
			GUI.Box(new Rect(20,40+(30*counter),100,25),temp);
					
			counter++;
		}
		GUI.Box(new Rect(10,10,120,40+(30*counter)),"Achievements");
	}
}