import SubText from '../common/Headings/SubText';
import MaxWidthContainer from '../common/MaxWidthContainer';
import { BsFillRocketTakeoffFill, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-offWhite">
      <MaxWidthContainer className="w-full">
        <section className="flex justify-between items-center">
          <SubText className="py-5 flex items-center gap-2 font-semibold">
            <BsFillRocketTakeoffFill size={20} />
            Powered by
            <a href="https://www.github.com/rajpatelbot" target="_blank" className="text-gray-600 hover:text-gray-800">
              Raj Patel
            </a>
          </SubText>

          <div className="flex items-center gap-5">
            <BsGithub className="cursor-pointer text-slate-800" size={20} />
            <BsLinkedin className="cursor-pointer text-sky-600" size={20} />
            <BsTwitter className="cursor-pointer text-sky-500" size={20} />
          </div>
        </section>
      </MaxWidthContainer>
    </footer>
  );
}
