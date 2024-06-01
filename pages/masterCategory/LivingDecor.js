import React from 'react'; // Ensure React is imported if you haven't done so elsewhere
 
import DealOfTheWeek from '../all-categories/DealOfTheWeek';
 
const LivingDecorPage = () => {
    const sections = [
        {
          id: 1,
          imageUrl: "/images/menuCategories/Rugs Category-100x100.webp",
          title: "Carpet | Rugs",
          listItems: [
            { name: "Carpets", path: "/all-categories/LivingDecor/Carpets" },
            { name: "Handmade Rugs", path: "/all-categories/LivingDecor/Handmade Rugs" },
            { name: "Shataranji", path: "/all-categories/LivingDecor/Shataranji" },
          ],
        },
        {
          id: 2,
          imageUrl: 'https://5.imimg.com/data5/VP/VR/ID/SELLER-2916298/9-1200x1200-1000x1000.jpg',
          title: "Cushion | Cushion Cover",
          listItems: [
            { name: "Cushion Cover", path: "/all-categories/LivingDecor/Cushion Cover" },
            { name: "Cushion", path: "/all-categories/LivingDecor/Cushion" },
          ],
        },
        {
          id: 3,
          imageUrl: 'https://alchemystory.com.au/wp-content/uploads/2022/08/F113AF9E-99B6-40A4-B795-081E6DB78E50-scaled.jpeg',
          title: "Curtain | Blind",
          listItems: [
            { name: "Printed Curtain", path: "/all-categories/LivingDecor/Printed Curtain" },
            { name: "Solid Curtain", path: "/all-categories/LivingDecor/Solid Curtain" },
            { name: "Vertical Blind", path: "/all-categories/LivingDecor/Vertical Blind" },
          ],
        },
        {
          id: 4,
          imageUrl: 'https://5.imimg.com/data5/VP/VR/ID/SELLER-2916298/9-1200x1200-1000x1000.jpg',
          title: "Quilts | Comforters | Covers",
          listItems: [
            { name: "Comfort In a Bag", path: "/all-categories/LivingDecor/Comfort In a Bag" },
            { name: "Comforter Cover", path: "/all-categories/LivingDecor/Comforter Cover" },
            { name: "Quilts|Comforters", path: "/all-categories/LivingDecor/Quilts|Comforters" },
          ],
        },
        {
          id: 5,
          imageUrl: 'https://m.media-amazon.com/images/I/714Wd4f5QbL._AC_UF1000,1000_QL80_.jpg',
          title: "Mosquito Net",
          listItems: [
            { name: "Classic Style", path: "/all-categories/LivingDecor/Classic Style" },
            { name: "Fancy Style", path: "/all-categories/LivingDecor/Fancy Style" },
          ],
        },
      ];
    
  return (
    <div>
  
      <DealOfTheWeek items={sections} />
    </div>
  );
};

export default LivingDecorPage;