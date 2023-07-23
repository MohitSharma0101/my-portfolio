export const COLORS = {
    black: {
        900: "#1E1E1E",
        500: "hsl(0 0% 16%)"

    },
    white: {
       [200]: "hsl(0deg 0% 90%)",
       [900]: "#ffffff",
    },
    blue: "deepskyblue"
};

export const LIGHT_THEME = {
    
};

export const DARK_THEME = {
    background: COLORS.black[900],
    onBackground : COLORS.black[500],
    primaryText: COLORS.white[900],
    secondaryText: COLORS.white[200],
    text: COLORS.white[900],
    accent: COLORS.blue,
};