import {connect} from "react-redux";
import Blog from "./Blog";
import {likePostAc, unlikePostAc} from "../../redux/blog-reducer";

const mapStateToProps = state => state.blog

const mapDispatchToProps = dispatch => ({
    likePost: postId => dispatch(likePostAc(postId)),
    unlikePost: postId => dispatch(unlikePostAc(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog)