import {
    grey300,
    white,
    darkBlack,
    fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: "#901B00",
        primary2Color: '#F81700',
        primary3Color: "#FF9453",
        accent1Color: "#F81700",
        //accent2Color: "#F81700",
        accent3Color: "#901B00",
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: "#901B00",
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
};