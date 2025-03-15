
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Lato', sans-serif",
        h1: { fontSize: "56px", fontWeight: 700, lineHeight: "120%" }, // Headlines 1 (Desktop)
        h2: { fontSize: "40px", fontWeight: 700, lineHeight: "120%" }, // Headlines 2
        h3: { fontSize: "28px", fontWeight: 700, lineHeight: "120%" }, // Headlines 3
        h4: { fontSize: "20px", fontWeight: 700, lineHeight: "120%" }, // Headlines 4
        body1: { fontSize: "18px", fontWeight: 400, lineHeight: "140%" }, // Body 1
        body2: { fontSize: "16px", fontWeight: 400, lineHeight: "140%" }, // Body 2
        subtitle1: { fontSize: "14px", fontWeight: 400, lineHeight: "140%" }, // Body 3
        button: { fontSize: "20px", fontWeight: 500, lineHeight: "24px" }, // Button Default
        caption: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" }, // Text Placeholder
    },
    palette: {
        primary: { main: "#CA3227" }, // OilRed
        secondary: { main: "#FAC1C0" }, // OilPink
        warning: { main: "#FFD748" }, // Yellow (???)
        error: { main: "#E62D2D" }, // Stroke Error
        success: { main: "#85C83E" }, // Stroke Success
        background: {
            default: "#EDEEF", // BG
            paper: "#FFFFFF", // White
        },
        text: {
            primary: "#1F2227", // Black
            secondary: "#898F98", // Gray 200
            disabled: "#B8BBBF", // Gray 100
        },
        grey: {
            50: "#D6D7D9", // Gray 50
            100: "#B8BBBF", // Gray 100
            200: "#898F98", // Gray 200
            300: "#484D57", // Gray 300
            400: "#2E323A", // Gray 400
            500: "#1A1C21", // Gray 500
        },
        action: {
            disabled: "#D2D2D2", // Form Text Disabled
            hover: "#AEBB68", // Stroke Hover
            focus: "#1A7B03", // Stroke Focused
        },
    },
    spacing: 4, // Định nghĩa spacing unit (mặc định là 8, nhưng ảnh của bạn dùng 4)
    breakpoints: {
        values: {
            xs: 0,
            sm: 640, // Mobile
            md: 1024, // Tablet
            lg: 1280, // Desktop
            xl: 1920, // Large Desktop
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg", // Mặc định là desktop grid
            },
            styleOverrides: {
                root: {
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    "@media (min-width: 1280px)": {
                        paddingLeft: "190px", // Margin desktop
                        paddingRight: "190px",
                    },
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    gap: "24px", // Gutters theo ảnh
                },
            },
        },
    },
})

export default theme;