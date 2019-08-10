const appStyles = {
    status: {
        playing: {
            display: 'none'
        },
        winner: {
            position: "absolute",
            backgroundColor: "rgba(255,255,255,1)"
        },
        loser: {
            position: "absolue",
            backgroundColor: "rgba(0,0,0,0)",
            transition: "opacity 2s ease"
        }
    }
}

export default appStyles;