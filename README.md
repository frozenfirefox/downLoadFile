# downLoadFile
下载文件，实现

#使用方式

##引入
`import DownLoad from "../assets/vendor/downLoad/downLoad.js"`

#调用
```js
    exportFile: function (){
        const url = []
        url[0] = 'https://api-test.99elink.com:30091/jiujiu?service=Common.User.User.carTransport&trace_id='+Math.random()+'&invoice_id=48a30647d174446afe2394d09800106c';
        url[1] = 'https://api-test.99elink.com:30091/jiujiu?service=Common.User.User.transFee&trace_id='+Math.random()+'&invoice_id=48a30647d174446afe2394d09800106c';
        url[2] = 'https://api-test.99elink.com:30091/jiujiu?service=Common.User.User.invoiceNotice&trace_id='+Math.random()+'&invoice_id=48a30647d174446afe2394d09800106c';
        url[3] = 'https://api-test.99elink.com:30091/jiujiu?service=Common.User.User.paymisList&trace_id='+Math.random()+'&invoice_id=48a30647d174446afe2394d09800106c';
        url[4] = 'https://api-test.99elink.com:30091/jiujiu?service=Common.User.User.delivery&trace_id='+Math.random()+'&invoice_id=48a30647d174446afe2394d09800106c';
        new DownLoad(url)
    }
```