import { Component } from "react";

import "./fulltime.css"
import CreateJobCard from "../jobItem";
import Header from "../header";
import FooterComponent from "../footer/footer";

const DummyData = [
   {
      id:1,
      companyName:"Google",
      companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   },
   {
      id:1,
      companyName:"NetFlix",
      companyLogo:"https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   },
   {
      id:1,
      companyName:"Swiggy",
      companyLogo:"https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   },
   {
      id:1,
      companyName:"Google",
      companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   },
   {
      id:1,
      companyName:"Google",
      companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   },
   {
      id:1,
      companyName:"FaceBook",
      companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   }
   ,{
      id:1,
      companyName:"Google",
      companyLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      ctc:"12",
      description:"We are looking for a young trained designer to help us to create stunning websites and app",
      role:"Junior UI/UX Designer",
      skills:"HTML,CSS,JAVA,C++",
      dateOfPosted:"2023-11-23"
   }
   
]

class FulltimeJobs extends Component{
   render(){
      const Data = DummyData[0]
      return(
         <>
            <Header />
            <div className="fulltime-job-main-container">
               {/* <div className="all-jobs-container"> */}
                  <div className="side-bar">
                     <ul className="jobs-ul-container"> 
                        {DummyData.map(eachOne => (
                           <CreateJobCard jobDetails={eachOne} />
                        ))}
                     </ul>
                  </div>
                  <div className="job-detail-view">
                        <div className="top-bar">
                           <img src={Data.companyLogo} alt="company-logo"  className="company-logo-image"/>
                           <div className="name-and-role-container">
                              <p className="company-name-paragraph"><b>{Data.role}</b></p>
                              <p><b>{Data.companyName}</b></p>
                           </div>
                           <button type="button" className="btn btn-primary">Apply Now</button>
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                           </svg>
                        </div>
                        <hr />
                        <p className="mb-2"><b>Description</b></p>
                        <p className="description-para">We are seeking a talented UI/UX Designer to join our creative team
                           and contribute to the user experience and user interface design of
                           our digital products. The ideal candidate should have a strong blend
                           of creative design skills, technical proficiency, and a deep
                           understanding of user-centered design principles. As a UI/UX
                           Designer, you will play a critical role in shaping the overall look, feel,
                           and functionality of our digital products
                        </p>
                        <p className="mb-2"><b>Roles & responsibilities</b></p>
                        <ul className="">
                           <li>Conduct user research to understand user needs, behaviors, and preferences</li>
                           <li>Create user personas and user journey maps to inform the design procesR</li>
                           <li>Develop and maintain a clear information architecture for the digital products </li>
                           <li>Define site maps, navigation structures, and content organization</li>
                           <li>Create wireframes and interactive prototypes to visualize and test design concepts </li>
                           <li>Iterate on designs based on user feedback and stakeholder input</li>
                           <li>Design aesthetically pleasing and user-friendly user interfaces </li>
                           <li>Develop high-fidelity mockups and visual design assets </li>
                           <li>Ensure consistency in design elements, branding, and visual identity </li>
                           <li>Plan and conduct usability testing sessions to gather feedback and insights from users </li>
                           <li>Analyze usability test results and make design improvements accordingly </li>
                           <li>Work closely with cross-functional teams, including product managers, developers, and other designers </li>
                           <li>Engage in effective communication and collaboration to ensure design goals are met </li>
                           <li>Stay up-to-date with industry trends, best practices, and emerging design technologies.</li>
                        </ul>
                        <p className="mb-2"><b>Qualifications</b></p>
                        <ul className="">
                           <li>Bachelor s degree in Graphic Design, HCI, Interaction Design, or a related field (or equivalent work experience) </li>
                           <li>Proven experience in UI/UX design, including a strong portfolio showcasing your work </li>
                           <li>Proficiency in design tools such as Adobe Creative Suite, Sketch, Figma, or similar </li>
                           <li>Strong understanding of user-centered design principles and usability principles </li>
                           <li>Create wireframes and interactive prototypes to visualize and test design concepts </li>
                           <li>Knowledge of web and mobile design standards, responsive design, and accessibility guidelines </li>
                           <li>Excellent problem-solving and communication skills</li>
                           <li>Proficiency in design tools such as Adobe Creative Suite, Sketch, Figma, or similar.</li>
                        </ul>
                        <p className="mb-2"><b>Salary</b></p>
                        <p className="lpa">4 - 5 LPA</p>

                        <p className="mb-2"><b>How to apply</b></p>
                        <div className="top-bar">
                           <p><b>Click to</b></p>
                           <button type="button" className="btn btn-primary">Apply Now</button>
                           <button type="button" className="btn btn-secondary">Save</button>
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                           </svg>
                        </div>
                  </div>
               {/* </div> */}
            </div>
            <FooterComponent />
         </>
      )
   }
}

export default FulltimeJobs