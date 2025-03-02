"use client"

import IconContainer from "@/components/iconContainer";
import TaskCard from "@/components/taskCard";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const cards = [
    {
        id: 1,
        title: "Submit Documents",
        description: "Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
        image: "https://media.wired.com/photos/6517554f09807970da6567b8/master/pass/Tips-For-Remote-Work-Business-1441444285.jpg",
        created_on: "20/06/2023",
        priority: "Extreme",
        status: "Not Started",
        objective: "To submit required documents for something important",
        additional_notes: [
            "Ensure that the documents are authentic and up-to-date.",
            "Maintain confidentiality and security of sensitive information during the submission process.",
            "If there are specific guidelines or deadlines for submission, adhere to them diligently."
        ],
        deadline: "End of Day"
    },
    {
        id: 2,
        title: "Complete Assignment",
        description: "The assignments must be completed to pass final year. Organize the documents accordingly and scan them if physical copies need to be submitted digitally.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4XDVM99Dpe1eu0j_b9TvtqIvAYM4RAb3Qg&s",
        created_on: "19/06/2023",
        priority: "Moderate",
        status: "In Progress",
        objective: "To submit complete assignment",
        additional_notes: [
            "If there are specific guidelines or deadlines for submission, adhere to them diligently.",
            "Maintain confidentiality and security of sensitive information during the submission process.",
            "Ensure that the documents are authentic and up-to-date."
        ],
        deadline: "Tomorrow"
    }
]

export default function MyTask() {
    const [activeCard, setActiveCard] = useState(null)
    const [cardsState, setCardsState] = useState(cards)

    function deleteCard(index) {
        const newCards = cardsState.length > 1 
        ? [...cards.slice(0, index), ...cards.slice(index + 1)] 
        : [];
        
        setCardsState(newCards)
        setActiveCard(null)
    }

    return (
        <div className="flex h-screen gap-5">
            <div className="w-[40%] rounded-[16px] border-[1px] border-[#A1A3AB] p-7">
                <h3 className="font-semibold text-[16px] flex mb-6">
                    <span className="w-7 border-b-2 border-[#F24E1E]">My </span>Tasks
                </h3>
                <div className="flex flex-col gap-2">
                    {
                        cardsState.map((card, index) => (
                            <React.Fragment key={card.id}>
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
                                />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
            <div className="flex-1 rounded-[16px] border-[1px] border-[#A1A3AB] p-7">
                {
                    activeCard !== null
                        ? <div>
                            <div className="flex gap-8">
                                <div className="">
                                    <img className="rounded-[14px] object-cover w-[158px] h-[158px]" src={cardsState[activeCard]?.image} />
                                </div>
                                <div className="flex flex-col gap-3 justify-end">
                                    <div className="font-semibold text-[18px]">
                                        {cardsState[activeCard]?.title}
                                    </div>
                                    <div className="text-[14px]">
                                        Priority: <span className={`
                        ${cardsState[activeCard]?.priority?.toLowerCase() === "extreme"
                                                ? "text-[#F21E1E]"
                                                : cardsState[activeCard]?.priority?.toLowerCase() === "moderate"
                                                    ? "text-[#42ADE2]"
                                                    : ""
                                            }`}>{cardsState[activeCard]?.priority}</span>
                                    </div>
                                    <div className="text-[14px]">
                                        Status: <span className={`
                            ${cardsState[activeCard]?.status?.toLowerCase() === "not started"
                                                ? "text-[#F21E1E]"
                                                : cardsState[activeCard]?.status?.toLowerCase() === "in progress"
                                                    ? "text-[#0225FF]"
                                                    : ""
                                            }`}>{cardsState[activeCard]?.status}</span>
                                    </div>
                                    <div className="text-[12px] text-[#A1A3AB]">
                                        Created on: {cardsState[activeCard]?.created_on}
                                    </div>
                                </div>
                            </div>
                            <div className="text-lg/7 mt-2">
                                <div className="text-[#747474] text-[16px]">
                                    <span className="font-bold">Task Title:</span> {cardsState[activeCard]?.title}.
                                </div>
                                <div className="text-[#747474] text-[16px]">
                                    <span className="font-bold">Objective:</span> {cardsState[activeCard]?.objective}.
                                </div>
                                <div className="text-[#747474] text-[16px]">
                                    <span className="font-bold">Task Description:</span> {cardsState[activeCard]?.objective}.
                                </div>
                                <div className="text-[#747474] text-[16px]">
                                    <div className="font-bold ">
                                        Additional Notes:
                                    </div>
                                    <ul className="list-disc pl-5">
                                        {
                                            cardsState[activeCard]?.additional_notes.map((note, index) => (
                                                <li key={index}>{note}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="text-[#747474] text-[16px]">
                                    <span className="font-bold">Deadline for Submission:</span> {cardsState[activeCard]?.deadline}.
                                </div>
                            </div>
                            <div className="h-full flex gap-3 justify-end items-end">
                                <IconContainer onclick={deleteCard} params={[activeCard]} Icon={TrashIcon} />
                                <IconContainer Icon={PencilSquareIcon} />
                            </div>
                        </div>
                        : <div>
                            No Data Selected
                        </div>
                }
            </div>
        </div>
    );
}