function myFunction(){
  const pass = document.getElementById("passInput");
  const eye = document.getElementById("eye");
  const eyeSlash = document.getElementById("eyeSlash");

  if(pass.type === 'password'){
    pass.type = "text";
    eye.style.display = "block";
    eyeSlash.style.display = "none";
  } else{
    pass.type = "password";
    eye.style.display = "none";
    eyeSlash.style.display = "block"
  }
}