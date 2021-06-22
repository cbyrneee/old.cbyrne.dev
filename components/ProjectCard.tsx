import Project from "./interfaces/Project";
import Button from "./Button";
import Tag from "./Tag";

interface Props {
    project: Project;
}

export default function ProjectCard(props: Props) {
    return (
        <div className="card-container">
            <div className="tags-container">
                {props.project.tags?.map((tag) => {
                    return <Tag text={tag} />;
                })}
            </div>
            <div className="card-header mt-3">
                <h1 className="card-title">{props.project.name}</h1>
                <h3 className="card-subtitle">{props.project.description}</h3>
            </div>
            {(props.project.github || props.project.url ) && (
                <div className="card-footer">
                    <div className="buttons-container">
                        {props.project.github && (
                            <Button
                                text="GitHub"
                                destination={
                                    "https://github.com/" + props.project.github
                                }
                            ></Button>
                        )}
                        {props.project.url && (
                            <Button
                                text="Website"
                                destination={props.project.url}
                            ></Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
