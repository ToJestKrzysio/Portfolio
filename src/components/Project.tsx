import { Card } from "@/components"

import PlaceholderImage from "/PlaceholderImage.png";

export function JungleGame() {
    return (
        <Card.Container>
            <Card.SidebarImage src={PlaceholderImage} alt="Placeholder" />
            <Card.Content>
                <Card.HeaderAnchor href="https://github.com/ToJestKrzysio/TheJungleGame">Jungle Game</Card.HeaderAnchor>
                <p className="text-sm text-slate-400">
                    Master of Science dissertation project. Application
                    of Monte Carlo Tree Search with Value and Policy networks to predict best possible moves in the game of animal checkers.
                    User interface was created using react and backend was written in Flask.
                </p>
            </Card.Content>
            <Card.Tags tags={["Python", "Keras", "React", "Flask", "MCTS", "Reinforcement Learning", "Docker"]} />
        </Card.Container>
    )
}

export function EventManager() {
    return (
        <Card.Container>
            <Card.SidebarImage src={PlaceholderImage} alt="Placeholder" />
            <Card.Content>
                <Card.HeaderAnchor href="https://github.com/ToJestKrzysio/EventMaster">Event Manager</Card.HeaderAnchor>
                <p className="text-sm text-slate-400">
                    Django application allowing for event reservation management.
                    Allows for login via identity providers (eg. google), and covers payment processing through PayU.
                </p>
            </Card.Content>
            <Card.Tags tags={["Python", "Django", "Bootstrap"]} />
        </Card.Container>
    )
}

export function IntroSpot() {
    return (
        <Card.Container>
            <Card.SidebarImage src={PlaceholderImage} alt="Placeholder" />
            <Card.Content>
                <Card.HeaderAnchor href="https://github.com/ToJestKrzysio/Portfolio">IntroSpot</Card.HeaderAnchor>
                <p className="text-sm text-slate-400">
                    Basic portfolio site built with React and Tailwind.
                </p>
            </Card.Content>
            <Card.Tags tags={["React", "Typescript", "Tailwind CSS", "React Router", "AWS"]} />
        </Card.Container>
    )
}
