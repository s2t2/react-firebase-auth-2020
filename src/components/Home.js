

import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'

//import { useAuth } from "../contexts/FirebaseAuth"

export default function Home() {
    //const { currentUser } = useAuth()

    return (
        <Container>
            <h1>Home</h1>

            <p class="lead">Welcome home...</p>

            <Jumbotron>
                <h2>Hello, world!</h2>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </Container>
    )
}
