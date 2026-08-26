import cameraIcon from '../assets/images/camera_icon.svg';
import planIcon from '../assets/images/plan_icon.svg';
import sensorsIcon from '../assets/images/sensors_icon.svg';
import protectionIcon from '../assets/images/protection_icon.svg';
import truckIcon from '../assets/images/carbon_delivery.svg';
import chevronUpIcon from '../assets/images/carrot-up.svg';

export const CameraIcon = ({ className = 'w-5 h-5' }) => (
  <img src={cameraIcon} className={className} alt="" />
);

export const ShieldIcon = ({ className = 'w-5 h-5' }) => (
  <img src={planIcon} className={className} alt="" />
);

export const WifiIcon = ({ className = 'w-5 h-5' }) => (
  <img src={sensorsIcon} className={className} alt="" />
);

export const PlusCircleIcon = ({ className = 'w-5 h-5' }) => (
  <img src={protectionIcon} className={className} alt="" />
);

export const ChevronUpIcon = ({ className = 'w-5 h-5' }) => (
  <img src={chevronUpIcon} className={className} alt="" />
);

export const TruckIcon = ({ className = 'w-5 h-5' }) => (
  <img src={truckIcon} className={className} alt="" />
);

export const CheckCircleIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const CheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const StarIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const TagIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth={3} />
  </svg>
);

export const ExternalLinkIcon = ({ className = 'w-3 h-3' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/** Map step icon name → component */
export const StepIconMap = {
  camera: CameraIcon,
  shield: ShieldIcon,
  wifi: WifiIcon,
  plusCircle: PlusCircleIcon,
};
