

import HttpUtils from './http'

const position = new AMap.Geolocation({
  enableHighAccuracy: true,
  maximumAge: 0,
  convert: true,
})

export const getGeolocation = () => {
  return new Promise((resolve, reject) => {
    position.getCurrentPosition((status, result) => {
      if (status === 'complete') {
        resolve({
          data: {
            latitude: result.position.lat,
            longitude: result.position.lng,
            address: result.formattedAddress,
          },
        })
      } else {
        reject({
          err: result.message,
        })
      }
    })
  })
}
export const getEntry = (params) => { return HttpUtils.get('/elm/entry', params) }
export const getBanner = (params) => { return HttpUtils.get('/elm/banner', params) }
export const getShopList = (params) => { return HttpUtils.get('/elm/restaurants', params) }
export const getOrderList = (params) => { return HttpUtils.get('/elm/orders', params) }

// 商店
export const getShopInfo = (params) => { return HttpUtils.get('/elm/restaurant_byid', params) }
export const getShopRatings = (params) => { return HttpUtils.get('/elm/restaurant_ratings', params) }
export const getShopFood = (params) => { return HttpUtils.get('/elm/restaurant_menu', params) }
export const getRatingTags = (params) => { return HttpUtils.get('/elm/rating_tags', params) }
export const getRatingScores = (params) => { return HttpUtils.get('/elm/rating_scores', params) }

// 登陆 用户信息
export const mobileSendCode = (params) => { return HttpUtils.post('/elm/mobile_send_code', params) }
export const loginByMobile = (params) => { return HttpUtils.post('/elm/login_by_mobile', params) }
export const getUserInfo = (params) => { return HttpUtils.get('/elm/users', params) }

export const getAddress = (params) => { return HttpUtils.get('/elm/address', params) }
export const delAddress = (params) => { return HttpUtils.get('/elm/del_address', params) }
export const upAddress = (params) => { return HttpUtils.post('/elm/update_address', params) }
export const addAddress = (params) => { return HttpUtils.post('/elm/add_address', params) }

// 根据经纬度 关键词 获取地址
export const getNearby = (params) => { return HttpUtils.get('/elm/search_nearby', params) }
