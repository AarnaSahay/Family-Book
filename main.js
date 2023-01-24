var images =["family cover.jpg", "mom cover.jpg", "dad cover.jpg", "daughter cover.jpg", "grandma cover.jpg", "grandpa cover.jpg" ];
var names =["Family Book","Nidhi Sahay Mom", "Jai Kishore Dad", "Aarna Sahay Daughter", "Abha Sahay Grandma", "Nareshwar Sahay Grandpa" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    { i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_name").innerHTML= updatedName;

}