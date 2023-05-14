import BodyText from '@/components/common/Headings/BodyText';
import Heading from '@/components/common/Headings/Heading';
import MaxWidthContainer from '@/components/common/MaxWidthContainer';
import { PrimaryButton, SecondaryButton } from '@/components/common/Button';
import PageHead from '@/components/common/PageHead';

export default function Home() {
  return (
    <main>
      <PageHead />

      <div className="bg-orange h-full py-20">
        <MaxWidthContainer>
          <div className="mx-auto max-w-4xl">
            <BodyText className="pb-4 text-center text-violet-500 font-bold"> Supercharge Your Development </BodyText>
            <Heading className="font-bold mb-4 text-center">Efficient development with prebuilt components</Heading>
            <BodyText className="mb-8 text-center max-w-5xl mx-auto">
              Enhance your web and mobile app development using a versatile set of open-source components, designed with
              Tailwind CSS, XML.
            </BodyText>
            <div className="flex justify-center gap-2">
              <PrimaryButton buttonText="Explore Components" />
              <SecondaryButton buttonText="Contribute" />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </main>
  );
}
