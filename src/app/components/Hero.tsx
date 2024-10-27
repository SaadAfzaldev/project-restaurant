
import {FlipWords} from "@/app/components/flip-words";
import Image from "next/image";
export default function Hero() {
    const words = ["Fine", "Luxury", "Deluxe", "Elegant" ]
    return (

        <>
            <div className={"flex flex-col md:flex-row justify-between"} id="home">
                <div className={"md:pt-20 pt-10 lg:ml-60"}>
                    <div className={"pt-20 md:text-6xl text-3xl pl-10 font-extrabold"}>Chase The New Flavour</div>
                    <div className="h-[40rem] px-4 pt-8 pl-10">
                        <div className="md:text-4xl text-2xl mx-auto font-normal text-black font-extrabold">
                            THE CORNERSTONE OF
                            <FlipWords words={words}/> <br/>
                            DINING
                        </div>
                        <p className={"pt-8"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex md:flex-row flex-col gap-5 mt-10">
                        <button
                            className="px-6 py-2 mt-10 border border-black text-white font-bold transform hover:-translate-y-1 transition duration-400 bg-black">
                            Download Our App
                        </button>
                        <button
                            className="px-6 py-2 mt-10 border border-black text-white font-bold transform hover:-translate-y-1 transition duration-400 bg-black">
                            Explore Menu
                        </button>
                        </div>
                    </div>
                </div>
                <div className={"md:mt-20 lg:mr-40"}>
                    <Image
                        src={"/welcome.png"}
                        alt={"welcomepng"}
                        width={"400"}
                        height={"400"}
                    />
                </div>
            </div>
        </>
    )
}