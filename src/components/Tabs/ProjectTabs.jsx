import { useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ProjectsTab = ({ projects, expandedProjectId, setExpandedProjectId, overflowStates, setOverflowStates }) => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos-delay="600"
            data-aos="fade-down"
        >
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    expandedProjectId={expandedProjectId}
                    setExpandedProjectId={setExpandedProjectId}
                    overflowStates={overflowStates}
                    setOverflowStates={setOverflowStates}
                />
            ))}
        </div>
    );
};

const ProjectCard = ({ project, expandedProjectId, setExpandedProjectId, overflowStates, setOverflowStates }) => {
    const descRef = useRef(null);

    useEffect(() => {
        if (descRef.current) {
            setOverflowStates((prev) => ({
                ...prev,
                [project.id]: descRef.current.scrollHeight > 96, // ~6 dòng
            }));
        }
    }, [project.id, setOverflowStates]);

    const isExpanded = expandedProjectId === project.id;
    const isOverflowing = overflowStates[project.id];

    return (
        <div className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform">
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {project.subtitle}
            </p>

            {/* Mô tả */}
            <div
                className={`relative text-sm text-gray-800 dark:text-white mb-4 transition-all duration-300 ${
                    isExpanded ? "max-h-full" : "max-h-24 overflow-hidden"
                }`}
            >
                <p ref={descRef}>{project.desc}</p>
                {!isExpanded && isOverflowing && (
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
                )}
            </div>

            {/* Nút xem thêm */}
            {isOverflowing && (
                <button
                    onClick={() =>
                        setExpandedProjectId(isExpanded ? null : project.id)
                    }
                    className="text-blue-600 dark:text-blue-400 text-sm mb-4 hover:underline"
                >
                    {isExpanded ? "Thu gọn" : "Xem thêm"}
                </button>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-white"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <Tippy content="View Demo" placement="top">
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center w-full items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1"
                >
                    <span className="flex items-center gap-1">
                        <span>Demo</span>
                        <i className="bx bx-link-external"></i>
                    </span>
                </a>
            </Tippy>
        </div>
    );
};

export default ProjectsTab;
