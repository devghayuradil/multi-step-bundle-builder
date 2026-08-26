import wyze_cam_v4 from '../assets/images/wyze_cam_v4.png';
import wyze_cam_v4_v0 from '../assets/images/wyze_cam_v4_v0.png';
import wyze_cam_v4_v1 from '../assets/images/wyze_cam_v4_v1.png';
import wyze_cam_v4_v2 from '../assets/images/wyze_cam_v4_v2.png';

import wyze_cam_pan_v3 from '../assets/images/wyze_cam_pan_v3.png';
import wyze_cam_pan_v3_v0 from '../assets/images/wyze_cam_pan_v3_v0.png';
import wyze_cam_pan_v3_v1 from '../assets/images/wyze_cam_pan_v3_v1.png';

import wyze_cam_floodlight_v2 from '../assets/images/wyze_cam_foodlight_v2.png';
import wyze_cam_floodlight_v2_v0 from '../assets/images/wyze_cam_foodlight_v2_v0.png';

import wyze_duo from '../assets/images/wyze_duo.png';
import wyze_battery from '../assets/images/wyze_battery.png';

import plan_icon from '../assets/images/plan_icon.svg';

import wyze_sense_motion_sensor from '../assets/images/wyze_sense_motion_sensor.png';
import wyze_sense_hub from '../assets/images/wyze_sense_hub.png';

import wyze_microsd_card from '../assets/images/wyze_microsd_card.png';

const data = {
  "steps": [
    {
      "id": "cameras",
      "stepNumber": 1,
      "label": "Choose your cameras",
      "icon": "camera",
      "nextStepLabel": "Choose your plan",
      "products": [
        {
          "id": "wyze-cam-v4",
          "name": "Wyze Cam v4",
          "description": "The ultimate Wyze Cam. It's a top-rated 4K security cam with color night vision and AI-powered person detection.",
          "badge": "Save 22%",
          "compareAtPrice": 35.98,
          "price": 27.98,
          "learnMoreUrl": "#",
          "image": wyze_cam_v4,
          "variants": [
            { "id": "white", "label": "White", "image": wyze_cam_v4_v0 },
            { "id": "black", "label": "Black", "image": wyze_cam_v4_v2 }
          ]
        },
        {
          "id": "wyze-cam-pan-v3",
          "name": "Wyze Cam Pan v3",
          "description": "Get your 360° with our most feature-packed 4K security cam, color night vision, and AI motion tracking.",
          "badge": "Save 22%",
          "compareAtPrice": 44.98,
          "price": 34.98,
          "learnMoreUrl": "#",
          "image": wyze_cam_pan_v3,
          "variants": [
            { "id": "white", "label": "White", "image": wyze_cam_pan_v3_v0 },
            { "id": "black", "label": "Black", "image": wyze_cam_pan_v3_v1 }
          ]
        },
        {
          "id": "wyze-cam-floodlight-v2",
          "name": "Wyze Cam Floodlight v2",
          "description": "Two cameras, two colors. Mount it high for wide angle coverage with 2600 lumen floodlights.",
          "badge": "Save 22%",
          "compareAtPrice": 89.98,
          "price": 69.98,
          "learnMoreUrl": "#",
          "image": wyze_cam_floodlight_v2,
          "variants": [
            { "id": "white", "label": "White", "image": wyze_cam_floodlight_v2 },
            { "id": "black", "label": "Black", "image": wyze_cam_floodlight_v2_v0  }
          ]
        },
        {
          "id": "wyze-duo-cam-doorbell",
          "name": "Wyze Duo Cam Doorbell",
          "description": "Two cameras, two views. See who's at the door from top to bottom simultaneously.",
          "badge": null,
          "compareAtPrice": null,
          "price": 74.99,
          "learnMoreUrl": "#",
          "image": wyze_duo,
          "variants": []
        },
        {
          "id": "wyze-battery-cam-pro",
          "name": "Wyze Battery Cam Pro",
          "description": "Powerful pan-tilt, everything in 2.5K+DP. No power outlet or subscription required. Learn More",
          "badge": null,
          "compareAtPrice": 89.98,
          "price": 59.99,
          "learnMoreUrl": "#",
          "image": wyze_battery,
          "variants": []
        }
      ]
    },
    {
      "id": "plan",
      "stepNumber": 2,
      "label": "Choose your plan",
      "icon": "shield",
      "nextStepLabel": "Choose your sensors",
      "products": [
        {
          "id": "cam-unlimited",
          "name": "Cam Unlimited",
          "description": "Unlimited cameras, 14-day cloud storage, AI-powered person, pet, package, and vehicle detection.",
          "badge": "Save 16%",
          "compareAtPrice": 119.88,
          "price": 99.99,
          "priceLabel": "$9.99/mo",
          "learnMoreUrl": "#",
          "image": plan_icon,
          "variants": [],
          "isPreSelected": true,
          "preSelectedQty": 1
        }
      ]
    },
    {
      "id": "sensors",
      "stepNumber": 3,
      "label": "Choose your sensors",
      "icon": "wifi",
      "nextStepLabel": "Add extra protection",
      "products": [
        {
          "id": "wyze-sense-motion",
          "name": "Wyze Sense Motion Sensor",
          "description": "Detects motion to trigger automations, record clips, and send alerts.",
          "badge": null,
          "compareAtPrice": 9.99,
          "price": 7.99,
          "learnMoreUrl": "#",
          "image": wyze_sense_motion_sensor,
          "variants": [],
          "isPreSelected": true,
          "preSelectedQty": 2
        },
        {
          "id": "wyze-sense-hub",
          "name": "Wyze Sense Hub (Required)",
          "description": "The central hub for all Wyze Sense devices. Required for sensor use. Included free with qualifying plan.",
          "badge": null,
          "compareAtPrice": 19.98,
          "price": 29.99,
          "priceLabel": "FREE",
          "isFree": true,
          "learnMoreUrl": "#",
          "image": wyze_sense_hub,
          "variants": [],
          "isPreSelected": true,
          "preSelectedQty": 1
        }
      ]
    },
    {
      "id": "protection",
      "stepNumber": 4,
      "label": "Add extra protection",
      "icon": "plusCircle",
      "nextStepLabel": null,
      "products": [
        {
          "id": "wyze-microsd-256",
          "name": "Wyze MicroSD Card (256GB)",
          "description": "Store local video recordings with this high-endurance 256GB microSD card. No subscription required.",
          "badge": null,
          "compareAtPrice": 19.98,
          "price": 15.96,
          "learnMoreUrl": "#",
          "image": wyze_microsd_card,
          "variants": [],
          "isPreSelected": true,
          "preSelectedQty": 1
        }
      ]
    }
  ]
};

export default data;
