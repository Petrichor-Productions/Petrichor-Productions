import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Phonetic Spelling - </span>pet·ri·chor
          </h1>
          <div className="grid lg:grid-flow-col left-0 pe-0 ps-0 pt-4 max-w-xl lg:px-2 gap-y-12">
              <div key="ipa">
                <span className="font-display text-3xl font-bold tracking-tighter text-gray-600 sm:text-4xl"> /ˈpetrīˌkôr/ </span>
              </div>
              <div key="noun">
                <span className="mt-0.5 font-display text-3xl font-bold tracking-tighter text-gray-600 sm:text-4xl"> <i>noun</i> </span>
              </div>
          </div>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              <i>
              a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.
              </i>
            </p>
            <p>
                Petrichor Productions is production company focused on new works, especially musical theatre. They currently work in Canada and the UK.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Montreal, Canada', 'Cassie Muise'],
              ['London, UK', 'Tyler McKinnon'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
