import React, { ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={`max-auto container px-3 lg:px-12 xl:px-[4.5rem] ${className}`}>{children}</div>;
};

export default Container;
