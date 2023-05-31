import { SONGCARD_DROPDOWN_OPEN,
    SONGCARD_DROPDOWN_CLOSE,
} from "../../actions/ui_actions";


const songCardDropdownReducer = (songCardDropdownState = {}, action) => {
    Object.freeze(songCardDropdownState) // songCardDropdownState is a key-value pair
    switch (action.type) {
        case SONGCARD_DROPDOWN_OPEN:
            return {isOpen: true};
        case SONGCARD_DROPDOWN_CLOSE:
            return {isOpen: false};
        default:
            return songCardDropdownState;
    }
}

export default songCardDropdownReducer