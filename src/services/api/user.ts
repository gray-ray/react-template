import request from '@/services/request';

export async function getUserInfo() {
  return request<API_COMMON.Restful<API_USER.UserItem>>(`/api/user`, {
    method: 'GET',
  });
}
