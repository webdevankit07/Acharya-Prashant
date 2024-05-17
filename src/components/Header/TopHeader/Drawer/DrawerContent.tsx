import { ScrollArea } from '@/components/ui/scroll-area';
import { LanguageType } from '@/types';
import React from 'react';

interface DrawerContentType {
    language: LanguageType;
}

type ListItemProps = {
    url: string;
    name?: string;
};

const DrawerContent = ({ language }: DrawerContentType) => {
    return (
        <div className='hidden h-full overflow-y-auto sm:block'>
            {/* <ScrollArea className={`h-full hidden sm:block`}> */}
            <ListItem
                name={language === 'hi' ? 'श्रीमद् भगवद् गीता' : 'Gita Samagam'}
                url={`https://acharyaprashant.org/${language}/gita`}
            />
            <ListItem
                name={'Vedanta: Basics to Classics'}
                url={`https://acharyaprashant.org/${language}/sant-sarita`}
            />
            <ListItem
                name={language === 'hi' ? 'पुस्तकें' : 'AP Books'}
                url={`https://acharyaprashant.org/${language}/books`}
            />
            <ListItem
                name={language === 'hi' ? 'लेख' : 'AP Articles'}
                url={`https://acharyaprashant.org/${language}/articles`}
            />
            <ListItem
                name={language === 'hi' ? 'वीडियो श्रृंखलाएँ' : 'Video Series'}
                url={`https://acharyaprashant.org/${language}/courses`}
            />
            <ListItem
                name={language === 'hi' ? 'ए.पी. सर्किल' : 'AP Circle'}
                url={`https://acharyaprashant.org/${language}/circle`}
            />
            <ListItem
                name={language === 'hi' ? 'कॉलेज संवाद के लिए आमंत्रित करें' : 'Invite For Talk'}
                url={`https://acharyaprashant.org/${language}/invite?tIn=0`}
            />
            <ListItem
                name={language === 'hi' ? 'इंटरव्यू के लिए आमंत्रित करें' : 'Invite For an Interview'}
                url={`https://acharyaprashant.org/${language}/invite?tIn=1`}
            />
            <ListItem
                name={language === 'hi' ? 'मीडिया व प्रेस प्रकाशनी' : 'Media and Public Interaction'}
                url={`https://acharyaprashant.org/${language}/media`}
            />
            <ListItem
                name={language === 'hi' ? 'सम्पर्क करें' : 'Contact Us'}
                url={`https://acharyaprashant.org/${language}/enquiry`}
            />
            <ListItem
                name={language === 'hi' ? 'करियर' : 'Careers'}
                url={`https://acharyaprashant.org/${language}/hiring`}
            />
            <ListItem
                name={language === 'hi' ? 'योगदान करें' : 'Donate'}
                url={`https://acharyaprashant.org/${language}/contribute`}
            />

            <div className='my-3'>
                <hr />
            </div>
            <h3 className='px-3 mb-1 text-sm font-bold'>{language === 'hi' ? 'अधिक जानें' : 'MORE'}</h3>
            <ListItem
                name={language === 'hi' ? 'प्रशांतअद्वैत फाउंडेशन' : 'PrashantAdvait Foundation'}
                url={`https://acharyaprashant.org/${language}/prashantadvait-foundation`}
            />
            <ListItem
                name={language === 'hi' ? 'घर घर उपनिषद' : 'Ghar Ghar Upanishad'}
                url={`https://acharyaprashant.org/${language}/vedant`}
            />
            <ListItem
                name={language === 'hi' ? 'आचार्य प्रशांत के बारे में' : 'About Acharya Prashant'}
                url={`https://acharyaprashant.org/${language}/about`}
            />

            <div className='my-3'>
                <hr />
            </div>
            <h3 className='px-3 mb-1 text-sm font-bold'>
                {language === 'hi' ? 'विषयों को देखें' : 'EXPLORE CATEGORIES'}
            </h3>
            <ListItem
                name={language === 'hi' ? 'वेदांत - उपनिषद' : 'Vedant - Upanishads'}
                url={`https://acharyaprashant.org/${language}/video-modules/tags/1`}
            />
            <ListItem
                name={language === 'hi' ? 'वेदांत - श्रीमद्भगवद्गीता' : 'Vedant - Bhagavad Gita'}
                url={`https://acharyaprashant.org/${language}/video-modules/tags/2`}
            />
            <ListItem
                name={language === 'hi' ? 'अन्य ग्रन्थ' : 'Other Scriptures'}
                url={`hhttps://acharyaprashant.org/${language}/video-modules/tags/3`}
            />
            <ListItem
                name={language === 'hi' ? 'संत और दार्शनिक' : 'Saints and Masters'}
                url={`https://acharyaprashant.org/${language}/video-modules/tags/4`}
            />
            <ListItem
                name={language === 'hi' ? 'विविध धाराएँ' : 'Other streams'}
                url={`https://acharyaprashant.org/${language}/video-modules/tags/5`}
            />
            <ListItem
                name={language === 'hi' ? 'जीवन सम्बंधित प्रश्न' : 'Life Questions'}
                url={`https://acharyaprashant.org/${language}/video-modules/tags/6`}
            />
            <ListItem
                name={language === 'hi' ? 'तकनीकी सहायता' : 'Technical Support'}
                url={`https://acharyaprashant.org/${language}/technical-support`}
            />
            {/* </ScrollArea> */}
        </div>
    );
};

const ListItem = ({ name, url }: ListItemProps) => {
    return (
        <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className={`inline-block py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-md hover:text-slate-900 text-nowrap w-full`}
        >
            {name}
        </a>
    );
};

export default DrawerContent;
