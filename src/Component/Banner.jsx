import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-neutral-900 bg-opacity-5 rounded-3xl flex flex-col lg:flex-row p-10 justify-between items-center mt-12 gap-8 lg:gap-2">
            <div> 
                <h2 className="lg:text-6xl text-5xl font-bold mb-8 ">Books to freshen  up <br /> your BookSelf</h2>
                <NavLink to='/listed-book'>
                <button className="btn bg-[#23BE0A] text-white text-xl font-bold ">View The List</button>
                </NavLink>
                
            </div>
            <div>
                <img src="https://i.ibb.co/PM8yHcn/88c8fe011aa2683f66e43efe9922dafc.jpg" alt="" className=" h-[450px] w-full rounded-2xl "/>
            </div>
            
        </div>
    );
};

export default Banner;