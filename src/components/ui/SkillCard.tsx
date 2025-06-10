import LabelWithIcon from "./LabelsWithIcon"

type Props = {
    skill: string,
    icon: string,
}

export default function SkillCard({ icon, skill }: Props) {
    return (
        <div>
            <li
                key={`skill-list-${skill}`}
                className="border border-slate-700 rounded-md shadow-md w-fit"
            >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    <LabelWithIcon icon={icon} text={skill} />
                </div>
            </li>
        </div>
    )
}
