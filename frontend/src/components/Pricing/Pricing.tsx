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
                color="bg-lite-gray"
                name = "Basic"
                description="Get started with the basic plan"
                features={["1 User", "Upto 20 Free Links", "Analytics"]}
                btnText="Start Free Plan"
            />
            <PriceCard
                color="bg-lite-gray"
                name = "Pro"
                price= "5"
                description="Get started with an advanced plan"
                features={["Upto 5 users", "Enjoy upto 200 Short URLs", "Custom Short Links", "Everything in the Basic Plan"]}
                btnText="Start Pro Plan"
            />
            <PriceCard
                color="bg-lite-gray"
                name = "Enterprise"
                price="20"
                description="For big businesses"
                features={["Unlimited Users", "Unlimited Short URLs", "Custom Short Links", "Everything in the Pro plan"]}
                btnText="Start Enterprise Plan"
            />
        </div>
    </div>
  )
}
