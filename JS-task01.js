function cellbgc(){
             var r=Math.floor(Math.random()*256);
             var g=Math.floor(Math.random()*256);
             var b=Math.floor(Math.random()*256);
             return "rgb("+r+','+g+','+b+")";             
         }

function ranarr()
{
    var arr=[0,1,2,3,4,5,6,7,8],i,j,m;
	for(i=8;i>0;i--)
	{
		j=Math.round(Math.random()*i);
        m=arr[i];
        arr[i]=arr[j];
        arr[j]=m;
    }
	return arr;
}

function chg()
{
    var arr=ranarr(),a=arr[0],b=arr[1],c=arr[2],x=document.getElementsByClassName("nine"),n;
    for(n=0;n<9;n++)
    {
        x[n].style.backgroundColor="orange";
    }
    x[a].style.backgroundColor=cellbgc();
    x[b].style.backgroundColor=cellbgc();
    x[c].style.backgroundColor=cellbgc();
}

var t=0;

function strchg()
{
    if(t===0)
    {
        t=setInterval('chg()',1000);
    }
    document.getElementById("btnstr").style.backgroundColor="orange";
    document.getElementById("btnstr").style.color="white";
    document.getElementById("btnend").style.backgroundColor="white";
    document.getElementById("btnend").style.color="orange";
}

function endchg()
{
    if(t!==0)
    {
        clearInterval(t);
    }
    t=0;
    var x=document.getElementsByClassName("nine"),n;
    for(n=0;n<9;n++)
    {
        x[n].style.backgroundColor="orange";
    }        
    document.getElementById("btnend").style.backgroundColor="orange";
    document.getElementById("btnend").style.color="white";
    document.getElementById("btnstr").style.backgroundColor="white";
    document.getElementById("btnstr").style.color="orange";
}
