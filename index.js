const h3tags=document.getElementsByTagName("h3");
const classid=document.getElementsByClassName('bg-custom');
const myname=document.getElementsByName("firstname");
console.log(classid);
console.log(h3tags);

// const form=form.querySelector("form");
const body=document.querySelector("body");
console.log(h3tags[0].innerHTML);
console.log(myname);
const button=document.querySelector('button');
console.log(button);
const button2=document.createElement('button');
body.append(button2);
button2.innerText="Created Successfully";

// document.removeChild("button");

const a=document.createElement("a");
a.innerText="Go to Insta";
a.setAttribute("href","https://instagram.com");
body.append(a);