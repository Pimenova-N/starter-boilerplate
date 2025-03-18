import {
  DashboardOutlined,
  PlusCircleOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const ordersNavTree = [{
  key: 'orders',
  path: `${APP_PREFIX_PATH}/main/orders`,
  title: 'orders',
  icon: ShoppingOutlined,
  breadcrumb: false,
  submenu: []
}]

const ecommerce = [
  {
    key: 'apps-ecommerce',
    path: `${APP_PREFIX_PATH}/main/ecommerce`,
    title: 'sidenav.apps.ecommerce',
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'apps-ecommerce-productList',
        path: `${APP_PREFIX_PATH}/main/ecommerce/product-list`,
        title: 'sidenav.apps.ecommerce.productList',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'apps-ecommerce-addProduct',
        path: `${APP_PREFIX_PATH}/main/ecommerce/categories`,
        title: 'sidenav.apps.ecommerce.categories',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'apps-ecommerce-editProduct',
        path: `${APP_PREFIX_PATH}/main/ecommerce/collections`,
        title: 'sidenav.apps.ecommerce.collections',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'apps-ecommerce-orders',
        path: `${APP_PREFIX_PATH}/main/ecommerce/combo`,
        title: 'sidenav.apps.ecommerce.combo',
        icon: '',
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]



const extraNavTree = [
  {
    key: 'clients',
    path: `${APP_PREFIX_PATH}/main/clients`,
    title: 'clients',
    icon: UserOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'clients-list',
        path: `${APP_PREFIX_PATH}/main/clients/user-list`,
        title: 'clients.userlist',
        icon: '',
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'clients-groups',
        path: `${APP_PREFIX_PATH}/main/clients/user-groups`,
        title: 'clients.groups',
        icon: '',
        breadcrumb: true,
        submenu: []
      }
    ]
  }

]

const bannersNavTree = [{
  key: 'banners',
  path: `${APP_PREFIX_PATH}/main/banners`,
  title: 'banners',
  icon: PictureOutlined,
  breadcrumb: false,
  submenu: []
}]

const promocodesNavTree = [{
  key: 'promocodes',
  path: `${APP_PREFIX_PATH}/main/promocodes`,
  title: 'promocodes',
  icon: GiftOutlined,
  breadcrumb: false,
  submenu: []
}]

const offlinePointsNavTree = [
  {
    key: 'offline-points',
    path: `${APP_PREFIX_PATH}/main/offline-points`,
    title: 'offline.points',
    icon: ShopOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'offline-points-addresses',
        path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
        title: 'offline.points.addresses',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'offline-points-geozones',
        path: `${APP_PREFIX_PATH}/main/offline-points/geozones`,
        title: 'offline.points.geozones',
        icon: '',
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const employeesNavTree = [{
  key: 'employees',
  path: `${APP_PREFIX_PATH}/main/employees`,
  title: 'employees',
  icon: UsergroupAddOutlined,
  breadcrumb: false,
  submenu: []
}]

const mailNavTree = [{
  key: 'apps-mail',
  path: `${APP_PREFIX_PATH}/main/mail`,
  title: 'sidenav.apps.mail',
  icon: MailOutlined,
  breadcrumb: false,
  submenu: []
}]

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'main',
  icon: PlusCircleOutlined,
  breadcrumb: false,
  submenu: [
    ...dashBoardNavTree,
    ...ecommerce,
    ...ordersNavTree,
    ...extraNavTree,
    ...bannersNavTree,
    ...promocodesNavTree,
    ...offlinePointsNavTree,
    ...employeesNavTree,
    ...mailNavTree
  ]
}]

const settingNavTree = [{
  key: 'setting',
  path: `${APP_PREFIX_PATH}/system/setting`,
  title: 'system.setting',
  icon: SettingOutlined,
  breadcrumb: false,
  submenu: []
}]

const mobileNavTree = [{
  key: 'mobile',
  path: `${APP_PREFIX_PATH}/system/mobile`,
  title: 'system.mobile',
  icon: MobileOutlined,
  breadcrumb: false,
  submenu: []
}]

const logsNavTree = [{
  key: 'logs',
  path: `${APP_PREFIX_PATH}/system/logs`,
  title: 'system.logs',
  icon: FileTextOutlined,
  breadcrumb: false,
  submenu: []
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'system',
  icon: '',
  breadcrumb: false,
  submenu: [
     ...settingNavTree,
     ...mobileNavTree,
     ...logsNavTree
  ]
}]



const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;
