export enum PermissionEnum {
  page1 = 'menu.page1',
  page2 = 'menu.page2',
  btn1 = 'page.btn1',
  btn2 = 'page.btn2',
}

export default function access(initialState: { permissions: string[] }) {
  const { permissions = [] } = initialState;

  const permitKey = (str: string) => permissions?.includes?.(str);

  return {
    page1: permitKey(PermissionEnum.page1),
    page2: permitKey(PermissionEnum.page2),
    btn1: permitKey(PermissionEnum.btn1),
    btn2: permitKey(PermissionEnum.btn2),
  };
}
