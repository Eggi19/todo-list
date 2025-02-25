"use client"

import TaskCard from "@/components/taskCard";
import { useState } from "react";

const cards = [
    {
        id: 1,
        title: "Submit Documents",
        description: "Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
        image: "https://media.wired.com/photos/6517554f09807970da6567b8/master/pass/Tips-For-Remote-Work-Business-1441444285.jpg",
        created_on: "20/06/2023",
        priority: "Extreme",
        status: "Not Started"
    },
    {
        id: 2,
        title: "Complete Assignment",
        description: "The assignments must be completed to pass final year. Organize the documents accordingly and scan them if physical copies need to be submitted digitally.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4XDVM99Dpe1eu0j_b9TvtqIvAYM4RAb3Qg&s",
        created_on: "19/06/2023",
        priority: "Moderate",
        status: "In Progress"
    }
]

export default function MyTask() {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className="flex h-screen gap-5">
            <div className="w-[40%] rounded-[16px] border-[1px] border-[#A1A3AB] p-7">
                <h3 className="font-semibold text-[16px] flex mb-6">
                    <span className="w-7 border-b-2 border-[#F24E1E]">My </span>Tasks
                </h3>
                <div className="flex flex-col gap-2">
                    {
                        cards.map((card, index) => (
                            <>
                                <TaskCard
                                    image={card.image}
                                    index={index}
                                    activatedCardIndex={activeCard}
                                    activeOnClick={setActiveCard}
                                    title={card.title}
                                    description={card.description}
                                    createdOn={card.created_on}
                                    priority={card.priority}
                                    status={card.status}
                                    key={card.id}
                                />
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="flex-1 rounded-[16px] border-[1px] border-[#A1A3AB] p-7">
                <div className="flex gap-8">
                    <div className="">
                        <img className="rounded-[14px] object-cover w-[158] h-[158]" src="https://media.wired.com/photos/6517554f09807970da6567b8/master/pass/Tips-For-Remote-Work-Business-1441444285.jpg" />
                    </div>
                    <div className="flex flex-col gap-3 justify-end">
                        <div className="font-semibold text-[18px]">
                            Submit Documents
                        </div>
                        <div className="text-[14px]">
                            Priority: Extreme
                        </div>
                        <div className="text-[14px]">
                            Status: Not Started
                        </div>
                        <div className="text-[12px]">
                            Created on: 20/06/2003
                        </div>
                    </div>
                </div>
                <div className="text-[#747474] text-[16px]">
                    <span className="font-bold">Task Title:</span> Document Submission.
                </div>
                <div className="text-[#747474] text-[16px]">
                    <span className="font-bold">Objective:</span> To submit required documents for something important.
                </div>
            </div>
        </div>
    );
}