import { HTMLProps } from 'react';
import { IconType } from 'react-icons';

type LinkItemProps = {
    url: string;
    name?: string;
    icon?: IconType;
    clasName?: string;
};

const LinkItem = ({ name, url, icon: Icon, clasName }: LinkItemProps) => {
    return (
        <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className={`cursor-pointer hover:text-red-500 font-[500] w-full' ${Icon && 'text-xl'} ${clasName}`}
        >
            {name}
            {Icon && <Icon />}
        </a>
    );
};

export default LinkItem;
