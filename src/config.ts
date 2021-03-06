import strawImgUrl from './static/images/straw/straw.png'
import wallImgUrl from './static/images/wall/wall.gif'
import waterImgUrl from './static/images/water/water.gif'
import steelImgUrl from './static/images/wall/steels.gif'
import tankTopImgUrl from './static/images/tank/top.gif'
import tankBottomImgUrl from './static/images/tank/bottom.gif'
import tankLeftImgUrl from './static/images/tank/left.gif'
import tankRightImgUrl from './static/images/tank/right.gif'
import bulletImgUrl from './static/images/bullet/bullet.jpg'
import bossImgUrl from './static/images/boss/boss.png'
import palyerTopImgUrl from './static/images/player/top.gif'
import palyerRightImgUrl from './static/images/player/right.gif'
import palyerBottomImgUrl from './static/images/player/bottom.gif'
import palyerLeftImgUrl from './static/images/player/left.gif'

export default {
  tankMoveTime: 50,
  canvas: {
    width: 900,
    height: 600,
  },
  model: {
    width: 30,
    height: 30,
  },
  straw: {
    num: 120,
  },
  wall: {
    num: 80,
  },
  water: {
    num: 60,
  },
  steel: {
    num: 20,
  },
  tank: {
    num: 20,
  },
  bullet: {
    width: 3,
    height: 3,
  },
  images: {
    straw: strawImgUrl,
    wall: wallImgUrl,
    water: waterImgUrl,
    steel: steelImgUrl,
    tankTop: tankTopImgUrl,
    tankBottom: tankBottomImgUrl,
    tankLeft: tankLeftImgUrl,
    tankRight: tankRightImgUrl,
    bullet: bulletImgUrl,
    boss: bossImgUrl,
    playerTop: palyerTopImgUrl,
    playerRight: palyerRightImgUrl,
    playerBottom: palyerBottomImgUrl,
    playerLeft: palyerLeftImgUrl,
  },
}
