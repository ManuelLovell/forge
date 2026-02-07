/**
 * Mock BIDs (Block IDs) for testing
 * These match the BIDs from defaultgamesystem.json
 */
export const MOCK_BIDS = {
  CURRENT_HP: 'Z005',      // Hit Points
  MAX_HP: 'Z006',          // Max Hit Points
  ARMOR_CLASS: 'Z007',     // Armor Class
  ACTIONS: 'Z035',         // Actions (abilities list)
};

/**
 * Extension ID for metadata keys
 */
export const EXTENSION_ID = 'com.battle-system.forge';

/**
 * Mock Item data for testing the initiative list
 * These simulate actual scene items with combat tracker metadata
 * Note: Cast as any to bypass type checking since actual Items have additional properties
 */
export const mockSceneItems: any[] = [
  {
    type: 'IMAGE',
    id: '1',
    name: 'Goblin Archer',
    position: { x: 1200, y: 1200 },
    rotation: 0,
    scale: { x: 1, y: 1 },
    visible: true,
    locked: false,
    createdUserId: 'test-user-1',
    zIndex: 1000,
    lastModified: '2026-02-06T10:00:00.000Z',
    lastModifiedUserId: 'test-user-1',
    metadata: {
      [`${EXTENSION_ID}/${MOCK_BIDS.CURRENT_HP}`]: '12',
      [`${EXTENSION_ID}/${MOCK_BIDS.MAX_HP}`]: '15',
      [`${EXTENSION_ID}/${MOCK_BIDS.ARMOR_CLASS}`]: '13',
      [`${EXTENSION_ID}/${MOCK_BIDS.ACTIONS}`]: [
        { name: 'Multiattack', description: 'The goblin makes two attacks.' },
        { name: 'Shortbow', description: '+4 to hit, 1d6+2 damage' }
      ],
      [`${EXTENSION_ID}/initiative`]: 20,
    },
    image: {
      width: 200,
      height: 200,
      mime: 'image/png',
      url: 'https://example.com/goblin.png'
    },
    grid: {
      dpi: 200,
      offset: { x: 100, y: 100 }
    },
    text: {
      richText: [{ type: 'paragraph', children: [{ text: '' }] }],
      plainText: '',
      style: {
        padding: 8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'CENTER',
        textAlignVertical: 'BOTTOM',
        fillColor: '#ffffff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: 'PLAIN',
      width: 'AUTO',
      height: 'AUTO'
    },
    textItemType: 'LABEL',
    layer: 'CHARACTER'
  },
  {
    type: 'IMAGE',
    id: '2',
    name: 'Knight',
    position: { x: 1400, y: 1200 },
    rotation: 0,
    scale: { x: 1, y: 1 },
    visible: true,
    locked: false,
    createdUserId: 'test-user-1',
    zIndex: 1001,
    lastModified: '2026-02-06T10:00:00.000Z',
    lastModifiedUserId: 'test-user-1',
    metadata: {
      [`${EXTENSION_ID}/${MOCK_BIDS.CURRENT_HP}`]: '52',
      [`${EXTENSION_ID}/${MOCK_BIDS.MAX_HP}`]: '52',
      [`${EXTENSION_ID}/${MOCK_BIDS.ARMOR_CLASS}`]: '18',
      [`${EXTENSION_ID}/${MOCK_BIDS.ACTIONS}`]: [
        { name: 'Greatsword', description: '+5 to hit, 2d6+3 damage' },
        { name: 'Leadership', description: 'Allies within 30ft gain +1 to attack rolls' }
      ],
      [`${EXTENSION_ID}/initiative`]: 2,
    },
    image: {
      width: 200,
      height: 200,
      mime: 'image/png',
      url: 'https://example.com/knight.png'
    },
    grid: {
      dpi: 200,
      offset: { x: 100, y: 100 }
    },
    text: {
      richText: [{ type: 'paragraph', children: [{ text: '' }] }],
      plainText: '',
      style: {
        padding: 8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'CENTER',
        textAlignVertical: 'BOTTOM',
        fillColor: '#ffffff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: 'PLAIN',
      width: 'AUTO',
      height: 'AUTO'
    },
    textItemType: 'LABEL',
    layer: 'CHARACTER'
  },
  {
    type: 'IMAGE',
    id: '3',
    name: 'Fire Elemental',
    position: { x: 1600, y: 1200 },
    rotation: 0,
    scale: { x: 1, y: 1 },
    visible: true,
    locked: false,
    createdUserId: 'test-user-1',
    zIndex: 1002,
    lastModified: '2026-02-06T10:00:00.000Z',
    lastModifiedUserId: 'test-user-1',
    metadata: {
      [`${EXTENSION_ID}/${MOCK_BIDS.CURRENT_HP}`]: '90',
      [`${EXTENSION_ID}/${MOCK_BIDS.MAX_HP}`]: '102',
      [`${EXTENSION_ID}/${MOCK_BIDS.ARMOR_CLASS}`]: '13',
      [`${EXTENSION_ID}/${MOCK_BIDS.ACTIONS}`]: [
        { name: 'Touch', description: '+6 to hit, 2d6 fire damage' }
      ],
      [`${EXTENSION_ID}/initiative`]: 5,
    },
    image: {
      width: 200,
      height: 200,
      mime: 'image/png',
      url: 'https://example.com/elemental.png'
    },
    grid: {
      dpi: 200,
      offset: { x: 100, y: 100 }
    },
    text: {
      richText: [{ type: 'paragraph', children: [{ text: '' }] }],
      plainText: '',
      style: {
        padding: 8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'CENTER',
        textAlignVertical: 'BOTTOM',
        fillColor: '#ffffff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: 'PLAIN',
      width: 'AUTO',
      height: 'AUTO'
    },
    textItemType: 'LABEL',
    layer: 'CHARACTER'
  },
  {
    type: 'IMAGE',
    id: '4',
    name: 'Orc Warrior',
    position: { x: 1200, y: 1400 },
    rotation: 0,
    scale: { x: 1, y: 1 },
    visible: true,
    locked: false,
    createdUserId: 'test-user-1',
    zIndex: 1003,
    lastModified: '2026-02-06T10:00:00.000Z',
    lastModifiedUserId: 'test-user-1',
    metadata: {
      [`${EXTENSION_ID}/${MOCK_BIDS.CURRENT_HP}`]: '15',
      [`${EXTENSION_ID}/${MOCK_BIDS.MAX_HP}`]: '15',
      [`${EXTENSION_ID}/${MOCK_BIDS.ARMOR_CLASS}`]: '13',
      [`${EXTENSION_ID}/${MOCK_BIDS.ACTIONS}`]: [
        { name: 'Greataxe', description: '+5 to hit, 1d12+3 damage' }
      ],
      [`${EXTENSION_ID}/initiative`]: 12,
    },
    image: {
      width: 200,
      height: 200,
      mime: 'image/png',
      url: 'https://example.com/orc.png'
    },
    grid: {
      dpi: 200,
      offset: { x: 100, y: 100 }
    },
    text: {
      richText: [{ type: 'paragraph', children: [{ text: '' }] }],
      plainText: '',
      style: {
        padding: 8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'CENTER',
        textAlignVertical: 'BOTTOM',
        fillColor: '#ffffff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: 'PLAIN',
      width: 'AUTO',
      height: 'AUTO'
    },
    textItemType: 'LABEL',
    layer: 'CHARACTER'
  },
  {
    type: 'IMAGE',
    id: '5',
    name: 'Wizard',
    position: { x: 1400, y: 1400 },
    rotation: 0,
    scale: { x: 1, y: 1 },
    visible: true,
    locked: false,
    createdUserId: 'test-user-1',
    zIndex: 1004,
    lastModified: '2026-02-06T10:00:00.000Z',
    lastModifiedUserId: 'test-user-1',
    metadata: {
      [`${EXTENSION_ID}/${MOCK_BIDS.CURRENT_HP}`]: '38',
      [`${EXTENSION_ID}/${MOCK_BIDS.MAX_HP}`]: '38',
      [`${EXTENSION_ID}/${MOCK_BIDS.ARMOR_CLASS}`]: '12',
      [`${EXTENSION_ID}/${MOCK_BIDS.ACTIONS}`]: [
        { name: 'Fireball', description: 'DC 15, 8d6 fire damage' },
        { name: 'Magic Missile', description: 'Auto-hit, 3d4+3 force damage' },
        { name: 'Shield', description: 'Reaction, +5 AC until start of next turn' }
      ],
      [`${EXTENSION_ID}/initiative`]: 18,
    },
    image: {
      width: 200,
      height: 200,
      mime: 'image/png',
      url: 'https://example.com/wizard.png'
    },
    grid: {
      dpi: 200,
      offset: { x: 100, y: 100 }
    },
    text: {
      richText: [{ type: 'paragraph', children: [{ text: '' }] }],
      plainText: '',
      style: {
        padding: 8,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'CENTER',
        textAlignVertical: 'BOTTOM',
        fillColor: '#ffffff',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: 'PLAIN',
      width: 'AUTO',
      height: 'AUTO'
    },
    textItemType: 'LABEL',
    layer: 'CHARACTER'
  },
];
