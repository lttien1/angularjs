const MENU_ITEMS = [
  {
    key: 'contacts',
    label: 'Contacts',
    icon: 'contacts'
  },
  {
    key: 'orders',
    label: 'Orders',
    icon: 'add_shopping_cart',
    childrens: [
      {
        key: 'order-statuses',
        label: 'Order Status'
      },
      {
        key: 'other-property',
        label: 'Other Property'
      }
    ]
  },
  {
    key: 'products',
    label: 'Products',
    icon: 'card_giftcard'
  }
];

export default class SettingConstants {
  public static MENUS = MENU_ITEMS;
  public static API_GET_CONTACT_FIELDS = 'https://apistaging.myhub.vn/api/UserProfiles/getCustomFields';
}
