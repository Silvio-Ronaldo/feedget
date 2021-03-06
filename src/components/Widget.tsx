import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

import { WidgetForm } from './WidgetForm';

export function Widget() {
    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 h-12 px-3 rounded-full text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-2 transition-all ease-linear duration-500'>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    );
}