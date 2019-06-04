import React from  "react";
import {connect} from "react-redux";
import Post from "./Post";
import Spinner from "../Spinner/Spinner";
import {fetchPost} from "../../redux/post-reduser";
import {withRouter} from "react-router-dom";
import Error from "../Error/Error";
class PostContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render () {
        if (this.props.error) {
            return <Error error={this.props.error}/>
        }
        if (this.props.isFetching) {
            return <Spinner/>
        }
        return <Post {...this.props}/>
    }
}

const mapStateToProps = state => state.post;

export default connect(mapStateToProps, {fetchPost})(withRouter(PostContainer))