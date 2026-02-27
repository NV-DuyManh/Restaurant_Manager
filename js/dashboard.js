async function dashboard() {
    const dataTable = await getData(URL_TABLE);

    //Tong Ban
    const tongBan = document.getElementById("tongBan");
    tongBan.innerText = dataTable.length;
    const labels = dataTable.map(t => t.id);

    //Ban Trong
    const banTrong = document.getElementById("banTrong");
    banTrong.innerText = dataTable.reduce((acc, curr) => curr.status ? acc + 1 : acc, 0);

    //Don chua thanh toan 
    const chuaTT = document.getElementById("donchuaTT");
    chuaTT.innerText = dataTable.reduce((acc, curr) => curr.status ? acc : acc + 1, 0);

    //Tong doanh thu 
    
}
dashboard();