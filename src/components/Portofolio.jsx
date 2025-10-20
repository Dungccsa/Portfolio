import { useState, useEffect } from "react";
import { portfolioData } from "../data/portofolioData.jsx";
import 'tippy.js/dist/tippy.css';
import ProjectsTab from "./Tabs/ProjectTabs.jsx";
import CertificatesTab from "./Tabs/CertificatesTab.jsx";
import TechStacksTab from "./Tabs/TechStacksTab.jsx";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [expandedProjectId, setExpandedProjectId] = useState(null);
    const [overflowStates, setOverflowStates] = useState({});

    useEffect(() => {
        setExpandedProjectId(null);
    }, [activeTab]);

    return (
        <section
            id="portofolio"
            className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20"
            data-aos-duration="1000"
            data-aos="fade-down"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title & Subtitle */}
                <div
                    className="text-center mb-12 text-gray-800"
                    data-aos-delay="600"
                    data-aos="fade-down"
                >
                    <h2 className="text-5xl font-bold dark:text-white mb-2">
                        {portfolioData.sectionTitle.title}
                    </h2>
                    <p className="text-lg dark:text-gray-400">
                        {portfolioData.sectionTitle.subtitle}
                    </p>
                </div>

                {/* Tabs Menu */}
                <div
                    className="flex justify-center mb-8 gap-4 flex-wrap"
                    data-aos-delay="600"
                    data-aos="fade-down"
                >
                    {[
                        {value: "projects", label: "Projects", icon: "bx bx-briefcase"},
                        {value: "certificates", label: "Certificates", icon: "bx bx-award"},
                        {value: "tech", label: "Tech Stack", icon: "bx bx-code-alt"},
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
                                activeTab === tab.value
                                    ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                                    : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"
                            }`}
                        >
                            <i className={tab.icon}></i>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div>
                    {activeTab === "projects" && (
                        <ProjectsTab
                            projects={portfolioData.tabs.projects}
                            expandedProjectId={expandedProjectId}
                            setExpandedProjectId={setExpandedProjectId}
                            overflowStates={overflowStates}
                            setOverflowStates={setOverflowStates}
                        />
                    )}

                    {activeTab === "certificates" && (
                        <CertificatesTab certificates={portfolioData.tabs.certificates}/>
                    )}

                    {activeTab === "tech" && (
                        <TechStacksTab techStacks={portfolioData.tabs.techStacks}/>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
