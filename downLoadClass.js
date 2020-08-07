export default class DownLoad{
  constructor(url) {
    url = url||'';
    if(url === ''){
      return '参数传递有问题';
    }
    this.urlList = []
    if(typeof(url)  == "string"){
      this.urlList.push(url);
    }else if(typeof(url)  == "array"){
      this.urlList = url;
    }else{
      return '参数传递有问题';
    }

    for (let i in this.urlList){
      this.dowload(this.urlList[i])
    }
    return '导出成功';
  }

  dowload(url){
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}