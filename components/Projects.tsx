import { useEffect, useState } from "react";
import Project from "./interfaces/Project";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    let [projects, setProjects] = useState<Project[]>([
        {
            name: "Loading",
            description: "Loading projects from GitHub...",
        },
    ]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await (
                    await fetch(window.location.origin + "/projects.json")
                ).json();

                setProjects(response.projects);
            } catch (error) {
                console.error("Failed to fetch projects: " + error);
                setProjects([
                    {
                        name: "Error",
                        description:
                            "Failed to fetch projects from GitHub. Open the developer console for more information!",
                    },
                ]);
            }
        };

        loadData();
    }, []);

    return (
        <div className="mt-4 grid md:grid-cols-3 gap-4">
            {projects.map((project) => {
                return <ProjectCard key={project.name} project={project} />;
            })}
            <span></span>
        </div>
    );
}
