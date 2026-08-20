import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import asset from "../assets/asset.png";
import devFuse from "../assets/Devfuse.png"
const Projects = ({dark}) =>{

    const projectOverview = [
        {
            id:1,
            head:"DevFuse - Connect,Collaborate, and Code",
            img: devFuse,
            desc:"A dedicated social space for developers to showcase projects, connect with peers, and collaborate on code.",
            github:<RiGithubFill/>,
            live:<RiExternalLinkFill/>,
            gitHref:"https://github.com/alekh-codes/DevFuse-Web.git",
            liveLink:"#",
            overlay:"Work in progress",
            techStack: ["React", "Tailwind", "JavaScript", "Node.js", "Express.js", "MongoDB"]
        },
        {
            id:2,
            head:"Asset Management System",
            img:asset,
            desc:"Asset Management System is a responsive web application built with React and Tailwind CSS that allows users to add, edit, delete, search, and organize assets efficiently through an intuitive dashboard.",
            github:<RiGithubFill/> ,
            live:<RiExternalLinkFill/>,
            gitHref:"https://github.com/alekh-codes/Assets-Tracker-App.git",
            liveLink:"https://assets-management-system-ten.vercel.app/",
            techStack: ["React", "Tailwind", "JavaScript"]
        },
        
    ]

    return(
        <section id="projects" className={` pb-20 flex flex-col justify-center items-center ${dark ? "bg-[#181c2580]": "bg-[#f1f3f6] "} `}>
            <div  data-aos = "fade-up" data-aos-duration = "1000">
                <h1 className="text-4xl font-bold mt-10">
                My <span className="text-purple-700">Projects</span>
                </h1>
            </div>
            <div className="mx-7 mt-7" data-aos = "fade-up" data-aos-duration = "1000">
                <p className="opacity-60">Here are some of the projects I've built to sharpen my skills.</p>
            </div>
            <div className="grid grid-rows-1 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 mt-10 " data-aos = "fade-up" data-aos-duration = "1000" >
                {
                    projectOverview.map(({id,head,img,desc,github,live,gitHref,liveLink,overlay,techStack})=>(
                        <div key={id} className={`mx-7 mt-10  px-10  py-5 rounded-xl  ${dark ? "bg-[#2f3034e2]" : "bg-[#c2d7f6]"}`}>
                            <h1 className="font-bold text-xl mt-3">{head}</h1>
                            <div className="mt-3 relative group overflow-hidden ">
                                <img src={img} className="w-100 rounded-xl " alt="" />
                                <div className="absolute inset-0 w-100  flex items-end opacity-100 rounded-xl transition duration-500">
                                <p className="font-extrabold text-2xl text-white bg-black/50 p-2 w-full rounded-b-xl">
                                    {overlay}
                                </p>
                            </div>
                            </div>
                            <div className="mt-3">
                                <p>{desc}</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-3 ">
                                {
                                    techStack.map((item)=>(
                                        <p key={item} className={`${dark ? "bg-[#4f4b4b9b]" : "bg-[#92b9fb]"} py-1 px-4 rounded-2xl text-center`} >
                                            {item}
                                        </p>
                                    ))
                                }
                            </div>
                            <div className="flex gap-5 mt-5">
                                <a href={gitHref} target="_blank" className="flex items-center text-l gap-2 text-white bg-black p-2 hover:bg-[#c6f9b6] hover:text-black rounded-xl cursor-pointer">{github}</a>
                                <a href={liveLink} target="_blank" className="flex items-center text-l gap-2 text-white bg-purple-700 hover:bg-purple-800 p-2 rounded-xl cursor-pointer">{live}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Projects