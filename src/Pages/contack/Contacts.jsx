import React from 'react';
import { Loc } from '../../assets/icon';
import { PhoneIcon } from '../../assets/icon';
import { MessengeIcon} from '../../assets/icon'
import "./Contacts.css"
import Footer from "../../Components/footer/Footer";


const Contacts = () => {
  return (
    <div className="mx-auto  absolute w-full">
        <div className="contactsimg w-full h-[643px] bg-zinc-900 flex justify-center items-center ">
        <div className="w-3/6  text-white pl-[120px]  ">
          <h1 className="text-[80px] font-bold leading-tight">Biz bilan a'loqa!</h1>
        <p className="text-[24px] mt-[15px] text-gray-400">With travala you can        experience new travel and the best tourist destinations that we have to offer tourist destinations that we have to offer</p>
        </div>
        <div className="w-3/6 ">
        </div>
        </div>  
        <div className="flex justify-center items-center ml-[120px] mt-[20px] text-[20px]">
            <div className="w-3/6  text-justify ">
                <p className="text-[24px] w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum eget libero elementum amet ultricies ut hac ultrices ullamcorper. Enim nullam eu libero accumsan, nisl amet. Enim nullam eu libero accumsan, nisl amet. Enim nullam eu libero accumsan, nisl amet.
                </p>

               <div className="flex mt-[25px]">
               <Loc/>
               <p className="w-[500px] ml-[10px]">Marg'ilon shahar Ahmad Yassaviy 94 uy</p>
               </div>
               <div className="flex items-center mt-[10px]">
               <PhoneIcon />
               <p className="w-[500px] ml-[10px]">+998 940468016, 71.728035</p>
               </div>
               <div className="flex items-center mt-[10px]">
               <MessengeIcon />
               <p className="w-[500px] ml-[10px]">@decent_honest_travel. </p>
               </div>

            </div>
            <div className="w-3/6 w-[536px] h-[392px] formshadow mt-[60px] rounded-2xl">
                <form  action="">
                  <label htmlFor="">Email:</label>
                  <input type="text" />
                  <br />
                  <label htmlFor="">Name:</label>
                  <input type="text" />
                  <br />
                  <label htmlFor="">Ma'lumot:</label>
                  <input type="text" />
                  <br />
                  <button className='bg-orange-600 w-[154px] h-[56px] p-[10px] rounded-lg text-white text-[16px]'>So'rov yuborish</button>
                </form>
            </div>
        </div>
        <Footer  />
    </div>
  )
}

export default Contacts