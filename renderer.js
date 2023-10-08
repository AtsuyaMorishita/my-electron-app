const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  //プリロードスクリプトで定義したping関数を呼び出す
  const response = await window.versions.ping();
  console.log(response); // 'pong' と出力
};

func();
