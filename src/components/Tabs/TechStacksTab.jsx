const TechStacksTab = ({ techStacks }) => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos-delay="600"
            data-aos="fade-down"
        >
            {techStacks.map((tech) => (
                <div
                    key={tech.id}
                    className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform flex flex-col items-center justify-center gap-4"
                >
                    <i
                        className={`${tech.icon} text-6xl`}
                        style={{ color: tech.color }}
                    ></i>
                    <span className="text-lg font-medium text-gray-800 dark:text-white">
                        {tech.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TechStacksTab;
