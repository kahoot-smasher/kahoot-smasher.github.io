if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $(document).ready(function(){
        $("#mobileBody").css("display","block");
        $("#body").css("display","none");
        if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            $("#iphoneBody").css("display","block");
        }
    });
}
else
{
var buildNumber =0;
var isSmasherInstalled = false;
var loadInline = true;
var numberOfKahoots =20;
var showCSS=false;
var addMoreButton= document.createElement("input");
var namingMethod = 0;
var namingMethods = ["Random name","Random Ending","Choose Name"];
var namesExample= ["Ben Dover","Eileen Dover","Not in ur class","Stephanie","Sportacus","Robbie Rotten","Ziggy","L0kesh;)","RealPerson.mp4","ur search history","Cael Cooper:)","Kim-Jong Uno","Sernie Banders","lorcan't","Not A Bot","setup.exe","admin1"];

addMoreButton.type = "button";
addMoreButton.value = "Smash More!";
addMoreButton.onmousedown=function (){addMoreKahoots();};
//addMoreButton.class = "mainpage";
addMoreButton.style="margin-bottom:0.5%;margin-left:0.5%;width:99%;height:50px;position:fixed;display:block;bottom:0;background-color:#333;outline: 0;box-shadow: none;border: 1px solid #2e2e2e;color:white;font-family: montserrat,'helvetica neue',helvetica,arial,sans-serif;font-weight: 700;font-size:20px;";
$("#GamePin").keyup(function (e) {
    if (e.which == 13) {
        buttonClicked();
    }
 });

function randomCaps(baseName)
{
    var newName = "";
    for(var i=0; i< baseName.length; i++)
    {
        if(Math.random()>0.5)
        {
            newName+=baseName[i];
        }
        else
        {
            newName+=baseName[i];
        }
    }
    return newName;
}


function generateRandomLetter(length)
{
    var randomLetters = "";
    var letters= "qwertyuiopasdfghjklzxcvbnm1234567890";
    for(var i=0; i<length; i++)
    {
        randomLetters += letters[Math.floor(Math.random()*letters.length)];
    }
    return randomLetters;
}

function generateName(mode)
{
    var name="";
    switch(mode)
    {
        case 0: // Random Name
            name = randomCaps(namesExample[Math.floor(Math.random()*namesExample.length)]);
            break;
        case 1: // Random Ending
            name = ($("#base").val().substr(0,11) +"." +generateRandomLetter(5)).substr(0,16);
            break;
        case 2: // Random Caps
            if($("#base").val().length<7)
            {
                name = randomCaps($("#base").val()) + "" +generateRandomLetter(0);
                break;
            }
            else
            {
                name = randomCaps($("#base").val());
                break;
            }
        default:
            name = "Smasher"+generateRandomLetter(5);
    }
    return name;
}

function updateName()
{
    $("#nameExample").html("Example: " + generateName(namingMethod));
}

function showExtension()
{
    $("#install").css("display", "block");
}
function hideExtension()
{
    $("#install").css("display", "none");
}

function addMoreKahoots()
{
    document.body.removeChild(addMoreButton);
    for(var i=0; i<5; i++)
    {
        var frame = document.createElement("iframe");
        frame.src="http://www.kahoot.it";
        document.body.appendChild(frame);
    }
    document.body.appendChild(addMoreButton);
}

function showSettings()
{
    $("#settings").css("display", "block");
}
function hideSettings()
{
    numberOfKahoots = parseInt($("#numberOfKahoots").val());
    $("#settings").css("display", "none");
}

function showAbout()
{
    $("#info").css("display","block");
}
function hideAbout()
{
    $("#info").css("display","none");
}

function changeNaming()
{
    namingMethod+=1;
    if(namingMethod==namingMethods.length)
    {
        namingMethod=0;
    }
    if(namingMethod==0)
    {
        $("#baseName").css("display", "none");
        $("#base").css("display", "none");
    }
    else
    {
        $("#baseName").css("display", "block");
        $("#base").css("display", "block");
    }
    $("#namingMethod").attr('value',namingMethods[namingMethod]);
    updateName();
}

function toggleInLine()
{
    loadInline = !loadInline;
    var newValue = "";
    if(loadInline)
    {
        newValue="Yes";
    }
    else
    {
        newValue="No";
    }
    $("#inline").attr('value',newValue);
}
function loadCssToggle()
{
    showCSS = !showCSS;
    var newValue = "";
    if(showCSS)
    {
        newValue="Beautiful";
    }
    else
    {
        newValue="High";
    }
    $("#cssLoad").attr('value',newValue);
    $("#asdfghjklqwertyuio").attr("cssEnabled",showCSS);
}

function buttonClicked()
{
    if(!isSmasherInstalled)
    {
        showExtension();
        return;
    }
    gameID = $("#GamePin").val();
    var canContinue = true;
    if(gameID=="")
    {
        canContinue=false;
    }
    for(var i=0; i<gameID.length; i++)
    {
        if(isNaN(parseInt(gameID[i])))
        {
            canContinue = false;
        }
    }
    if(canContinue)
    {
        $("#asdfghjklqwertyuio").attr("value",gameID);
        $("#asdfghjklqwertyuio").attr("namingConvention",namingMethod);
        $("#asdfghjklqwertyuio").attr("baseName",$("#base").val());
        var newHTML = "<h1>Kahoot smashing in progress...</h1>";
        for(var i=0; i< numberOfKahoots; i++)
        {
            if(loadInline)
            {
                newHTML += "<iframe src='https://kahoot.it'></iframe>";
            }
            else
            {
                window.open("https://www.kahoot.it");
            }
        }
        if(loadInline){
            $("#body").html(newHTML);
        }
        document.body.appendChild(addMoreButton);
    }
}
$(document).ready(function(){setTimeout(function(){
    updateName();
    $('#GamePin').on('keyup', function (e) {
    if (e.keyCode == 13) {
        buttonClicked();
    }
});
},500);})

}
