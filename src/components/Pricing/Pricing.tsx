import { PriceCard } from '../PriceCard/PriceCard'

export const Pricing = () => {
  return (
    <div className='flex flex-col items-center bg-elite-black p-4 -z-50'>
        <div className="mb-2 mt-12 text-center z-50">
            <h1 className="mb-4 text-[50px] bg-gradient-to-r from-bright-blue to-bright-pink text-transparent bg-clip-text font-bold">Pricing</h1>
            <p className="text-[15px] text-lite-gray">Choose the right price for your needs</p>

        </div>
        <div className="flex flex-col gap-8 p-10 xl:flex-row z-50">
            <PriceCard
                color="bg-bright-blue"
                name = "Basic"
                description="Get started with the basic plan"
                features={["1 User", "Upto 20 Free Links", "Track analytics of your shortened links"]}
                btnText="Start Free Plan"
            />
            <PriceCard
                color="bg-gradient-to-r from-bright-blue to-bright-pink"
                name = "Pro"
                description="Get started with the basic plan"
                features={["Collaborate with upto 5 users", "Enjoy upto 200 free links", "Custom Short Links"]}
                btnText="Start Pro Plan"
            />
            <PriceCard
                color="bg-bright-pink"
                name = "Enterprise"
                description="Get started with the basic plan"
                features={["1 User", "2 Projects", "20 Free Links"]}
                btnText="Start Enterprise Plan"
            />
        </div>
    </div>
  )
}
