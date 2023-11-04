import { Card } from "@/components"

import PlaceholderImage from "/PlaceholderImage.png";


export default function Project() {
    return (
        <Card.Container>
            <Card.SidebarImage src={PlaceholderImage} alt="Placeholder" />
            <Card.Anchor href="https://google.com/">
                <span>Best Project</span>
            </Card.Anchor>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quo est natus pariatur! Voluptates explicabo, consequatur saepe laudantium reprehenderit possimus, sapiente porro unde voluptatem molestias officia? Omnis explicabo in tempora?
            </p>
        </Card.Container>
    )
}
