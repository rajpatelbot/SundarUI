import { useRouter } from 'next/router';
import SubHeading from '@/components/common/Headings/SubHeading';
import SubText from '@/components/common/Headings/SubText';
import MaxWidthContainer from '@/components/common/MaxWidthContainer';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function TailwindComponentDynamicRoute() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <MaxWidthContainer className="py-10">
      <div className="w-full flex flex-row justify-between items-center">
        <BsFillArrowLeftCircleFill className="text-xl cursor-pointer text-darkPurple" onClick={() => router.back()} />
        <div className="m-auto">
          <SubHeading className="text-center text-black font-bold">{`Tailwind Components - ${slug}`}</SubHeading>
          <SubText className="text-center text-cyan font-medium">{`home${router.asPath}`}</SubText>
        </div>
      </div>
    </MaxWidthContainer>
  );
}
