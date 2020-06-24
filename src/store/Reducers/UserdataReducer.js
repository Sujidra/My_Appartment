const moment = require("moment")

const data=[
    {
        id:3,
        Username:"Rajesh",
        flatno:"3-2AB",
        title:"10th Board Exam",
        content:"TN 1oth board exam has been cancelled by the Tamil Nadu Government due to corona virus  ",
        Replies:2,
        Likes:2,
        time:'1 hours ago',
        imgurl:"/images/person3.jpg"
    },
    {
    id:1,
    Username:"Venkat Krishnan",
    flatno:"10B",
    title:"Aunnouncement",
    content:"TN 10th Public Exam 2020 time has been announced by the Tamilnadu Nadu Education Minister along with exam dates for pending 11th and 12th public exams.TN SSLC 2020 exams to begin from june 1, check timetable.",
    Replies:7,
    Likes:4,
    time:'40 minutes ago',
    imgurl:"/images/person1.jpg"
},
{
    id:2,
    Username:"Rathinavel",
    flatno:"4A",
    title:"School Reopen",
    content:"Schools in Tamil Nadu to open post coronavirus lockdown: Minister of school education. ",
    Replies:2,
    Likes:9,
    time:'1 hour ago',
    imgurl:"/images/person2.jpg"
},
{
    id:3,
    Username:"Sujidra",
    flatno:"3-2AB",
    title:"Second midterm Exam",
    content:"Can anyone post second Midterm model question paper for 9th. ",
    Replies:2,
    Likes:2,
    time:'12 hours ago',
    imgurl:"/images/person3.jpg"
},
{
    id:3,
    Username:"Anitha",
    flatno:"3-2AB",
    title:"Maths model question paper",
    content:"Can anyone post maths model question paper for 4th std? ",
    Replies:2,
    Likes:2,
    time:'1 day ago',
    imgurl:"/images/person2.jpg"
},
{
    id:3,
    Username:"Ajay",
    flatno:"3-2AB",
    title:"Football coaching",
    content:"Tomorrow do we have football coaching?",
    Replies:2,
    Likes:2,
    time:'18 hours ago',
    imgurl:"/images/person3.jpg"
}
]

const UserdataReducer = (state=data,action) =>{
    return state;
}

export default UserdataReducer;