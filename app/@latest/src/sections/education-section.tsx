import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/education-image-1.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Bachelor in Computer Science
                            </h3>
                            <div>College of Sciences</div>
                        </div>
                    </div>
                    <div>Aug 2024 - May 2026</div>
                </div>
                <p className="mt-6 text-gray-500">A key component of the program is hands-on learning through laboratories and projects, specifically structured to strengthen analytical thinking and problem-solving abilities.</p>
            </div>
        </Section>
    );
}