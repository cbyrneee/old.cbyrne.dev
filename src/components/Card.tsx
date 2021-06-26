import styles from "../styles/Card.module.css"
import React, { Component } from "react"

interface Link {
    name: string
    destination: string
}

interface CardButtonProps {
    name: string
    destination: string
    className: string
}

interface CardProps {
    title: string
    subtitle: string
    content: string
    image: string | null
    links: Link[]
}

function CardButton(props: CardButtonProps) {
    return (
        <a
            className={props.className}
            target="_blank"
            rel="noreferrer"
            href={props.destination}
        >
            {props.name}
        </a>
    )
}

export default class Card extends Component<CardProps> {
    static defaultProps = { image: null, links: [] }

    render() {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.headerContainer}>
                    {this.props.image && (
                        <img
                            width="48px"
                            height="48px"
                            alt="Icon"
                            className={"w-12 mr-2"}
                            src={this.props.image}
                        ></img>
                    )}
                    <div>
                        <h3 className={styles.title}>{this.props.title}</h3>
                        <p className={styles.subtitle}>{this.props.subtitle}</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <p className={styles.content}>{this.props.content}</p>
                    {this.props.links.length > 0 && (
                        <div className={styles.buttonsContainer}>
                            {this.props.links.map((link: Link) => (
                                <CardButton
                                    className={styles.cardButton}
                                    key={link.destination}
                                    name={link.name}
                                    destination={link.destination}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
