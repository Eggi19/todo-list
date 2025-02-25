import { faAngleLeft, faAngleRight, faBell, faBellConcierge, faFolderOpen, faHouse, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Dashboard() {
    return (
        <div>
            <div className='bg-red-400 flex justify-between items-center'>
                <div className='flex'>
                    <FontAwesomeIcon icon={faAngleLeft} className='w-7 h-7 text-gray-500' />
                    <FontAwesomeIcon icon={faAngleRight} className='w-7 h-7 text-gray-500' />
                </div>
                <div className="text-black flex">
                    <div className='w-12 h-12 bg-gray-700 rounded-full flex justify-center items-center'>
                        <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} className='w-6 h-6' />
                    </div>
                    <div className="relative w-full max-w-md">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white" />
                        <input
                            className="w-full h-12 pl-12 pr-12 outline-none border border-gray-300 rounded-full focus:ring-2 focus:ring-white bg-zinc-700"
                            placeholder="What do you want to play?"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 border-l border-gray-300 pl-2">
                            <FontAwesomeIcon icon={faFolderOpen} className="w-6 h-6 text-gray-500" />
                        </div>
                    </div>

                </div>
                <div className='flex'>
                    <div>
                        Explore Premium
                    </div>
                    <FontAwesomeIcon icon={faBell} className='w-6 h-6' />
                    <FontAwesomeIcon icon={faUsers} className='w-6 h-6' />
                    <div className='text-black bg-blue-400 w-10 h-10 flex justify-center items-center rounded-full'>
                        <p>E</p>
                    </div>
                </div>
            </div>
        </div>
    );
}