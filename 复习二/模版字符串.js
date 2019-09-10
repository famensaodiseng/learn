let obj = {
    username :"lisi",
    age :"1",
    gender :"male"
}


let tpl = `
< div >
    <span>${obj.username} <span>
    <span>${obj.age}<span>
    <span>${obj.gender}<span>
    </div>
` 
console.log(tpl);
