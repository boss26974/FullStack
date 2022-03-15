import {Container, Row, Col, Card, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function PostCard(props) {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate('/full-content', {state: {post : props.post, categories: props.categories, tags: props.tags}})
    }

    return(
        <Container>
            <Row>
                <Col md={12}>
                <Card>
                    <Card.Body>
                        <p style={{"fontSize" : "24px"}}><b>Post Title : </b>{props.post.title.rendered}</p>
                        <p style={{"fontSize" : "24px"}}><b>Post Categories : </b>{props.categories}</p>
                        <p style={{"fontSize" : "24px"}}><b>Post Tags : </b>{props.tags}</p>
                        <Button variant="primary" style={{"marginTop" : "3vh"}} onClick={routeChange}>More Info..</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PostCard