import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

function DropdownMenu({ ddi1, ddi2, ddi3, ddi4, ddi5 }) {
    return (
        <DropdownButton className='bg-white px-2 py-1 rounded-md' id="dropdown-basic-button" title='Choose'>
            <div className='flex flex-col gap-2 bg-white shadow-xl w-[41rem] my-2 rounded-sm'>
                <Dropdown.Item className='hover:bg-orange-400 ' href="#/action-1">{ddi1}</Dropdown.Item>
                <Dropdown.Item className='hover:bg-orange-400 ' href="#/action-2">{ddi2}</Dropdown.Item>
                <Dropdown.Item className='hover:bg-orange-400 ' href="#/action-3">{ddi3}</Dropdown.Item>
                <Dropdown.Item className='hover:bg-orange-400 ' href="#/action-4">{ddi4}</Dropdown.Item>
                <Dropdown.Item className='hover:bg-orange-400 ' href="#/action-5">{ddi5}</Dropdown.Item>
            </div>

        </DropdownButton>
    );
}

export default DropdownMenu;