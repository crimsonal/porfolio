import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">artis [dot] devs [at] gmail [dot] com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Phone:</td>
                        <td className="py-2 text-gray-500">+1 (757) 758-4624</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}