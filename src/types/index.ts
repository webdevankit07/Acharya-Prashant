export type LanguageType = 'hi' | 'en';

export type ValidationError = {
    message: string;
    errors: Record<string, string[]>;
};

export type HeroDetailsType = {
    id: string;
    contentType: string;
    title: string;
    subtitle: string;
    description: string;
    language: string;
    thumbnail: {
        id: string;
        version: 1;
        domain: string;
        basePath: string;
        key: string;
        qualities: number[];
        aspectRatio: number;
    };
    coursesCount: number;
    tagIds: number[];
};

export type CourseType = {
    id: string;
    contentType: string;
    title: string;
    subtitle: string;
    language: string;
    amount: number;
    originalAmount: number;
    thumbnail: {
        id: string;
        version: number;
        domain: string;
        basePath: string;
        key: string;
        qualities: number[];
        aspectRatio: number;
    };
    series: {
        id: string;
        order: {
            seq: number;
        };
    };
    courseHours: number;
};

export type RelatedContentType = {
    id: string;
    contentType: string;
    title: string;
    subtitle: string;
    language: string;
    thumbnail: {
        id: string;
        version: number;
        domain: string;
        basePath: string;
        key: string;
        qualities: number[];
        aspectRatio: number;
    };
    coursesCount: number;
    relatedType: number;
};

export type FaqType = {
    question: string;
    answer: string;
};

export type TagType = {
    name: {
        hindi: string;
        english: string;
    };
    tagId: number;
    parent: number;
    level: number;
    hasChildren: boolean;
};

export type TagResponseType = TagType[][];

export type ResDataType = { details: HeroDetailsType; courses: CourseType[]; relatedContent: RelatedContentType[] };
