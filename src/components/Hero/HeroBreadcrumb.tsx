import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { LanguageType } from '@/types';

const HeroBreadcrumb = ({ language }: { language: LanguageType }) => {
    return (
        <Breadcrumb className='my-5 font-bold'>
            <BreadcrumbList>
                <BreadcrumbItem className='font-normal'>
                    <BreadcrumbLink
                        href={`https://acharyaprashant.org/${language}/video-modules`}
                        target='_blank'
                        className='hover:text-brand-2'
                    >
                        {language === 'hi' ? 'होम' : 'Home'}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='-mx-1' />
                <BreadcrumbItem>
                    <BreadcrumbPage className='text-slate-600'>संतवाणी</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default HeroBreadcrumb;
