import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/common/Card';
import BodyText from '@/components/common/Headings/BodyText';
import SubHeading from '@/components/common/Headings/SubHeading';
import MaxWidthContainer from '@/components/common/MaxWidthContainer';
import { WebComponents } from '@/API/ComponentsData';
import { TbExternalLink } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';
import SubText from '@/components/common/Headings/SubText';
import { useRouter } from 'next/router';

export default function TailwindComponents() {
  const router = useRouter();

  return (
    <MaxWidthContainer className="py-10">
      <SubHeading className="text-center text-black font-bold">Tailwind Components</SubHeading>
      <SubText className="text-center text-cyan font-medium">{`home${router.pathname}`}</SubText>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {WebComponents.map((data) => (
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
    </MaxWidthContainer>
  );
}
