import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import "../style/fullContent.css"

function FullContentPage(){
  const localProps = useLocation();
  const [authorname, setAuthorName] = useState("")
  const [allComment, setAllComment] = useState([])

  const filterComment = (array) => {
      var newArray = array.filter((comment) => {
          return comment.post === localProps.state.post.id
      })
      setAllComment(newArray)
  }

  let navigate = useNavigate();
    const routeChange = () =>{ 
        navigate('/addComment', {state: {post: localProps.state.post}})
    }

  useEffect(() => {
  fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/comments")
    .then((res) => {res.json()
      .then((comments) => {filterComment(comments)})
    })
    .catch((err) => {console.log("failed to test")})

    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users/" + localProps.state.post.author)
    .then((res) => {res.json()
      .then((user) => {setAuthorName(user.name)})
    })
    .catch((err) => {console.log("failed to test")})
  }, [])

  console.log(localProps.state.post)
  console.log(authorname)

    return(
      <div>
        <Container>
          <Row>
            <Col md={12} id="fullContent">
              <h1 id="fullContentTitle">{localProps.state.post.title.rendered}</h1>
              <p style={{"fontSize" : "24px"}}><b>Categories : </b> {localProps.state.categories}</p>
              <p style={{"fontSize" : "24px"}}><b>Tags : </b> {localProps.state.tags}</p>
              <p style={{"fontSize" : "24px"}}><b>Author Name : </b>{authorname}</p>
              <p style={{"fontSize" : "24px"}}><b>Create Date : </b>{localProps.state.post.date}</p>
              <div dangerouslySetInnerHTML={{__html: localProps.state.post.content.rendered}} />
            </Col>
            <Col md={12} id="allComment">
              <h1 style={{"marginBottom": "5vh"}}>{allComment.length} Comment</h1>
              {allComment.map((comment) => {
                return(
                  <Card key={comment.id} id="comment">
                    <Card.Body>
                      <Card.Title>Author Name : {comment.author_name}</Card.Title>
                      <Card.Text>{comment.date}</Card.Text>
                      <div dangerouslySetInnerHTML={{__html: comment.content.rendered}} />
                    </Card.Body>
                  </Card>
                )
            })}
            <Button onClick={routeChange}>add comment</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default FullContentPage