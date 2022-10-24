import "./styles.css";

const OnClickAdd = () => {
  // 入力されたテキストを取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグを生成
  const li = document.createElement("li");
  
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // liタグの要素取得
    const completeTarget = completeButton.parentNode;
    const liTarget = completeTarget.parentNode;

    // 押された完了ボタンを未完了リストから削除
    deleteFromIncompleteList(liTarget);
    
    // 完了リストに追加
    // TODO内容テキストを取得
    const text = completeTarget.firstElementChild.innerText;

    //div以下を初期化
    completeTarget.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget.parentNode);

      // TODO内容テキストを取得
      const text = deleteTarget.firstElementChild.innerText;

      createIncompleteList(text);
    });

    //divタグの子要素に各要素を生成
    liTarget.appendChild(completeTarget);
    completeTarget.appendChild(p);
    completeTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(liTarget);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンを未完了リストから削除
  const deleteTarget = deleteButton.parentNode;
  deleteFromIncompleteList(deleteTarget.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => OnClickAdd());