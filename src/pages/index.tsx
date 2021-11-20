import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <div className={"h-screen w-screen bg-background"}>
            <div className={"container p-4 md:pt-20 md:p-0 md:mx-auto"}>
                <div className={"bg-terminal py-10 px-10 rounded-xl"}>
                    <div className={"flex gap-4 mb-10"}>
                        <div className={"bg-red-500 rounded-xl w-5 h-5"} />
                        <div className={"bg-yellow-500 rounded-xl w-5 h-5"} />
                        <div className={"bg-green-500 rounded-xl w-5 h-5"} />
                    </div>

                    <h5 className={"text-3xl font-bold text-black/50"}>Hey, I{"'"}m</h5>
                    <h1 className={"text-4xl font-bold mt-2 mb-4"}>Conor Byrne</h1>

                    <h2 className={"text-2xl font-medium text-black/75"}>I am a developer based in Ireland with experience in Kotlin, Java and Typescript.</h2>
                </div>
            </div>
        </div>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
