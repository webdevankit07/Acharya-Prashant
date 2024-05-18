import Link from 'next/link';
import LiveSessionItem from './LiveSessionItem';
import { LanguageType } from '@/types';
import InviteMenuItem from './InviteMenuItem';

interface NavbarProps {
    language: LanguageType;
    className?: string;
}

type ListItemProps = {
    url: string;
    name: string;
    active?: boolean;
    className?: string;
};

const NavBar = ({ language, className }: NavbarProps) => {
    return (
        <>
            <ul className={`flex font-semibold tracking-wide items-center *:cursor-pointer ${className}`}>
                <ListItem url='/' name={language === 'en' ? 'Home' : 'होम'} />
                <LiveSessionItem language={language} />
                <ListItem
                    url={`https://acharyaprashant.org/${language}/video-modules`}
                    name={language === 'en' ? 'Video Series' : 'वीडियो शृंखलाएँ'}
                    active
                />
                <ListItem
                    url={`https://acharyaprashant.org/${language}/books`}
                    name={language === 'en' ? 'AP Books' : 'पुस्तकें'}
                />
                <ListItem
                    url={`https://acharyaprashant.org/${language}/articles`}
                    name={language === 'en' ? 'AP Articles' : 'लेख'}
                />
                <InviteMenuItem language={language} />
                <ListItem
                    url={`https://acharyaprashant.org/${language}/media`}
                    name={language === 'en' ? 'In Media' : 'प्रेस प्रकाशिनी'}
                    className='hidden lg:inline-block'
                />
                <ListItem
                    url={`https://acharyaprashant.org/${language}/hiring`}
                    name={language === 'en' ? 'In Media' : 'करियर'}
                    className='hidden lg:inline-block'
                />
                <ListItem
                    url={`https://acharyaprashant.org/${language}/contribute`}
                    name={language === 'en' ? 'Donate' : 'योगदान करें'}
                />
            </ul>
        </>
    );
};

const ListItem = ({ url, name, active, className }: ListItemProps) => {
    return (
        <li>
            <Link
                href={url}
                target={url !== '/' ? '_blank' : '_self'}
                className={`inline-block px-1.5 lg:px-2.5 py-4 ${active && 'bg-brand-2'} ${className}`}
            >
                {name}
            </Link>
        </li>
    );
};

export default NavBar;
