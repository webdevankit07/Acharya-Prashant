import PropTypes from 'prop-types';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Accordian = ({ question, answer }) => {
    const [active, setActive] = useState('');

    return (
        <div>
            <div className={`mt-5 ${active} overflow-hidden`}>
                <div className='flex justify-between  md:w-[900px] cursor-pointer' onClick={() => setActive(active === 'active' ? '' : 'active')}>
                    <h3 className='text-lg md:text-2xl font-semibold text-gray-700'>{question}</h3>
                    <h3 className='drop-down text-5xl'>
                        <RiArrowDropDownLine />
                    </h3>
                </div>
                <div className='answer  md:w-[800px] px-2 text-lg md:text-2xl text-gray-800'>{answer}</div>
            </div>
            <div className='pt-2'>
                <hr />
            </div>
        </div>
    );
};

Accordian.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

export default Accordian;
