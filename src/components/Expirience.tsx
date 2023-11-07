import { Card } from "@/components"

export function SenseStreet() {
    return (
        <Card.Container>
            <Card.Sidebar>08.2022 - NOW</Card.Sidebar>
            <Card.Content>
                <p className="text-sm">
                    <Card.HeaderAnchor href="https://sensestreet.com/">Fullstack Developer - Sense Street</Card.HeaderAnchor>
                    <ul className="flex flex-col list-disc gap-y-1 text-slate-400">
                        <li>
                            Development and testing of client facing web applications
                            using <Card.WhiteAnchor href="https://react.dev/">React</Card.WhiteAnchor> { }
                            and <Card.WhiteAnchor href="https://fastapi.tiangolo.com/">FastAPI</Card.WhiteAnchor>
                        </li>
                        <li>
                            Creation and maintenance of CI/CD pipelines for mentioned applications, and deployments management
                            to <Card.WhiteAnchor href="https://aws.amazon.com/">AWS</Card.WhiteAnchor>
                        </li>
                        <li>
                            Implementation of monitoring solutions
                            using <Card.WhiteAnchor href="https://grafana.com/">Grafana</Card.WhiteAnchor> { }
                            and <Card.WhiteAnchor href="https://datadog.com/">Datadog</Card.WhiteAnchor>
                        </li>
                        <li>
                            Creation of automated data processing pipelines improving data access for data scientist.
                        </li>
                    </ul>
                </p>
            </Card.Content>
            <Card.Tags tags={["Python 3", "FastAPI", "TypeScript", "React", "Tailwind CSS", "Docker", "AWS"]} />
        </Card.Container>
    )
}

export function Umlaut() {
    return (
        <Card.Container>
            <Card.Sidebar>04 - 06.2022</Card.Sidebar>
            <Card.Content>
                <p className="text-sm">
                    <Card.HeaderAnchor href="https://www.umlaut.com/">Backend Developer - Umlaut</Card.HeaderAnchor>
                    <p className="text-slate-400">
                        Development and maintenance of <Card.WhiteAnchor href="https://django.com">Django</Card.WhiteAnchor> web application, working as a part of client team.
                    </p>
                </p>
            </Card.Content>
            <Card.Tags tags={["Python 3", "Django", "JavaScript", "JQuery", "Bootrstrap 4", "CSS"]} />
        </Card.Container>
    )
}

export function Aptiv() {
    return (
        <Card.Container>
            <Card.Sidebar>02.2021 - 03.2022</Card.Sidebar>
            <Card.Content>
                <p className="text-sm">
                    <Card.HeaderAnchor href="https://www.umlaut.com/">Junior Python Developer - Aptiv</Card.HeaderAnchor>
                    <ul className="flex flex-col list-disc gap-y-1 text-slate-400">
                        <li>
                            Development and maintanance of internal tooling using <Card.WhiteAnchor href="https://django.com/">Django</Card.WhiteAnchor>
                        </li>
                        <li>
                            Development of hardware testing framework in cooperation with testers
                        </li>
                    </ul>
                </p>
            </Card.Content>
            <Card.Tags tags={["Python 3", "Django", "JavaScript", "JQuery", "CSS"]} />
        </Card.Container>
    )
}
