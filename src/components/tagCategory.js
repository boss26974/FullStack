import { useEffect, useState } from "react";
import PostCard from "./postCard";
import {Container, Row, Col, Form} from "react-bootstrap"
import "../style/tagCategory.css"

function PostContent() {
    const [allpost, setAllPost] = useState([])
    const [allcatagories, setAllCategories] = useState([])
    const [alltags, setAllTags] = useState([])

  useEffect(() => {
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
    .then((res) => {res.json()
      .then((post) => {setAllPost(post)})
    })
    .catch((err) => {console.log("failed to test")})

    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/categories")
    .then((res) => {res.json()
      .then((categorie) => {
        setAllCategories(categorie)
      })
    })
    .catch((err) => {console.log("failed to test")})

    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/tags")
    .then((res) => {res.json()
      .then((tag) => {
        setAllTags(tag)
      })
    })
    .catch((err) => {console.log("failed to test")})

  }, [])

  const findtags = (tagsArray = []) => {
    let tags = []
    let result = ""
    tagsArray.map((tagId) => {
      alltags.map((tag) => {
        if(tagId === tag.id){
          tags.push(tag.name)
        }
        return 0;
      })
      return 0;
    })
    if(tags.length === 0){
      result = "No Tags"
    }
    tags.map((tagName, i) => {
      if(i === (tags.length - 1 )){
        result = result + tagName
      }
      else{
        result = result + tagName + ", "
      }
      return 0
    })
    return result
  }

  const findCategories = (categoriesArray = []) => {
    let category = []
    let result = ""
    categoriesArray.map((catId) => {
      allcatagories.map((categories) => {
        if(catId === categories.id){
          category.push(categories.name)
        }
        return 0;
      })
      return 0;
    })
    if(category.length === 0){
        result = "No Categories"
    }
    category.map((categoriesName, i) => {
      if(i === (category.length - 1 )){
        result = result + categoriesName
      }
      else{
        result = result + categoriesName + ", "
      }
      return 0;
    })
    return result
  }

    return(
        <div id="allPostTitle">
        <Container>
          <Row>
            <Col md={12}>
              <h1 style={{"textAlign" : "center"}}>Tag/Categories Page</h1>
            </Col>
            {allpost.map((post) => {
              return (
                <Col md={12} id="postCard" key={post.id}>
                  <PostCard 
                  post={post} 
                  categories={findCategories(post.categories)}
                  tags={findtags(post.tags)}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    )
}

export default PostContent