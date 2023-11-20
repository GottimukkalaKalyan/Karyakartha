import {  PiSuitcaseSimpleThin } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCall, MdOutlineMail, MdOutlineCancel } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { useState } from "react";

import './account.css'
import Header from "../header";
import FooterComponent from "../footer/footer";

const Account =()=>{

    const [isEditing, setEditing] = useState(false)

    const [editedDetails, setEditedDetails] = useState({
        name: "Kalyan Gadela",
        id:"19H115632",
        experience:"Fresher",
        mobileNo:" 7893144096",
        email:"mynameis.kalyan@gmail.com",
        educationDetails:"Bachelor of Technology(B.Tech/B.E) Random Engineering college, Gudur",
        yop:"2023",
        skills:"Communication Skills Team Collaboration, Presentaion Skills, Positive Thinking, Self Motivated, Team Player",
    })

    const [isPersonalDetailsEditing, setIsPersonalDetailsEditing] = useState(false)

    const [editedPersonalDetails, setEditedPersonalDetails] = useState({
        gender:"Male",
        dob:"25-12-2005",
        nationality:"Indian",
    })

    const handlePersonalDetailsEditClick = ()=>{
        setIsPersonalDetailsEditing(true)
    }

    const handlePersonalDetailsSaveClcik=()=>{
        setIsPersonalDetailsEditing(false)
    }

    const handlePersonalDetailsCancelClick=()=>{
        setIsPersonalDetailsEditing(false)
        setEditedPersonalDetails({
            gender:"Male",
            dob:"25-12-2005",
            nationality:"Indian",
        })

    }

    const handleDetailsChange=(field, value)=>{
        setEditedPersonalDetails(
            {
                ...editedPersonalDetails,
                [field]:value
            }
        )
    }

    const handleEditClick=()=>{
        setEditing(true)
        console.log('edit is clicked')
    }

    const handleSaveClick=()=>{
        setEditing(false)
        console.log('save clicked')
    }

    const handleCancelClick=()=>{
        console.log('cancel clicked')
        setEditing(false)

        setEditedDetails({
            name: "Kalyan Gadela",
            id:"19H115632",
            experience:"Fresher",
            email:"mynameis.kalyan@gmail.com",
            educationDetails:"Bachelor of Technology(B.Tech/B.E) Random Engineering college, Gudur",
            yop:"2023",
            skills:"Communication Skills Team Collaboration, Presentaion Skills, Positive Thinking, Self Motivated, Team Player",
        })

    }
    const handelChange=(field, value)=>{
        setEditedDetails({
            ...editedDetails,
            [field]:value,
        })
    } 

 return(
    <>
    <Header />
    <div className = 'bg-container'>
        <h1 className='heading'>Account</h1>
        <div className='details-container'>
            <div className="profile-edit-container">
                <FaUser className="profile-icon" />
                {isEditing? 
                (<div>
                <button onClick={handleSaveClick} className="save-button">
                    <TiTickOutline onClick={handleSaveClick} className="save-button" />
                </button>
                <button className="cancel-button" onClick={handleCancelClick} >
                    <MdOutlineCancel className="cancel-button" />
                </button>
                </div>):
                <button className="edit-button" onClick={handleEditClick} >
                    <BiEdit className="edit-icon"  />
                </button>
                 }
                
            </div>
            <div className="name-resume-container">
            <div className='conts name-details-container'>
                <div className='name-id-container'>
                    {isEditing ? 
                    (<input 
                     className="editable-name"
                     onChange={(e)=>handelChange('name', e.target.value)}
                     value={editedDetails.name}
                     type="text"
                     />):<h2 className='name'>{editedDetails.name}</h2>
                    }
                    {isEditing ? 
                    (<div className="editable-container">
                    <p>ID:</p>
                    <input 
                        className="editable-id"
                        onChange={(e)=>handelChange('id', e.target.value)}
                        value={editedDetails.id}
                        type="text"
                        />
                    </div>
                        ):<p className='id'>ID:{editedDetails.id}</p>
                    }     
                </div>

                {isEditing?
                (<div className="editable-container">
                    <PiSuitcaseSimpleThin className="experience-icon" />
                    <input 
                    className="editable-experience" 
                    onChange={(e)=>handelChange('experience', e.target.value)}
                    value={editedDetails.experience}
                    type="text"
                    />
                </div>):
                <div className='d-container'>
                    <PiSuitcaseSimpleThin className="experience-icon" />
                    <p className="experience">{editedDetails.experience}</p>
                </div>
                }

            {isEditing?
                (<div className="editable-container">
                    <MdOutlineCall className="call-icon" />
                    <p className="+91">+91</p>
                    <input 
                    className="editable-experience" 
                    onChange={(e)=>handelChange('mobileNo', e.target.value)}
                    value={editedDetails.mobileNo}
                    type="text"
                    />
                </div>):
                <div className='d-container'>
                    <MdOutlineCall className="call-icon" />
                    <p className="mobile-no">+91 {editedDetails.mobileNo}</p>
                </div>
                }

            {isEditing?
                (<div className="editable-container">
                    <MdOutlineMail className="email-icon" />
                    <input 
                    className="editable-email" 
                    onChange={(e)=>handelChange('email', e.target.value)}
                    value={editedDetails.email}
                    type="text"
                    />
                </div>):
                <div className='d-container'>
                    <MdOutlineMail className="email-icon" />
                    <p className="mobile-no">{editedDetails.email}</p>
                </div>
                }
                <div className="validity-container">
                    <h2 className="your-validity">Your Validity</h2>
                    <div className="validity-input-container">
                        <div className="validity-box"></div>
                    <input type="text" className="validity-input" />
                    </div>
                    <p className="time-left">10 Days left</p>
                </div>
                <button className="subscribe-button">
                    Subscribe
                    <HiOutlineBell className="bell-icon" />
                </button>
                <p className="subscribe-des">Subscribe at just <span className='rupees'><FaIndianRupeeSign className="rupees-icon" />9</span> to get all at once</p>
            </div>
            <div className="conts v-line"></div>
            <div className="conts resume-details-container">
            <div className="container">
                <h5 className="h resume">Resume</h5>
                <div className="resume-update-btn-container">
                <input type="file" className="file-input"  />
                <button className="update-button">
                    Update
                </button>
                </div>
                <div className="download-delete-btn-container">
                    <button className="download-button">
                        Download
                    </button>
                    <button className="delete-button">
                        Delete
                    </button>
                </div>
            </div>
            <div className="container">
                <h5 className="h education-details-heading">Education Details</h5>
                {isEditing?
                (<div className="education-editable-container">
                    <LiaGraduationCapSolid className="editable-graduate-icon" />
                    <textarea 
                    className="editable-education-details"
                    rows={3}
                    cols={30} 
                    onChange={(e)=>handelChange('educationDetails', e.target.value)}
                    value={editedDetails.educationDetails}
                    />
                </div>):
                <div className="education-icon-details-container">
                    <LiaGraduationCapSolid className="graduate-icon" />
                    <div className="yop-details-container">
                        <p className="p graduation-des"> {editedDetails.educationDetails} </p>
                    </div>
                </div>
                }

               {isEditing?
                (<div className="editable-container">
                    <input 
                    className="editable-yop" 
                    onChange={(e)=>handelChange('yop', e.target.value)}
                    value={editedDetails.yop}
                    type="text"
                    />
                </div>):
                <p className="yop">{editedDetails.yop}</p>
                }                
            </div>

            <div className="container">
                <h5 className="h skills-heading">Skills</h5>
                {isEditing?
                (<div className="education-editable-container">
                    <textarea 
                    className="editable-education-details"
                    rows={3}
                    cols={40} 
                    onChange={(e)=>handelChange('skills', e.target.value)}
                    value={editedDetails.skills}
                    />
                </div>):<p className="p skills-des">Communication Skills Team Collaboration, Presentaion Skills, Positive Thinking, Self Motivated, Team Player</p>
                }
            </div>
            <div className="container">
                <div className="personal-details-heading-edit-container">
                <h5 className="h personal-details-heading">Personal Details</h5>
                {isPersonalDetailsEditing? 
                (<>
                <div>
                <button onClick={handlePersonalDetailsSaveClcik} className="personal-details-save-button">
                    <TiTickOutline className="personal-details-save-icon" />
                </button>
                <button className="personal-details-cancel-button" onClick={handlePersonalDetailsCancelClick} >
                    <MdOutlineCancel className="personal-details-cancel-icon" />
                </button>
                </div>
                </>):
                <button className="personal-details-edit-button" onClick={handlePersonalDetailsEditClick}>
                    <BiEdit className="personal-details-edit-icon" />
                </button>
                 }
                </div>
                <div className="details">
                <div className="personal-container">
                    <p className="p gender">Gender</p>
                    {isPersonalDetailsEditing ? 
                    (<input className="editable-p" value={editedPersonalDetails.gender} onChange={(e)=> handleDetailsChange('gender', e.target.value)} />):<p className="p m-of-f">{editedPersonalDetails.gender}</p>
                    }
                    
                </div>
                <div className="personal-container">
                <p className="p dob">DOB</p>
                {isPersonalDetailsEditing ? 
                    (<input className="editable-p" value={editedPersonalDetails.dob} onChange={(e)=> handleDetailsChange('dob', e.target.value)} />):<p className="p m-of-f">{editedPersonalDetails.dob}</p>
                    }
                </div>
                <div className="personal-container">
                    <p className="p nationality">Nationality</p>
                    {isPersonalDetailsEditing ? 
                    (<input className="editable-p" value={editedPersonalDetails.nationality} onChange={(e)=> handleDetailsChange('nationality', e.target.value)} />):<p className="p m-of-f">{editedPersonalDetails.nationality}</p>
                    }
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <FooterComponent />
    </>
    )
}

export default Account