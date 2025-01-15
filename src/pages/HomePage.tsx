
const HomePage = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <img
                    src="/images/actuliLogo.png"
                    alt="logo"
                    style={{
                        width: "25vw",
                        maxWidth: "500px",
                        height: "auto", 
                    }}
                />
                <h2>Welcome to</h2>
                <h1>Actuli</h1>
                <h2>Self Actualization. Realized.</h2>
            </div>
        </>
    )
}

export default HomePage;