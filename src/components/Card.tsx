import styles from "../styles/Card.module.css"
import React, { Component } from "react"
import Button from "./Button"

interface Link {
    name: string
    destination: string
}

interface CardProps {
    title: string
    subtitle: string
    content: string
    image: string | null
    links: Link[]
}

export default class Card extends Component<CardProps> {
    static defaultProps = { image: null, links: [] }

    render() {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.headerContainer}>
                    {this.props.image && (
                        <img
                            className={"w-12 pr-2"}
                            src={this.props.image}
                        ></img>
                    )}
                    <div>
                        <h3 className={styles.title}>{this.props.title}</h3>
                    </div>
                </div>

                <p className={styles.subtitle}>{this.props.subtitle}</p>

                <div className={styles.contentContainer}>
                    <p className={styles.content}>{this.props.content}</p>
                    {this.props.links.length > 0 && (
                        <div className={styles.buttonsContainer}>
                            {this.props.links.map((link: Link) => (
                                <Button
                                    name={link.name}
                                    destination={link.destination}
                                    icon={null}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
