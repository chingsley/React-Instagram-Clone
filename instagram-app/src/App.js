import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';
import withAuth from './components/Authentication/withAuth';


export default withAuth(PostPage)(Login);
