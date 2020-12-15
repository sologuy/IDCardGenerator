# idcard-generator

> 使用 nodejs 生成身份证
> 
> 本工具仅供研究使用，请勿用于违法用途，否则后果自负

## 使用

```javascript
const idcardGenerator = require('idcard-generator');
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
```

## 其他

参考项目：[https://github.com/airob0t/idcardgenerator](https://github.com/airob0t/idcardgenerator)

根据在 [https://github.com/airob0t/idcardgenerator](https://github.com/airob0t/idcardgenerator) 下载的PSD文件，以自己的身份证作为标准，做了一些大的调整，修改了一些字体和布局