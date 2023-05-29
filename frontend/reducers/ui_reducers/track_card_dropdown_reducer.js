import { TRACKCARD_DROPDOWN_OPEN,
    TRACKCARD_DROPDOWN_CLOSE,
} from "../../actions/ui_actions";


const trackCardDropdownReducer = (trackCardDropdownState = {}, action) => {
    Object.freeze(trackCardDropdownState) // trackCardDropdownState is a key-value pair
    switch (action.type) {
        case TRACKCARD_DROPDOWN_OPEN:
            return {isOpen: true};
        case TRACKCARD_DROPDOWN_CLOSE:
            return {isOpen: false};
        default:
            return trackCardDropdownState;
    }
}

export default trackCardDropdownReducer