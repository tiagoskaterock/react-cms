import { Container } from "react-bootstrap";
import AllPosts from "./AllPosts";

export default function Content() {
    return (
        <>
            <Container className="mt-5 text-center">
                <h1>Content</h1>
                <h1>CMS React - Laravel - Bootstrap</h1>
                <AllPosts />
            </Container>
        </>
    );
}
