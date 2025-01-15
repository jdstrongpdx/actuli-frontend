
const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <img
                    src="/images/actuliLogo.png"
                    alt="logo"
                    className="mx-auto rounded-3xl w-[25vw] max-w-[400px] h-auto"
                />
                <h2 className="text-lg font-medium text-gray-500 text-center">Welcome to</h2>
                <h1 className="text-4xl font-bold text-blue-700 text-center">Actuli</h1>
                <h2 className="text-lg font-medium text-gray-500 text-center">Self Actualization. Realized.</h2>
            </div>
        </>
    )
}

export default HomePage;