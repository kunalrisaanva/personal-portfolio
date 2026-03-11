(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(118)},111:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(73),o=a.n(r);a(111);const l={bg:"#1C1C27",bgLight:"#1C1E27",primary:"#854CE6",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000"},p={bg:"#FFFFFF",bgLight:"#f0f0f0",primary:"#be1adb",text_primary:"#111111",text_secondary:"#48494a",card:"#FFFFFF",button:"#5c5b5b"};var d=a(40),s=a(2);const c=s.b.div`
    background-color: ${e=>{let{theme:t}=e;return t.card_light}};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`,m=s.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,x=Object(s.b)(d.b)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`,g=s.b.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`,u=s.b.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`,h=s.b.a`
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${e=>{let{theme:t}=e;return t.primary}};
    }

    &.active {
      border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
    }
`,f=s.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${e=>{let{theme:t}=e;return t.primary}};
      color: ${e=>{let{theme:t}=e;return t.white}};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`,b=s.b.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,w=s.b.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
  }
`,y=s.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${e=>{let{theme:t}=e;return t.card_light+99}};
    transition: all 0.6s ease-in-out;
    transform: ${e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
    z-index: ${e=>{let{isOpen:t}=e;return t?"1000":"-1000"}};

`,E=(s.b.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`,Object(s.b)(d.b)`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,s.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.white}};
  }
`,s.b.a`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`);Object(s.b)(d.b)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;var v=a(80),k=a(81),A=a(77),C=a.n(A),z=a(78),S=a.n(z),j=a(79),B=a.n(j);const F={name:"kunalrisaanva",roles:["Full Stack Developer","Programmer","UI/UX Designer"],description:"I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",github:"https://github.com/kunalrisaanva",resume:"https://docs.google.com/document/d/1At-ikKZSCU6i60eczmj7HNs1zw54SVOdHFTiZu6TqdA/edit?usp=sharing",linkedin:"https://www.linkedin.com/in/kunal-risaanva-40739225b/",twitter:"https://x.com/kunal_risaanva",insta:"https://www.instagram.com/kunal_risaanva/",facebook:""},M=[{title:"Frontend",skills:[{name:"React Js",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},{name:"Redux",image:"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"},{name:"HTML",image:"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"},{name:"CSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"},{name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},{name:"Bootstrap",image:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"},{name:"Material UI",image:"data:image/png;base64,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"}]},{title:"Backend",skills:[{name:"Node Js",image:"https://nodejs.org/static/images/logo.svg"},{name:"Express Js",image:"data:image/png;base64,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"},{name:"Graph Ql",image:"https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"},{name:"MySQL",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},{name:"Postgresql",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"}]},{title:"Others",skills:[{name:"Git",image:"https://icon.icepanel.io/Technology/svg/Git.svg"},{name:"GitHub",image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},{name:"Docker",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"},{name:"Netlify",image:"https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"},{name:"VS Code",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"},{name:"Postman",image:"https://icon.icepanel.io/Technology/svg/Postman.svg"},{name:"Figma",image:"https://icon.icepanel.io/Technology/svg/Figma.svg"}]}],D=[{id:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QCApf-QYA96QGHVcOYmWZyrvcPYe1BqiHg&s",role:"Backend Engineering At Blogee",company:"Pvt. Ltd.",date:"July 2024 - Present",desc:"Working on the Blogee platform \u2014 developed and maintained robust APIs using Node.js, improving backend functionality and performance. Built scalable microservices, handled aggregation pipelines, integrated Firebase services, and deployed on AWS EC2.",skills:["AWS","EC2","JavaScript","Node Js","REST API","Firebase","Aggregation Pipelines"]},{id:1,img:"https://clikkme.in/_next/image?url=%2Fwebsitelogo%2Flogo.png&w=64&q=75",role:"Full Stack Developer At ClickME",company:"ClickME Social Media",date:"Jan 2025 - July 2025",desc:"Built a full-featured social media platform from the ground up. Developed real-time features including live streaming, direct messaging with Socket.io, audio and video calling using WebRTC, and webhook integrations. Implemented stories, reels, community features, and a smart content recommendation algorithm.",skills:["React Js","Node Js","MongoDB","Socket.io","WebRTC","Webhooks","Real-time Audio/Video Calls","REST API","AWS"]},{id:2,img:"https://staging.skillbridge.net/logo/logo.svg",role:"Full Stack Developer At SkillBridge",company:"SkillBridge Pvt. Ltd.",date:"March 2025 - March 2026",desc:"Building a next-gen skilling platform that bridges skill gaps through 1:1 live expert sessions. Developed the full application with Next.js and Strapi CMS, including expert-led program management, personalized career paths, real-time session scheduling with WebSockets, and team training modules.",skills:["Next Js","Node Js","MongoDB","Strapi CMS","Tailwind CSS","WebSockets","REST API"]}],I=[{id:0,img:"https://firebasestorage.googleapis.com/v0/b/fir-ef23f.appspot.com/o/download%20(1).jpeg?alt=media&token=74b31a02-d3a8-4e66-aacb-21961148cb77",school:"M.N.S Govt. College, Bhiwani",date:"Oct 2021 - Sep 2024",grade:"8.71 CGPA",desc:"I have recently completed a Bachelor's degree from M.N.S Govt. College, Bhiwani. I have completed 6 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also doing freelancing work, where I am learning and working on exciting projects with a team of talented developers.",degree:"Bachelor of Arts - B.A, Computer Science and Engineering"},{id:1,img:"https://firebasestorage.googleapis.com/v0/b/fir-ef23f.appspot.com/o/download.jpeg?alt=media&token=c09ccd93-01b8-4001-ad0d-60f49f325e95",school:"Adarsh Sr. Sec. School, Bound",date:"Apr 2019 - Apr 2021",grade:"74.2%",desc:"I completed my class 12 high school education at Adrash School, Bound, where I studied Arts with Math .",degree:"HBSC(XII), Science with Computer"},{id:2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3drnlTUk8FpFP3xT9BVbaoJd-sX9rhA-A_w&s",school:"S.D.M High School, Kharak kalan",date:"Apr 2015 - Apr 2019",grade:"64.3%",desc:"I completed my class 10 education at S.D.M School, Kharak, where I studied Science with Computer Application.",degree:"HBSC(X), Science with Computer"}],P=[{id:0,title:"ClickME - Social Media Platform",date:"Jan 2025 - July 2025",description:"A full-featured social media platform where users can connect, share moments, and go viral. Features include Stories & Reels, Live Streaming, Direct Messages, Music Integration, Communities, and advanced privacy settings. Built with a modern, responsive UI and a smart algorithm for personalized content feeds.",image:C.a,tags:["React Js","Node Js","MongoDB","Socket.io","REST API"],category:"full stack",github:"https://github.com/kunalrisaanva",webapp:"https://clikkme.in/"},{id:1,title:"Blogee - Blogging Platform",date:"Jul 2024 - Present",description:"A go-to platform for discovering and sharing bite-sized blogs on topics that matter. Users can explore content, share knowledge via text, images or videos, and engage with a thriving community. Features include personalized content feeds, categories, likes, comments, and a mobile app. Developed and maintained APIs using Node JS, improving backend functionality and performance.",image:S.a,tags:["Node Js","AWS","EC2","Firebase","REST API","MongoDB"],category:"backend web",github:"https://github.com/kunalrisaanva",webapp:"https://blogee.co/"},{id:2,title:"SkillBridge - Skilling Platform",date:"March 2025 - March 2026",description:"A next-gen skilling platform that bridges skill gaps through 1:1 live expert sessions. Features include expert-led programs, personalized career paths, team training modules, student testimonials, and an intuitive course discovery experience. Built with a modern, responsive frontend and scalable backend architecture.",image:B.a,tags:["Next Js","Node Js","MongoDB","Strapi CMS","Tailwind CSS"],category:"full stack",github:"https://github.com/kunalrisaanva",webapp:"https://staging.skillbridge.net/"},{id:3,title:"Music-Academy",date:"March 2025",description:"The platform allows music instructors to sell their courses online. I utilized component-based architecture to build reusable and scalable UI components, ensuring a clean and efficient codebase. Aceternity UI helped in crafting a modern, responsive interface with smooth user experience. Features include course listings, user registration, and secure checkout functionality for purchasing music lessons.",image:"https://res.cloudinary.com/dltbikmc6/image/upload/v1745984586/xvz83hvnspxqihytfg6y.png",tags:["TypeScript","Next Js","Aceternity Ui","Tailwind CSS"],category:"frontend web",github:"https://github.com/kunalrisaanva/music-project",webapp:"https://music-project-c4a8.vercel.app/"},{id:4,title:"Nike Shoes Frontend",date:"Jun 2023 - Jul 2023",description:"I created a page in React Js. This is a single page but with a clean UI for Nike shoes. I used Tailwind CSS for styling and also used react icons for icons.",image:"https://raw.githubusercontent.com/kunalrisaanva/react-/main/nike-peoject/src/assets/Screenshot%20from%202024-07-11%2010-54-38.png",tags:["React","Tailwind CSS"],category:"frontend web",github:"https://github.com/kunalrisaanva/react-",webapp:"https://nike-shoes-rose-93.vercel.app/"},{id:5,title:"ECOM",date:"Oct 2023 - Dec 2023",description:"The application features a modern UI built with Aceternity UI, ensuring a seamless shopping experience across devices. Implemented Google Authentication for secure and convenient user login. Key functionalities include product listing, cart management, order placement, and API-based backend integration using Fastify for high performance and scalability.",image:"https://res.cloudinary.com/dltbikmc6/image/upload/v1745984820/kovik5vvea1slew1c9cq.png",tags:["Next Js","Fastify Js","MongoDB","Aceternity Ui","Tailwind CSS","Google Auth"],category:"frontend web",github:"https://github.com/kunalrisaanva/YT-Backend-Server",webapp:"https://e-com-wheat-omega.vercel.app/"},{id:6,title:"Pinterest Clone",date:"Apr 2023 - May 2023",description:"A clone with the same functionality as the real one, where users can see other posts, upload their own, and delete posts.",image:"https://firebasestorage.googleapis.com/v0/b/fir-ef23f.appspot.com/o/Screenshot%20from%202024-08-24%2018-25-46.png?alt=media&token=51189646-c131-4921-942f-14772403cc8c",tags:["React Js","MongoDB","Node Js","Express Js","Redux"],category:"frontend web",github:"https://github.com/kunalrisaanva",webapp:"https://pinterest-clone-hc2c.onrender.com/"},{id:7,title:"Chat-App",date:"Oct 2022 - Present",description:"Built a chat application using Node JS and EJS with the help of Socket.io. We can chat in real time. Also has the feature to edit and delete chats.",image:"https://res.cloudinary.com/dltbikmc6/image/upload/v1707888681/n1eaft2mkptmv2os98rt.png",tags:["MongoDB","Node Js","Express Js"],category:"backend web",github:"https://github.com/kunalrisaanva/Chate-App",webapp:"https://chate-app-qsns.onrender.com/"},{id:8,title:"YouTube-Backend-Server",date:"Oct 2023 - Dec 2023",description:"This project is a complex backend project built with Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, and many more. It is a complete backend project with all the features a backend project should have \u2014 a complete video hosting website similar to YouTube with features like login, signup, upload video, like, dislike, comment, reply, subscribe, unsubscribe, and many more.",image:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",tags:["MongoDB","Node Js","Express Js"],category:"backend web",github:"https://github.com/kunalrisaanva/YT-Backend-Server"}];var J=()=>{const[e,t]=i.a.useState(!1),a=Object(s.c)();return i.a.createElement(c,null,i.a.createElement(m,null,i.a.createElement(x,{to:"/"},i.a.createElement("a",{href:"/",style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20;",cursor:"pointer"}},i.a.createElement(v.a,{size:"3rem"})," ",i.a.createElement(g,null,"Portfolio"))),i.a.createElement(w,null,i.a.createElement(k.a,{onClick:()=>{t(!e)}})),i.a.createElement(u,null,i.a.createElement(h,{href:"#about"},"About"),i.a.createElement(h,{href:"#skills"},"Skills"),i.a.createElement(h,{href:"#experience"},"Experience"),i.a.createElement(h,{href:"#projects"},"Projects"),i.a.createElement(h,{href:"#education"},"Education")),i.a.createElement(b,null,i.a.createElement(f,{href:F.github,target:"_blank"},"Github Profile")),e&&i.a.createElement(y,{isOpen:e},i.a.createElement(E,{href:"#about",onClick:()=>{t(!e)}},"About"),i.a.createElement(E,{href:"#skills",onClick:()=>{t(!e)}},"Skills"),i.a.createElement(E,{href:"#experience",onClick:()=>{t(!e)}},"Experience"),i.a.createElement(E,{href:"#projects",onClick:()=>{t(!e)}},"Projects"),i.a.createElement(E,{href:"#education",onClick:()=>{t(!e)}},"Education"),i.a.createElement(f,{style:{padding:"10px 16px",background:`${a.primary}`,color:"white",width:"max-content"},href:null===F||void 0===F?void 0:F.github,target:"_blank"},"Github Profile"))))};const L=s.b.div`
    width:600px;
    height: 500px;
`;var T=()=>i.a.createElement(L,null,i.a.createElement("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{opacity:"0.15"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),i.a.createElement("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),i.a.createElement("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("defs",null,i.a.createElement("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})))));const N=s.b.div`
  background: ${e=>{let{theme:t}=e;return t.card_light}};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,O=s.b.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,U=s.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,H=s.b.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,Z=s.b.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,R=s.b.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.primary}};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,Y=s.b.div`
  font-weight: 700;
  font-size: 50px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,q=s.b.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,G=s.b.span`
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
`,V=s.b.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${e=>{let{theme:t}=e;return t.text_primary+95}};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,W=s.b.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${e=>{let{theme:t}=e;return t.white}};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;var K=a(82),Q=a.n(K),X=a(83),_=a.n(X);var $=()=>i.a.createElement("div",{id:"about"},i.a.createElement(N,null,i.a.createElement(O,null,i.a.createElement(T,null)),i.a.createElement(U,null,i.a.createElement(H,{id:"Left"},i.a.createElement(Y,null,"Hi, I am ",i.a.createElement("br",null)," ",F.name),i.a.createElement(q,null,"I am a",i.a.createElement(G,null,i.a.createElement(_.a,{options:{strings:F.roles,autoStart:!0,loop:!0}}))),i.a.createElement(V,null,F.description),i.a.createElement(W,{href:F.resume,target:"display"},"Check Resume")),i.a.createElement(Z,{id:"Right"},i.a.createElement(R,{src:Q.a,alt:"hero-image"})))));const ee=s.b.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`,te=s.b.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`,ae=s.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`,ne=s.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,ie=s.b.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,re=s.b.div`
  width: 100%;
  max-width: 500px;
  background: ${e=>{let{theme:t}=e;return t.card}};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`,oe=s.b.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  margin-bottom: 20px;
  text-align: center;
`,le=s.b.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,pe=s.b.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,de=s.b.img`
  width: 24px;
  height: 24px;
`;var se=function(){return i.a.createElement(ee,{id:"skills"},i.a.createElement(te,null,i.a.createElement(ae,null,"Skills"),i.a.createElement(ne,null,"Here are some of my skills on which I have been working on for the past 2 years."),i.a.createElement(ie,null,M.map(e=>i.a.createElement(re,null,i.a.createElement(oe,null,e.title),i.a.createElement(le,null,e.skills.map(e=>i.a.createElement(pe,null,i.a.createElement(de,{src:e.image}),e.name))))))))},ce=a(178),me=a(175),xe=a(179),ge=a(181),ue=a(176),he=a(180);const fe=s.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,be=s.b.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,we=s.b.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,ye=s.b.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${fe}{
        display: flex;
    }

    &:hover ${we}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid #854CE6;
`,Ee=s.b.div`
    width: 100%;
    display: flex;
    gap: 12px
`,ve=s.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,ke=s.b.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Ae=s.b.div`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,Ce=s.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,ze=s.b.div`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,Se=s.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;var je=e=>{let{education:t}=e;return i.a.createElement(ye,null,i.a.createElement(Ee,null,i.a.createElement(ve,{src:t.img}),i.a.createElement(ke,null,i.a.createElement(Ae,null,t.school),i.a.createElement(Ce,null,t.degree),i.a.createElement(ze,null,t.date))),i.a.createElement(Se,null,i.a.createElement("b",null,"Grade: "),t.grade),i.a.createElement(be,null,i.a.createElement(we,null,t.desc)))};const Be=s.b.div`
    display: flex;EducationCard
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Fe=s.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,Me=s.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,De=s.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Ie=s.b.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;var Pe=()=>i.a.createElement(Be,{id:"education"},i.a.createElement(Fe,null,i.a.createElement(Me,null,"Education"),i.a.createElement(De,null,"My education has been a journey of self-discovery and growth. My educational details are as follows."),i.a.createElement(Ie,null,i.a.createElement(ce.a,null,I.map((e,t)=>i.a.createElement(me.a,null,i.a.createElement(ue.a,{sx:{py:"12px",px:2}},i.a.createElement(je,{education:e})),i.a.createElement(xe.a,null,i.a.createElement(he.a,{variant:"outlined",color:"secondary"}),t!==D.length&&i.a.createElement(ge.a,{style:{background:"#854CE6"}}))))))));const Je=s.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,Le=s.b.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Te=s.b.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,Ne=s.b.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Je}{
        display: flex;
    }

    &:hover ${Te}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`,Oe=s.b.div`
    width: 100%;
    display: flex;
    gap: 12px
`,Ue=s.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,He=s.b.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Ze=s.b.div`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,Re=s.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Ye=s.b.div`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,qe=s.b.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`,Ge=s.b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Ve=s.b.div`
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;var We=e=>{var t;let{experience:a}=e;return i.a.createElement(Ne,null,i.a.createElement(Oe,null,i.a.createElement(Ue,{src:a.img}),i.a.createElement(He,null,i.a.createElement(Ze,null,a.role),i.a.createElement(Re,null,a.company),i.a.createElement(Ye,null,a.date))),i.a.createElement(Le,null,(null===a||void 0===a?void 0:a.desc)&&i.a.createElement(Te,null,null===a||void 0===a?void 0:a.desc),(null===a||void 0===a?void 0:a.skills)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement(qe,null,i.a.createElement("b",null,"Skills:"),i.a.createElement(Ge,null,null===a||void 0===a?void 0:null===(t=a.skills)||void 0===t?void 0:t.map((e,t)=>i.a.createElement(Ve,null,"\u2022 ",e)))))),a.doc&&i.a.createElement("a",{href:a.doc,target:"new"},i.a.createElement(Je,{src:a.doc})))};const Ke=s.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Qe=s.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,Xe=s.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,_e=s.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,$e=s.b.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;var et=function(){return i.a.createElement(Ke,{id:"experience"},i.a.createElement(Qe,null,i.a.createElement(Xe,null,"Experience"),i.a.createElement(_e,null,"My work experience as a software engineer and working on different companies and projects."),i.a.createElement($e,null,i.a.createElement(ce.a,null,D.map((e,t)=>i.a.createElement(me.a,null,i.a.createElement(xe.a,null,i.a.createElement(he.a,{variant:"outlined",color:"secondary"}),t!==D.length-1&&i.a.createElement(ge.a,{style:{background:"#854CE6"}})),i.a.createElement(ue.a,{sx:{py:"12px",px:2}},i.a.createElement(We,{experience:e}))))))))};const tt=s.b.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`,at=s.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,nt=s.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,it=s.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,rt=s.b.div`
    display: flex;
    border: 1.5px solid ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.primary}};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,ot=s.b.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${e=>{let{active:t,theme:a}=e;return t&&`\n    background: ${a.primary+20};\n    `}}
    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primary+8}};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`,lt=s.b.div`
    width: 1.5px;
    background: ${e=>{let{theme:t}=e;return t.primary}};
`,pt=s.b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`,dt=s.b.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    color: ${e=>{let{theme:t}=e;return t.text_black}};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,st=s.b.div`
    width: 330px;
    height: 490px;
    background-color: ${e=>{let{theme:t}=e;return t.card}};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${dt} {
        display: block;
    }
`,ct=s.b.img`
    width: 100%;
    height: 180px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,mt=s.b.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,xt=s.b.span`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    background-color: ${e=>{let{theme:t}=e;return t.primary+15}};
    padding: 2px 8px;
    border-radius: 10px;
`,gt=s.b.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,ut=s.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,ht=s.b.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,ft=s.b.div`
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,bt=s.b.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,wt=s.b.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${e=>{let{theme:t}=e;return t.card}};
`;var yt=e=>{var t,a;let{project:n,setOpenModal:r,index:o}=e;return i.a.createElement(st,{onClick:()=>r({state:!0,project:n}),key:o},i.a.createElement(ct,{src:n.image}),i.a.createElement(mt,null,null===(t=n.tags)||void 0===t?void 0:t.map((e,t)=>i.a.createElement(xt,null,e))),i.a.createElement(gt,null,i.a.createElement(ut,null,n.title),i.a.createElement(ht,null,n.date),i.a.createElement(ft,null,n.description)),i.a.createElement(bt,null,null===(a=n.member)||void 0===a?void 0:a.map(e=>i.a.createElement(wt,{src:e.img}))))};var Et=function(e){let{openModal:t,setOpenModal:a}=e;const[r,o]=Object(n.useState)("all");return i.a.createElement(tt,{id:"projects"},i.a.createElement(at,null,i.a.createElement(nt,null,"Projects"),i.a.createElement(it,null,"I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."),i.a.createElement(rt,null,"all"===r?i.a.createElement(ot,{active:!0,value:"all",onClick:()=>o("all")},"All"):i.a.createElement(ot,{value:"all",onClick:()=>o("all")},"All"),i.a.createElement(lt,null),"frontend web"===r?i.a.createElement(ot,{active:!0,value:"frontend web",onClick:()=>o("frontend web")},"FRONTEND WEB"):i.a.createElement(ot,{value:"frontend web",onClick:()=>o("frontend web")},"FRONTEND WEB"),i.a.createElement(lt,null),"backend web"===r?i.a.createElement(ot,{active:!0,value:"backend web",onClick:()=>o("backend web")},"BACKEND WEB"):i.a.createElement(ot,{value:"backend web",onClick:()=>o("backend web")},"BACKEND WEB"),i.a.createElement(lt,null),"full stack"===r?i.a.createElement(ot,{active:!0,value:"full stack",onClick:()=>o("full stack")},"FULL STACK"):i.a.createElement(ot,{value:"full stack",onClick:()=>o("full stack")},"FULL STACK"),i.a.createElement(lt,null)),i.a.createElement(pt,null,"all"===r&&P.map((e,n)=>i.a.createElement(yt,{project:e,openModal:t,setOpenModal:a,index:n})),P.filter(e=>e.category===r).map((e,n)=>i.a.createElement(yt,{project:e,openModal:t,setOpenModal:a,index:n})))))},vt=a(90),kt=a(171);const At=s.b.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`,Ct=s.b.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`,zt=s.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,St=s.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,jt=s.b.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.card}};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,Bt=s.b.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,Ft=s.b.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Mt=s.b.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Dt=s.b.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-size: 18px;
  font-weight: 600;
`;var It=()=>{const[e,t]=i.a.useState(!1),a=Object(n.useRef)();return i.a.createElement(At,null,i.a.createElement(Ct,null,i.a.createElement(zt,null,"Contact"),i.a.createElement(St,null,"Feel free to reach out to me for any questions or opportunities!"),i.a.createElement(jt,{ref:a,onSubmit:e=>{e.preventDefault(),vt.a.sendForm("service_ehsop7a","template_74szzvy",a.current,"qMVBYKCUNZC5ipcKc").then(e=>{t(!0),a.current.reset()},e=>{console.log(e.text)})}},i.a.createElement(Bt,null,"Email Me ",i.a.createElement("span",{role:"img","aria-label":"rocket"},"\ud83d\ude80")),i.a.createElement(Ft,{placeholder:"Your Email",name:"from_email"}),i.a.createElement(Ft,{placeholder:"Your Name",name:"from_name"}),i.a.createElement(Ft,{placeholder:"Subject",name:"subject"}),i.a.createElement(Mt,{placeholder:"Message",rows:"4",name:"message"}),i.a.createElement(Dt,{type:"submit",value:"Send"})),i.a.createElement(kt.a,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:"Email sent successfully!",severity:"success"})))},Pt=a(168),Jt=a(169),Lt=a(170),Tt=a(172);const Nt=s.b.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`,Ot=s.b.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${e=>{let{theme:t}=e;return t.card}};
color: ${e=>{let{theme:t}=e;return t.text_primary}};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`,Ut=s.b.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`,Ht=s.b.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Zt=s.b.div`
    font-size: 16px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,Rt=s.b.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`,Yt=s.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`,qt=s.b.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`,Gt=s.b.div`
    font-size: 14px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary+20}};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,Vt=s.b.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`,Wt=s.b.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,Kt=s.b.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`,Qt=s.b.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`,Xt=s.b.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`,_t=s.b.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    ${e=>{let{dull:t,theme:a}=e;return t&&`\n        background-color: ${a.bgLight};\n        color: ${a.text_secondary};\n        &:hover {\n            background-color: ${e=>{let{theme:t}=e;return t.bg+99}};\n        }\n    `}}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.primary+99}};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;var $t=e=>{let{openModal:t,setOpenModal:a}=e;const n=null===t||void 0===t?void 0:t.project;return i.a.createElement(Tt.a,{open:!0,onClose:()=>a({state:!1,project:null})},i.a.createElement(Nt,null,i.a.createElement(Ot,null,i.a.createElement(Pt.a,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>a({state:!1,project:null})}),i.a.createElement(Rt,{src:null===n||void 0===n?void 0:n.image}),i.a.createElement(Ut,null,null===n||void 0===n?void 0:n.title),i.a.createElement(Ht,null,n.date),i.a.createElement(qt,null,null===n||void 0===n?void 0:n.tags.map(e=>i.a.createElement(Gt,null,e))),i.a.createElement(Zt,null,null===n||void 0===n?void 0:n.description),n.member&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Yt,null,"Members"),i.a.createElement(Vt,null,null===n||void 0===n?void 0:n.member.map(e=>i.a.createElement(Wt,null,i.a.createElement(Kt,{src:e.img}),i.a.createElement(Qt,null,e.name),i.a.createElement("a",{href:e.github,target:"new",style:{textDecoration:"none",color:"inherit"}},i.a.createElement(Jt.a,null)),i.a.createElement("a",{href:e.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"}},i.a.createElement(Lt.a,null)))))),i.a.createElement(Xt,null,i.a.createElement(_t,{dull:!0,href:null===n||void 0===n?void 0:n.github,target:"new"},"View Code"),i.a.createElement(_t,{href:null===n||void 0===n?void 0:n.webapp,target:"new"},"View Live App")))))},ea=a(86),ta=a.n(ea),aa=a(87),na=a.n(aa),ia=a(88),ra=a.n(ia),oa=a(89),la=a.n(oa);const pa=s.b.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`,da=s.b.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,sa=s.b.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
`,ca=s.b.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,ma=s.b.a`
color: ${e=>{let{theme:t}=e;return t.text_primary}};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,xa=s.b.div`
  display: flex;
  margin-top: 1rem;
`,ga=s.b.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,ua=s.b.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.soft2}};
  text-align: center;
`;var ha=function(){return i.a.createElement(pa,null,i.a.createElement(da,null,i.a.createElement(sa,null,"Kunal Risaanva"),i.a.createElement(ca,null,i.a.createElement(ma,{href:"#about"},"About"),i.a.createElement(ma,{href:"#skills"},"Skills"),i.a.createElement(ma,{href:"#experience"},"Experience"),i.a.createElement(ma,{href:"#projects"},"Projects"),i.a.createElement(ma,{href:"#education"},"Education")),i.a.createElement(xa,null,i.a.createElement(ga,{href:F.facebook,target:"display"},i.a.createElement(ta.a,null)),i.a.createElement(ga,{href:F.twitter,target:"display"},i.a.createElement(na.a,null)),i.a.createElement(ga,{href:F.linkedin,target:"display"},i.a.createElement(ra.a,null)),i.a.createElement(ga,{href:F.insta,target:"display"},i.a.createElement(la.a,null))),i.a.createElement(ua,null,"\xa9 2023 kunal risaanva. All rights reserved.")))};const fa=s.b.div`
  background-color: ${e=>{let{theme:t}=e;return t.bg}};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`,ba=s.b.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;var wa=function(){const[e,t]=Object(n.useState)(!0),[a,r]=Object(n.useState)({state:!1,project:null});return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{theme:e?l:p},i.a.createElement(d.a,null,i.a.createElement(J,null),i.a.createElement(fa,null,i.a.createElement($,null),i.a.createElement(ba,null,i.a.createElement(se,null),i.a.createElement(et,null)),i.a.createElement(Et,{openModal:a,setOpenModal:r}),i.a.createElement(ba,null,i.a.createElement(Pe,null),i.a.createElement(It,null)),i.a.createElement(ha,null),a.state&&i.a.createElement($t,{openModal:a,setOpenModal:r})))))};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(wa,null)))},77:function(e,t,a){e.exports=a.p+"static/media/Screenshot 2026-03-11 at 2.11.41\u202fPM.8c267229.png"},78:function(e,t,a){e.exports=a.p+"static/media/Screenshot 2026-03-11 at 2.23.02\u202fPM.c9e8f484.png"},79:function(e,t,a){e.exports=a.p+"static/media/Screenshot 2026-03-11 at 2.15.38\u202fPM.a7476b8a.png"},82:function(e,t,a){e.exports=a.p+"static/media/WhatsApp Image 2024-11-11 at 10.44.39.6e84be91.jpeg"}},[[104,1,2]]]);
//# sourceMappingURL=main.a643a1e0.chunk.js.map