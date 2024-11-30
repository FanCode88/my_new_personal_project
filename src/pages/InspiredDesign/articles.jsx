import {
    MdOutlineProductionQuantityLimits,
    MdDeveloperBoard,
    MdDesktopMac,
    MdShoppingBag,
    MdWebAsset,
} from 'react-icons/md';
import { DiTechcrunch } from 'react-icons/di';
import { GiArtificialIntelligence } from 'react-icons/gi';
import {
    SiWeb3Dotjs,
    SiMaterialdesignicons,
    SiGooglemarketingplatform,
} from 'react-icons/si';
import { TfiAgenda } from 'react-icons/tfi';
import { IoMdPeople, IoIosAppstore } from 'react-icons/io';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { FaMobile } from 'react-icons/fa';

const article = [
    {
        id: 1,
        name: 'Productivity',
        icon: <MdOutlineProductionQuantityLimits />,
        path: 'productivity',
    },
    { id: 2, name: 'Tech', icon: <DiTechcrunch />, path: 'tech' },
    { id: 3, name: 'Assets', icon: <MdWebAsset />, path: 'assets' },
    {
        id: 4,
        name: 'Artificial Intelligence',
        icon: <GiArtificialIntelligence />,
        path: 'ai',
    },
    { id: 5, name: 'Web3', icon: <SiWeb3Dotjs />, path: 'web3' },
    {
        id: 6,
        name: 'Design Tools',
        icon: <SiMaterialdesignicons />,
        path: 'design-tools',
    },
    {
        id: 7,
        name: 'Development Tools',
        icon: <MdDeveloperBoard />,
        path: 'development-tools',
    },
    {
        id: 8,
        name: 'Marketing',
        icon: <SiGooglemarketingplatform />,
        path: 'marketing',
    },
    { id: 9, name: 'Portfolio', icon: <TfiAgenda />, path: 'portfolio' },
    { id: 10, name: 'Agency', icon: <IoMdPeople />, path: 'agency' },
    { id: 11, name: 'E-commerce', icon: <MdShoppingBag />, path: 'ecommerce' },
    { id: 12, name: 'Finance', icon: <CiMoneyCheck1 />, path: 'finance' },
    { id: 13, name: 'Web Apps', icon: <IoIosAppstore />, path: 'web-apps' },
    {
        id: 14,
        name: 'Desktop Apps',
        icon: <MdDesktopMac />,
        path: 'desktop-apps',
    },
    { id: 15, name: 'Mobile Apps', icon: <FaMobile />, path: 'mobile-apps' },
];

export default article;
