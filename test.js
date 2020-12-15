const idcardGenerator = require('./index');
const fs = require('fs');
const path = require('path');
const yy = Math.floor(Math.random()*100);
const config = {
    name: '刘浩然',
    sex: '男',
    nation: '汉',
    year: '19' + yy,
    mon: '02',
    day: '03',
    org: '上海市公安局',
    validTerm: '2020.01.27-2040.01.27',
    addr: '上海市浦东新区新金桥大厦',
    idn: '31010019' + yy + '02031831',
    avatar: './images/avatar.png'
}
config.name = config.name + Math.floor(Math.random()*1000);
idcardGenerator(config).then(e => {
    fs.writeFile('./' + config.idn + '.png', e, err => {
        if(err){
            console.log('idcard-generator：测试失败 ' + e);
        } else {
            console.log('idcard-generator：测试成功，文件已保存在：' + path.resolve(__dirname, './output.png'));
        }
    })
}).catch(err => {
    console.log('idcard-generator：测试失败\n' + err.stack);
});
