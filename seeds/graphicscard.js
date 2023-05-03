const { graphicsCard } = require('../models');

const graphicsCardData = [
    {
        id: 1,
        name: 'NVIDIA - GeForce RTX 4070 12GB GDDR6X Graphics Card',
        description: 'Get equipped for stellar gaming and creating with the NVIDIA GeForce RTX 4070. Built with the ultra-efficient NVIDIA Ada Lovelace architecture. Experience fast ray tracing, AI-accelerated performance with DLSS 3, new ways to create, and much more.',
        MSRP: 599.99,
        ourPrice: 499.99,
        quantity: 3, 
        clockSpeed: '2475 megahertz',
    },
    {
        id: 2,
        name: 'XFX - Speedster MERC310 AMD Radeon RX 7900XTX 24GB GDDR6 PCI Express 4.0 Gaming Graphics Card',
        description: 'The AMD Radeon RX 7900 graphics card, powered by AMD RDNA 2 architecture, featuring 96 powerful enhanced Compute Units, the all new AMD Infinity Cache and 24GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and powerhouse resolution gaming.',
        MSRP: 999.99,
        ourPrice: 899.99,
        quantity: 5, 
        clockSpeed: '2455 megahertz',
    },
    {
        id: 3,
        name: 'XFX - SPEEDSTER MERC319 AMD Radeon RX 6950XT Core 16GB GDDR6 PCI Express 4.0 Gaming Graphics Card',
        description: 'Introducing the AMD Radeon RX 6000 Series graphics cards, featuring the breakthrough AMD RDNA 2 architecture, engineered to deliver powerhouse performance for all gamers. The AMD Radeon RX 6950 XT graphics cards power a new generation of competitive and 4K gaming with vivid visuals, and elevated experiences in every game and every frame.',
        MSRP: 999.99,
        ourPrice: 899.99,
        quantity: 5, 
        clockSpeed: '2455 megahertz',
    }
];

const seedGraphicsCard = () => graphicsCard.bulkCreate(graphicsCardData);

module.exports = seedGraphicsCard;