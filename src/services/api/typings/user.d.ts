declare namespace API_USER {
  type UserItem = {
    id: string;
    username: string;
    avatar: string;
    permissions: PermissionEnum[];
  };
}
