
// import React, { useState } from 'react';
// function Profile() {
//     // const [expanded, setExpanded] = useState(false);
//     const [imageSrc, setImageSrc] = useState('https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png');
//     // const handleImageClick = () => {
//     //     setExpanded(!expanded);
//     };
//     return (
//         <div></div>
//         // <div  style={{ textAlign: 'center', }}>
//         //     <img className=""
//         //         src={imageSrc}
//         //         alt="Profile"
//         //         style={{
//         //             width: expanded ? '300px' : '100px',
//         //             height: expanded ? '43px' : '43px',
//         //             borderRadius: '50%',
//         //             cursor: 'pointer',
//         //         }}
//         //         onClick={handleImageClick}

//         //     />

//         //     {expanded && (
//         //         <div
//         //             style={{
//         //                 position: 'fixed',
//         //                 top: '50%',
//         //                 left: '50%',
//         //                 transform: 'translate(-50%, -50%)',
//         //                 zIndex: 9999,
//         //             }}
//         //         >
//         //             <img
//         //                 src={imageSrc}
//         //                 alt="Profile Expanded"
//         //                 style={{
//         //                     width: '400px',
//         //                     height: '400px',
//         //                     borderRadius: '50%',
//         //                     boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
//         //                 }}
//         //                 onClick={handleImageClick}
//         //             />
//         //         </div>
//         //     )}
//         // </div>
//     );
// }

// export default Profile;

// import React, { useState } from 'react';
// function Profile() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const handleLogin = () => {
//         // Logic to handle login (set isLoggedIn to true)
//         setIsLoggedIn(true);
//     };
//     const handleLogout = () => {
//         // Logic to handle logout (set isLoggedIn to false)
//         setIsLoggedIn(false);
//     };
//     return (
//         <div>
//             {isLoggedIn ? (
//                 <div>
//                     <img
//                         src="https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png"
//                         alt="Profile"
//                         onClick={() => console.log('View profile')} 
//                     />
//                     <button onClick={handleLogout}>Sign Out</button>
//                 </div>
//             ) : (
//                 <button onClick={handleLogin}>Log In</button>
//             )}
//         </div>
//     );
// }
// export default Profile;


import { useAuth } from '@/app/layout';
import Link from 'next/link';
import React, { useState } from 'react';

function Profile() {
    const {signOut} = useAuth()
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    // const viewProfile = () => {
       
    //     console.log('View Profile'); 
    //     setShowDropdown(false);
    // };
    const handleLogout = () => {
        console.log('Sign Out'); 
        setShowDropdown(false);
    };
    return (
        <div className='relative'>
            <img
                className='rounded-full cursor-pointer'
                src="https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png"
                alt="Profile"
                onClick={toggleDropdown}
            />
            {showDropdown && (
                <div className='absolute bg-white w-36 rounded-md z-20 p-2 border-2 right-0'>
                    <Link href="/profilee">
                        <button className='' >View Profile</button>
                    </Link>
                        <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
}
export default Profile;