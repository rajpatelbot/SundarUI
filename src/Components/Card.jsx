import { TbExternalLink } from 'react-icons/tb';
import { memo } from 'react';

const Card = ({ id, icon, text, url }) => {
  return (
    <a key={id} href={url}>
      <div className="p-5 rounded-md shadow-md bg-white">
        <div className="w-28 mb-5 m-auto">
          <img className="w-full" src={icon} alt={text} />
        </div>
        <div className="mt-5 bg-light rounded-lg flex items-center justify-center">
          <h3 className="text-center p-2">{text}</h3>
          <TbExternalLink className="ml-2" />
        </div>
      </div>
    </a>
  );
};

export default memo(Card);
