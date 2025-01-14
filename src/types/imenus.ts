export interface IMenuItem {
    id: number;
    title: string;
    url: string;
    menu_order: number;
}
  
export interface IMenu {
    id: number;
    name: string;
    slug: string;
    items: IMenuItem[];
}
  