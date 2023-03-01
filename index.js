// console.log(alert("enter information 1"))
// console.log ("email1")
// const email1=[]
// let email_1=email1.push(prompt("email1"))
// let nam1=email1.push(prompt("name"))
// //console.log(email1)
// let age1=email1.push(prompt("age"))
// //console.log("age")
// var email=[nam1,age1]
// obj={...email1}
// console.log(obj)


// console.log(alert("enter information 2"))

// console.log ("email2")
// const email2=[]
// let email_2=email2.push(prompt("email2"))

// let nam2=email2.push(prompt("name"))
// //console.log(email2)
// let age2=email1.push(prompt("age"))
// //console.log("age")

// let roll=prompt("user put roll")
// email2.push(roll)
// var email=[nam2,age2,roll]
// obj={...email1}
// console.log(obj)
// console.log(email2.map(function(value,index){
//     return ({key:index, value:value})
// }))
alert("What you wAnt")
let n=prompt("Add, Update or Delete")

if(n=="Add".toLocaleLowerCase()){
    console.log(alert("Enter Information 1"))
    console.log("First Information")
    let email1=[]
    var email_1=email1.push(prompt("Enter Your email"))
    var name_1=email1.push(prompt("Enter Your Name"))
    var age_1=email1.push(prompt("Enter Your Age"))
    var obj1={...email1}
    
    console.log(obj1)
    // console.log(email1.map((value)=>{
    //     return {Email:value}
    // }))

    console.log(alert("Enter Information 2"))
    console.log("Second Information")
    let email2=[]
    var email_2=email2.push(prompt("Enter Your email"))
    var name_2=email2.push(prompt("Enter Your Name"))
    var age_2=email2.push(prompt("Enter Your Age"))
    var obj2={...email2}
    // let info2=email2.map((value)=>{
    //     return value
    // })
    
    console.log(obj2)
}



console.log(alert("Your Information are Stored"))

 n=prompt("Add, Update or Delete")
 

if(n=="Update"){
    console.log(alert("Which email object information want to update"))
    let n1=prompt("Enter Email")
    if(n1==obj1[0] ||  n1==obj2[0]){
        console.log(alert("value find"))
        if(n1==obj1[0]){
            console.log(alert("information in first object"))
            //console.log(alert("name or age???"))
            console.log("updated information 1")
            let n2=prompt("name or age")
            if(n2=="name"){
                var new_1=prompt("enter new name")
                obj1={...obj1, 1:new_1}
                // var c=Object.values(obj1)
                // c.splice(1,1,new_1)
                console.log(obj1)
                
            }
            if(n2=="age"){
                var new__1=prompt("enter new Age")
                obj1={...obj1, 2:new__1}
                console.log(obj1)
            }
            console.log(alert("Your value is updated in information 1"))
    
            
    }
    
        if(n1==obj2[0]){
            console.log(alert("information in second object"))
            //console.log(alert("name or age???"))
            let n2=prompt("name or age")
            if(n2=="name"){
                console.log("updated information 1")
                var new_1=prompt("enter new name")
                obj2={...obj2, 1:new_1}
                console.log(obj2)
            }
            if(n2=="age"){
                var new__1=prompt("enter new Age")
                obj2={...obj2, 2:new__1}
                console.log(obj2)
            }
            console.log(alert("Your value is updated in information 2"))

    } 
      
} 
else{
    alert("Value not find")
}  

}
n=prompt("Add, Update or Delete")
if(n=="Delete"){
    console.log(alert("Which email object information want to delete"))
    let n1=prompt("Enter Email")
    if(n1==obj1[0] || n1==obj2[0]){
        console.log(alert("value find for delete object"))
        if(n1==obj1[0]){
            console.log(" First information deleted")
            console.log(alert("information in first object"))
            var result= delete obj1
            console.log(result)
            console.log("Remaining Second information is there")
            console.log (obj2)

        }
        
        
        console.log(alert("YOur information is deleted"))
        if(n1==obj2[0]){
            console.log("Second information deleted")
            console.log(alert("information in first object"))
            var result= delete obj2
            console.log(result)
            console.log("Remaining First information is there")
            console.log(obj1)
        }
        // else{
        //     console.log (obj1)
        // }
        console.log(alert("YOur information is deleted"))

    }
    
}





