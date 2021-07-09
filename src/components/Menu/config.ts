export interface MenuItem {
  label: string
  href: string
}

const BASE_URL = 'https://goldenretriever-finance.com'

const MenuItemList: MenuItem[] = [
  {
    label: 'Home',
    href: BASE_URL,
  },
  {
    label: 'Exchange',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    href: '/pool',
  },
  {
    label: 'Farms',
    href: `${BASE_URL}/farms`,
  },
  {
    label: 'Pools',
    href: `${BASE_URL}/pools`,
  },
  {
    label: 'Info',
    href: '/info',
  },
]

export default MenuItemList
