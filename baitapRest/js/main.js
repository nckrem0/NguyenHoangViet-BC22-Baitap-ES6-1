const getTotal = (...numbers) => {
    let total = 0;
    for (const index in numbers) {
        total += numbers[index] ;
    }
    return total / numbers.length ;
}  

document.getElementById("btnKhoi1").onclick = function () {
    const toan = getTotal (document.getElementById("inpToan").value ) ;
    const ly = getTotal (document.getElementById("inpLy").value ) ;
    const hoa = getTotal (document.getElementById("inpHoa").value ) ;
    document.getElementById("tbKhoi1").innerHTML = getTotal(toan,ly,hoa);
}

document.getElementById("btnKhoi2").onclick = function () {
    const van = getTotal (document.getElementById("inpVan").value ) ;
    const su = getTotal (document.getElementById("inpSu").value ) ;
    const dia = getTotal (document.getElementById("inpDia").value ) ;
    const anh = getTotal (document.getElementById("inpEnglish").value ) ;
    document.getElementById("tbKhoi2").innerHTML = getTotal(van,su,dia,anh);
}



