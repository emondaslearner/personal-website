import React from 'react';
import './About.css'

//images
import myImg from '../../assets/myImage.png'

const About = () => {
    return (
        <div className="w-[90%] !z-10 bg-[#08172b] h-[100vh] relative">
            <div className='flex flex-wrap'>
                <div className='w-[60%] flex flex-col justify-center'>
                    <div className='about-text ml-[100px]'>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Name: <span className='ml-3 text-[#977500]'>Emon Das</span></h1>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Age: <span className='ml-3 text-[#977500]'>18</span></h1>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Qualifiation: <span className='ml-3 text-[#977500]'>Passed (HSC) Doing Deploma</span></h1>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Post: <span className='ml-3 text-[#977500]'>Jr. MERN Stack Developer</span></h1>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Working <span className='ml-3 text-[#977500]'>Platform: Peacock India</span></h1>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Learning: <span className='ml-3 text-[#977500]'>Software Engineering</span></h1>
                        <h1 className='text-2xl font-semibold text-[#9774008e] leading-[40px]'>Language: <span className='ml-3 text-[#977500]'>Bangla & English & Hindi</span></h1>
                    </div>
                    <div className='ml-[100px] flex flex-wrap mt-16 w-[60%]'>
                        <div className='data w-[48%] mx-auto text-xl font-bold min-h-[100px] text-[#977500] flex justify-center items-center border border-[#977500] rounded-xl'>
                            1+ Years Of Experience
                        </div>
                        <div className='data w-[48%] mx-auto text-xl font-bold min-h-[100px] text-[#977500] flex justify-center items-center border border-[#977500] rounded-xl'>
                            20+ Projects
                        </div>
                    </div>
                </div>
                <div className='w-[40%] flex h-[100vh] items-center'>
                    <div className='mybg w-[400px] h-[400px] rounded-full !z-0 relative'>
                        <div className='absolute left-0 top-0 w-full h-full bg-shadows rounded-full'></div>
                        <div className='w-full h-full bg-[#08172b] !z-50 absolute left-0 top-0 rounded-full overflow-hidden'>
                            <img src={myImg} alt="" />
                            <div className='absolute w-full h-full top-0 left-0 bg-[#2c3e5057] rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;