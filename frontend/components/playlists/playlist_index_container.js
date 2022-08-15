import {connect} from 'react-redux';
// import { ACTIONS } from '';
// import {selectAllPokemon} from './../../reducers/selectors';
import PlaylistIndex from './playlist_index';


const mapStateToProps = state => ({
  // pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  // requestAllPokemon: () => dispatch(requestAllPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex)