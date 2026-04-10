export type DoubanMediaType = 'movie' | 'tv';

export interface CustomCategoryConfig {
  name?: string;
  // 分类分组名称，支持任意字符串，如：动漫、AI短剧
  type: string;
  query: string;
  // 实际请求豆瓣接口时使用的类型
  doubanType?: DoubanMediaType;
  from: 'config' | 'custom';
  disabled?: boolean;
}

export interface AdminConfig {
  SiteConfig: {
    SiteName: string;
    Announcement: string;
    SearchDownstreamMaxPage: number;
    SiteInterfaceCacheTime: number;
    ImageProxy: string;
    DoubanProxy: string;
    DisableYellowFilter: boolean;
  };
  UserConfig: {
    AllowRegister: boolean;
    Users: {
      username: string;
      role: 'user' | 'admin' | 'owner';
      banned?: boolean;
    }[];
  };
  SourceConfig: {
    key: string;
    name: string;
    api: string;
    detail?: string;
    from: 'config' | 'custom';
    disabled?: boolean;
  }[];
  CustomCategories: CustomCategoryConfig[];
}

export interface AdminConfigResult {
  Role: 'owner' | 'admin';
  Config: AdminConfig;
}
