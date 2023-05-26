import Image from 'next/image';
import Link from 'next/link';
import BodyText from '@/components/common/Headings/BodyText';
import Heading from '@/components/common/Headings/Heading';
import MaxWidthContainer from '@/components/common/MaxWidthContainer';
import { PrimaryButton, SecondaryButton } from '@/components/common/Button';
import PageHead from '@/components/common/PageHead';
import Card from '@/components/common/Card';
import SubHeading from '@/components/common/Headings/SubHeading';
import { WebComponents } from '@/API/ComponentsData';
import { v4 as uuidv4 } from 'uuid';
import { TbExternalLink } from 'react-icons/tb';
import { FaqsData } from '@/API/FaqsData';

const subWebComponents = WebComponents.slice(0, 8);

export default function Home() {
  return (
    <main>
      <PageHead />

      <div className="bg-offWhite h-full py-20">
        <MaxWidthContainer>
          <div className="mx-auto max-w-4xl">
            <BodyText className="pb-4 text-center text-violet-500 font-bold"> Supercharge Your Development </BodyText>
            <Heading className="font-bold mb-4 text-center">Efficient development with prebuilt components</Heading>
            <BodyText className="mb-8 text-center max-w-5xl mx-auto">
              Enhance your web and mobile app development using a versatile set of open-source components, designed with
              Tailwind CSS, XML.
            </BodyText>
            <div className="flex justify-center gap-2">
              <PrimaryButton href="#components" buttonText="Explore Components" />
              <SecondaryButton href="#!" buttonText="Contribute" />
            </div>
          </div>
        </MaxWidthContainer>
      </div>

      <MaxWidthContainer className="my-12">
        <SubHeading className="text-center font-bold">Sundar ui for different technologies</SubHeading>
        <div className="flex mt-5 gap-5 flex-col sm:flex-row">
          <Card className="flex-1 flex items-center justify-center flex-col gap-4">
            <Image src="/crossTech/html.svg" alt={'html'} height={80} width={80} />
            <BodyText>HTML</BodyText>
          </Card>
          <Card className="flex-1 flex items-center justify-center flex-col gap-4">
            <Image src="/crossTech/react.svg" alt={'react'} height={80} width={80} />
            <BodyText>React js</BodyText>
          </Card>
          <Card className="flex-1 flex items-center justify-center flex-col gap-4">
            <Image src="/crossTech/xml.svg" alt={'xml'} height={80} width={80} />
            <BodyText>XML</BodyText>
          </Card>
        </div>
      </MaxWidthContainer>

      <div className="bg-darkPurple py-12" id="components">
        <MaxWidthContainer>
          <SubHeading className="text-center text-white font-bold">Tailwind Components</SubHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-5">
            {subWebComponents.map((data) => (
              <Card key={uuidv4()}>
                <div className="w-16 m-auto">
                  <Image className="w-full" src={data.icon} alt={data.name} height={100} width={100} />
                </div>
                <Link
                  href="/tailwindcomponents/[slug]"
                  as={`/tailwindcomponents/${data.slug}`}
                  className="bg-slate-100 rounded-md mt-4 flex items-center justify-center"
                >
                  <BodyText className="text-center p-2">{data.name}</BodyText>
                  <TbExternalLink className="ml-2" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="w-full mt-5 flex items-center justify-center">
            <PrimaryButton href="/tailwindcomponents" buttonText="Explore All" className="bg-cyan" />
          </div>
        </MaxWidthContainer>

        <MaxWidthContainer className="my-10">
          <SubHeading className="text-center text-white font-bold">Mobile Components</SubHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-5">
            {subWebComponents.map((data) => (
              <Card key={uuidv4()}>
                <div className="w-16 m-auto">
                  <Image className="w-full" src={data.icon} alt={data.name} height={100} width={100} />
                </div>
                <Link
                  href="/tailwindcomponents/[slug]"
                  as={`/tailwindcomponents/${data.slug}`}
                  className="bg-slate-100 rounded-md mt-4 flex items-center justify-center"
                >
                  <BodyText className="text-center p-2">{data.name}</BodyText>
                  <TbExternalLink className="ml-2" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="w-full mt-5 flex items-center justify-center">
            <PrimaryButton href="#!" buttonText="Explore All" className="bg-cyan" />
          </div>
        </MaxWidthContainer>
      </div>

      <MaxWidthContainer className="my-12">
        <SubHeading className="text-center font-bold">FAQs</SubHeading>
        {FaqsData.map((data) => (
          <details key={uuidv4()} className="group border-l-4 border-darkPurple bg-white p-2 my-5">
            <summary className="flex items-center justify-between cursor-pointer">
              <BodyText className="font-semibold">{data.que}</BodyText>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <BodyText className="font-normal">{data.ans}</BodyText>
          </details>
        ))}
      </MaxWidthContainer>
    </main>
  );
}
