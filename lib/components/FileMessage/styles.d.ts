import { MessageType, Theme, User } from '../../types';
declare const styles: ({ message, theme, user, }: {
    message: MessageType.DerivedFile;
    theme: Theme;
    user?: User | undefined;
}) => {
    container: {
        alignItems: "center";
        flexDirection: "row";
        padding: number;
        paddingRight: number;
    };
    icon: {
        tintColor: import("react-native").ColorValue;
    };
    iconContainer: {
        alignItems: "center";
        backgroundColor: string;
        borderRadius: number;
        height: number;
        justifyContent: "center";
        width: number;
    };
    name: import("react-native").TextStyle;
    size: {
        marginTop: number;
        color?: import("react-native").ColorValue | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        fontWeight?: "800" | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "900" | undefined;
        letterSpacing?: number | undefined;
        lineHeight?: number | undefined;
        textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
        textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
        textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | undefined;
        textDecorationColor?: import("react-native").ColorValue | undefined;
        textShadowColor?: import("react-native").ColorValue | undefined;
        textShadowOffset?: {
            width: number;
            height: number;
        } | undefined;
        textShadowRadius?: number | undefined;
        textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
        testID?: string | undefined;
        fontVariant?: import("react-native").FontVariant[] | undefined;
        writingDirection?: "auto" | "ltr" | "rtl" | undefined;
        backfaceVisibility?: "visible" | "hidden" | undefined;
        backgroundColor?: import("react-native").ColorValue | undefined;
        borderBottomColor?: import("react-native").ColorValue | undefined;
        borderBottomEndRadius?: number | undefined;
        borderBottomLeftRadius?: number | undefined;
        borderBottomRightRadius?: number | undefined;
        borderBottomStartRadius?: number | undefined;
        borderBottomWidth?: number | undefined;
        borderColor?: import("react-native").ColorValue | undefined;
        borderEndColor?: import("react-native").ColorValue | undefined;
        borderLeftColor?: import("react-native").ColorValue | undefined;
        borderLeftWidth?: number | undefined;
        borderRadius?: number | undefined;
        borderRightColor?: import("react-native").ColorValue | undefined;
        borderRightWidth?: number | undefined;
        borderStartColor?: import("react-native").ColorValue | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: import("react-native").ColorValue | undefined;
        borderTopEndRadius?: number | undefined;
        borderTopLeftRadius?: number | undefined;
        borderTopRightRadius?: number | undefined;
        borderTopStartRadius?: number | undefined;
        borderTopWidth?: number | undefined;
        borderWidth?: number | undefined;
        opacity?: number | undefined;
        elevation?: number | undefined;
        alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
        alignItems?: import("react-native").FlexAlignType | undefined;
        alignSelf?: "auto" | import("react-native").FlexAlignType | undefined;
        aspectRatio?: number | undefined;
        borderEndWidth?: string | number | undefined;
        borderStartWidth?: string | number | undefined;
        bottom?: string | number | undefined;
        display?: "none" | "flex" | undefined;
        end?: string | number | undefined;
        flex?: number | undefined;
        flexBasis?: string | number | undefined;
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
        flexGrow?: number | undefined;
        flexShrink?: number | undefined;
        flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
        height?: string | number | undefined;
        justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: string | number | undefined;
        margin?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginEnd?: string | number | undefined;
        marginHorizontal?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        marginStart?: string | number | undefined;
        marginVertical?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        overflow?: "visible" | "hidden" | "scroll" | undefined;
        padding?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingEnd?: string | number | undefined;
        paddingHorizontal?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
        paddingStart?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingVertical?: string | number | undefined;
        position?: "absolute" | "relative" | undefined;
        right?: string | number | undefined;
        start?: string | number | undefined;
        top?: string | number | undefined;
        width?: string | number | undefined;
        zIndex?: number | undefined;
        direction?: "ltr" | "rtl" | "inherit" | undefined;
        shadowColor?: import("react-native").ColorValue | undefined;
        shadowOffset?: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | undefined;
        shadowRadius?: number | undefined;
        transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        transformMatrix?: number[] | undefined;
        rotation?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        translateX?: number | undefined;
        translateY?: number | undefined;
        textAlignVertical?: "auto" | "center" | "top" | "bottom" | undefined;
        includeFontPadding?: boolean | undefined;
    };
    textContainer: {
        flexShrink: number;
        marginLeft: number;
    };
};
export default styles;
