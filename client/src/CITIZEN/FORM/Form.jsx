import React, { useRef, useState } from 'react';
import "./Form.css";
import { NavLink } from 'react-router-dom';
import { New } from '../../service/api';
// import { New } from '../../component/service/api';
// import { New } from '../../component/service/api1';

const Form = () =>{
  const pic = '/CITIZENIMAGE/papiya.jpg'
  const { uploadPhoto, setUploadPhoto } = useState()
  // console.log((uploadPhoto))

  const defaultvalue = {
    state:'',
    district:'',
    assembly:'',
    firstName:'',
    lastName:'',
    gender:'',
    relativeFirstName:'',
    relativeSecondName:'',
    relativeRelation:'',
    mobile:'',
    email:'',
    aadhar:'',
    dob:'',
    dobProofOption:'',
    SAL:'',
    dobProof:'',
    house:'',
    TV:'',
    postOffice:'',
    PinCode:'',
    addressProofOption:'',
    addressProof:'',
    photo:'',
    familyMemberName:'',
    familyMemberRelation:'',
    familyMemberEpic:'',
    applicationForm:'',
    applicationFromDist:'',
    applicationFormState:'',
    resideForm:'',
    applicationPlace:'',
    today:'',
    captcha:'',
    rajya:'',
    jila:'',
  }

 const [user,setUser] = useState(defaultvalue);

 function onvaluechange(e){
  setUser({...user,[e.target.name]:e.target.value});
  console.log(user);
}

 const inputRef = useRef(null);
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
const inputRef4 = useRef(null);
const inputRef5 = useRef(null);
const inputRef8 = useRef(null);
const inputRef9 = useRef(null);
const inputRef10 = useRef(null);
const inputRef11 = useRef(null);
const inputRef12 = useRef(null);
const inputRef13 = useRef(null);
const inputRef14 = useRef(null);
const inputRef15 = useRef(null);
const inputRef16 = useRef(null);
const inputRef17 = useRef(null);
const inputRef18 = useRef(null);
const inputRef19 = useRef(null);
const inputRef20 = useRef(null);
const inputRef21 = useRef(null);
const inputRef22 = useRef(null);
const inputRef23 = useRef(null);
const inputRef24 = useRef(null);
const inputRef25 = useRef(null);
const inputRef26 = useRef(null);
const inputRef27 = useRef(null);
const inputRef28 = useRef(null);
const inputRef29 = useRef(null);
const inputRef30 = useRef(null);
const inputRef31 = useRef(null);
const inputRef32 = useRef(null);
const inputRef33 = useRef(null);
const inputRef34 = useRef(null);
const inputRef35 = useRef(null);
const inputRef36 = useRef(null);


const addNewDetails = async(e) =>{
  
  // await New(user);
  e.preventDefault();
  console.log(user);
  const {state,district,assembly,firstName,lastName,gender,relativeFirstName,relativeSecondName,relativeRelation,mobile,email,aadhar,dob,dobProofOption,SAL,dobProof,house,TV,postOffice,PinCode,addressProofOption,addressProof,photo,familyMemberName,familyMemberRelation,familyMemberEpic,applicationForm,applicationFromDist,applicationFormState,resideForm,applicationPlace,today,captcha,jila,rajya} = user

  if(!state){
    alert("Enter state !");
    inputRef.current.focus();
  }else if(!district){
    alert("Enter district !");
    inputRef1.current.focus();
  }else if(!assembly){
    alert("Enter assembly !");
    inputRef2.current.focus();
  }else if(!firstName){
    alert("Enter firstname!");
    inputRef3.current.focus();
  }else if(!lastName){
    alert("Enter lastname !");
    inputRef4.current.focus();
  }else if(!gender){
    alert("Enter gender !");
    inputRef5.current.focus();
  }else if(!relativeFirstName){
    alert("Enter relative name !");
    inputRef8.current.focus();
  }else if(!relativeSecondName){
    alert("Enter relative second name !");
    inputRef9.current.focus();
  }else if(!relativeRelation){
    alert("Enter relation !");
    inputRef10.current.focus();
  }else if(!mobile){
    alert("Enter mobile !");
    inputRef11.current.focus();
  }else if(!email){
    alert("Enter mail !");
    inputRef12.current.focus();
  // }else if(!aadhar){
  //   alert("Enter aadhar !");
  //   inputRef13.current.focus();
  }else if(!dob){
    alert("Enter dob !");
    inputRef14.current.focus();
  }else if(!dobProofOption){
    alert("Give Proof !");
    inputRef15.current.focus();
  }else if(!SAL){
    alert("Enter SAL !");
    inputRef18.current.focus();
  }else if(!dobProof){
    alert("give proof !");
    inputRef16.current.focus();
  }else if(!house){
    alert("Enter house !");
    inputRef17.current.focus();
  }else if(!TV){
    alert("Enter TV !");
    inputRef19.current.focus();
  }else if(!postOffice){
    alert("Enter postoffice !");
    inputRef20.current.focus();
  }else if(!PinCode){
    alert("Enter pincode !");
    inputRef21.current.focus();
  }else if(!addressProofOption){
    alert("Enter proof !");
    inputRef22.current.focus();
  }else if(!addressProof){
    alert("Enter address proof !");
    inputRef23.current.focus();
  }else if(!photo){
    alert("upload photo !");
    inputRef24.current.focus();
  }else if(!familyMemberName){
    alert("Enter family member name !");
    inputRef25.current.focus();
  }else if(!familyMemberRelation){
    alert("Enter member relation !");
    inputRef26.current.focus();
  }else if(!familyMemberName){
    alert("Enter member name !");
    inputRef25.current.focus();
  }else if(!familyMemberEpic){
    alert("insert pic !");
    inputRef27.current.focus();
  }else if(!applicationForm){
    alert("Enter form !");
    inputRef28.current.focus();
  }else if(!applicationFormState){
    alert("Enter app state !");
    inputRef30.current.focus();
  }else if(!applicationFromDist){
    alert("Enter app district !");
    inputRef29.current.focus();
  }else if(!resideForm){
    alert("Enter reside form !");
    inputRef31.current.focus();
  }else if(!applicationPlace){
    alert("Enter app place !");
    inputRef32.current.focus();
  }else if(!today){
    alert("Enter today !");
    inputRef33.current.focus();
  }else if(!captcha){
    alert("Enter captcha !");
    inputRef34.current.focus();
  }else if(!jila){
    alert("enter jila");
    inputRef35.current.focus();
  }else if(!rajya){
    alert("enter rajya");
    inputRef36.current.focus();
  }else{
    const res = await New(user);
    // const res = await New(user);
    if(res.status === 201){
      alert("New Voter Successfully Added");
      window.location.reload();
    }else{
      alert("something went wrong Try Again");
    }
  }
}

  return (
    <>
      <div className="container-fluid form px-4">
        <div className="row">
          <div className="col-12 text-center p-2">
            <h4>ELECTION COMMISION OF INDIA</h4>
            <h5>Registration Form for New Voter</h5>
            <hr></hr>
          </div>
        </div>
        <form>
          <div className='row bg-secondar' >
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td className='bg-dange'>State<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <select name='state' ref={inputRef} className='form-control' onChange={(e) => onvaluechange(e)}>
                      <option hidden value=''>Select Your State</option>
                      <option value="Assam">Assam</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal" >West Bengal</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>District<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <select name="district" ref={inputRef1} className="form-control" onChange={(e) => onvaluechange(e)}>
                      <option hidden value=''>Select Your District</option>
                      <option value="Murshidabad" >Murshidabad</option>
                      <option value="Ananthapur" >Ananthapur</option>
                      <option value="Chittoor" >Chittoor</option>
                      <option value="Nicobar" >Nicobar</option>
                      <option value="Sheikhpura" >Sheikhpura </option>
                      <option value="Uttar_Dinajpur" >Uttar_Dinajpur</option>
                      <option value="South_24_Parganas" >South_24_Parganas </option>
                      <option value="Puruliya" >Puruliya </option>
                      <option value="Nadia" >Nadia</option>
                      <option value="Malda" >Malda </option>
                      <option value="Kolkata" >Kolkata</option>
                      <option value="Howrah" >Howrah </option>
                      <option value="Cooch_Behar" >Cooch_Behar</option>
                      <option value="Udham_Singh_Nagar" >Udham_Singh_Nagar</option>
                      <option value="Alipurduar" >Alipurduar</option>
                      <option value="Bankura" >Bankura </option>
                      <option value="Barddhaman" >Barddhaman</option>
                      <option value="Darjeeling" >Darjeeling </option>
                      <option value="Hooghly" >Hooghly </option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>Assembly Constituency<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <select name='assembly' ref={inputRef2} className="form-control" onChange={(e) => onvaluechange(e)}>
                      <option hidden value=''>Select Your Assembly Constituency</option>
                      <option value="aa" >Farakka</option>
                      <option value="bb" >Samserganj</option>
                      <option value="cc" >Suti</option>
                      <option value="dd" >Jangipur</option>
                      <option value="ee" >Raghunathganj</option>
                      <option value="ff" >Sagardighi</option>
                      <option value="gg" >Lalgola</option>
                      <option value="ii" >Bhagabangola</option>
                      <option value="jj" >Raninagar</option>
                      <option value="ll" >Murshidabad</option>
                      <option value="mm" >Nabagram</option>
                      <option value="nn" >Khargram</option>
                      <option value="oo" >Burwan</option>
                      <option value="pp" >Kandi</option>
                      <option value="qq" >Bharatpur</option>
                      <option value="rr" >Rejinagar</option>
                      <option value="ss" >Beldanga</option>
                      <option value="tt" >Baharampur</option>
                      <option value="uu" >Hariharpara</option>
                      <option value="vv" >Naoda</option>
                      <option value="vv" >Domkal</option>
                      <option value="vv" >Jalangi</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className='bg-warnin mx-2 mt-4 form-title'>
                <label>Personal Details</label>
              </div>
            </div>
          </div>
          <div className='row bg-secondar' >
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td className='bg-dange '>First Name<span className='text-danger'>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='firstName' ref={inputRef3} className='form-control' placeholder='Enter your First Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Surname<span></span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='lastName' ref={inputRef4} className='form-control' placeholder='Enter Your Last Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Gender<span className='text-danger'>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" className='m-0' name='gender' ref={inputRef5} value='Male' onChange={(e) => onvaluechange(e)}/>Male
                    <input type="radio" className='m-2' name='gender' ref={inputRef5} value='Female' onChange={(e) => onvaluechange(e)}/>Female
                    <input type="radio" className='m-2' name='gender' ref={inputRef5} value='Other' onChange={(e) => onvaluechange(e)}/>Other
                    {/* <tr className='bg-danger'>
                      <td className='p-0 m-0 bg-warning'>
                        <input type="radio" name='gender' value='Male' />Male
                      </td>
                      <td>
                        <input type="radio" name='gender' value='Female' />Female
                      </td>
                      <td className='bg-warning'>
                        <input type="radio" name='gender' value='Other' />Other
                      </td>
                    </tr> */}



                    {/* <input type='text' className='form-control' placeholder='Enter Your Last Name'></input> */}
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Name of Relative<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='relativeFirstName' ref={inputRef8} className='form-control' placeholder='Enter Your Father Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>

          </div>
          <div className='row bg-secondar' >
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Surname of Relative<span>(if any)</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text'name='relativeSecondName' ref={inputRef9} className='form-control' placeholder='Enter Your Mother Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td className='bg-dange '>Relation Type<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <select name="relativeRelation" ref={inputRef10} className='form-control' onChange={(e) => onvaluechange(e)}>

                      <option hidden value=''>Select Relation Type</option>
                      <option value='Father'>Father</option>
                      <option value='Mother'>Mother</option>
                      <option value='Wife'>Wife</option>
                      <option value='Legal Guardian'>Legal Guardian</option>
                      <option value='Guru'>Guru</option>
                    </select>
                    {/* <input type='text' className='form-control' placeholder='Enter your First Name'></input> */}
                  </td>
                </tr>
              </table>
            </div>

            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Mobile Number<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='number' name="mobile" ref={inputRef11} className='form-control' placeholder='Enter Your Mobile Number' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Email Id<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='email' ref={inputRef12}className='form-control' placeholder='Enter Your Email Id' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>

          </div>

          <div className="row">
            <div className='col-12 col-lg-3'>
              {/* <table className='table'>
                <tr>
                  <td>Aadhaar Number<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input disabled type='number' name='aadhaar' ref={inputRef13} className='form-control' placeholder='Enter Your Aadhaar Number' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className=' bg-warnin mx-2 mt-4 form-title'>
                <label>Date of Birth Details</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>Date of Birth<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='date' name='dob' ref={inputRef14} className='form-control' placeholder='Enter Your Father Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>Select Date of Birth Proof Document<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <select name='dobProofOption' ref={inputRef15} className='form-control' onChange={(e) => onvaluechange(e)}>
                      <option hidden value=''>Choose Any Document Option</option>
                      <option value='Birth Certificate'>Birth Certificate</option>
                      <option value='Admit Card'>Admit Card</option>
                      <option value='Aadhaar Card'>Aadhaar Card</option>
                      <option value='Passport'>Passport</option>
                      <option value='Driving Licence'>Driving Licence</option>
                      <option value='Affidavit'>Affidavit</option>
                    </select>
                    {/* <input type='file' className='form-control' placeholder='Enter Your Father Name'></input> */}
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>Upload The Relevant Document<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='file' name='dobProof' ref={inputRef16} className='form-control' placeholder='Enter Your Father Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>

          </div>
          <div className="row">
            <div className="col-12">
              <div className=' bg-warnin mx-2 mt-4 form-title'>
                <label>Permanent Address</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>House No.<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='house' ref={inputRef17} className='form-control' placeholder='Enter Your House No.' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Street/Area/Locality<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='SAL' ref={inputRef18} className='form-control' placeholder='Enter Street/Area/Locality' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Town/Vilage<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='TV' ref={inputRef19} className='form-control' placeholder='Enter Town/Village Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>Post Office<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='postOffice' ref={inputRef20} className='form-control' placeholder='Enter Post Office Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
              {/* <table className='table'>
                <tr>
                  <td>Tehsil/Taluka/Mandal<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='text' className='form-control' placeholder='Enter Tehsil/Taluka/Mandal'></input>
                  </td>
                </tr>
              </table> */}
            </div>
          </div>
          <div className="row">
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>Pin Code<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='number' name='pinCode' ref={inputRef21} className='form-control' placeholder='Enter Pin Code Number' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>District<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input  type='text' name='jila' ref={inputRef35} className='form-control' placeholder='Enter District Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>State<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input  type='text' name='rajya' ref={inputRef36} className='form-control' placeholder='Enter State Name' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row">
            <div className='col-12 col-lg-6'>
              <table className='table'>
                <tr>
                  <td>Select Address Proof Document<span>*</span></td>
                </tr>
                <tr>
                  <td>
                    <select name='addressProofOption' ref={inputRef22} className='form-control' onChange={(e) => onvaluechange(e)}>
                      <option value='' hidden >Choose Any Document Option</option>
                      <option value='Aadhaar Card'>Aadhaar Card</option>
                      <option value='Passport'>Passport</option>
                      <option value='Driving Licence'>Driving Licence</option>
                      <option value='Birth Certificate'>Birth Certificate</option>
                      <option value='Panchayat Certificate'>Panchayat certificate with passport size photo attached</option>
                      <option value='School Certificate'>School Certificate</option>
                    </select>
                    {/* <input type='text' className='form-control' placeholder='Enter Your House No.'></input> */}
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-6'>
              <table className='table'>
                <tr>
                  <td>Upload The Relevant Document</td>
                </tr>
                <tr>
                  <td>
                    <input type='file' name='addressProof' ref={inputRef23} className='form-control' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className=' bg-warnin mx-2 mt-4 form-title'>
                <label>Upload Your Photograph</label>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className='col-12 col-lg-6'>
              <table className='table'>
                <tr>
                  <td><span>Upload your photograph(unsigned passport size color photograph(4.5cm x 3.5 cm)showing frontal view of full face with white background) (Supported formats.jpg,.jpeg)</span><span className='text-danger'>*</span></td>
                </tr>
                <tr>
                  <td>
                    <input type='file' name='photo' ref={inputRef24} className='form-control' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <tr>
                  <td>
                    <div className="card ">
                      <div className='d-flex justify-content-center'>
                        <img src={pic} alt="uploaded Pic" height='120px' width='100px' />
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className=' bg-warnin mx-2 mt-4 form-title'>
                <label>The Details of My Family Member</label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 text-center">
              <i><span>
                The details of my family member already included in the electoral roll at current address with whom I currently reside are as under.
              </span></i>
            </div>
          </div>
          <div className="row">
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>Family Member</td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='familyMemberName' ref={inputRef25} className='form-control' placeholder='Name of The Family Member' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td className='bg-dange '>Relationship With Applicant</td>
                </tr>
                <tr>
                  <td>
                    <select name='familyMemberRelation' ref={inputRef26} className='form-control' onChange={(e) => onvaluechange(e)}>
                      <option hidden value=''>Select Relationship</option>
                      <option value='Father'>Father</option>
                      <option value='Mother'>Mother</option>
                      <option value='Husband'>Husband</option>
                      <option value='Wife'>Wife</option>
                      <option value='Legal Guardian'>Legal Guardian in case of Orphan</option>
                      <option value='Guru'>Guru in case of Third Gender</option>
                    </select>
                    {/* <input type='text' className='form-control' placeholder='Enter your First Name'></input> */}
                  </td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-lg-4'>
              <table className='table'>
                <tr>
                  <td>His/Her Epic Number</td>
                </tr>
                <tr>
                  <td>
                    <input type='text' name='familyMemberEpic' ref={inputRef27} className='form-control' placeholder='Enter His/Her Epic Number' onChange={(e) => onvaluechange(e)}></input>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className=' bg-warnin mx-2 mt-4 form-title'>
                <label>Declaration</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              I HEREBY DECLARE that to the best of my knowledge and belief
              <ul>
                <li>I am a citizen of India and place of my birth is</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <table className='table'>
                <tr>
                  <td>
                    Town/Village
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name='applicationFrom' ref={inputRef28} className='form-control' placeholder='Enter Your Town/Village' onChange={(e) => onvaluechange(e)}/>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-12 col-lg-4">
              <table className='table'>
                <tr>
                  <td>
                    District<span className='text-danger'>*</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="aplicationFromDist" ref={inputRef29} className="form-control" onChange={(e) => onvaluechange(e)}>
                      <option hidden value=''>Select Your District</option>
                      <option value="Murshidabad" >Murshidabad</option>
                      <option value="Ananthapur" >Ananthapur</option>
                      <option value="Chittoor" >Chittoor</option>
                      <option value="Nicobar" >Nicobar</option>
                      <option value="Sheikhpura" >Sheikhpura </option>
                      <option value="Uttar_Dinajpur" >Uttar_Dinajpur</option>
                      <option value="South_24_Parganas" >South_24_Parganas </option>
                      <option value="Puruliya" >Puruliya </option>
                      <option value="Nadia" >Nadia</option>
                      <option value="Malda" >Malda </option>
                      <option value="Kolkata" >Kolkata</option>
                      <option value="Howrah" >Howrah </option>
                      <option value="Cooch_Behar" >Cooch_Behar</option>
                      <option value="Udham_Singh_Nagar" >Udham_Singh_Nagar</option>
                      <option value="Alipurduar" >Alipurduar</option>
                      <option value="Bankura" >Bankura </option>
                      <option value="Barddhaman" >Barddhaman</option>
                      <option value="Darjeeling" >Darjeeling </option>
                      <option value="Hooghly" >Hooghly </option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-12 col-lg-4">
              <table className='table'>
                <tr>
                  <td>
                    State<span className='text-danger'>*</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name='applicationFormState' ref={inputRef30} className='form-control' onChange={(e) => onvaluechange(e)}>
                      <option hidden value='' >Select Your State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal" >West Bengal</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  I am ordinarily resident at the address given at above since
                </li>
              </ul>
            </div>
            <div className="ml-2 col-12 col-lg-2">
              Date<span className='text-danger'>*</span>
            </div>
            <div className="pl-4 col-12 text-center col-lg-4">
              <input type='date' name='resideFrom' ref={inputRef31} className='form-control' onChange={(e) => onvaluechange(e)}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  I am applying for inclusion in Electoral Roll for the first time and my name is not included in any Assembly Constituency/ Parliamentary Constituency.
                </li>
                <li>
                  I don't possess any of the mentioned documents of age proof. Therefore, I have enclosed <input type='text' ></input>
                  (Name of the document) in support of age proof.
                </li>
                <li>
                  I am aware that making the above statement or declaration in relation to this application which is false and which I know or believe to be false or do not believe to be true, is punishable under Section 31 of Representation of the People Act,1950 (43 of 1950) with imprisonment for a term which may extend to one year or with fine or with both.
                </li>
              </ul>
            </div>
          </div>
          <div className="row d-flex justify-content-between px-4">
            <div className="col-12 col-lg-3">
              <label>Place<span className='text-danger'>*</span></label>
              <input type="text" name='applicationPlace' ref={inputRef32} className='form-control' onChange={(e) => onvaluechange(e)}/>
            </div>
            <div className="col-12 col-lg-3">
              <label>Date<span className='text-danger'>*</span></label>
              <input type="date" name='today' ref={inputRef33} disabled className='form-control' onChange={(e) => onvaluechange(e)}/>
            </div>
          </div>
          <div className="row mt-4 d-flex justify-content-between px-4">
            <div className="col-12 col-lg-3">
              <label>Captcha<span className='text-danger'>*</span></label><br></br>
              <img src="logo6.png" alt="captcha image" />
              <input type="text" name='captcha' ref={inputRef34} className='form-control' placeholder='Enter Captcha Text Here' onChange={(e) => onvaluechange(e)}/>
            </div>
            {/* <div className="col-12 col-lg-3 mt-4">
              <button type='reset' className='btn btn-outline-danger m-2'>Reset</button>
              <button type='submit' className='btn btn-outline-success m-2'>Submit</button>
            </div> */}
          </div>
          <hr></hr>
          <div className="row d-flex justify-content-center">
            <div className="col-8 col-lg-4 d-flex justify-content-between">
              <button type='reset' className='btn btn-outline-danger' style={{ width: '140px' }}>Reset</button>
              <NavLink to='' onClick={(e) => addNewDetails(e)}><button type="submit" name="ok" className="btn btn-outline-primary ml-2"  style={{ width: '140px' }}>Submit</button></NavLink>
            </div>
          </div>
        </form>
      </div>

     







      {/* <form>
              <label className=" state-style">State*</label>

              <select name="State" disabled placeholder="Select Your State" className="col-xl-3 col-lg-3 col-sm-12 state-style-input1">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option selected disabled hidden value="West Bengal" >West Bengal</option>
              </select>

              <label className="state-style">District*</label>
              <select name="State" placeholder="Select Your State" className="col-xl-2 col-lg-2 col-sm-12 state-style-input1">
                <option value="aa" >Murshidabad</option>
                <option value="bb" >Ananthapur</option>
                <option value="cc" >Chittoor</option>
                <option value="dd" >Nicobar</option>
                <option value="ee" >Sheikhpura </option>
                <option value="ff" >Uttar_Dinajpur</option>
                <option value="gg" >South_24_Parganas </option>
                <option value="ii" >Puruliya </option>
                <option value="jj" >Nadia</option>
                <option value="ll" >Malda </option>
                <option value="mm" >Kolkata</option>
                <option value="nn" >Howrah </option>
                <option value="oo" >Cooch_Behar</option>
                <option value="pp" >Udham_Singh_Nagar</option>
                <option value="qq" >Alipurduar</option>
                <option value="rr" >Bankura </option>
                <option value="ss" >Barddhaman</option>
                <option value="tt" >Darjeeling </option>
                <option value="uu" >Hooghly </option>
                <option value="vv" >Hooghly </option>


              </select>

              <label className="state-style">Asssembly Constituency*</label>
              <input type='text' name="State" placeholder="..." className=" col-xl-2 col-lg-2 col-sm-12 state-style-input3"></input>
            </form>
            <div className='gap1'>Personal Details</div>

            <form>
              <label className=" state-style">First Name*</label>
              <input type='text' name="State" placeholder="Enter Your First Name" className="col-xl-3 col-lg-3 col-sm-12 state-style-input1"></input>

              <label className="state-style">Middle Name</label>
              <input type='text' name="State" placeholder="Enter Your Middle Name" className=" col-xl-2 col-lg-2 col-sm-12 state-style-input2"></input>

              <label className="state-style">Last Name</label>
              <input type='text' name="State" placeholder="Enter Your Last Name" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input3"></input>
            </form>


            <form>
              <label className=" state-style">First Name Of Relative*</label>
              <input type='text' name="State" placeholder="Enter Your First Name" className="col-xl-3 col-lg-3 col-sm-12 state-style-input1"></input>

              <label className="state-style">Middle Name</label>
              <input type='text' name="State" placeholder="Enter Your Middle Name" className=" col-xl-2 col-lg-2 col-sm-12 state-style-input2"></input>

              <label className="state-style">Last Name</label>
              <input type='text' name="State" placeholder="Enter Your Last Name" className=" col-xl-2 col-lg-2 col-sm-12 state-style-input3"></input>
            </form>

            <form>
              <label className=" state-style">Relation Type*</label>
              <select name="State" placeholder="Select Your State" className="col-xl-2 col-lg-2 col-sm-12 state-style-input1">
                <option value="1" >Father</option>
                <option value="2" >Mother</option>
                <option value="3" >Houseband</option>
                <option value="4" >Wife</option>
                <option value="5" >Daughter</option>
                <option value="5" >Sister</option>
                <option value="5" >Brother</option>

              </select>

              <label className="state-style">Mobile No*</label>
              <input type='number' name="State" placeholder="Enter your Mobile no" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input2"></input>

              <label className="state-style">Email ID*</label>
              <input type='email' name="State" placeholder="Enter your Email ID" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input3"></input><br></br>

              <label className="state-style">Aadhaar Number</label>
              <input type='text' name="State" placeholder="Enter your Aadher no" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input2"></input>

              <label className="state-style">Gender*</label>
              <input type='radio' name="Gender" value="male" className=" state-style-input3"></input>Female
              <input type='radio' name="Gender" value="male" className=" state-style-input3"></input>Male
              <input type='radio' name="Gender" value="male" className=" state-style-input3"></input>Other

            </form>
            <div className='gap1'>Date Of Birth</div>



            <form>
              <label className=" state-style">Date OF Birth*</label>
              <input type='date' name="State" placeholder="..." className="col-xl-3 col-lg-3 col-sm-12 state-style-input1"></input>

              <label className="state-style">Select Date of Birth Proof Document</label>
              <input type='text' name="State" placeholder="..." className=" col-xl-3 col-lg-3 col-sm-12 state-style-input2"></input><br></br>

              <label className="state-style">Upload Your Relevent Document</label>
              <input type='file' name="State" placeholder="Select File to Upload" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input3"></input>
            </form>

            <div className='gap1'>Current Address</div>



            <form>
              <label className=" state-style">House No</label>
              <input type='number' name="State" placeholder="Enter your House no" className="col-xl-2 col-lg-2 col-sm-12 state-style-input1"></input>

              <label className="state-style">Street/Area/Locality*</label>
              <input type='text' name="State" placeholder="Enter your Area/Locality" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input2"></input>

              <label className="state-style">Town/Village*</label>
              <input type='text' name="State" placeholder="Enter Your Town/Village" className=" col-xl-2 col-lg-2 col-sm-12 state-style-input3"></input>
            </form>

            <form>
              <label className=" state-style">Post Office*</label>
              <input type='text' name="State" placeholder="Enter your Post Office" className="col-xl-3 col-lg-3 col-sm-12 state-style-input1"></input>

              <label className="state-style">Pin Code*</label>
              <input type='number' name="State" placeholder="Enter your Pin no" className=" col-xl-2 col-lg-2 col-sm-12 state-style-input2"></input>

              <label className="state-style">District*</label>
              <input type='text' name="State" placeholder="Select Your District" className=" col-xl-3 col-lg-3 col-sm-12 state-style-input3"></input><br></br>


              <label className=" state-style">State*</label>
              <input type='text' name="State" placeholder="Select Your State" className="col-xl-3 col-lg-3 col-sm-12 state-style-input1"></input>

              <label className="state-style">Select Address Proof Document</label>
              <input type='text' name="State" placeholder="..." className=" col-xl-3 col-lg-3 col-sm-12 state-style-input2"></input><br></br>

              <label className="state-style">Upload Relevent Document FOR Address Proof</label>
              <input type='file' name="State" placeholder="..." className=" col-xl-3 col-lg-3 col-sm-12 state-style-input3"></input>
            </form>
 */}
    </>
  )
}

export default Form;