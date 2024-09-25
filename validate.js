
function valid(){
    let x= document.getElementById("username").value;
    let y= document.getElementById("password").value;
    if(x=='vijay' && y==9049 ){
        document.location="navi.html";
        alert('User Found')
        
        
    }
    else{
        alert('User or Password is incorrect');
    }
    
    
}