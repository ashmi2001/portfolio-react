type WorkEx = {
    name: string
    role: string
    description: string
    technologies: string[]
}

export default function WorkExCard({name, role, description, technologies}:WorkEx){
    return (
        <div className="w-full rounded overflow-hidden shadow-lg mt-8 mb-8">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {technologies && technologies.map(technology => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{technology}</span>
                ))}
            </div>
        </div>
    )
}