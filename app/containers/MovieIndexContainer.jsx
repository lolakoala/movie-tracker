import { connect } from 'react-redux';
import { fetchData, postFavorite } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = store => ({
  movieList: store.movieList,
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({
  retrieveMovies: () => {
    dispatch(fetchData());
  },
  sendFavorite: (userId, movieObj) => {
    dispatch(postFavorite(userId, movieObj));
  },
  getAllFaves: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
