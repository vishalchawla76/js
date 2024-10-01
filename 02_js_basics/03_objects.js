const main_user = Object()

main_user.id = 74298
main_user.name = "arun"
main_user.email = "arun@mail.com"
main_user.fullname = {
    first_name: "arun",
    middle_name: "rohan",
    last_name: "ahuja"
}
console.log(main_user);
user_name = main_user.fullname.first_name
// console.log(user_name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e,",6: "f"}

const obj4 = Object.assign(obj2, obj3, obj1)
// console.log(obj4);

const array_of_obj = [
    {
        id:"123",
        email:"abc@gmail.com"
    },{
        id:"123",
        email:"abc@gmail.com"
    },{
        id:"123",
        email:"abc@gmail.com"
    },{
        id:"123",
        email:"abc@gmail.com"
    },{
        id:"123",
        email:"abc@gmail.com"
    }
]


// console.log(array_of_obj[1].email);
// console.log(Object.keys(main_user));
// console.log(Object.values(main_user));
// console.log(Object.entries(array_of_obj))
// console.log(array_of_obj)


const course = {
    course_name: "python",
    course_id :  "200222",
    date_created: "02-02-2024",
    duration: "100m"
}


// course.duration
// Destruction: expression that makes it possible to unpack values from arrays, or properties 
// from objects into distinct variable

const {duration} = course
console.log(duration)

