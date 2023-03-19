export default {

    //Navbar Section
    webName : "<WhosArghya/>",

    NavbarLinks : [
        {
            id : 1,
            path : "/",
            name : "Home"
        },
        {
            id : 2,
            path : "/apod",
            name : "APOD"
        },
        {
            id : 3,
            path : "/exps",
            name : "Exps"
        },
        {
            id : 3,
            path : "/skills",
            name : "Skills"
        },
        {
            id : 4,
            path : "/projects",
            name : "Projects"
        },

    ] ,

    //FrontPage
    intro : {
        hi : "Hi there!!!!",
        introduction : "This's Arghya",
        para1 : "    Currently working as a Member of Technical staff (Backend Developer) at Zoho Corporation Pvt. Ltd. I have completed my B.Tech on 2022.",
        para2 : "    Technology excites me and I am always in awe of the change it drives in the world. Love to Collaborate and Learn new Techs and enhance skills",
        connect : "Lets Connect.!🤝"
    },


    introSideImg : "" ,


    //Experince Page
    exps : [
        {
            id : 1,
            compName : "Zoho Corporation",
            compImg : "content/zoho.png",
            compImgAlt : "zoho",
            compPlace : "Chennai, In",
            compTimeLine : "Aug 2022 - Present",
            compRole : "Member Technical Staff (Backend)",
            compIntroPara : "Technologies : Core Java, Struts 2 and Backend Operations ; Team - Zoho Video Platform.",
            compPara : [
                "Wrote and Integrated 5 new APIs to implement the newest feature “Waiting Room” in the conference that accepts requests from the joiners and notify host/co host to join in ; Handles them on the server end and executes DB operations as per use cases",
                "Fixed issue of pre-call making anomaly and improved unauthorized call detection system, speeded up the reaction 90% faster.", 
                "Designed and developed an API for the service team to fetch the details of all participants of an ongoing or any previously occurred conference","Improved system to delete \"unnecessary\" data from DB periodically to free up the load and optimize the space ."

            ]
        },
        {
            id : 2,
            compName : "Cognizant",
            compPlace : "Kolkata, In",
            compTimeLine : "Feb 2022 - May 2022",
            compRole : "PAT Intern (Database Vis. & Norm.)",
            compImg : "content/cogni.png",
            compImgAlt : "Cognizant",
            compIntroPara : "Worked as an Intern under the offer of Programming Analyst Traniee.",
            compPara : [
                "Domain : Database Visualization and Normalization (Cohort Topper : ICT score : 88% and descent confederate with elocution).", 
                "Trained on Database Management System , Data Modeling ; Tech Stack learnt : MySql, Data Analysis and Visualization tools : QlikView, Tableau."

            ]
        }
    ],


    //projects Page
    projs : [
        {
            _id : "1",
            projTitle : "boAt-Clone",
            projTitleLink : "https://boat-clone-eta.vercel.app/",
            projTech : ["<Javascript color=\"#00ffff\"  size={30} className={styles.ico}/>","Javascript", "Stripe","CssThree"],
            projLink : [
                {
                    link : "https://github.com/Into-Y0u/boAt-Clone",
                    icon : "Github"
                },
                {
                    link : "https://boat-clone-eta.vercel.app/",
                    icon : "Firefox"
                }
            ],

            projDesc : [
                "Boat Clone is Ecommerce Web app similar to leading lifestyles Unicorn boat-lifestyle.","Built using Next.Js framework , Sanity at the backend and Stripe for payment gateway ."
            ]

        }
    ]

}