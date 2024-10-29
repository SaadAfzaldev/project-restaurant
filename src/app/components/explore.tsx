import React from 'react'
import { CardBody,CardContainer,CardItem } from './3dcard';
import Image from "next/image";
import Link from "next/link";
export default function Explore() {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-2xl md:text-6xl font-extrabold pt-20 md:pt-10'>
                Satisfy Your Curiosity Explore Our Delicious Dishes!
            </div>
            <p className='mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam quis optio id, fuga molestias impedit eveniet qui reprehenderit eius est repudiandae nisi expedita quam possimus architecto ipsam hic quibusdam.
            </p>
            <div className='flex flex-col md:flex-row md:flex-wrap md:gap-6'>
                <CardContainer className="inter-var w-screen sm:w-[30rem] p-1">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex justify-ec">
                    <CardItem
                        translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white items-center pt-20"
                    >
                        Grilled Mackerel Steak
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                        src="/food3-free-img.png"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                    </CardItem>
                </CardBody>
                </CardContainer>
                <CardContainer className="inter-var w-screen sm:w-[30rem] p-1">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex">
                        <CardItem
                            translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white pt-20"
                        >
                            Spaghetti with Grilled Mackerel
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/food-dish-05.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
                
            </div>
            <div className='flex flex-col md:flex-row md:flex-wrap md:gap-5 '>
                <CardContainer className="inter-var w-screen sm:w-[30rem] p-1">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex">
                        <CardItem
                            translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white pt-20"
                        >
                            Chicken in Teriyaki Sauce
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/food4-free-img.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var w-screen sm:w-[30rem] p-1">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex">
                        <CardItem
                            translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white pt-20"
                        >
                            Chicken Nuggets with Potato
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/food-dish-06.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    </>
  )
}

