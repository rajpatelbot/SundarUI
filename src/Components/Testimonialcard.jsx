import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { memo } from 'react';

const Testimonialcard = ({ key, name, msg, url, photo }) => {
  return (
    <div key={key} className="p-10 rounded-md shadow-md bg-white">
      <div className="w-28 mb-5 m-auto">
        <img className="w-full rounded-full" src={photo} alt={name} />
      </div>
      <a className="mt-2" href={url}>
        <h3 className="text-center p-2">{name}</h3>
      </a>
      <p className="mt-2">
        <RiDoubleQuotesL className="inline text-4xl mr-2 text-violet" />
        {msg}
        <RiDoubleQuotesR className="inline text-4xl ml-2 text-violet" />
      </p>
    </div>
  );
};

export default memo(Testimonialcard);
