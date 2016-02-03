#pragma strict

// if player is hit by this object, it will die
function OnCollisionEnter(collision : Collision)
{
    if( collision.gameObject.tag == "Player" )
    {
        collision.gameObject.SendMessage("OnDeath", SendMessageOptions.DontRequireReceiver);
    }
}