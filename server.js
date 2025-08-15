const { serverStart } = require('@bumblebee-honey/tikitaka');

const app = serverStart({
  name: 'TiKiTaKaFlow',
  homePage: '/view/project-list',
})


console.log(process.env.__ENV, 'process.env.NODE_ENV=========')