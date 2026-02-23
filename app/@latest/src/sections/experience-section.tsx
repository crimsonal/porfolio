import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/lowes.png",
            title: "Frond-End Loader / Fulfillment",
            company: "Lowes",
            location: "Suffolk, Virginia",
            start: "Nov 2023",
            end: "Feb 2026",
            description: [
                "Provided excellent customer service by actively seeking out customers and assisting them with their shopping needs.",
                "Built strong relationships with coworkers to ensure work is completed efficiently and effectively",
                "Attended and participated at daily standup store meetings to ensure team alignment.",
                "Followed safety protocols and maintained a clean work environment."
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}