
import { HeroParallax } from '@/components/global/connect-parallex';
import { ContainerScroll } from '@/components/global/container-scroll-animation';
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards';
import { LampComponent } from '@/components/global/lamp';
import Navbar from '@/components/global/Navbar';
import PricingCard from '@/components/global/PricingCard';
import { Button } from '@/components/ui/button';
import { clients, plans, products } from '@/lib/constant';

export default function Home() {
    return (
        <main className="flex items-center justify-center flex-col">
            <Navbar />
            <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
                <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
                <div className="flex flex-col mt-[-100px] md:mt-[-30px]">
                    <ContainerScroll
                        titleComponent={
                            <div className="flex items-center flex-col">
                                <Button
                                    size={'lg'}
                                    className="px-4   md:p-8 mb-8 md:mb-0 text-[18px] md:text-2xl md:w-fit  border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                                        Start For Free Today
                                    </span>
                                </Button>
                                <h1 className="text-2xl px-4 md:px-0 md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                                    Automate Your Work With FlowForge
                                </h1>
                            </div>
                        }
                    />
                </div>
            </section>
            <div className="w-full  bg-gradient-to-b from-neutral-950 to-neutral-900  flex flex-col  items-center !text-white">
                <InfiniteMovingCards
                    className="md:mt-[20rem] mt-[-100px] "
                    items={clients}
                    direction="right"
                    speed="slow"
                />

                <section className='w-[-webkit-fill-available]'>
                    <HeroParallax products={products}></HeroParallax>
                </section>
                <section className="mt-[-500px]">
                    <LampComponent />
                    <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 md:mb-5 -mt-72">
                        {plans.map((plan) => (
                            <PricingCard key={plan.title} {...plan} />
                        ))}
                    </div>
                </section>
            </div>
        </main>

    );
}
