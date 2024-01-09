export type LinkInfo = {
  label: string;
  path: string;
  component?: string;
};

export type SideBarLinkInfo = LinkInfo & {
  component?: string;
};

export type Shop={
  id: number;
  name: string;
  type: string;
  address: string;
  averagePrice: number;
}
export type Shops=Array<Shop>

export type User={
  id: number;
  name: string;
  email: string;
  mobile: string;
}