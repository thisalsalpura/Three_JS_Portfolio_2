import React from "react";
import { skills, experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Thisal</span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>Software Engineer based in Sri Lanka, specializing in technical education through hands-on learning and building application.</p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="block-container w-20 h-20">
                            <div className="btn-black rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>I've worked with all sorts of comapnies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
                </div>
                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name || index}
                                date={
                                    <span className="p-5 text-black font-normal text-sm">{experience.date}</span>
                                }
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}
                                iconStyle={{
                                    background: experience.iconBg,
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-kanit font-semibold">{experience.title}</h3>
                                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>{experience.company_name}</p>
                                </div>
                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className="border-slate-200" />
            <CTA />
        </section>
    )
};

export default About;