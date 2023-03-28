import education from './images/education.jpg';
import hobbies from './images/hobbies.jpg';
import travel from './images/travel.jpg';
import volunteer from './images/volunteer.jpg';
import work from './images/work.jpg';

export const fields = [
    {
        name:"Education",
        activities:[
            {  
                position:"Bachelor of Science in Cell Biology",
                startDate:"2016",
                endDate:"2020",
                location:"University of Alberta",
                desc:"Frank Rose Scholarship, Joseph Lang Scholarship"
            },{
                position:"Information Tech Diploma in Software Development",
                startDate:"2021",
                endDate:"2022",
                location:"Southern Alberta Institute of Technology",
                desc:"Web design, OOP design, Data stuctures and algorithms, Database, UX/UI design, Operating Systems"
            }
        ],
        img: education
    }, {
        name:"Work",
        activities:[
            {  
                position:"Pharmacy Clerk",
                startDate:"2016",
                endDate:"2021",
                location:"Loblaws Pharmacy",
                desc:"blah, blah, blah"
            },{
                position:"Physiotherapy Aid",
                startDate:"2016",
                endDate:"2020",
                location:"Capilano Health and Wellness Clinic",
                desc:"blah, blah, blah"
            }
        ],
        img: work
    }, {
        name: "Volunteering",
        activities: [

        ],
        img: volunteer
    }, {
        name: "Hobbies",
        activities: [
            
        ], 
        img: hobbies
    }, {
        name: "Travel",
        activities: [
            
        ],
        img: travel
    }
];