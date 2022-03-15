import { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import "../style/addComment.css"

function AddComment(){
    const localProps = useLocation();

    const [authorName, setAuthorName] = useState("");
    const [content, setContent] = useState("");

    console.log(localProps.state.post)

    const addComment = () => {
    fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': "Basic ZnN3ZDpmc3dkLWNtcw=="
      },
        body: JSON.stringify({
            post: localProps.state.post.id,
            parent: 0,
            author_name: authorName,
            author_url: "",
            date: new Date().toISOString(),
            date_gmt: new Date().toISOString(),
            content: content,
            link: "",
            type: "comment",
            meta: [],
        }),
    })
        .then(response => response.json())
        .then(res => {routeChanged();});
    }

    const navigate = useNavigate();
    const routeChanged = () => {
        navigate('/full-content', {state: {post: localProps.state.post}})
    }

    return (
        <div id="addCommentRoot">
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Add Comment</h1>
                        <Form.Group className="mb-3">
                            <Form.Label>Author Name</Form.Label>
                            <Form.Control placeholder="Author Name" 
                            onChange={e => setAuthorName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control placeholder="Content" 
                            onChange={e => setContent(e.target.value)}/>
                        </Form.Group>
                        <Button onClick={addComment}>add Comment</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AddComment