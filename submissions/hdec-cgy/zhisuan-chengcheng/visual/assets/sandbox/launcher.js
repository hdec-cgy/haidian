(function () {
  window.openJingzhangSandbox = function () {
    var popup = window.open('', '_blank');
    if (!popup) {
      window.alert('浏览器阻止了新窗口，请允许弹出窗口后重试。');
      return false;
    }
    var source = window.JINGZHANG_SANDBOX_DOCUMENT;
    if (!source) {
      popup.close();
      window.alert('沙盘资源尚未载入，请刷新页面后重试。');
      return false;
    }
    popup.document.open();
    popup.document.write(source);
    popup.document.close();
    return false;
  };
}());
