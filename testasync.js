function print(a) {
    console.log(a);
}
async function fetchRandomActivity(){
    try {
        const respone = await fetch('https://api.github.com/users/google');
        if(!respone.ok){
            throw new Error(`Đã có lỗi khi đọc dữ liệu ${respone.status}`);
        }
        const data = await respone.json();
        print("Đã nhận được dữ liệu");
        return data;
    } catch(error){
        print(` Lỗi : ${error}`);
        throw error; //phải ném ra lỗi để hàm mainrun có thể bắt được và chạy catch
    } finally{
        print("Đã xử lí xong");
    };
}

async function mainrun(){
    try{
        const result = await fetchRandomActivity();
        print(`ID : ${result.id}`);
        if(result.lak == undefined){
            throw new Error("ko tồn tại thuộc tính");
        }
        print(`name ${result.lak}`);
    } catch(error){
        print(`Ko tồn tại dữ liệu này ${error}`)
    } finally{
        print("Đã in xong");
    }
}
mainrun();
print("Bắt đầu đọc");