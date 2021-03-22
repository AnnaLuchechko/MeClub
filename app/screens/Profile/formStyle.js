import { Platform } from "react-native";

const LABEL_COLOR = "#000000";
const INPUT_COLOR = "#333333";
const INPUT_BG_COLOR = "#ffffff";
const ERROR_COLOR = "#a94442";
const HELP_COLOR = "#999999";
const BORDER_COLOR = "#000000";
const DISABLED_COLOR = "#777777";
const DISABLED_BACKGROUND_COLOR = "#eeeeee";
const FONT_SIZE = 14;
const FONT_WEIGHT = "500";

const stylesheet = Object.freeze({
    fieldset: {},
    // the style applied to the container of all inputs
    formGroup: {
        normal: {
            marginBottom: 0
        },
        error: {
            marginBottom: 5
        }
    },
    controlLabel: {
        normal: {
            color: LABEL_COLOR,
            fontSize: FONT_SIZE,
            marginBottom: 7,
            fontWeight: FONT_WEIGHT
        },
        // the style applied when a validation error occours
        error: {
            color: ERROR_COLOR,
            fontSize: FONT_SIZE,
            marginBottom: 7,
            fontWeight: FONT_WEIGHT
        }
    },
    helpBlock: {
        normal: {
            color: HELP_COLOR,
            fontSize: FONT_SIZE,
            marginBottom: 2
        },
        // the style applied when a validation error occours
        error: {
            color: HELP_COLOR,
            fontSize: FONT_SIZE,
            marginBottom: 2
        }
    },
    errorBlock: {
        fontSize: FONT_SIZE,
        marginBottom: 2,
        color: ERROR_COLOR
    },
    textboxView: {
        normal: {},
        error: {},
        notEditable: {}
    },
    textbox: {
        normal: {
            color: INPUT_COLOR,
            fontSize: FONT_SIZE,
            height: 32,
            paddingVertical: 0,
            paddingHorizontal: 10,
            borderRadius: 4,
            borderColor: BORDER_COLOR,
            borderWidth: 2,
            marginBottom: 2,
            backgroundColor: INPUT_BG_COLOR
        },
        // the style applied when a validation error occours
        error: {
            color: INPUT_COLOR,
            fontSize: FONT_SIZE,
            height: 32,
            paddingVertical: 0,
            paddingHorizontal: 10,
            borderRadius: 4,
            borderColor: ERROR_COLOR,
            borderWidth: 4,
            marginBottom: 2,
            backgroundColor: INPUT_BG_COLOR
        },
        // the style applied when the textbox is not editable
        notEditable: {
            fontSize: FONT_SIZE,
            height: 32,
            paddingVertical: 0,
            paddingHorizontal: 10,
            borderRadius: 4,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
            marginBottom: 2,
            color: DISABLED_COLOR,
            backgroundColor: DISABLED_BACKGROUND_COLOR
        }
    },
    checkbox: {
        normal: {
            marginBottom: 4
        },
        // the style applied when a validation error occours
        error: {
            marginBottom: 4
        }
    },
    pickerContainer: {
        normal: {
            marginBottom: 4,
            borderRadius: 4,
            borderColor: BORDER_COLOR,
            borderWidth: 1
        },
        error: {
            marginBottom: 4,
            borderRadius: 4,
            borderColor: ERROR_COLOR,
            borderWidth: 1
        },
        open: {
            // Alter styles when select container is open
        }
    },
    select: {
        normal: Platform.select({
            android: {
                paddingLeft: 7,
                color: INPUT_COLOR
            },
            ios: {}
        }),
        // the style applied when a validation error occours
        error: Platform.select({
            android: {
                paddingLeft: 7,
                color: ERROR_COLOR
            },
            ios: {}
        })
    },
    pickerTouchable: {
        normal: {
            height: 44,
            flexDirection: "row",
            alignItems: "center"
        },
        error: {
            height: 44,
            flexDirection: "row",
            alignItems: "center"
        },
        active: {
            borderBottomWidth: 1,
            borderColor: BORDER_COLOR
        }
    },
    pickerValue: {
        normal: {
            fontSize: FONT_SIZE,
            paddingLeft: 7
        },
        error: {
            fontSize: FONT_SIZE,
            paddingLeft: 7
        }
    },
    datepicker: {
        normal: {
            marginBottom: 4
        },
        // the style applied when a validation error occours
        error: {
            marginBottom: 4
        }
    },
    dateTouchable: {
        normal: {},
        error: {}
    },
    dateValue: {
        normal: {
            color: INPUT_COLOR,
            fontSize: FONT_SIZE,
            padding: 7,
            marginBottom: 5
        },
        error: {
            color: ERROR_COLOR,
            fontSize: FONT_SIZE,
            padding: 7,
            marginBottom: 5
        }
    },
    buttonText: {
        fontSize: 16,
        color: "white",
        alignSelf: "center"
    },
    button: {
        height: 32,
        backgroundColor: "#48BBEC",
        borderColor: "#48BBEC",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: "stretch",
        justifyContent: "center"
    }
});

export default stylesheet;