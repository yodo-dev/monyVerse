
export interface MenuItem {
  id: number;
  title: string;
  path: string;
  icon: string; 
  items?: MenuItem[];
}
export interface Tab {
  id: number;
  name: string;
}

export interface Action {
  id: number;
  name: string;
  icon: string;
}