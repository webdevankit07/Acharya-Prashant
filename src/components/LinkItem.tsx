import { IconType } from 'react-icons';

type LinkItemProps = {
    url: string;
    name?: string;
    icon?: IconType;
};

const LinkItem = ({ name, url, icon: Icon }: LinkItemProps) => {
    return (
        <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className={`cursor-pointer hover:text-red-500 w-full' ${Icon && 'text-xl'}`}
        >
            {name}
            {Icon && <Icon />}
        </a>
    );
};

export default LinkItem;
