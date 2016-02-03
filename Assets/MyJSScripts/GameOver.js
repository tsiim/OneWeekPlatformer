#pragma strict

@script ExecuteInEditMode()

var background : GUIStyle;
var gameOverText : GUIStyle;
var gameOverShadow : GUIStyle;

var gameOverScale = 1.5;
var gameOverShadowScale = 1.5;
var isLoading = false;

function OnGUI()
{

	GUI.Label ( Rect( (Screen.width - (Screen.height * 2)) * 0.75, 0, Screen.height * 2, 
 	 	Screen.height), "", background);
	GUI.matrix = Matrix4x4.TRS(Vector3(0, 0, 0), Quaternion.identity, Vector3.one * 
		gameOverShadowScale);
	GUI.Label ( Rect( (Screen.width / (2 * gameOverShadowScale)) - 150, 
		(Screen.height / (2 * gameOverShadowScale)) - 40, 300, 100), "Congrats! You've Won(the demo).", 
		gameOverShadow);

	GUI.matrix = Matrix4x4.TRS(Vector3(0, 0, 0), Quaternion.identity, Vector3.one * 
		gameOverScale);
 	GUI.Label ( Rect( (Screen.width / (2 * gameOverScale)) - 150, (Screen.height / (2 * 
		gameOverScale)) - 40, 300, 100), "Congrats! You've Won(the demo)", gameOverText);
	
	if(GUI.Button(Rect((Screen.width/4)-30,Screen.height/2-50,100,50), "Play Again"))
	{
		isLoading = true;
		Application.LoadLevel("Test");
	}
}
  	