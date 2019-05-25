import React from "react";
import {connect} from "react-redux";
import Blog from "./Blog";
import {fetchPosts, likePost, unlikePost} from "../../redux/blog-reducer";
import Spinner from "../Spinner/Spinner";

class BlogContainer extends React.Component {
    //
    componentDidMount() {
      this.props.fetchPosts();
    }
    //
    render() {
        if (this.props.isFetching) {
            return <Spinner/>
        }
        return <Blog {...this.props}/>
    }
}
const mapStateToProps = state => state.blog
export default connect(mapStateToProps, {likePost, unlikePost, fetchPosts})(BlogContainer)