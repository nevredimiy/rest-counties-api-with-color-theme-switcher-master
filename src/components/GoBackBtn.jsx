import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const GoBackBtn = () => {
  return (
    
      <Link className='inline-flex gap-3 items-center hover:bg-dark-gray hover:text-white dark:hover:bg-very-dark-blue dark:hover:text-very-light-gray rounded-md shadow-lg dark:bg-dark-blue px-6 py-2 my-10 md:my-20' to='/'><AiOutlineArrowLeft /> <span>Go back</span></Link>
    
  )
}

export default GoBackBtn
