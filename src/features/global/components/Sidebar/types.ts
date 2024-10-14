export interface ISidebarItemChildrenProps {
  id: number;
  name: string;
  path: string
}

export interface ISidebarItemProps {
  title?: string;
  items: ISidebarItemChildrenProps[];
}

export interface ISidebarProps {
  items: ISidebarItemProps[];
}
