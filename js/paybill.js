const paybill = document.getElementById("paybill");
paybill.addEventListener("click", async () => {

    const updateTable = {
        id: orderDeleted.idTable,
        nameCustomer: "",
        quantity: 0,
        status: true
    }
    editById(URL_TABLE, updateTable);
    deleted(URL_ORDER, orderDeleted.idTable);
    const createBill = {
        idTable: orderDeleted.idTable,
        bill: orderDeleted.bill,
        total: orderDeleted.total,
        createAt: new Date()
    }
    add(URL_BILL, createBill);

});